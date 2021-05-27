import { Question } from './../../model/question';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question!: string
  @Input() category!: string
  @Input() difficulty!: string



  constructor() { }

  ngOnInit(): void {
  }

  getClassDifficulty(difficulty: string) {
    if (difficulty == 'easy') {
      return 'text-success'
    } else if (difficulty == 'medium') {
      return 'text-warning'
    } else {
      return 'text-danger'
    }
  }

}
