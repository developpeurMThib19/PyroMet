import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistesComponent } from './pages/artistes/artistes.component';
import { ArtistespageComponent } from './pages/artistes/artistespage/artistespage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'artistes',component:ArtistesComponent},
  {path:'artistes/:id',component:ArtistespageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
