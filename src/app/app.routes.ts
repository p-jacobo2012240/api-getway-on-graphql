import { RouterModule, Routes} from '@angular/router';

//Components
import { HeroeComponent} from './components/heroe/heroe.component';
import { HeroesComponent} from './components/heroes/heroes.component';

const APP_ROUTES: Routes = [
   {path: 'heroe/:id', component: HeroeComponent},
   {path: 'heroes', component: HeroesComponent}, 
   { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);