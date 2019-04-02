import { Component, OnInit } from '@angular/core';
import {CarService} from '../shared/car/car.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  displayedColumns: string[] = ['name','year'];
  dataSource = this.cars;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
    });
  }
}
