import { Component } from '@angular/core';

interface InteractionLog {
  action: string;
  timestamp: number;
  interval: number | null;
}

@Component({
  selector: 'app-fullscreen-test',
  templateUrl: './fullscreen-test.component.html',
  styleUrls: ['./fullscreen-test.component.scss']
})
export class FullscreenTestComponent {

  
  public testStarted = false;

  public currentQuestion: 'A' | 'B' = 'A';

  public questionChanges = 0;

  public totalInteractions = 0;

  public lastInterval: number | null = null;

  public fastestInterval: number | null = null;

  public averageInterval: number | null = null;

  public interactionLog: InteractionLog[] = [];

  private lastInteractionTimestamp: number | null = null;

  public onInteraction(action: string): void {
    const timestamp = performance.now();

    let interval: number | null = null;

    if (this.lastInteractionTimestamp !== null) {
      interval = timestamp - this.lastInteractionTimestamp;
    }

    this.lastInteractionTimestamp = timestamp;

    this.totalInteractions++;

    if (interval !== null) {
      this.lastInterval = interval;

      if (
        this.fastestInterval === null ||
        interval < this.fastestInterval
      ) {
        this.fastestInterval = interval;
      }
    }

    this.interactionLog.unshift({
      action,
      timestamp,
      interval
    });

    if (this.interactionLog.length > 100) {
      this.interactionLog.pop();
    }

    this.calculateAverageInterval();
  }

  public onQuestionCompleted(): void {
    this.currentQuestion =
      this.currentQuestion === 'A' ? 'B' : 'A';

    this.questionChanges++;
  }

  public resetTest(): void {
    this.currentQuestion = 'A';

    this.questionChanges = 0;
    this.totalInteractions = 0;

    this.lastInterval = null;
    this.fastestInterval = null;
    this.averageInterval = null;

    this.interactionLog = [];

    this.lastInteractionTimestamp = null;
  }

  private calculateAverageInterval(): void {
    const intervals = this.interactionLog
      .map(item => item.interval)
      .filter((interval): interval is number => interval !== null);

    if (intervals.length === 0) {
      this.averageInterval = null;
      return;
    }

    const total = intervals.reduce(
      (sum, interval) => sum + interval,
      0
    );

    this.averageInterval = total / intervals.length;
  }

  public startTest(): void {
    this.testStarted = true;
    this.resetTest();
  }

}