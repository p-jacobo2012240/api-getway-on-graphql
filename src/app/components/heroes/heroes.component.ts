import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any;

  constructor(private heroesService: HeroeService) {

        this.heroesService.getHeroe()
            .subscribe( data =>{
              console.log(data)
              this.heroes = data;
            })
   }

  ngOnInit() {
  }

}
