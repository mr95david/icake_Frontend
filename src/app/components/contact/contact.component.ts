import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    
  ) { }

  

  public name: string
    public email: string
    public cellphone: string
    public issue: string 
    public isAlert: Boolean 

  getName(val){
    this.name = val
  }

  getEmail(val){
    this.email = val
  }

  getCellphone(val){
    this.cellphone = val
  }

  getIssue(val){
    this.issue = val
  }

  enviarEmail(){
    const body = {
      email: this.email,
      nombre: this.name,
      celular: this.cellphone,
      mensaje: this.issue,

    }
    this.contactService.sendMail(body).subscribe((response)=>{
      console.log('response del email',response)
      this.isAlert = true;
    })
  }

  ngOnInit(): void {
  }

  

}
