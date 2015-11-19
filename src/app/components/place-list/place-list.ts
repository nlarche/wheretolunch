import {Component} from 'angular2/angular2';
import {Place} from '../../model/place';
import {PlaceService} from '../../services/place-service/place-service';
import {PlaceRender} from '../../components/place-render/place-render';
import {PlaceSelect} from '../../components/place-select/place-select';
import {Search} from '../../pipes/search/search';


@Component({
  selector: 'place-list',
  templateUrl: 'app/components/place-list/place-list.html',
  styleUrls: ['app/components/place-list/place-list.css'],
  providers: [],
  directives: [PlaceRender, PlaceSelect],
  pipes: [Search]
})
export class PlaceList {
  
    places : Place[];  

  constructor(placeService : PlaceService) {
  
    this.places = placeService.getPlaces();
  }

}