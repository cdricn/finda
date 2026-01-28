export interface GameJam {
  upcoming: GameJamEntries[];
  ongoing: GameJamEntries[];
}

export interface GameJamEntries {
  title: string;
  url: string;
  members: number;
  deadline: string;
  host: string;
}

export interface GameJamInfo {
  title: string,
  host: string,
  members: number,
  startDate: string,
  endDate: string
}

export interface ForumPosts {
  title: string,
  url: string,
  content: string,
  replies: number,
  datePosted: string,
  author: string,
  tags: TagType
}

export interface TagState {
  [tag:string] : boolean;
}

export interface TagType {
  [tag:string] : string;
}
