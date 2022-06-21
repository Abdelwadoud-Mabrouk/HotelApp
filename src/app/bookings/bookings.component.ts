import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
@Component
({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit
{

  constructor() { }
 /*booking: Booking =
  {
    id : 1,
    name: "Abdelwadoud Mabrouk",
    roomNumber: 15,
    startDate: new Date(),
    endDate: new Date("2022-5-21")
  }*/
  bookings = Bookings;
  ngOnInit(): void
  {}
}
