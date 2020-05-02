import { Component, OnInit, ViewChild, ElementRef, DoCheck,OnChanges, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit{
  public valeur: string;

  @ViewChild('f', {static: true})
  public el: ElementRef

  constructor() { }

  ngOnInit() {
  }

  updateValeur(){
    console.log(this.el.nativeElement.value);
    this.valeur=this.el.nativeElement.value;
  }

  

}
