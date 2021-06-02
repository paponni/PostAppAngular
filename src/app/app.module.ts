import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { SaisiComponent } from './saisi/saisi.component';
import { FormsModule} from '@angular/forms';
import { PostContentComponent } from './post-content/post-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PostContainerComponent,
    SaisiComponent,
    PostContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
