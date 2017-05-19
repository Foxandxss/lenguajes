import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Language } from './shared/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  @Input() language: Language;
  isBig = false;
  foo: Language = { id: 0, name: 'foo', logo: 'foo', rating: 1 };

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['languages']);
  }

}
