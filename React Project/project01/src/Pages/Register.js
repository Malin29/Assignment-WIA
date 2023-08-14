import React, {useState} from 'react';
import { FaUser, FaEnvelope, FaLock,} from 'react-icons/fa';
import MarketingIcon from '../icons/graph.svg';
import CodeIcon from '../icons/code.svg';
import AudienceIcon from '../icons/people.svg';
import TwitterIcon from '../icons/twitter.svg';
import DribbbleIcon from '../icons/dribbble.svg';
import FacebookIcon from '../icons/facebook.svg';
import "./RegisterStyles.css";


export const Register=()=>{
  const [email, setEmail] = useState('');
  const [pass,setPass] = useState(''); 
  const [name,setName] = useState('');
  const [agree, setAgree] = useState(false); 
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!validatePassword(pass)) {
      newErrors.pass = 'Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, a number, and a special character';
    }

    if (!agree) {
      newErrors.agree = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
    }
  };


  return (
  
    <div className="Register">
      <h1>Register</h1>
      <div className="cmp">
      <div className="frm">
        <div className="icon-and-content">

        <div className="icn">
        <img src={MarketingIcon} alt="Marketing" />
        <div>
          <h5>Marketing</h5>
          <p>We've created the marketing campaign of the website. It was an interesting collaboration.</p>
        </div>
        </div>

        <div className="icn">
        <img src={CodeIcon} alt="Code" />
        <div>
          <h5>Fully Coded in HTML5</h5>
          <p>We've developed the website with HTML5 and CSS3. The client has access to the code using Github</p>
        </div>
        </div>

        <div className="icn">
        <img src={AudienceIcon} alt="Audience" />
        <div>
          <h5>Built Audience</h5>
          <p>There is also a Fully Customizable CMS Admin Dashboard for this product</p>
        </div>
        </div>
        </div>
      </div>

      <form className="frm" onSubmit={handleSubmit}>
        <div className="social-icons">
            <a href="https://twitter.com">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="https://Dribbble.com">
              <img src={DribbbleIcon} alt="Dribbble" />
            </a>
            <a href="https://facebook.com">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
        </div>

        <h5>or be classical</h5>

        <div className="input-icon">
          <FaUser className="icon" />
          <input value={name} type="text" placeholder="First Name..." id="fname" name="fname" className="input-field"
          onChange={(e) => setName(e.target.value)}/>
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="input-icon">
          <FaEnvelope className="icon" />
          <input value={email} type="email" placeholder="Email..." id="email" name="email" className="input-field"
          onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="input-icon">
          <FaLock className="icon" />
          <input value={pass} type='password'
           placeholder="Password..." id="pword" name="pword" className="input-field"
          onChange={(e) => setPass(e.target.value)}/>

          {errors.pass && <div className="error">{errors.pass}</div>}
        </div>

        <label>
          <div>
              <input type="checkbox" checked={agree} 
              onChange={(e) => setAgree(e.target.checked)}/>
          </div>
          <div>
              I agree to the .<a href="#"> terms and conditions</a>
          </div>
        </label>
        {errors.agree && <div className="error">{errors.agree}</div>}

        <button type="submit" id='Sbutton' onClick={handleSubmit}>GET STARTED</button>
      </form>
      </div>
    </div>
  )
}


