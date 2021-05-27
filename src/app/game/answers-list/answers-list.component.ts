import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
=======

>>>>>>> 9ac875c95805b360fb0d7638f86ffa9cc0f8f55f

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {
<<<<<<< HEAD
  @Input() public list: string[] = []
  @Output() public onUserAnswer: EventEmitter<string> = new EventEmitter();
  @Input() public itemSelected: string = "";
=======
  @Input() public list:string[] = []
  @Output() public onUserAnswer:EventEmitter<string> = new EventEmitter();

  @Input() public selected:string = ''
>>>>>>> 9ac875c95805b360fb0d7638f86ffa9cc0f8f55f
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  public onClickHandler(answer: string) {
    console.log("sono dentro il componente child");
    this.onUserAnswer.emit(answer);
  }

  getActiveClass(item: string) {
    return { active: this.itemSelected == item };
=======
  onClickHandler(answer:string){
    console.log("sono dentro il componente (child)",answer);
    //this.selected = answer
    this.onUserAnswer.emit(answer);
  }

  isActive(currentAnswer:string) {
    return {active: this.selected === currentAnswer}
>>>>>>> 9ac875c95805b360fb0d7638f86ffa9cc0f8f55f
  }

}
