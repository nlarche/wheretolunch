/// <reference path="../../../typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';
import {Place} from '../../model/place';
import {PlaceService} from '../../services/place-service/place-service';
import {PlaceRender} from '../../components/place-render/place-render';
import {PlaceSearch} from '../../components/place-search/place-search';
import {FieldsForm} from '../../components/fields-form/fields-form';
import {Search} from '../../pipes/search/search';

let template = require('./place-list.html');
let style = require('./place-list.css');

@Component({
  selector: 'place-list',
  template: template,
  styles: [style],
  providers: [],
  directives: [PlaceRender, PlaceSearch, FieldsForm],
  pipes: [Search]
})
export class PlaceList {
  
    places : Place[];  

  constructor(placeService : PlaceService) {
  
    this.places = placeService.getPlaces();
  }

}