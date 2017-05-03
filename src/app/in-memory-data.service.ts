import {InMemoryDbService} from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reports = [{
      id: '0x60419d353117a1ad25e163afc5ea37fcea09705cb0fa1725547cfc7e808e86db',
      content: 'jochen2016',
      submitter: 'Jochen Kaßberger',
      verifierCount: 1
    }, {
      id: '0x1298c7d4cfc354fbfdf3de55218340cccddefdb5c6c6adf7a10439836ac73c0e',
      content: 'axel2016',
      submitter: 'Axel Hodler',
      verifierCount: 1
    }];
    const members = [{
      id: '0x1fe455ff68b5ce672f33ea1a12ab51ff3edc3362',
      name: 'Axel Hodler'
    }, {
      id: '0xf2f2581684fd5b7a0e84b3cdfa4a842a0fcce746',
      name: 'Jochen Kaßberger'
    }, {
      id: '0x21eA3453B22Ea6d6ee6e3dA9D00110e6265280E3',
      name: 'Jan-Paul Buchwald'
    }];
    return {members, reports};
  }
}
