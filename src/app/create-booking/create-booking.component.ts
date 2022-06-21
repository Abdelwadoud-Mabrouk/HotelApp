import { Component, OnInit } from '@angular/core';
import { Bookings } from '../mock-bookings';
import { Booking } from '../booking';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  booking: Booking =
  {
    id: 108,
    name: "Chahed",
    roomNumber: 163,
    startDate: new Date(),
    endDate: new Date("2022-05-18"),
  }
  ngOnInit(): void
  {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    var bookingById = Bookings.find(x => x.id == id)!;
    this.booking = bookingById;
  }

  save(): void
  {
    Bookings.push(this.booking)
    this.router.navigate(['bookings'])
  }

}
