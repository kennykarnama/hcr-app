import { TestBed, inject } from '@angular/core/testing';

import { SingkatanService } from './singkatan.service';

describe('SingkatanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingkatanService]
    });
  });

  it('should be created', inject([SingkatanService], (service: SingkatanService) => {
    expect(service).toBeTruthy();
  }));
});
