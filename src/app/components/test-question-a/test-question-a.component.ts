import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-question-a',
  templateUrl: './test-question-a.component.html',
  styleUrls: ['./test-question-a.component.scss']
})
export class TestQuestionAComponent {

  @Output()
  completed = new EventEmitter<void>();

  @Output()
  interaction = new EventEmitter<string>();

  public clickCount = 0;

  public lastArea = '-';

  public testTouch(event: TouchEvent): void {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    const touch = event.changedTouches[0];

    if (!touch) {
      return;
    }

    const relativeY = touch.clientY - rect.top;
    const sectionHeight = rect.height / 3;

    let area: string;

    if (relativeY < sectionHeight) {
      area = 'A1';
    } else if (relativeY < sectionHeight * 2) {
      area = 'A2';
    } else {
      area = 'A3';
    }

    this.clickCount++;
    this.lastArea = area;

    this.interaction.emit(area);
  }

  public nextQuestion(): void {
    this.interaction.emit('NEXT');
    this.completed.emit();
  }
}