import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsPage } from './results-page';
import { Button } from '../shared/button/button';
import { WheelService } from '../services/wheel-service';
import { SEGMENTS_DATA } from '../constants/segments';
import { signal, Signal } from '@angular/core';

const DUMMY_RESULT = 4;

describe('ResultsPage', () => {
  let component: ResultsPage;
  let fixture: ComponentFixture<ResultsPage>;
  let wheelServiceSpy: Partial<WheelService> & {
    result: Signal<number | null>;
  };

  beforeEach(async () => {
    // Create a signal for result with initial value null
    wheelServiceSpy = {
      result: signal<number | null>(null),
      navigateToStart: jasmine.createSpy('navigateToStart'),
    };

    await TestBed.configureTestingModule({
      imports: [Button, ResultsPage],
      providers: [{ provide: WheelService, useValue: wheelServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should compute result based on wheelService result signal', () => {
    wheelServiceSpy.result.set(DUMMY_RESULT);
    fixture.detectChanges();
    expect(component.result()).toEqual(SEGMENTS_DATA[DUMMY_RESULT]);
  });

  it('should return null if wheelService result is null', () => {
    wheelServiceSpy.result.set(null);
    fixture.detectChanges();
    expect(component.result()).toBeNull();
  });

  it('should call navigateToStart on startAgain()', () => {
    component.startAgain();
    expect(wheelServiceSpy.navigateToStart).toHaveBeenCalled();
  });
});
