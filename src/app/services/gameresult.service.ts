import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameresultService {

  public isDone!: number
  public isCorrect!: number


  constructor() {
    this.isDone = 0
    this.isCorrect = 0
  }


  finalResult(question: Array<any>) {
    for (const question of questions) {
      console.log("[Question]: \n", question.question);
      this.isDone += question.isDone ? 1 : 0;
      this.isCorrect += question.isCorrect ? 1 : 0;
    }
  }




}
