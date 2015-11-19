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
import {Search} from './search';


describe('Search Pipe', () => {

  beforeEachProviders(() => []);


  it('should ...', inject([Search], (pipe:Search) => {
      expect(pipe.transform(true, [[''], ''])).toBe(false);
  }));

});
