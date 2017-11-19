import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

/**
 * An interface for languages
 */
export class Language {
  id: number;
  name: string;
  logo: string;
  rating: number;
}

/**
 * CRUD service to retrieve the languages using HttpClient
 */
@Injectable()
export class LanguageService {
  constructor(private http: HttpClient) { }

  /**
   * Get all languages
   */
  getLanguages() {
    return this.http.get<Language[]>('/api/languages');
  }

  /**
   * <i>Get a specific language</i>
   * @param id ID of language to fetch
   * @returns
   */
  getLanguage(id: number) {
    return this.http.get<Language>(`/api/languages/${id}`);
  }

}
