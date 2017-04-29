/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserManagementService } from './UserManagement.service';

describe('Service: UserManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManagementService]
    });
  });

  it('should ...', inject([UserManagementService], (service: UserManagementService) => {
    expect(service).toBeTruthy();
  }));
});