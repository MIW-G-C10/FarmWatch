import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TicketOverviewService } from 'src/app/service/ticket-overview.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit{
  public tickets: Ticket [] = [];
  public isAuthorized: boolean = false; 

  constructor(private ticketOverviewService : TicketOverviewService,
    private toast: ToastService) {}

  ngOnInit(): void {
    this.getTickets(); 
  }

  public getTickets(): void {
    this.ticketOverviewService.getTickets().subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
      },
      (error: HttpErrorResponse) => {
        this.toast.ShowError("New Notification", error.error);
      }
    );
  }

}
