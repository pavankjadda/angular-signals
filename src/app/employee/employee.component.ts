import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../types/employee';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [EmployeeTableComponent],
	templateUrl: './employee.component.html',
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
