import {Component, Input, NgClass} from 'angular2/angular2';
import {Place} from '../../model/place';


@Component({
  selector: 'place-render',
  templateUrl: 'app/components/place-render/place-render.html',
  styles: [`
    .${Place.STARTED} {
	     color : green
    }
    .${Place.COMPLETED} {
	     color: red
     }
  `],
  providers: [],
  directives: [NgClass],
  pipes: []
})
export class PlaceRender {  
  @Input() place : Place;  

}