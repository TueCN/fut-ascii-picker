import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateGalleryComponent } from './candidates/candidate-gallery/candidate-gallery.component';
import { CandidateComponent } from './candidates/candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateGalleryComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
