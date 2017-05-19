import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LanguageListComponent } from './language-list.component';
import { LanguageService } from './shared/language.service';
import { LanguageStubService, RouterLinkStubDirective } from '../../testing/mocks';

describe('LanguageListComponent', () => {
  let component: LanguageListComponent;
  let fixture: ComponentFixture<LanguageListComponent>;
  let service: LanguageService;
  let routerLinkDes: DebugElement[];
  let routerLinks: RouterLinkStubDirective[];
  let logos: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: LanguageService, useClass: LanguageStubService }],
      declarations: [ LanguageListComponent, RouterLinkStubDirective ]
    });

    fixture = TestBed.createComponent(LanguageListComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(LanguageService);
    fixture.detectChanges();
    routerLinkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    routerLinks = routerLinkDes.map(de => de.injector.get(RouterLinkStubDirective));
    logos = fixture.debugElement.queryAll(By.css('img'));
  });

  it('fetches all languages', () => {
    spyOn(service, 'getLanguages').and.callThrough();
    component.ngOnInit();
    expect(component.languages.length).toBe(5);
    expect(service.getLanguages).toHaveBeenCalled();
  });

  it('has a header', () => {
    const header = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(header.textContent).toBe('Language list');
  });

  it('renders as many logos as languages are', () => {
    expect(logos.length).toBe(5);
  });

  it('shows the logo as src', () => {
    logos.map((logo, idx) => {
      expect(logo.nativeElement.src).toContain(component.languages[idx].logo);
    });
  });

  it('has an alt tag with the language name', () => {
    logos.map((logo, idx) => {
      expect(logo.nativeElement.alt).toBe(`${component.languages[idx].name} logo`);
    });
  });

  it('has each image with a link to another page', () => {
    routerLinks.map((link, idx) => {
      expect(link.linkParams).toBe(component.languages[idx].id);
    });
  });
});
