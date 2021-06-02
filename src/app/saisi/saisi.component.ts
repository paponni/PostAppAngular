import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { Comments} from '../Comment';
@Component({
  selector: 'app-saisi',
  templateUrl: './saisi.component.html',
  styleUrls: ['./saisi.component.css']
})
export class SaisiComponent implements OnInit {

  posts:Post[];
  inputPost:any;
  inputComment:any;
  isImagef:boolean=false;

 // url:any ;
  msg:string="";
  

constructor() { }

  ngOnInit(): void {  

    this.posts=[
       ]
       
    
     
  }
  addPost(){
    this.posts.push({
      id : this.posts.length+1, 
     content : this.inputPost,
      isImage : this.isImagef,
      commentaires : []
    }
    )
    this.inputPost="";
  }

  selectFile(event:any){
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
     this.isImagef=true;
			this.msg = "";
			this.inputPost = reader.result; 
		}

  }


  commenter(e){

    this.posts[e].commentaires.push({
      commentaire : this.inputComment

    })
    this.inputComment=""
  }
 
  

}
