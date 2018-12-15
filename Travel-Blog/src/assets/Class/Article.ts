export class Article {
  ID: number;
  Image: string;
  Title: string;
  Tag: string;
  Description: string;
  Vistor: number;
  Date: string;
  Detail: string;
  comment:Comment[];
}

export class Comment {
  userid:number;
  comment_user:string;
  comment:string;
  time:string;
}
