import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TestDto } from './test.dto';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private service: TestService) {}
  @Get(':id')
  test(@Param('id') id: string) {
    return this.service.test(id);
  }

  @Post()
  postreq(@Body() dto: TestDto) {
    return this.service.body(dto);
  }
}
