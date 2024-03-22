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
            let firstname = document.getElementById('fname');
            let lastname = document.getElementById('lname');
            let email = document.getElementById('semailname');
            let password = document.getElementById('spassword');

            if (username == "" || password == "" || firstname == "" || lastname == "" || email == "") return

            // Create FormData object and append username and password
            const formData = new FormData();
            formData.append('username', username.value);
            formData.append('first_name', firstname.value);
            formData.append('last_name', lastname.value);
            formData.append('email', email.value);
            formData.append('password', password.value);

            // Make POST request with FormData
            // const response = await axios.post('https://learnkoodsapi.onrender.com/user_api/', formData);
            const response = await axios.post('https://learnkoods-task.onrender.com/user_api/', formData);

            // Handle response
            console.log('Response:', response.data);
            console.log(response)

            let ac = document.querySelector('.auth_container');
            ac.style.display = 'none'
            // return response.data; 
        } catch (error) {
            console.log(error)
            let ac = document.querySelector('.auth_container');
            ac.style.display = 'none'
            console.error('Error:', error);
            toast.error(error.message)
            // Throw error for handling elsewhere if needed
        }
    }

    const handlesignup = () => {
        let signup = document.getElementById('signupForm');
        let login = document.getElementById('loginForm');

        signup.style.display = 'none'
        login.style.display = 'flex'
    }

    const handleSignupType1 = () => {
        let candidate = document.querySelector('.scandidate');
        let employer = document.querySelector('.semployer');
        candidate.style.backgroundColor = "#34a853";
        candidate.style.color = 'white';

        employer.style.backgroundColor = 'aliceblue'
        employer.style.color = "#1967d2"
    }
    const handleSignupType2 = () => {
        let candidate = document.querySelector('.scandidate');
        let employer = document.querySelector('.semployer');
        candidate.style.backgroundColor = 'aliceblue'
        candidate.style.color = '#1967d2';

        employer.style.backgroundColor = "#34a853";
        employer.style.color = "white"
    }


    return (
        <div className="form" id="signupForm" style={{ gap: "6px", padding: '15px 30px' }}>
            <div className='cancleForm' onClick={cancleForm} ><i className="fa-solid fa-xmark"></i></div>
            <div className='form_title' style={{ marginBottom: '5px' }}>Create a Free Superio Account </div>
            <div className='signup_type'>
                <div className='scandidate' onClick={handleSignupType1}><i className="fa-regular fa-user"></i>Candidate</div>
                <div className="semployer" onClick={handleSignupType2}><i className="fa-solid fa-briefcase"></i>Employer</div>
            </div>
            <div className='fname_lname'>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <div className='inputForm'>
                        <input className='input' type="text" placeholder='First name' id='fname' />
                    </div>
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <div className='inputForm'>
                        <input className='input' type="text" placeholder='Last name' id='lname' />
                    </div>
                </div>
            </div>
            <div className="flex-column">
                <label htmlFor='susername'>Username </label></div>
            <div className="inputForm">
                <input type="text" className="input" placeholder="Username" id="susername" />
            </div>
            <div className="flex-column">
                <label htmlFor='semailname'>Email </label></div>
            <div className="inputForm">
                <input type="text" className="input" placeholder="Email" id="semailname" />
            </div>
            <div className="flex-column">
                <label htmlFor='spassword'>Password </label></div>
            <div className="inputForm">
                <input type="password" className="input" placeholder="Password" id="spassword" />
            </div>

            {/* <div className="flex-row">
                <div>
                    <input type="checkbox" />
                    <label>Remember me </label>
                </div>
                <span className="span">Forgot password?</span>
            </div> */}
            <button className="button-submit" onClick={Signup}>Register</button>
            <p className="p">Don't have an account? <span className="span" onClick={handlesignup} ><b>Login</b></span>

            </p>
            <p className="p line">or</p>

            <div className="flex-row">
                <div className="btn facebook">
                    <i className="fa-brands fa-facebook-f"></i> Sign In via Facebook
                </div>
                <div className="btn gmail">
                    <i className="fa-solid fa-g"></i>  Sign In via Gmail
                </div></div>
        </div>
    )
}


export default Signup