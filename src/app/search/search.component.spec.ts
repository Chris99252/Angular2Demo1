/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { SearchService } from '../search.service';

describe('Component: Search', () => {
  it('should create an instance', () => {
    let component = new SearchComponent(new SearchService);
    expect(component).toBeTruthy();
  });
});
