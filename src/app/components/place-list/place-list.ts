import {Component} from 'angular2/angular2';
import {Place} from '../../model/place';
import {PlaceService} from '../../services/place-service/place-service';


@Component({
  selector: 'place-list',
  templateUrl: 'app/components/place-list/place-list.html',
  styleUrls: ['app/components/place-list/place-list.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class PlaceList {
  
    places : Place[];  

  constructor(placeService : PlaceService) {
  
    this.places = placeService.getPlaces();
  }

}