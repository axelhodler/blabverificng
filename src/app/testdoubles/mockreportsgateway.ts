import {Report} from "../reports/report";

export class MockReportsGateway {
  saveReport(hash: string): Promise<Report> {
    return;
  }
  reports(): Promise<Report[]> {
    return Promise.resolve([{
      id: 'hashedreport',
      content: 'report contents',
      submitter: 'Sally the Submitter'
    }, {
      id: 'reporthash',
      content: 'report content',
      submitter: 'Sven the Submitter'
    }]);
  }
}
