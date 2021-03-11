import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {GameModule} from './modules/game/game.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
