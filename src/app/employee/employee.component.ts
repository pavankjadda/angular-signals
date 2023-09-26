import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectAllEmployees, setEmployees } from '../state/enrollment.reducer';
import { Employee } from '../app.component';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div style="margin:20px">
			<h1>Signals Demo</h1>
			<hr />

			<!--<div>
				<h2>Employee-1001</h2>
				<div>
					<p>First Name: {{ employee().firstName }}</p>
					<p>Last Name: {{ employee().lastName }}</p>
					<p>Email: {{ employee().email }}</p>
					<p>Phone: {{ employee().phone }}</p>
					<p>Age: {{ employee().age }}</p>
					<hr />
				</div>
			</div>-->
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

			<div>
				<h2>All Employees Observable</h2>
				<div *ngFor="let employee of employees2">
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
	store = inject(Store);
	employeeService = inject(EmployeeService);
	employees = toSignal(selectAllEmployees(this.store));
	employees2: Employee[] = [];

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((employees) => {
			this.employees2 = employees;
			this.store.dispatch(setEmployees({ employees: employees }));
		});
	}
}
