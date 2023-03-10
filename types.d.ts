type ArticleMetadata = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string;
};

type Article = {
  content: string;
  metadata: ArticleMetadata;
};
