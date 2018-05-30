import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsAnimationComponent } from './threejs-animation.component';

describe('ThreejsAnimationComponent', () => {
  let component: ThreejsAnimationComponent;
  let fixture: ComponentFixture<ThreejsAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
