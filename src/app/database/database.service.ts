import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
	getContactsList(): Contact[] {
		console.log("getContactsList has been called...");
		return [
			{id: 1, name: 'Batman'},
			{id: 2, name: 'Superman'}
		];
	}
}

export class Contact {
	id: number;
	name: string;
}