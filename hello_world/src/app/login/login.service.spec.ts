import { TestBed } from '@angular/core/testing';

import { LoginRider } from './login.service';

describe('LoginRider', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const rider: LoginRider = TestBed.get(LoginRider);
    expect(rider).toBeTruthy();
  });
});
