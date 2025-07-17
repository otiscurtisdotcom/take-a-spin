import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WheelComponent } from './wheel.component';
import { WheelService } from '../../services/wheel-service';
import {
  SEGMENTS_DATA,
  SEGMENTS_CIRCUMFERENCE,
} from '../../constants/segments';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

const DUMMY_ROTATION = 1234;
const DUMMY_SEGMENT = 3;

describe('WheelComponent', () => {
  let component: WheelComponent;
  let fixture: ComponentFixture<WheelComponent>;
  let wheelServiceSpy: jasmine.SpyObj<WheelService>;

  beforeEach(() => {
    wheelServiceSpy = jasmine.createSpyObj('WheelService', [
      'result',
      'calculateRotation',
      'navigateToResult',
    ]);

    // Mock result signal function
    wheelServiceSpy.result.and.returnValue(DUMMY_SEGMENT);
    wheelServiceSpy.calculateRotation.and.returnValue(DUMMY_ROTATION);

    TestBed.configureTestingModule({
      imports: [WheelComponent],
      providers: [
        { provide: WheelService, useValue: wheelServiceSpy },
        provideNoopAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should compute segments with correct rotations', () => {
    const segments = component.segments();
    expect(segments.length).toBe(SEGMENTS_DATA.length);
    segments.forEach((segment, i) => {
      const expectedRotation = `rotate(${i * SEGMENTS_CIRCUMFERENCE}, 100, 100)`;
      expect(segment.rotation).toBe(expectedRotation);
    });
  });

  it('should set rotation and trigger spin when result is valid', () => {
    expect(component.spinTrigger()).toBeTrue();
    expect(component.rotationStyle()).toBe(`rotate(${DUMMY_ROTATION}deg)`);
  });

  it('should not call navigateToResult if animation is done before spinTrigger is set', () => {
    component.spinTrigger.set(false);
    component.onAnimationDone();
    expect(wheelServiceSpy.navigateToResult).not.toHaveBeenCalled();
  });

  it('should call navigateToResult after animation completes', () => {
    component.spinTrigger.set(true);
    component.onAnimationDone();
    expect(wheelServiceSpy.navigateToResult).toHaveBeenCalled();
  });
});
