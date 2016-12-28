import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { FaEventBindingComponent } from './fa-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    ContactsListComponent,
    ContactItemComponent,
    FaEventBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot([
		{path: 'contacts-list', component: ContactsListComponent}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
