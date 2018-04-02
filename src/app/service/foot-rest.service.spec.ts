import { TestBed, inject } from '@angular/core/testing';

import { FootRestService } from './foot-rest.service';

describe('FootRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootRestService]
    });
  });

  it('should ...', inject([FootRestService], (service: FootRestService) => {
    expect(service).toBeTruthy();
  }));
});
