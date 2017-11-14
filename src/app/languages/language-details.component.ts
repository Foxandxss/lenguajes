import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Language, LanguageService } from './shared/language.service';

/**
 * Fetches the current language and uses it in a concrete
 * details component.
 */
@Component({
  selector: 'osc-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.css']
})
export class LanguageDetailsComponent implements OnInit {
  language: Language;
  /**
   * Language ID to show
   */
  langId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private languageService: LanguageService
  ) {
    this.langId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.languageService.getLanguage(this.langId).subscribe(lang => this.language = lang);
  }

}
