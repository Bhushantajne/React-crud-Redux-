import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Iemployee } from '../model/Iemployee'


import { useDispatch } from 'react-redux'
import * as EmployeeAction from "../Redux/Employee/employee.action"
import * as EmployeeReducer from "../../Module/Redux/Employee/employee.reducer"
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Redux/store'



const Update:React.FC = () => {

  const dispatch:AppDispatch = useDispatch()

  // Data from Redux store

  const employeeReduxState : EmployeeReducer.InitialState= useSelector((state:RootState)=>{
    return state[EmployeeReducer.employeeFeatureKey]
   })

const {employee} = employeeReduxState

    const bhushan = useNavigate()

    const {Id} = useParams()


    const [localemployee,setlocalemployee] = useState<Iemployee>({
      firstName : '',
      lastName : '',
      emailId : '',
      id:''
    
      
     
    })




 useEffect(()=>{

   if(Id){
    datafromServer(Id)
   }

 },[Id])


useEffect(()=>{
  if(employee && Object.keys(employee).length > 0){
    setlocalemployee({
      ...localemployee,
      firstName : employee.firstName,
      lastName : employee.lastName,
      emailId : employee.emailId
      
    })
  }
},[employee])



 const datafromServer=(Id:string)=>{



 dispatch(EmployeeAction.getEmployeAction({Id:Id}))
  
     
 }







 const changeInput=(event:React.ChangeEvent<HTMLInputElement>):void=>{

 

    setlocalemployee({
      ...localemployee,
      [event.target.name] : event.target.value
     })

   

 }


 const submitData=(event:React.FormEvent<HTMLFormElement>):void=>{

    event.preventDefault();
  


  dispatch(EmployeeAction.updateEmployeAction({updateemp:localemployee , Id:Id})).then((res:any)=>{
    if(res && !res.error){
      bhushan('/data')
    }
  })

  
    

 }




  return (
    <div>
        <pre>{JSON.stringify(localemployee)}</pre>

        <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3">Update Employee</p>
            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at alias non praesentium dignissimos iusto quam? Ab nihil ut, temporibus minima odit ex quasi consequatur corporis alias ea deserunt quibusdam? Exercitationem est tempora eius cumque at asperiores nulla saepe perspiciatis cum et molestias corrupti ducimus sed doloremque harum dolores hic, unde ipsam quae, excepturi nihil possimus. Molestias labore, assumenda itaque esse ex aut, laudantium natus corrupti dicta magnam beatae temporibus voluptate repudiandae, minima fuga nesciunt cum incidunt nulla? Repellendus non omnis rerum dolores cupiditate culpa!</p>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-4">
          <div className="card p-3 shadow-lg ">
            <div className="card-header">
              <p className="h3 text-success ">Update Employee</p>
           
            </div>
            <form onSubmit={(e)=>submitData(e)} >
          
                <div className="mb-2 mt-2">
                  <input type="text" name='firstName' value={localemployee.firstName} onChange={(e)=>changeInput(e)} placeholder='FirstName ' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name='lastName' value={localemployee.lastName} onChange={(e)=>changeInput(e)} placeholder='lastName ' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="email" name='emailId' value={localemployee.emailId} onChange={(e)=>changeInput(e)} placeholder='email ' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="submit" value={'Update'} className='btn btn-outline-success' />
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

export default Update