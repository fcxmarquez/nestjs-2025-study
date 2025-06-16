import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getHello2(): string {
    return 'Hello World!';
  }

  @Get('hello/:name') // The orden matters, for example if there is another route like hello/query, that route will be ignored for this route
  getHello3(@Param('name') name: string): string {
    return `Hello ${name}!`;
  }

  @Get('query')
  getHello4(@Query() params: { name: string; age: number }): string {
    const { name, age } = params;

    return `Hi ${name}! You are ${age} years old.`;
  }

  @Get('query/v2') // second way to get query params
  getHello5(@Query('name') name: string, @Query('age') age: number): string {
    return `Hi ${name}! You are ${age} years old.`;
  }
}
