import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//ROUTING
import { APP_ROUTING } from './app.routes';
//SERVICIOS
import { HeroeService} from './services/heroe.service'

import { AppComponent } from './app.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
