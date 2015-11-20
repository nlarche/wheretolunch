/// <reference path="../../../typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';

let template = require('./place-search.html');
let style = require('./place-search.css');

@Component({
  selector: 'place-search',
  template: template,
  styles: [style],
  providers: [],
  directives: [],
  pipes: []
})
export class PlaceSearch {
  search:string = "";
}