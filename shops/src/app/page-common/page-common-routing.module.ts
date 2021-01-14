import {Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {ContactComponent} from './component/contact/contact.component';
import {SupportComponent} from './component/support/support.component';
import {BlogComponent} from './component/blog/blog.component';
import {BlogDetailComponent} from './component/blog-detail/blog-detail.component';

export const CommonRoute: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'support', component: SupportComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-detail', component: BlogDetailComponent}
];
