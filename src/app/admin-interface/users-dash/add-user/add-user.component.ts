import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MustMatch } from '../../admin-interface.module';
import { AdminServiceService } from '../../admin-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  selected : String ;
  user : User ;
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder , private service  : AdminServiceService) { }

  ngOnInit(){
    this.userFormCreation();
  }

  languageCode(val : string){
    switch (val) {
      case "english":
        this.selected = "en";
          break;
      case "japanese":
        this.selected = "ja";
          break;
      case "french":
        this.selected = "fr";
          break;
      case "arabic":
        this.selected = "ar";
          break;   
        }
        
  }
 userFormCreation(){
   this.userForm =  this.formBuilder.group({
     userId :  ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     fullName : ['', Validators.required],
     nativeLanguage : ['', Validators.required],
     nativeLanguageCode :  [''],
     status : ['', Validators.required],
     imageUrl : ['https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg'],
     password: ['', [Validators.required, Validators.minLength(6)]],
     confirmPassword: ['', Validators.required],
     bannedOrNot : ['', Validators.required],
   }, {
    validator: MustMatch('password', 'confirmPassword')
    });
       
 }

 
  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
        console.log('error')
    }
    this.userForm.get('nativeLanguageCode').patchValue(this.selected);
    this.service.addUser(this.userForm.value);
    console.log(this.userForm.value);
}


onReset() {
  this.submitted = false;
  this.userForm.reset();
}
 

}
