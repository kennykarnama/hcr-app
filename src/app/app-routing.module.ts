import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { SingkatanContentComponent } from './singkatan-content/singkatan-content.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'singkatan', component: SingkatanContentComponent},
  { path: 'convert_to_binary', component:UploadImageComponent},
  { path: 'line_segmentation', component:UploadImageComponent},
  { path: 'word_segmentation', component:UploadImageComponent},
  { path: 'character_segmentation', component:UploadImageComponent},
  { path: 'skew_correction', component:UploadImageComponent},
  { path: 'slant_correction', component:UploadImageComponent},
  { path: 'recognition', component:UploadImageComponent}
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
