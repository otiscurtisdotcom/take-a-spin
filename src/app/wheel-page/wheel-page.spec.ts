import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WheelPage } from './wheel-page';
import { WheelService } from '../services/wheel-service';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { signal } from '@angular/core';

// Mock service with signal support
class MockWheelService {
  result = signal<number | null>(null);
  spinRandom = jasmine.createSpy('spinRandom');
  spinFixed = jasmine.createSpy('spinFixed');
}

describe('WheelPage', () => {
  let component: WheelPage;
  let fixture: ComponentFixture<WheelPage>;
  let wheelService: MockWheelService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheelPage],
      providers: [
        { provide: WheelService, useClass: MockWheelService },
        provideNoopAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WheelPage);
    component = fixture.componentInstance;
    wheelService = TestBed.inject(WheelService) as unknown as MockWheelService;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call spinRandom on wheelService when spinRandom is called', () => {
    component.spinRandom();
    expect(wheelService.spinRandom).toHaveBeenCalled();
  });

  it('should call spinFixed on wheelService when spinFixed is called', () => {
    component.spinFixed();
    expect(wheelService.spinFixed).toHaveBeenCalled();
  });
});
