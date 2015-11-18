import {Component} from 'angular2/angular2';

class Place {
  id: number;
  name : string  
}

var PLACES: Place[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];


@Component({
  selector: 'wheretolunch-app',
  providers: [],
  templateUrl: 'app/wheretolunch.html',
  directives: [],
  pipes: []

})
export class WheretolunchApp {
  newPlace : Place;
  places : Place[];   
  
  addPlace(place: Place){
   
    if (place.name){
   
      console.log(place);
      this.places.push(place);
      this.newPlace.name = null;  
   
   }    
  };
    
  constructor() {
    this.newPlace = new Place();    
    this.places = PLACES;
  }
}
