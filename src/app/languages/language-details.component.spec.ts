import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LanguageDetailsComponent } from './language-details.component';
import { LanguageService } from './shared/language.service';
import { ActivatedRouteMock, LanguageStubService } from '../../testing/mocks';

describe('LanguageDetailsComponent', () => {
  let component: LanguageDetailsComponent;
  let fixture: ComponentFixture<LanguageDetailsComponent>;
  let languageService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageDetailsComponent ],
      providers: [
        { provide: LanguageService, useClass: LanguageStubService },
        { provide: ActivatedRoute, useValue: new ActivatedRouteMock({ params: { id: 0 }})}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(LanguageDetailsComponent);
    component = fixture.componentInstance;
    languageService = fixture.debugElement.injector.get(LanguageService);
    fixture.detectChanges();
  });

  it('has a langId that comes from the route', () => {
    expect(component.langId).toBe(0);
  });

  it('ask for the language of id 0', () => {
    spyOn(languageService, 'getLanguage').and.callThrough();
    component.ngOnInit();
    expect(languageService.getLanguage).toHaveBeenCalledWith(0);
  });

  it('renders a language component', () => {
    const langCmp = fixture.debugElement.query(By.css('app-language'));
    expect(langCmp).toBeTruthy();
  });

});
