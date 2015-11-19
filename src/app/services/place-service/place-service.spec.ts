import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/angular2';
import {PlaceService} from './place-service';


describe('PlaceService Service', () => {

  beforeEachProviders(() => []);


  it('should ...', inject([PlaceService], (service:PlaceService) => {

  }));

});
