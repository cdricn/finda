export interface GameJam {
  title: string;
  url: string;
  members: number;
  deadline: string;
  host: string;
}

export interface ForumPosts {
  title: string,
  url: string,
  description: string,
  replies: number,
  datePosted: string,
  author: string
  tag: string;
}

export interface TagType {
  [tag:string] : boolean;
}