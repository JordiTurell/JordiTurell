import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },   
  { path: 'About', component: AboutComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }