import internal from "stream";

declare type RecipePost = {
  id: string;
  user: User;
  recipe: Recipe;
  likes: number;
  comments: number;
  repost: number;
  time: string;
};
declare type Recipe = {
  title: string;
  steps: string[];
};
