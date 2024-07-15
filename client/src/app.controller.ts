import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';
import {
  catchError,
  finalize,
  from,
  lastValueFrom,
  map,
  Observable,
  of,
  tap,
} from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('mshttp')
  async getmshttp(): Promise<any> {
    try {
      const data = await this.appService.getFromBack();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Не удалось получить данные с бэка!!!');
    }
  }
}
