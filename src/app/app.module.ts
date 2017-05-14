import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { InMemoryDataService } from './in-memory.service';
import { AppComponent } from './app.component';
import { LanguageListComponent } from './languages/language-list.component';
import { LanguageService } from './languages/shared/language.service';
import { AppRoutingModule } from './app-routing.module';
import { LanguageDetailsComponent } from './languages/language-details.component';
import { RatingPipe } from './languages/shared/rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LanguageListComponent,
    LanguageDetailsComponent,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
