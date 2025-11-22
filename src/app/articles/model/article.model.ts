import { Schema, model, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  content: string;
  views: number;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Article = model<IArticle>("Article", ArticleSchema);

export default Article