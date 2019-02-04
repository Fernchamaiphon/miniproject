import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as enums from '../../enums/enums';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  //property
  loginResult;

  Username;
  Password;

  LoginArray=[];

  myIP = enums.APIURL.URL;

  constructor(public navCtrl: NavController,  public navParams: NavParams, public http: HttpClient) {

  }
/*
  signIn(_username,_password){
    if (_password == '1234') {
      this.loginResult = 'ยินดีต้อนรับเข้าสู่ระบบ ' + _username;
      alert('ยินดีต้อนรับเข้าสู่ระบบ ');
      this.navCtrl.push("AccountPage");
    } else {
      this.loginResult = "Login failed";
    }
  }
*/

signIn(_username,_password){
  let url = this.myIP + '/Login/getLogin.php';
  this.http.get(url).subscribe(
    (data: any) => {
      console.log(data);
      this.LoginArray = data.Login;
      console.log(this.LoginArray);
      for (let i = 0; i < this.LoginArray.length; i++) {
        this.Username = data.Login[i].Login_Username;
        this.Password = data.Login[i].Login_Password;
        let id = data.Login[i].Login_Id;
        console.log(_username);
        console.log(_password);
        console.log(this.Username);
        console.log(this.Password);
        console.log(id);
        
        if(_username == this.Username && _password == this.Password){
          break;
        }
    
      }

      if(_username == this.Username && _password == this.Password){
        this.loginResult='pass'
        this.navCtrl.push("AccountPage");
        alert('ยินดีต้อนรับ ' + _username);
        
        
      }else{
        alert('Username or Password ผิด ');
       
      } 
      
    }
    );  
}



}//end class