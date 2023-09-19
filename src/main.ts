import {HttpClientModule} from '@angular/common/http';
import {Component, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {EmployeeComponent} from './employee/employee.component';

export interface Employee {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	age: number;
}

@Component({
	selector: 'app-root',
	standalone: true,
	template: ` <app-employee />`,
	imports: [EmployeeComponent],
})
export class App {}

bootstrapApplication(App, {
	providers: [importProvidersFrom(HttpClientModule)],
});
