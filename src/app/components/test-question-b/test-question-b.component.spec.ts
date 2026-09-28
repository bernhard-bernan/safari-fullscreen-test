import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionBComponent } from './test-question-b.component';

describe('TestQuestionBComponent', () => {
  let component: TestQuestionBComponent;
  let fixture: ComponentFixture<TestQuestionBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestQuestionBComponent]
    });
    fixture = TestBed.createComponent(TestQuestionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
