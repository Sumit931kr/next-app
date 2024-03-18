import React from 'react'
import './login.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

    const cancleForm = (e) => {
        let form = document.getElementById('loginForm');
        form.parentElement.parentElement.style.display = 'none'
        // console.log(form.parentElement.parentElement);
    }

    const login = async () => {
        try {
            let username = document.getElementById('lusername');
            let password = document.getElementById('lpassword');

            if(username == "" || password == "") return 

            // Create FormData object and append username and password
            const formData = new FormData();
            formData.append('username', username.value);
            formData.append('password', password.value);

            // Make POST request with FormData
            const response = await axios.post('https://learnkoodsapi.onrender.com/login_api/', formData);

            // Handle response
            console.log('Response:', response.data);
         console.log(response)

         let ac = document.querySelector('.auth_container');
         ac.style.display = 'none'
            // return response.data; 
        } catch (error) {

            let ac = document.querySelector('.auth_container');
            ac.style.display = 'none'
            console.error('Error:', error);
            toast.error(error.message)
            // Throw error for handling elsewhere if needed
        }
    }

    const handlelogin =()=>{
            let signup = document.getElementById('signupForm');
            let login = document.getElementById('loginForm');
    
            signup.style.display = 'flex';
            login.style.display = 'none';
    }

    return (
        <div className="form" id="loginForm">
            <div className='cancleForm' onClick={cancleForm}><i className="fa-solid fa-xmark"></i></div>
            <div className='form_title'>Login to Superio</div>
            <div className="flex-column">
                <label>Username </label></div>
            <div className="inputForm">
                <input type="text" className="input" placeholder="email" id="lusername" />
            </div>
            <div className="flex-column">
                <label>Password </label></div>
            <div className="inputForm">
                <input type="password" className="input" placeholder="Password" id="lpassword" />
            </div>

            <div className="flex-row">
                <div>
                    <input type="checkbox" />
                    <label>Remember me </label>
                </div>
                <span className="span">Forgot password?</span>
            </div>
            <button className="button-submit" onClick={login}>Log In</button>
            <p className="p">Don't have an account? <span className="span" onClick={handlelogin}><b>Sign Up</b></span>

            </p>
            <p className="p line">or</p>

            <div className="flex-row">
                <div className="btn facebook">
                    <i className="fa-brands fa-facebook-f"></i> Log In via Facebook
                </div>
                <div className="btn gmail">
                    <i className="fa-solid fa-g"></i>  Log In via Gmail
                </div></div>
        </div>
    )
}

export default Login