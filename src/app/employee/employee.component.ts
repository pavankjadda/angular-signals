import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../types/employee';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div style="margin:20px">
			<h1>Signals Demo</h1>
			<hr />
			<div>
				<h2>All Employees Signal</h2>
				<div *ngFor="let employee of employees()">
					<p>First Name: {{ employee.firstName }}</p>
					<p>Last Name: {{ employee.lastName }}</p>
					<p>Email: {{ employee.email }}</p>
					<p>Phone: {{ employee.phone }}</p>
					<p>Age: {{ employee.age }}</p>
					<hr />
				</div>
			</div>
		</div>
	`,
})
export class EmployeeComponent implements OnInit {
	employees = signal<Employee[]>([]);
	employeeService = inject(EmployeeService);

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((employees) => {
			this.employees.set(employees);
		});
	}
}
