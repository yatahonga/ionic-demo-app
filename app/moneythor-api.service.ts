import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoneythorApiService {
  constructor(private httpClient: HttpClient) {}

  TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDI4MzU0OTYsImV4cCI6MTY0MjkyMTg5NiwiaXNzIjoiTW9uZXl0aG9yIiwic3ViIjoiZGVtb3VzZXIyQG1haWwuY29tIn0.b6LBFSwkyq7XyMVgqrpe73LVOYAuV1KHQHc4jABx-cE';

  public service(name: string, parameters: any) {
    return this.httpClient.post(
      'https://demo.moneythor.com/fpm/api/v4/service',
      {
        name: name,
        format: 'html',
        parameters: parameters,
      },
      {
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + this.TOKEN,
        },
        responseType: 'text',
      }
    );
  }
}
