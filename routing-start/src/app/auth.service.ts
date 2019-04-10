/*
* This is a fake service, it is just there to simulate a
* fake behavior of authentication service
*/

/*
* However, after the video no 139, it becomes a bit legit
*/

export class AuthService{
  loggedIn  = false;


  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(()=>{
          resolve(this.loggedIn)
        }, 800);
      }
    );
    return promise;
  }
  login() {
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

}
