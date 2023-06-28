import { TestBed } from '@angular/core/testing';
import { ExchangeRateAccessorService } from './exchange-rate-accessor.service';

describe('ExchangeRateAccessorService', () => {
  let service: ExchangeRateAccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeRateAccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
