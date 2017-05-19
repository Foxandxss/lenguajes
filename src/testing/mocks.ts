import { Directive, Input } from '@angular/core';
import { Observable } from 'rxjs';

export class LanguageStubService {
  languages = [
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
  ];

  getLanguages() {
    return Observable.of(this.languages);
  }

  getLanguage(id) {
    return Observable.of(this.languages[id]);
  }
}

// We can use a class, this is just an alternative
export function ActivatedRouteMock(params) {
  this.snapshot = params;
}

export class ActivatedRouteMock2 {
  constructor(public snapshot: any) {}
}

export class RouterStub {
  navigate(commands: any[]) { }
}

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
}
