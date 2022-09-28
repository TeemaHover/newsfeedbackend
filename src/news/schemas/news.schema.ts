import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewsDocument = News & Document;

@Schema({ timestamps: true })
export class News {
  @Prop()
  title: string;

  @Prop()
  text: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);
