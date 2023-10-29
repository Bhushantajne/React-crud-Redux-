import React, { useEffect } from 'react'


import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../Redux/store'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'



import * as EmployeeAction from "../Redux/Employee/employee.action"
import * as EmployeeReducer from "../Redux/Employee/employee.reducer" 





const Get:React.FC = () => {

  // Data from Redux store

   const employeeReduxState : EmployeeReducer.InitialState= useSelector((state:RootState)=>{
    return state[EmployeeReducer.employeeFeatureKey]
   })

 const dispatch:AppDispatch = useDispatch()

useEffect(() => {
    dataServer()
  }, [])


  const dataServer = () => {
     dispatch(EmployeeAction.getAllemployeeAction())
  }



  const deleteData = (Id: string) => {

    if (Id) {
      dispatch(EmployeeAction.getDeleteAction({Id:Id})).then((res:any)=>{
        if(res && !res.error){
          dataServer()
        }
      })
    }

  }










  return (
    <>


      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="h3 text-success mt-4 ">Employee Data</p>
            <p className="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta pariatur laborum, veritatis corrupti hic quas. Possimus architecto vel facere repellat quas quod totam necessitatibus! Voluptate expedita doloribus nisi illum nemo reiciendis iusto debitis sit hic, quidem ut! Nemo ad quod dolorum vitae aliquam officia cum earum adipisci laudantium sint! Maiores nesciunt ad error neque itaque.</p>
            <hr />
          </div>
        </div>
      </div>

      <div>
        <Link to={'/create'} className='btn btn-outline-info' >+New</Link>

      </div>

      <hr />

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className='table text-center' >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>EmailId</th>
                  <th>ACTION</th>

                </tr>
              </thead>
              <tbody>
                {
                  employeeReduxState.employees.map((lp) => {
                    return (
                      <tr key={lp.id} >
                        <td>{lp.id}</td>
                        <td>{lp.firstName}</td>
                        <td>{lp.lastName}</td>
                        <td>{lp.emailId}</td>
                        <td>
                          <Link to={`/update/${lp.id}`} className='btn btn-outline-success' >Update</Link>
                          <button className='btn btn-outline-danger' onClick={() => deleteData(lp.id)}  >DELETE</button>

                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}

export default Get
