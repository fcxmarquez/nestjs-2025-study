import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Get,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() body: unknown) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: unknown) {
    return {
      id,
      body,
    };
  }

  @Get()
  @HttpCode(HttpStatus.GONE)
  findAll(@Query('limit') limit: number) {
    return {
      limit,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      id,
    };
  }
}
