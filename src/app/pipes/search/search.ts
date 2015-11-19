import {Pipe} from 'angular2/angular2';


@Pipe({
  name: 'Search',
  pure :false
})
export class Search {

  transform(value, [fields, letter]:[string[], string]) {    
    return value.filter(
      (item) => fields.some(
        (field) =>item[field].includes(letter)      
      ));
  }

}