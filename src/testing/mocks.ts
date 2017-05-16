import { Directive, Input } from '@angular/core';
import { Observable } from 'rxjs';

export class LanguageStubService {
  getLanguages() {
    return Observable.of([
      {
        id: 0,
        name: 'Javascript',
        logo: 'assets/images/javascript.png',
        rating: 3
      },
      {
        id: 1,
        name: 'Java',
        logo: 'assets/images/java.png',
        rating: 1
      },
      {
        id: 2,
        name: 'PHP',
        logo: 'assets/images/php.png',
        rating: 1
      },
      {
        id: 3,
        name: 'Python',
        logo: 'assets/images/python.png',
        rating: 2
      },
      {
        id: 4,
        name: 'C#',
        logo: 'assets/images/csharp.jpg',
        rating: 3
      }
    ]);
  }
}

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
