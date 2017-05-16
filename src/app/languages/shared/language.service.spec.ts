import { inject, TestBed } from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  HttpModule,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { LanguageService } from './language.service';

fdescribe('UserService', () => {
  let languageService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        {
          provide: Http,
          useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    });

    languageService = TestBed.get(LanguageService);
    const mockBackend = TestBed.get(MockBackend);

    let fakeLanguages = {
      data: [
        { id: 0, name: 'Javascript', logo: 'javascript.png', rating: 2 },
        { id: 1, name: 'Ruby', logo: 'ruby.png', rating: 1 },
        { id: 2, name: 'Basic', logo: 'basic.png', rating: 0 },
      ]
    }

    mockBackend.connections.subscribe((c: MockConnection) => {
      if (c.request.url === '/api/languages') {
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(fakeLanguages)
        })));
      } else {
        const id = c.request.url.split('/').pop();
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify({data: fakeLanguages.data[id]})
        })));
      }
    });
  });

  it('gets the list of languages', () => {
    languageService.getLanguages().subscribe(langs => {
      expect(langs.length).toBe(3);
    });
  })

  it('returns one language', () => {
    languageService.getLanguage(1).subscribe(lang => {
      expect(lang.name).toBe('Ruby');
    });
  });
});
