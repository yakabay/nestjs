import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  myFunction(@Query() query) {
    return query;
  }

  @Get(':id')
  getSpecificCoffee(@Param('id') param) {
    return param;
  }

  @Post()
  create(@Body() bb) {
    return bb;
  }

  @Patch(':id')
  update(@Body() body, @Param('id') id: string) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Deleted coffee with id: ${id}`;
  }
}
