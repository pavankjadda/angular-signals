import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, importProvidersFrom, inject, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js/dist/zone';
import { EmployeeService } from './employee.service';
import { computed, signal } from './signals';
import { effect } from './signals/effect';

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
	imports: [CommonModule],
	template: `
		<div style="margin:20px">
			<h1>Signals Demo</h1>
			<hr />
			<h2>Employees</h2>
			<div *ngFor="let employee of employees()">
				<p>First Name: {{ employee.firstName }}</p>
				<p>Last Name: {{ employee.lastName }}</p>
				<p>Email: {{ employee.email }}</p>
				<p>Phone: {{ employee.phone }}</p>
				<p>Age: {{ employee.age }}</p>
				<hr />
			</div>

			<br />
		</div>
	`,
})
export class App implements OnInit {
	employeeService = inject(EmployeeService);
	employees = signal<Employee[]>([]);

	constructor() {
		effect(() => {
			console.log('Inside effect(). Employee changed', this.employees());
		});
	}

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((data) => {
			this.employees.set(data);
		});
	}
}

bootstrapApplication(App, {
	providers: [importProvidersFrom(CommonModule, HttpClientModule)],
});
