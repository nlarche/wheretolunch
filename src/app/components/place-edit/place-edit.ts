import {Component} from 'angular2/angular2';
import {Place} from '../../model/place';
import {PlaceService} from '../../services/place-service/place-service';


@Component({
  selector: 'place-edit',
  templateUrl: 'app/components/place-edit/place-edit.html',
  styleUrls: ['app/components/place-edit/place-edit.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class PlaceEdit {
  
  newPlace : Place;
  placeService:PlaceService;
  
  constructor(placeService:PlaceService) {
    this.newPlace = new Place();    
    this.placeService = placeService;
  }
  
    addPlace(place: Place){
   
    if (place.name){   
      place.id =  this.placeService.getPlaces().length;  
      this.placeService.addPlace(place);
      this.newPlace= new Place();  
   }    
  };
    

}