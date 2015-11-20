/// <reference path="../../../typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';
import {Place} from '../../model/place';
import {PlaceService} from '../../services/place-service/place-service';

let template = require('./place-edit.html');
let style = require('./place-edit.css');

@Component({
  selector: 'place-edit',
  template: template,
  styles: [style],
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
      this.placeService.addPlace(place);
      this.newPlace= new Place();  
   }    
  };
    

}