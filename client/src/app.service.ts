import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getFromBack(): Promise<any> {
    const observable$ = this.httpService.get('http://localhost:9001');
    const response = await lastValueFrom(observable$);
    const data = await response.data;
    return data;
  }
}
