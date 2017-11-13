import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { LanguageService } from './language.service';


describe('UserService', () => {
  let languageService: LanguageService;
  let http;
  let httpMock;
  let fakeLanguages;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        LanguageService
      ]
    });

    languageService = TestBed.get(LanguageService);
    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);

    fakeLanguages = [
      { id: 0, name: 'Javascript', logo: 'javascript.png', rating: 3 },
      { id: 1, name: 'Ruby', logo: 'ruby.png', rating: 2 },
      { id: 2, name: 'Basic', logo: 'basic.png', rating: 1 },
    ]
  });

  it('gets the list of languages', () => {
    languageService.getLanguages().subscribe(langs => {
      expect(langs.length).toBe(3);
    });

    const req = httpMock.expectOne('/api/languages');

    expect(req.request.method).toEqual('GET');

    req.flush(fakeLanguages);

    httpMock.verify();
  });

  it('returns one language', () => {
    languageService.getLanguage(1).subscribe(lang => {
      expect(lang.name).toBe('Ruby');
    });

    const req = httpMock.expectOne('/api/languages/1');

    expect(req.request.method).toEqual('GET');

    req.flush(fakeLanguages[1]);

    httpMock.verify();
  });
});
