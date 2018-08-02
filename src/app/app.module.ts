import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { SingkatanContentComponent } from './singkatan-content/singkatan-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavComponent,
    FooterComponent,
    HomeContentComponent,
    SingkatanContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
