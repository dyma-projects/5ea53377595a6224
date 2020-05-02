import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input()
  public compteur:number;

  @Output()
  public changeCompteur:EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  public plus():void {
    console.log("plus");
    this.changeCompteur.emit(this.compteur+1);

  }

  public moins():void {
    console.log("moins");
    this.changeCompteur.emit(this.compteur-1);

  }

}
