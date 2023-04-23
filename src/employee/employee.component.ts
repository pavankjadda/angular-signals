import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { Employee } from '../main';
import { EmployeeService } from './employee.service';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div style="margin:20px">
			<h1>Signals Demo</h1>
			<hr />
			<h2>Employees</h2>
			<div *ngFor="let employee of employees().data">
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
export class EmployeeComponent {
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
