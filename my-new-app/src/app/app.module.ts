import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './components/components/contact/contact.component';
import { QuizComponent } from './components/components/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContactComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
