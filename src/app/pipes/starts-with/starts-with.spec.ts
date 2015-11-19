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
import {StartsWith} from './starts-with';


describe('StartsWith Pipe', () => {

  beforeEachProviders(() => []);


  it('should ...', inject([StartsWith], (pipe:StartsWith) => {
      expect(pipe.transform(true)).toBe(false);
  }));

});
