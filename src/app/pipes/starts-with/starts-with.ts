import {Pipe} from 'angular2/angular2';


@Pipe({
  name: 'StartsWith',
  // pure true change are not automatic
  pure: false
})
export class StartsWith {
  transform(value, args?) {    
    return value.filter((item)=>item[args[0]].startsWith(args[1]));
  }
}