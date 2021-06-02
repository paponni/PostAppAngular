import { Comments } from "./Comment";

export class Post{
    id :number;
    content :string;
    isImage:boolean;
    commentaires :Array<Comments>;
   
}