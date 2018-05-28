import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalculatorService} from "../../service/calculator.service";
import {CalculatorComponentValue} from "../../shared/models/calculator-component-value";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  equal : CalculatorComponentValue;
  floor : CalculatorComponentValue;
  ceil : CalculatorComponentValue;
  result : CalculatorComponentValue = new CalculatorComponentValue();
  // selectedValue:number;
  shopId:number=5;


  @Output() returnAmount = new EventEmitter();
  shopForm = new FormGroup ({
    value: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
    this.init();
    this.shopForm = this.fb.group({
      value: ['', Validators.required],
    });
  }

  init(){
    this.result.cards = [];
    this.floor = new CalculatorComponentValue();
    this.ceil = new CalculatorComponentValue();
    this.equal = new CalculatorComponentValue();
  }

  getResult() {
    this.init();
    this.calculatorService.getCalculatorResult(this.shopId,this.result.value)
      .subscribe(value => {
        if (value.equal) {
          this.changeAmount(value.equal);
        }else {
          this.equal = null;
          if (!value.floor) {
            this.changeAmount(value.ceil);
          }else if (!value.ceil) {
            this.changeAmount(value.floor);
          }
        }
        this.floor = value.floor;
        this.ceil = value.ceil;
      });
  }

  changeAmount(value: CalculatorComponentValue) {
    this.equal = value;
    this.result = value;
    this.returnAmount.emit(this.result.value);
  }

  nextAmount() {
    this.result.value = this.result.value +1;
    this.getResult();
  }

  previousAmount() {
    this.result.value = this.result.value -1;
    this.getResult();
  }
}
