import {Component, ControlGroup, Control} from 'angular2/angular2';


@Component({
  selector: 'fields-form',
  templateUrl: 'app/components/fields-form/fields-form.html',
  styleUrls: ['app/components/fields-form/fields-form.css'],
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