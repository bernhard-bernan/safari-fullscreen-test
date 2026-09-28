import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionAComponent } from './test-question-a.component';

describe('TestQuestionAComponent', () => {
  let component: TestQuestionAComponent;
  let fixture: ComponentFixture<TestQuestionAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestQuestionAComponent]
    });
    fixture = TestBed.createComponent(TestQuestionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
