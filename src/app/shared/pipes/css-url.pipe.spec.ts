/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CssUrlPipe } from './css-url.pipe';

describe('Pipe: CssUrlPipe', () => {
  let pipe: CssUrlPipe;

  it('create an instance', () => {
    let pipe = new CssUrlPipe();
    expect(pipe).toBeTruthy();
  });
  
  beforeEach(() => {
    pipe = new CssUrlPipe();
  });
  
  
  it('Should ... ', () => {
    let
        input  = '',
        output = null;
    expect(pipe.transform(input)).toEqual(output);
  });
});
