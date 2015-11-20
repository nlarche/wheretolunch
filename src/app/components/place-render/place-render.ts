/// <reference path="../../../typings/_custom.d.ts" />

import {Component, Input, NgClass} from 'angular2/angular2';
import {Place} from '../../model/place';

let template = require('./place-render.html');
let style = require('./place-render.css');

@Component({
  selector: 'place-render',
  template: template,
  styles: [style, `
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