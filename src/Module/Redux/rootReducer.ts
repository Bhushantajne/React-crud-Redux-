import {combineReducers} from "@reduxjs/toolkit";
import * as EmployeeReducer from "../Redux/Employee/employee.reducer"


const rootReducer: any = combineReducers({
  [EmployeeReducer.employeeFeatureKey] : EmployeeReducer.employeeSlice.reducer
});
export default rootReducer;

