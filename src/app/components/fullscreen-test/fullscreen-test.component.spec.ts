import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenTestComponent } from './fullscreen-test.component';

describe('FullscreenTestComponent', () => {
  let component: FullscreenTestComponent;
  let fixture: ComponentFixture<FullscreenTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullscreenTestComponent]
    });
    fixture = TestBed.createComponent(FullscreenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
