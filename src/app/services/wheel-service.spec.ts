import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WheelService } from './wheel-service';
import { Router } from '@angular/router';
import { FIXED_SPIN_INDEX, POST_SPIN_DELAY_MS } from '../constants/spins';
import { SEGMENTS_DATA } from '../constants/segments';
import { ApplicationRoutes } from '../constants/routes';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('WheelService', () => {
  let service: WheelService;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        WheelService,
        provideNoopAnimations(),
        { provide: Router, useValue: routerSpy },
      ],
    });

    service = TestBed.inject(WheelService);
  });

  it('should set a random result index in spinRandom()', () => {
    service.spinRandom();
    const result = service.result();
    expect(result).not.toBeNull();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(SEGMENTS_DATA.length);
  });

  it('should set the fixed result index in spinFixed()', () => {
    service.spinFixed();
    expect(service.result()).toBe(FIXED_SPIN_INDEX);
  });

  it('should calculate the correct rotation', () => {
    const index = 2;
    const expectedRotation = 360 * 5 - (360 / SEGMENTS_DATA.length) * index;
    expect(service.calculateRotation(index)).toBe(expectedRotation);
  });

  it('navigateToStart should reset result and navigate to root', () => {
    service.result.set(3);
    service.navigateToStart();

    expect(service.result()).toBeNull();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });

  it('navigateToResult should navigate after delay', fakeAsync(() => {
    service.navigateToResult();
    tick(POST_SPIN_DELAY_MS);

    expect(routerSpy.navigate).toHaveBeenCalledWith([
      `/${ApplicationRoutes.RESULTS}`,
    ]);
  }));
});
