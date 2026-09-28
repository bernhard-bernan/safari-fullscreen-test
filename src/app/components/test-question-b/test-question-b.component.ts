import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-question-b',
  templateUrl: './test-question-b.component.html',
  styleUrls: ['./test-question-b.component.scss']
})
export class TestQuestionBComponent {

  @Output()
  completed = new EventEmitter<void>();

  @Output()
  interaction = new EventEmitter<string>();

  public clickCount = 0;

  public testClick(button: string): void {
    this.clickCount++;
    this.interaction.emit(button);
  }

  public nextQuestion(): void {
    this.interaction.emit('NEXT');
    this.completed.emit();
  }
}
