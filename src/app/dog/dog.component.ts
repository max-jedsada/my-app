import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  @Input() name: string = "input dog"
  //public name: string
  constructor() { }

  ngOnInit() {
  }

}
