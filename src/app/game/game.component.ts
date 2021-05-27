import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { GameService } from '../services/game.service';


@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // public service:GameService
  // è la domanda da rappresentare
  public question!: Question
  constructor(
    public service: GameService
  ) {

    this.service.getResponse().subscribe(() => {

      this.question = this.service.getCurrentQuestion();

    })
  }
  ngOnInit(): void { }

<<<<<<< HEAD
  setUserAnswer(clickedUserChoice: string) {
    // console.log("sono nel parente, yeah", clickedUserChoice);
=======
  setUserAnswer(clickedUserChoice:string){
    //console.log("sono nel parent",clickedUserChoice);
>>>>>>> 9ac875c95805b360fb0d7638f86ffa9cc0f8f55f
    this.question.userAnswer = clickedUserChoice
    this.question.isDone = true;
    this.question.isCorrect = this.question.correct_answer === clickedUserChoice
  }

  goToNextQuestion() {
    console.log("vado avanti");
    this.service.getNextQuestion()
    this.question = this.service.getCurrentQuestion()

  }
  goToPreviusQuestion() {

    console.log("vado indietro");
    this.service.getPreviusQuestion()
    this.question = this.service.getCurrentQuestion()
  }

<<<<<<< HEAD
  

=======
  userAnswerHandler(answer:string){
    console.log("sono fuori dal child",answer);
  }

  getClass(){
    return {'bg-secondary': this.question.isDone}
  }
>>>>>>> 9ac875c95805b360fb0d7638f86ffa9cc0f8f55f
}
