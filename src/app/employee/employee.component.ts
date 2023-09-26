import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div style="margin:20px">
			<h1>Signals Demo</h1>
			<hr />
			<div>
				<h2>All Employees NgNeat Query</h2>
				<div *ngFor="let employee of result()?.data">
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
	employeeService = inject(EmployeeService);
	result = toSignal(this.employeeService.getEmployees().result$);

	ngOnInit(): void {}
}
