import {Injectable} from 'angular2/angular2';
import {Place} from '../../model/place';


@Injectable()
export class PlaceService {
    
  places : Place[];
  
  constructor() {    
    this.places = [
      new Place("Mr. Nice"),
      new Place("Narco" ),
      new Place("Bombasto" ),
      new Place("Celeritas" ),
      new Place( "Magneta" ),
      new Place("RubberMan" ),
      new Place("Dynama" ),
      new Place("Dr IQ" ),
      new Place("Magma" ),
      new Place("Tornado" )
    ];    
  }
  
  getPlaces(){
    return this.places;
  }
  addPlace(place : Place){
    this.places.push(place);
  }

}