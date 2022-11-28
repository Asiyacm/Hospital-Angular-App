import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  name=""
  id=""
  adress=""
  mobileno=""
  appoinment=""
  image=""
  doctor=""



  patientEntry=()=>
  {
    let entry:any=
    {"name":this.name,"id":this.id,"adress":this.adress,"mobileno":this.mobileno,"appoinment":this.appoinment,
    "image":this.image,"doctor":this.doctor}
    console.log(entry)
  }

}
