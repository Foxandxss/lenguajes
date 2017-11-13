import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

export class Language {
  id: number;
  name: string;
  logo: string;
  rating: number;
}

@Injectable()
export class LanguageService {
  constructor(private http: HttpClient) { }

  getLanguages() {
    return this.http.get<Language[]>('/api/languages');
  }

  getLanguage(id: number) {
    return this.http.get<Language>(`/api/languages/${id}`);
  }

}
