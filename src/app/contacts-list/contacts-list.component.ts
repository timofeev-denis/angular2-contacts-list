import { Component, OnInit } from '@angular/core';
import { Contact } from '../database/database.service';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'fa-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  providers: [DatabaseService]
})
export class ContactsListComponent implements OnInit {

	contacts: Contact[];
  constructor(private dataService: DatabaseService) {
	console.log("ContactsListComponent constructor");
  }

  ngOnInit() {
	this.contacts = this.dataService.getContactsList();
	console.log(this.contacts)
	//this.dataService.getContactsList();
	
  }

  printData() {
	console.log("TEST func");
	var testVar = "some text";
  }
}
