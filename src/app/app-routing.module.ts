import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ContactComponent } from './contact/contact.component';
import { SeoComponent } from './seo/seo.component';
import { WebappComponent } from './webapp/webapp.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'webdesign', component:WebdesignComponent},
  {path: 'webapp', component: WebappComponent},
  {path: 'seo', component: SeoComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
