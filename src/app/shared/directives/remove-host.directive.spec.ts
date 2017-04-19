/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RemoveHostDirective } from './remove-host.directive';
import { ElementRef } from '@angular/core';

describe('Directive: RemoveHostDirective', () => {
  it('should create an instance', () => {
    let directive = new RemoveHostDirective(new ElementRef(document.createElement('div')));
    expect(directive).toBeTruthy();
  });
});
