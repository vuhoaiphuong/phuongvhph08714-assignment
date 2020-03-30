import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  selected: Customer;
  customers: Customer[];

  constructor(
    private customerService: CustomerService
    ) { 
      console.log('constructor')
    }
  
    ngOnInit(){
      this.getCustomers();
    }
      showDetail(customer){ 
      this.selected = customer;
    }
   
    getCustomers(){
      this.customerService.getCustomers().subscribe(data => {
        this.customers = data;
      })
      // this.customers = this.customerService.getCustomers();
    }
    removeItem(id){
      this.customers = this.customers.filter(customer => customer.id != id)
  
    }
    
}
