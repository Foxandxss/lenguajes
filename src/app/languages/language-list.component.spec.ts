import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [{ provide: LanguageService, useClass: LanguageStubService }],
      declarations: [ LanguageListComponent, RouterLinkStubDirective ]
    });

    fixture = TestBed.createComponent(LanguageListComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(LanguageService);
    fixture.detectChanges();
    routerLinkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    routerLinks = routerLinkDes.map(de => de.injector.get(RouterLinkStubDirective));
  });

  it('fetches all languages', () => {
    spyOn(service, 'getLanguages').and.callThrough();
    component.ngOnInit();
    expect(component.languages.length).toBe(5);
    expect(service.getLanguages).toHaveBeenCalled();
  });

  it ('fetches all languages / alternative', () => {
    let component = new LanguageListComponent(new LanguageStubService() as LanguageService);
    component.ngOnInit();
    expect(component.languages.length).toBe(5);
  });

  it('has a header', () => {
    const header = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(header.textContent).toBe('Language list');
  });

  it('renders as many logos as languages are', () => {
    const logos = fixture.debugElement.queryAll(By.css('img'));
    expect(logos.length).toBe(5);
  });

  it('shows the logo as src', () => {
    const logos = fixture.debugElement.queryAll(By.css('img'));
    logos.map((logo, idx) => {
      expect(logo.nativeElement.src).toContain(component.languages[idx].logo);
    });
  });

  it('has each image with a link to another page', () => {
    routerLinks.map((link, idx) => {
      expect(link.linkParams).toBe(component.languages[idx].id);
    });
  });

  it('sends you to another page on click', () => {
    const firstLink = routerLinks[0];
    const firstLinkDe = routerLinkDes[0];

    expect(firstLink.navigatedTo).toBeNull('link should not have navigated yet');
    firstLinkDe.nativeElement.click();
    expect(firstLink.navigatedTo).toBe(0);
  });
});
