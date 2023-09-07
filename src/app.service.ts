import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sayHi() : string {
    console.log("hii");
    return "hii"
  }
}
