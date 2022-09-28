import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { News } from './schemas/news.schema';

@Controller('news')
export class NewsController {
  constructor(private readonly catsService: NewsService) {}

  @Post()
  async create(@Body() createCatDto: CreateNewsDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<News[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<News> {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
