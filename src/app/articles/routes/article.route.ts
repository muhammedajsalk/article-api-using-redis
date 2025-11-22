import { Router } from "express";
import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controller/articles.controller";

import { cache } from "../../../middleware/catch";
import validate from "../../../middleware/validate";
import {
  createArticleSchema,
  updateArticleSchema,
} from "../validation/article.validation";
import { asyncHandler } from "../../../middleware/asyncHandler";

const router = Router();

const CACHE_TTL = {
  ARTICLES: 30,
  ARTICLE_BY_ID: 60,
};

router.get("/", cache("articles:all", CACHE_TTL.ARTICLES), asyncHandler(getAllArticles));

router.get(
  "/:id",
  cache((req) => `articles:${req.params.id}`, CACHE_TTL.ARTICLE_BY_ID),
  asyncHandler(getArticleById)
);

router.post("/", validate(createArticleSchema), asyncHandler(createArticle));

router.put("/:id", validate(updateArticleSchema), asyncHandler(updateArticle));

router.patch("/:id", validate(updateArticleSchema), asyncHandler(updateArticle));

router.delete("/:id", asyncHandler(deleteArticle));

export default router;
