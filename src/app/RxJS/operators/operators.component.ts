import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  concat,
  forkJoin,
  from,
  fromEvent,
  interval,
  Observable,
  of,
  range,
  Subject,
  Subscription,
  throwError,
  timer,
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }
  @Input() myInputMessage: string;
  @Output() outputMessage: EventEmitter<string> = new EventEmitter();
  message = 'I am from child component';
  stopInterval: Subject<any> = new Subject();
  $interval = interval(120000);
  array = [1, 2, 3, 4, 5];
  eventArray = ['click', 'mousemove'];
  person = {
    name: 'Template <script>alert("0wned")</script> <b>Syntax</b>',
    surname: 'Tendulaker',
    age: 50
  };
  items = [
    {fname: 'Sachin', lname: 'Tendulkar'},
    {fname: 'Viru', lname: 'Sehwag'},
    {fname: 'Saurav', lname: 'Ganguly'},
    {fname: 'Rahul', lname: 'Dravid'},
    {fname: 'Ravindra', lname: 'Jadeja'},
  ];
  form: FormGroup;

  private subscription: Subscription;
  // source: Observable<any>;
  source2: Observable<any>;
  // ************************************* FROMEVENT END ***********************************************

  // ************************************* FROM START ********************************************
  source = from(this.array);

  ngOnInit(): void {
    this.form = new FormGroup({
      fname: new FormControl('fname'),
      lname: new FormControl('lname'),
      email: new FormControl('email')
    });
    // this.intervalSubscription();
    // this.subScriptionMethod();
    // this.fromEventMethod();
    // this.ofOperatorMethod();
    // this.rangeOperatorMethod();
    // this.throwErrorOperatrorMethod();
    // this.timerOperatorMethod();
    // this.concatOperatorMethod();
    // this.forkjoinOperatorMethod();
    // this.mergeOperatorMethod();
    this.emitEvents();
  }

  // ************************************ REACTIVE FORM START ****************************************
  onReactiveFormSubmit(formData): void {
    console.log('formData email = ', this.form.value);
  }
  // ************************************ REACTIVE FORM END ****************************************

  // ************************************ TEMPLATE DRIVERN FORMS START ****************************************
  onSubmit(event): void {
    console.log(event.username);
    console.log(event.password);
  }
  // ************************************ TEMPLATE DRIVERN FORMS END ******************************************

  emitEvents(): void {
    this.outputMessage.emit(this.message);
  }

  // ************************************* MERGE OPERATOR START ********************************************
  mergeOperatorMethod(): void  {
    const firstList = of(1, 3, 5, 7);
    const secondList = of(2, 4, 6, 8);
    // secondList.pipe
  }
  // ************************************* MERGE OPERATOR END ********************************************

  // ************************************* FORKJOIN OPERATOR START ********************************************
  forkjoinOperatorMethod(): void  {
    const firstList = of(1, 3, 5, 7);
    const secondList = of(2, 4, 6, 8);
    const finalValue = forkJoin([firstList, secondList]);
    finalValue.subscribe((val) => {
      console.log('forkjoin operator emits last values', val);
    });
  }
  // ************************************* FORKJOIN OPERATOR END ********************************************

  // ************************************* CONCAT OPERATOR START ********************************************
  concatOperatorMethod(): void {
    const firstList = of(1, 3, 5, 7, 9);
    const secondList = of(2, 4, 6, 8);
    const finalValue = concat(firstList, secondList);
    finalValue.subscribe((val) => {
      console.log('concat operator', val);
    });
  }
  // ************************************* CONCAT OPERATOR END ********************************************


  // ************************************* TIMER OPERATOR START ********************************************
  timerOperatorMethod(): void {
    this.source2 = timer(5);
    this.source2.subscribe((val) => {
      console.log('timer operator called ', val);
    });
  }
  // ************************************* TIMER OPERATOR END ********************************************

  // ************************************* THROW_ERROR OPERATOR START ********************************************
  throwErrorOperatrorMethod(): void {
    this.source2 = throwError(new Error('Error Occurred'));
    this.source2.subscribe((error) => {
      console.error(error);
    }
    // (error) => {
    //   console.error(error);
    // }
    );
  }
  // ************************************* THROW_ERROR OPERATOR END ********************************************


  // ************************************* RANGE OPERATOR START ********************************************
  rangeOperatorMethod(): void {
    this.source2 = range(0, 5);
    this.source2.subscribe((val) => {
      console.log('Range operator called', val);
    });
  }
  // ************************************* RANGE OPERATOR START ********************************************

  // ************************************* OF OPERATOR START ********************************************
  ofOperatorMethod(): void {
    this.source2 = of(this.array);
    this.source2.subscribe((val) => {
      console.log('of operator return values all at a time = ', val);
    });
  }
  // ************************************* OF OPERATOR END ********************************************

  // ************************************* FROMEVENT START ********************************************
  fromEventMethod(): void {
    this.eventArray.forEach((event) => {
      fromEvent(window, event).subscribe(($event) => {
        console.log('click or mousemove event occuoured', $event);
      });
    });
  }
  // newObs = this.source.pipe(map(val => val * val));
  subScriptionMethod(): void {
    this.subscription = this.source.subscribe((val) => {
      console.log('from operator return values one by one = ', val);
    });
    console.log('this.subscription = ', this.subscription);
  }

  // ************************************* FROM END ***********************************************

  // ************************************* INTERVAL START *****************************************
  // This is the subscription if Interval operator.
  intervalSubscription(): void {
    this.$interval.pipe(takeUntil(this.stopInterval)).subscribe( () => {
      console.log('I am getting called every after 2 minutes');
    });
  }

  // We have cleared the Interval here.
  clearInterval(): void {
    this.stopInterval.next();
    this.stopInterval.complete();
    console.log('Interval is cleared');
  }
  // ************************************* INTERVAL END *****************************************
}
