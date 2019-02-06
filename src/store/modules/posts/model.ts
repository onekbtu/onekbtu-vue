export default class Post {
  id: number;
  title: string;
  content: string;
  rating: number;
  vote: number;

  constructor(id: number, title: string, content: string, rating: number, vote: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.rating = rating;
    this.vote = vote;
  }
}
