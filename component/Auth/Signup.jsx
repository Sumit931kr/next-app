import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';

const Signup = () => {

    const cancleForm = (e) => {
        let form = document.getElementById('signupForm');
        form.parentElement.parentElement.style.display = 'none'
        // console.log(form.parentElement.parentElement);
    }

    const Signup = async () => {
        try {
            let username = document.getElementById('susername');
            let password = document.getElementById('spassword');

            if (username == "" || password == "") return

            // Create FormData object and append username and password
            const formData = new FormData();
            formData.append('username', username.value);
            formData.append('password', password.value);

            // Make POST request with FormData
            const response = await axios.post('https://learnkoodsapi.onrender.com/user_api/', formData);

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

    const handlesignup = () =>{
        let signup = document.getElementById('signupForm');
        let login = document.getElementById('loginForm');

        signup.style.display = 'none'
        login.style.display = 'flex'
    }


    return (
        <div className="form" id="signupForm">
            <div className='cancleForm' onClick={cancleForm}><i className="fa-solid fa-xmark"></i></div>
            <div className='form_title'>Create a Free Superio Account </div>
            <div className='signup_type'>
                <div><i className="fa-regular fa-user"></i>Candidate</div>
                <div><i className="fa-solid fa-briefcase"></i>Employer</div>
            </div>
            <div className="flex-column">
                <label>Username </label></div>
            <div className="inputForm">
                <input type="text" className="input" placeholder="email" id="susername" />
            </div>
            <div className="flex-column">
                <label>Password </label></div>
            <div className="inputForm">
                <input type="password" className="input" placeholder="Password" id="spassword" />
            </div>

            <div className="flex-row">
                <div>
                    <input type="checkbox" />
                    <label>Remember me </label>
                </div>
                <span className="span">Forgot password?</span>
            </div>
            <button className="button-submit" onClick={Signup}>Register</button>
            <p className="p">Don't have an account? <span className="span" onClick={handlesignup} ><b>Login</b></span>

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


export default Signup