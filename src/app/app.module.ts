import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullscreenTestComponent } from './components/fullscreen-test/fullscreen-test.component';
import { TestQuestionAComponent } from './components/test-question-a/test-question-a.component';
import { TestQuestionBComponent } from './components/test-question-b/test-question-b.component';

@NgModule({
  declarations: [
    AppComponent,
    FullscreenTestComponent,
    TestQuestionAComponent,
    TestQuestionBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
