import React, { useState } from 'react'
import { Iemployee } from '../model/Iemployee'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as EmployeeAction from "../Redux/Employee/employee.action"
import * as EmployeeReducer from "../../Module/Redux/Employee/employee.reducer"
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Redux/store'


const Create = () => {

  const navigate  = useNavigate()

 const dispatch:AppDispatch = useDispatch()

  // Data from Redux store

  const employeeReduxState : EmployeeReducer.InitialState= useSelector((state:RootState)=>{
    return state[EmployeeReducer.employeeFeatureKey]
   })



const [emp,setemp] = useState<Iemployee>({
  firstName : '',
  lastName : '',
  emailId : '',
  id:''
  
 
})



const changeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{


setemp({
  ...emp,
  [event.target.name] : event.target.value
})

}

const onSubmitdata=(event:React.FormEvent<HTMLFormElement>)=>{
   event.preventDefault();


  dispatch(EmployeeAction.createEmployeAction({employee: emp})).then((res:any)=>{
    if(res && !res.error){
      navigate('/data')
    }
  })


}



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3">Create Employee</p>
            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at alias non praesentium dignissimos iusto quam? Ab nihil ut, temporibus minima odit ex quasi consequatur corporis alias ea deserunt quibusdam? Exercitationem est tempora eius cumque at asperiores nulla saepe perspiciatis cum et molestias corrupti ducimus sed doloremque harum dolores hic, unde ipsam quae, excepturi nihil possimus. Molestias labore, assumenda itaque esse ex aut, laudantium natus corrupti dicta magnam beatae temporibus voluptate repudiandae, minima fuga nesciunt cum incidunt nulla? Repellendus non omnis rerum dolores cupiditate culpa!</p>
          </div>
        </div>
      </div>


    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-4">
          <div className="card p-3 shadow-lg ">
            <div className="card-header">
              <p className="h3 text-success ">Create Employee</p>
           
            </div>
            <form onSubmit={(e)=>onSubmitdata(e)}>
          
                <div className="mb-2 mt-2">
                  <input type="text" value={emp.firstName} name='firstName' onChange={(e)=>changeInput(e)} placeholder='FirstName ' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" value={emp.lastName} name='lastName' onChange={(e)=>changeInput(e)} placeholder='lastName ' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="email" value={emp.emailId} name='emailId' onChange={(e)=>changeInput(e)} placeholder='email ' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="submit" value={'create'} className='btn btn-outline-success' />
                  <button className='btn btn-outline-danger' >Close</button>
                </div>
              </form>
           
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Create