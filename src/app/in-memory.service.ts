import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let languages = [
      {
        id: 0,
        name: 'Javascript',
        logo: 'assets/images/javascript.png',
        rating: 3
      },
      {
        id: 1,
        name: 'Java',
        logo: 'assets/images/java.png',
        rating: 1
      },
      {
        id: 2,
        name: 'PHP',
        logo: 'assets/images/php.png',
        rating: 1
      },
      {
        id: 3,
        name: 'Python',
        logo: 'assets/images/python.png',
        rating: 2
      },
      {
        id: 4,
        name: 'C#',
        logo: 'assets/images/csharp.jpg',
        rating: 3
      }
    ];

    return { languages };
  }
}
