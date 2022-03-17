import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush ,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input()
  set pokeName(val: string) {
    this.getData(val);
    return;
  };
  data: Pokemon | null = null;
  constructor(private http: HttpClient, private ref: ChangeDetectorRef) { }
  get hp() {
    return this.data?.stats.filter(x => x.stat.name === "hp")[0].base_stat;
  }
  ngOnInit(): void {
  }
  ngOnChanges() {

  }
  

  getData(name: string | number) {
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/" + name).subscribe({
      next: (value) => {
        this.data = value; 
        console.log(this.data);
        this.ref.detectChanges();
      },
      error: (e) => {this.data = null;}
    });
  }

}
