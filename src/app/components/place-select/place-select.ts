import {Component} from 'angular2/angular2';


@Component({
  selector: 'place-select',
  templateUrl: 'app/components/place-select/place-select.html',
  styleUrls: ['app/components/place-select/place-select.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class PlaceSelect {
  options:string[] = ["M", "N", "B", "C"]
  selectedOption:string = "M";
}