import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PostsComponent } from '@views/posts/posts.component';
import { TileComponent } from '@views/shared/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
