const DEV_TO_API = 'https://dev.to/api/articles';

const TAGS = [
  'cloud',
  'devops',
  'ai',
  'machinelearning',
  'kubernetes',
  'docker',
  'aws',
  'azure',
  'terraform'
];

export interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published_at: string;
  url: string;
  reading_time_minutes: number;
  tag_list: string[];
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}

export const fetchArticles = async (page: number = 1, perPage: number = 20): Promise<Article[]> => {
  try {
    // Fetch articles with relevant tags
    const tag = TAGS[Math.floor(Math.random() * TAGS.length)];
    const response = await fetch(`${DEV_TO_API}?tag=${tag}&page=${page}&per_page=${perPage}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const articles: Article[] = await response.json();
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export const fetchArticlesByTag = async (tag: string, page: number = 1): Promise<Article[]> => {
  try {
    const response = await fetch(`${DEV_TO_API}?tag=${tag}&page=${page}&per_page=20`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const articles: Article[] = await response.json();
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};
