type ArticleMetadata = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string;
  minutes: number;
};

type Article = {
  content: string;
  metadata: ArticleMetadata;
};

type Project = {
  id: string;
  title: string;
  position: string;
  image: string;
  color: string;
  url: string;
};
