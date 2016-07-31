/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LimitPipe } from './limit.pipe';

describe('Pipe: Limit', () => {
  it('create an instance', () => {
    let pipe = new LimitPipe();
    expect(pipe).toBeTruthy();
  });
});
