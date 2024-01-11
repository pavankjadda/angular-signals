import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Employee } from '../../types/employee';

@Component({
	selector: 'app-employee-table',
	standalone: true,
	imports: [ButtonModule, TableModule],
	templateUrl: './employee-table.component.html',
})
export class EmployeeTableComponent {
	employees = input<Employee[]>();
}
