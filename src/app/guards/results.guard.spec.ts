import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { resultsGuard } from './results.guard';
import { WheelService } from '../services/wheel-service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const DUMMY_RESULT = 1;

describe('resultsGuard', () => {
  let wheelServiceSpy: jasmine.SpyObj<WheelService>;

  beforeEach(() => {
    const mockWheelService = jasmine.createSpyObj(
      'WheelService',
      ['navigateToStart'],
      {
        result: signal<number | null>(null),
      },
    );

    TestBed.configureTestingModule({
      providers: [{ provide: WheelService, useValue: mockWheelService }],
    });

    wheelServiceSpy = TestBed.inject(
      WheelService,
    ) as jasmine.SpyObj<WheelService>;
  });

  it('should navigate to start and return false when result is null', () => {
    wheelServiceSpy.result.set(null);

    const canActivate = TestBed.runInInjectionContext(() =>
      resultsGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );

    expect(wheelServiceSpy.navigateToStart).toHaveBeenCalled();
    expect(canActivate).toBeFalse();
  });

  it('should return true when result is not null', () => {
    wheelServiceSpy.result.set(DUMMY_RESULT);

    const canActivate = TestBed.runInInjectionContext(() =>
      resultsGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );

    expect(wheelServiceSpy.navigateToStart).not.toHaveBeenCalled();
    expect(canActivate).toBeTrue();
  });
});
