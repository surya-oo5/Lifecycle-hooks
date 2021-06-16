import { Component, OnInit , Input, SimpleChanges, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnChanges{
  private myNumber: number;

  constructor() { }

  @Input()
  set myNewNumber(number: number){
    this.myNumber=number;
  }

  get myNewNumber(){

    return this.myNumber;
  }

ngOnChanges(changes: SimpleChanges){

  const newNumberChange: SimpleChange= changes.myNewNumber;

  console.log('Previous value - (ng on changes)', newNumberChange.previousValue);
  console.log('Current value - (ng on changes)', newNumberChange.currentValue);
  this.myNewNumber= newNumberChange.currentValue


}
  ngOnInit() {



  }


}
