import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Heroe } from '../../interfaces/heroe.interface'
import { HeroeService} from '../../services/heroe.service'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre:"",
    bio: "",
    casa: "Marvel"
  }    //EL Key no hay forma de saverlo por eso le pondremos $

    nuevo: boolean = false;
    id: string;

  constructor( private heroeservice: HeroeService,
               private router: Router,
               private route: ActivatedRoute) {

                this.route.params
                .subscribe( parametros => {
                  this.id = parametros['id']
                  if (this.id !== "nuevo"){
                    this.heroeservice.getHeroes( this.id)
                      .subscribe(  heroe => this.heroe = heroe)
                  }

                });
                }

  ngOnInit() {
  }

  guardar(){

    if( this.id == "nuevo"){
      this.heroeservice.nuevoHeroe( this.heroe)
      .subscribe( data=> { 
          this.router.navigate(['/heroe', data.name])
      }, error => console.error(error));

    }else{
      this.heroeservice.actualizarHeroe( this.heroe, this.id)
      .subscribe( data=> { 
        console.log(data);  
        //this.router.navigate(['/heroe', data.name])
      }, error => console.error(error));
    }

  
  }

  agregarNuevo( forma: NgForm){
      this.router.navigate(['/heroe','nuevo'])
      forma.reset({
        casa: "Marvel"
      });
  }

}
