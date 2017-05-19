import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LanguageComponent } from './language.component';
import { RatingPipe } from './shared/rating.pipe';
import { RouterStub } from '../../testing/mocks';

describe('LanguageComponent', () => {
  let hostComponent: TestComponent;
  let component: LanguageComponent;
  let fixture: ComponentFixture<TestComponent>;
  let router: Router;
  const html = '<app-language [language]="language"></app-language>';
  let img: HTMLImageElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageComponent, TestComponent, RatingPipe ],
      providers: [ {provide: Router, useClass: RouterStub }]
    });

    TestBed.overrideComponent(TestComponent, {set: { template: html }});
    fixture = TestBed.createComponent(TestComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.children[0].componentInstance;
    router = fixture.debugElement.injector.get(Router);

    fixture.detectChanges();

    img = fixture.debugElement.query(By.css('img')).nativeElement;
  });

  it('gets the language from input', () => {
    expect(component.language.id).toBe(0);
    expect(component.language.name).toBe('Typescript');
    expect(component.language.logo).toBe('typescript.png');
    expect(component.language.rating).toBe(3);
  });

  it('renders the language on screen', () => {
    const h3: HTMLHeadingElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    const p: HTMLParagraphElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(h3.textContent).toBe('Typescript');
    expect(img.src).toContain('typescript.png');
    expect(p.textContent).not.toContain('3');
  });

  it('toggles a class on the img on mouseover', () => {
    const mouseenter = new Event('mouseenter');
    const mouseleave = new Event('mouseleave');
    expect(img.getAttribute('class')).not.toContain('big');
    img.dispatchEvent(mouseenter);
    fixture.detectChanges();
    expect(img.getAttribute('class')).toContain('big');
    img.dispatchEvent(mouseleave);
    fixture.detectChanges();
    expect(img.getAttribute('class')).not.toContain('big');
  });

  it('has an alt attribute on the image', () => {
    expect(img.alt).toBe('Typescript logo');
  });

  it('the button sents you back to languages', () => {
    spyOn(router, 'navigate');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['languages']);
  });
});


@Component({
  selector: 'language-test',
  template: ''
})
class TestComponent {
  language = { id: 0, name: 'Typescript', logo: 'typescript.png', rating: 3 };
}
