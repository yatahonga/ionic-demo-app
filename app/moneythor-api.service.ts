import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoneythorApiService {
  constructor(private httpClient: HttpClient) {}

  server = 'https://demo.moneythor.com/fpm/api/v4';

  TOKEN = 'REPLACE_WITH_VALID_JWT_TOKEN';

  public service(name: string, parameters: any) {
    return this.httpClient.post(
      this.server + '/service',
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
