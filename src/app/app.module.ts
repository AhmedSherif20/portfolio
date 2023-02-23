import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NavLogoComponent } from './components/nav-logo/nav-logo.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { AboutComponent } from './pages/about/about.component';
import ServicesComponent from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ModeComponent } from './components/mode/mode.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SocialMediaLinksComponent } from './components/social-media-links/social-media-links.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactMethodsComponent } from './components/contact-methods/contact-methods.component';
import { ContactMediaComponent } from './components/contact-media/contact-media.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavLogoComponent,
    NavLinksComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ToolbarComponent,
    ModeComponent,
    PageTitleComponent,
    BannerComponent,
    ResumeComponent,
    SocialMediaLinksComponent,
    ContactComponent,
    ContactMethodsComponent,
    ContactMediaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
