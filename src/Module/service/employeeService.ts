import axios from "axios"
import { Iemployee } from "../model/Iemployee"




export class EmployeeService {



    private static serverUrl: string = "http://3.110.193.86:4444/employee"



    public static getAllemployee(): Promise<{ data: Iemployee[] }> {

        const dataurl = `${this.serverUrl}/employees`

        return axios.get(dataurl)


    }

    
    public static getEmploye(Id:String):Promise<{data:Iemployee}>{

        const dataUrl = `${this.serverUrl}/id/${Id}`

        return axios.get(dataUrl)

    }


    public static createEmploye(employee: Iemployee): Promise<{ data: Iemployee[] }> {
        
        const dataUrl = `${this.serverUrl}/`

        return axios.post(dataUrl, employee)
    }




    public static updateEmploye(updateemp:Iemployee , Id:string):Promise<{data:Iemployee}>{

        const dataUrl = `${this.serverUrl}/id/${Id}`

        return axios.put(dataUrl,updateemp)

    }


    public static getDelete(Id:string):Promise<{data:{}}>{

        const dataUrl = `${this.serverUrl}/id/${Id}`

        return axios.delete(dataUrl)

    }


  

















}