import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http'
import { Heroe} from '../interfaces/heroe.interface'
import 'rxjs/Rx'

@Injectable()
export class HeroeService {


  heroesURL: string = "https://heroes-a7397.firebaseio.com/heroes.json"
  heroeURL: string = "https://heroes-a7397.firebaseio.com/heroes/"

  constructor( private http: Http) { }

  //INICIO INSERTAR HEROE
  nuevoHeroe( heroe: Heroe){
    
    let body = JSON.stringify( heroe);
    let headers = new Headers({
      'content-type':'aplication/json'
    });

    return this.http.post( this.heroesURL, body, { headers} )
        .map(res =>{
          console.log(res.json());
          return res.json();
        });
  }
  //FIN INSERTAR HEROE
  //INICIAR ACTUALIZAR HEROE
  actualizarHeroe( heroe: Heroe, key$: string ){
    
    let body = JSON.stringify( heroe);
    let headers = new Headers({
      'content-type':'aplication/json'
    });
    
    let url = `${ this.heroesURL}/${ key$ }.json`;  //esta es la variable dierecta para la url

    return this.http.put( this.heroesURL, body, { headers} )
        .map(res =>{
          console.log(res.json());
          return res.json();
        });
  }
  //FIN ACTUALIZAR HEROE

  getHeroes( key$:string){
    let url = `${ this.heroesURL}/${ key$ }.json`; 
      return this.http.get( url)
        .map( ress => ress.json());
  }

  //OBTENER TODO
  getHeroe( ){
    return this.http.get(this.heroesURL)
      .map(ress => ress.json());
  }
}
