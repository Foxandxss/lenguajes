import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  @Input() language;

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['languages']);
  }

}
