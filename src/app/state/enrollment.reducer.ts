import { createAction, createFeatureSelector, createReducer, createSelector, on, props, Store } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Employee } from '../app.component';

export type EmployeeState = EntityState<Employee>;

// Employee Adapter and Actions
export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>({});
export const initialState: EmployeeState = createEntityAdapter<Employee>().getInitialState([]);

// Employee Actions
export const setEmployees = createAction('[Employee/API] Set Employees', props<{ employees: Employee[] }>());

// Employee Reducer
export const employeeReducer = createReducer(
	initialState,
	on(setEmployees, (state, { employees }) => adapter.upsertMany(employees, state))
);

// Get all Employees
export const { selectAll } = adapter.getSelectors(createFeatureSelector<EmployeeState>('employees'));
export const selectAllEmployees = (store: Store) => store.select((state) => selectAll(state));
export const selectEmployeeById = (id: number) => createSelector(selectAll, (data) => data.find((s) => s.id === id));
