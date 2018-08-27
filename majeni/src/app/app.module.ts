import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStickyDirective } from 'ng-sticky';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { MainNavDirective } from './layout/main-nav.directive';
import { AboutComponent } from './components/about/about.component';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { TeamComponent } from './components/team/team.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStickyDirective,
    MainLayoutComponent,
    MainNavDirective,
    AboutComponent,
    WhatwedoComponent,
    FooterComponent,
    WhyChooseUsComponent,
    TeamComponent,
    ProjectsComponent,
    ClientsComponent,
    HowItWorksComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
