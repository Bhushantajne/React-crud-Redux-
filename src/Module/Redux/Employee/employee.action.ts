import { createAsyncThunk } from "@reduxjs/toolkit";
import { Iemployee } from "../../model/Iemployee";
import { EmployeeService } from "../../service/employeeService";

// GetAllemployee
export const getAllemployeeAction:any = createAsyncThunk('Employee/getAllemployeeAction',
async(payload:{},{rejectWithValue}):Promise<Iemployee[] | any > =>{
    try{
      let res  = await EmployeeService.getAllemployee()
      return res.data
    }catch(error:any){ 

        if(!error.res){ 

            throw error
        }

        return rejectWithValue(error.res.data)

    }
}
)

// GetEmployee

export const getEmployeAction:any = createAsyncThunk('Employee/getEmployeAction',
async(payload:{Id:String},{rejectWithValue}):Promise<Iemployee | any > =>{
    try{
 
        const {Id} = payload

      let res  = await EmployeeService.getEmploye(Id)
      return res.data
    }catch(error:any){ 

        if(!error.res){ 

            throw error
        }

        return rejectWithValue(error.res.data)

    }
}
)

// Create Employee
export const createEmployeAction:any = createAsyncThunk('Employee/createEmployeAction',
async(payload:{employee: Iemployee},{rejectWithValue}):Promise< Iemployee[] | any > =>{
    try{
 
        const {employee} = payload

      let res  = await EmployeeService.createEmploye(employee)
      return res.data
    }catch(error:any){ 

        if(!error.res){ 

            throw error
        }

        return rejectWithValue(error.res.data)

    }
}
)

// update Employee

export const updateEmployeAction:any = createAsyncThunk('Employee/updateEmployeAction',
async(payload:{updateemp:Iemployee , Id:string},{rejectWithValue}):Promise< Iemployee | any > =>{
    try{
 
        const {updateemp,Id} = payload

      let res  = await EmployeeService.updateEmploye(updateemp,Id)
      return res.data
    }catch(error:any){ 

        if(!error.res){ 

            throw error
        }

        return rejectWithValue(error.res.data)

    }
}
)

// Delete Employee

export const getDeleteAction:any = createAsyncThunk('Employee/getDeleteAction',
async(payload:{ Id:string},{rejectWithValue}):Promise< Iemployee | any > =>{
    try{
 
        const {Id} = payload

      let res  = await EmployeeService.getDelete(Id)
      return res.data
    }catch(error:any){ 

        if(!error.res){ 

            throw error
        }

        return rejectWithValue(error.res.data)

    }
}
)
