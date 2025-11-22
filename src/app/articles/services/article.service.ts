import Article from "../model/article.model";

export const getAllArticleService = async () => {
  return await Article.find().sort({ createdAt: -1 });
};

export const getArticleByIdService = async (id: string) => {
  return await Article.findById(id);
};

export const createArticleService = async (data: any) => {
  return await Article.create(data);
};

export const updateArticleService = async (id: string, data: any) => {
  return await Article.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteArticleService = async (id: string) => {
  return await Article.findByIdAndDelete(id);
};
