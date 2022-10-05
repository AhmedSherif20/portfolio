import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SocialLinksComponent } from './shared/components/social-links/social-links.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { InfoComponent } from './components/info/info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SwiperModule } from 'swiper/angular';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './shared/components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    NavbarComponent,
    FooterComponent,
    SocialLinksComponent,
    InfoComponent,
    SkillsComponent,
    ServicesComponent,
    ServiceComponent,
    ContactComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    SwiperModule,
    NgxHideOnScrollModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
