import {Injectable} from 'angular2/angular2';
import {Place} from '../../model/place';


@Injectable()
export class PlaceService {
    
  places : Place[];
  
  constructor() {    
    this.places = [
      new Place("azerty", "qsdsd"),
      new Place("Narco", "cvbcv" ),
      new Place("Bombasto", "sdfsdfs" ),
      new Place("Celeritas", "qsfdqsdqd" )     
    ];    
  }
  
  getPlaces(){
    return this.places;
  }
  addPlace(place : Place){
    this.places.push(place);
  }

}