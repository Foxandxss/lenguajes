import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Language } from './shared/language.service';

/**
 * Shows the details of a concrete language
 */
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  @Input() language: Language;
  isBig = false;

  constructor(private router: Router) { }

  /**
   * Routes back to the languages component
   */
  goBack() {
    this.router.navigate(['languages']);
  }

}
