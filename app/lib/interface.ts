export interface GameJam {
  title: string;
  url: string;
  members: number;
  deadline: string;
  host: string;
}

export interface TagType {
  [tag:string] : boolean;
}