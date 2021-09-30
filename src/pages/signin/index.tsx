import React from 'react';

// signin page 
// main div include sign in and have an account Sign up 
// second div include insta logo and bottom forget password
// third include mail, username, button 

function SignIn() {
    return (
      <div>
       <div>
            <img alt='logo' src='https://logowiki.net/uploads/logo/i/instagram-1.svg'></img>
       </div>
       <div>
           <input name='email'></input>
           <input name='password'></input>
           <button>Log in</button>
       </div>
       <div>
        <p> Dob't have an account?</p>
        <button>Sign Up</button>
       </div>
      </div>
    );
  }
  
  export default SignIn;