import {bootstrap} from 'angular2/angular2';
import {WheretolunchApp} from './app/wheretolunch';
import {PlaceService} from './app/services/place-service/place-service';


bootstrap(WheretolunchApp, [PlaceService]);
