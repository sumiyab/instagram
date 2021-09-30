import React from 'react';

// signup page 
// main div include sign up and have an account log in 
// second div include insta logo and description, bottom description
// third include mail, username, button 

function SignUp() {
    return (
      <div>
       <div>
            <img alt='logo' src='https://logowiki.net/uploads/logo/i/instagram-1.svg'></img>
            <p>Sign up to see photos and videos from your friends</p>
       </div>
       <div>
           <input name='email'></input>
           <input name='fullname'></input>
           <input name='password'></input>
           <button>SignUp</button>
       </div>
       <div>
        <p>Have an account?</p>
        <button>Log in </button>
       </div>
      </div>
    );
  }
  
  export default SignUp;
  