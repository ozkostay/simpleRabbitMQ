import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Promise<any> {
    return Promise.resolve({ aaa: 'Hello World HHHHHHHHHHHHHHHHHHHHHHHHH!' });
  }
}
