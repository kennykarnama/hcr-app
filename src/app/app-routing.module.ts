import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { SingkatanContentComponent } from './singkatan-content/singkatan-content.component';

const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'singkatan', component: SingkatanContentComponent}
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
