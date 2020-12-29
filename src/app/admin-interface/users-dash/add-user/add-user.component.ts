import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../../admin-interface.module';
import { AdminServiceService } from '../../admin-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user : User ;
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder , private service  : AdminServiceService) { }

  ngOnInit(){
    this.userFormCreation();
  }


 userFormCreation(){
   this.userForm =  this.formBuilder.group({
     id :  ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     fullName : ['', Validators.required],
     nativeLanguage : ['', Validators.required],
     nativeLanguageCode  : ['', Validators.required],
     status : ['', Validators.required],
     profileImageUrl : ['https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg'],
     password: ['', [Validators.required, Validators.minLength(6)]],
     confirmPassword: ['', Validators.required],
     isbanned : ['', Validators.required],
   }, {
    validator: MustMatch('password', 'confirmPassword')
    });
 }

 
  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        console.log('error')
    }
    // console.log('cooool' , this.userForm);
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
    this.service.addUser(this.userForm.value);
}


onReset() {
  this.submitted = false;
  this.userForm.reset();
}
 

}
