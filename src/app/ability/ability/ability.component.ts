import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Move } from 'pokenode-ts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ability[url]',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {
  @Input()
  url!: string;
  data: Move | undefined;
  get name() {return this.data?.names.filter(x => x.language.name === "en")[0].name}
  get entry() { return this.data?.effect_entries.filter(x => x.language.name === "en")[0].short_effect}
  constructor(private http: HttpClient, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe({next: x => {
      this.data = x as Move; 
      console.log(this.data);
      this.ref.detectChanges();
    }});
  }

}
