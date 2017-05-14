import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

export class Language {
  id: number;
  name: string;
  logo: string;
  rating: number;
}

@Injectable()
export class LanguageService {
  constructor(private http: Http) { }

  getLanguages() {
    return this.http.get('/api/languages')
      .map(res => res.json().data);
  }

  getLanguage(id: number) {
    return this.http.get(`/api/languages/${id}`)
      .map(res => res.json().data);
  }

}
