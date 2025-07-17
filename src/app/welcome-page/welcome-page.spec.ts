import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomePage } from './welcome-page';
import { Link } from '../shared/link/link';
import { ApplicationRoutes } from '../constants/routes';
import { RouterTestingModule } from '@angular/router/testing';

describe('WelcomePage', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Link, WelcomePage, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the wheelPageRoute correctly', () => {
    expect(component.wheelPageRoute).toBe(`/${ApplicationRoutes.WHEEL}`);
  });
});
