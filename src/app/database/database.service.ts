import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
	getContactsList(): Contact[] {
		console.log("getContactsList has been called...");
		return [
			{id: 1, name: 'Batman'},
			{id: 2, name: 'Superman'},
			{id: 3, name: 'Flash'},
			{id: 4, name: 'Hulk'},
			{id: 5, name: 'Iron man'},
			{id: 5, name: 'Spiderman'}
		];
	}
}

export class Contact {
	id: number;
	name: string;
}