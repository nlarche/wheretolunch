/// <reference path="../typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';
import {Place} from './model/place';
import {PlaceService} from './services/place-service/place-service';
import {PlaceEdit} from './components/place-edit/place-edit';
import {PlaceList} from './components/place-list/place-list';

let template = require('./wheretolunch.html');

@Component({
  selector: 'wheretolunch-app',
  providers: [],
  template: template,
  directives: [PlaceEdit, PlaceList],
  pipes: []

})
export class WheretolunchApp {
    
  constructor() {
  }
 
}
