/// <reference path="../../../typings/_custom.d.ts" />

import {Component, ControlGroup, Control} from 'angular2/angular2';

let template = require('./fields-form.html');
let style = require('./fields-form.css');

@Component({
  selector: 'fields-form',
  template: template,
  styles: [style],
  providers: [],
  directives: [],
  pipes: []
})
export class FieldsForm {
  form = new ControlGroup({
    name: new Control(true),
    place: new Control(true)
  })
  get selectedFields(){
    return Object
      .keys(this.form.controls)
      .filter((key)=>this.form.controls[key].value)
  }
  constructor() {}

}