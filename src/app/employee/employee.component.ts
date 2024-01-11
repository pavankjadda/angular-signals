import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../types/employee';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [CommonModule, TableModule, ButtonModule],
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
