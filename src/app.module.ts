import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    TestModule,
    MongooseModule.forRoot(
      'mongodb+srv://TemuulenNewsfeed:B5BXUJzyl8CGOLPW@checking.oy6ple9.mongodb.net/news',
    ),
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
