import { Component, OnInit } from '@angular/core';

import { Language, LanguageService } from './shared/language.service';

@Component({
  selector: 'osc-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  languages: Language[] = [];

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.langService.getLanguages()
      .subscribe((languages) => this.languages = languages );
  }

}
