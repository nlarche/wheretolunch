import {Component} from 'angular2/angular2';


@Component({
  selector: 'place-search',
  templateUrl: 'app/components/place-search/place-search.html',
  styleUrls: ['app/components/place-search/place-search.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class PlaceSearch {
  search:string = "";
}