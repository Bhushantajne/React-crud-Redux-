import { createSlice } from "@reduxjs/toolkit"
import { Iemployee } from "../../model/Iemployee"
import * as EmployeeAction from "../Employee/employee.action"

export const employeeFeatureKey = "employeeFeature"

export interface InitialState{
    employees : Iemployee[],
    employee : Iemployee 
}

const initalState:InitialState={
    employees : [] as Iemployee[],
    employee : {} as Iemployee
}


export const employeeSlice = createSlice({
    name:"employeeSlice",
    initialState : initalState,
    reducers:{},
    extraReducers:(builder)=>{

        // GetAllemployee

     builder.addCase(EmployeeAction.getAllemployeeAction.fulfilled,(state,action)=>{
        state.employees = action.payload
    })

    // GetEmployee

    builder.addCase(EmployeeAction.getEmployeAction.fulfilled,(state,action)=>{
        state.employee = action.payload
    })


    // Create Employee

    builder.addCase(EmployeeAction.createEmployeAction.fulfilled,(state,action)=>{
        state.employee = action.payload
    })

    // Update Employee

    builder.addCase(EmployeeAction.updateEmployeAction.fulfilled,(state,action)=>{
        state.employee = action.payload
    })

    // Delete Employee

    builder.addCase(EmployeeAction.getDeleteAction.fulfilled,(state,action)=>{
        state.employee = {} as Iemployee 
    })

    }
})