import { Request, Response, NextFunction } from "express";
import {createArticleService,deleteArticleService,getAllArticleService,getArticleByIdService,updateArticleService} from "../services/article.service";
import { deleteCache, deleteByPattern } from "../../../utils/redisHelpers";

export const getAllArticles = async (req: Request, res: Response) => {
  const articles = await getAllArticleService();
  res.json({ status: "success", results: articles.length, data: articles });
};

export const getArticleById = async (req: Request, res: Response) => {
  const article = await getArticleByIdService(req.params.id);
  res.json({ status: "success", data: article });
};

export const createArticle = async (req: Request, res: Response) => {
  const article = await createArticleService(req.body);
  await deleteCache("articles:all");
  res.status(201).json({ status: "success", data: article });
};


export const updateArticle = async (req: Request, res: Response) => {
  const articleId = req.params.id;
  const article = await updateArticleService(articleId, req.body);
  await deleteCache(`articles:${articleId}`);
  await deleteCache("articles:all");
  res.json({ status: "success", data: article });
};


export const deleteArticle = async (req: Request, res: Response) => {
  const articleId = req.params.id;
  await deleteArticleService(articleId);
  await deleteCache(`articles:${articleId}`);
  await deleteCache("articles:all");
  res.status(204).json({ status: "success", message: "Article deleted" });
};
