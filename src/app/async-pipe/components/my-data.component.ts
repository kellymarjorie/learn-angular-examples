import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {
  obs$ = of([{ name: 'Louie' }, { name: 'Ollie' }]);

  myData$!: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.myData$ = this.dataService.getData();
  }
}
