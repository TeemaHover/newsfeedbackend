import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { News, NewsDocument } from './schemas/news.schema';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private readonly newsModel: Model<NewsDocument>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const createdNews = await this.newsModel.create(createNewsDto);
    return createdNews;
  }

  async findAll(): Promise<News[]> {
    return this.newsModel.find().select('-__v ').exec();
  }

  async findOne(id: string): Promise<News> {
    return this.newsModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedNews = await this.newsModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedNews;
  }
}
