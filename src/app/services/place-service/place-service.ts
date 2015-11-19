import {Injectable} from 'angular2/angular2';
import {Place} from '../../model/place';


@Injectable()
export class PlaceService {
    
  places : Place[];
  
  constructor() {    
    this.places = [
      { "id": 1, "name": "Mr. Nice" },
      { "id": 2, "name": "Narco" },
      { "id": 3, "name": "Bombasto" },
      { "id": 4, "name": "Celeritas" },
      { "id": 5, "name": "Magneta" },
      { "id": 6, "name": "RubberMan" },
      { "id": 7, "name": "Dynama" },
      { "id": 8, "name": "Dr IQ" },
      { "id": 9, "name": "Magma" },
      { "id": 10, "name": "Tornado" }
    ];    
  }
  
  getPlaces(){
    return this.places;
  }
  addPlace(place : Place){
    this.places.push(place);
  }

}