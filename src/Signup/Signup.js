import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Signup(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email:'',
        password:''
    });

    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);


    const handleChange = (event)=>{
        const {name, value} = event.target;
        setUser((prevState)=> ({...prevState, [name]: value}));
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        const errors = {};
        const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!user.name){
            errors.name = "Name is required!"
        } 
        if(!user.email){
            errors.email = "Email is required!"
        } else if(!regex.test(user.email)){
            errors.email = "This is not a valid email!"
        }

        if(!user.password){
            errors.password = "Password is required!"
        }else if(user.password.length < 5){
            errors.password = "Password must be at least 5 characters."
        }

        setErrors(errors);
      
     
        if(Object.keys(errors).length === 0){
            console.log(JSON.stringify(user, undefined, 2));
            setUser({name:'', email:'', password:''});
            setSubmit(true);
            navigate('/');

        }else{
            setSubmit(false);
        }
       


    }



    return(
        <div>
            {submit && <div>Signed up successfully!</div>}

            <form onSubmit={handleSubmit}>
                <input type='text' 
                       placeholder='Name' 
                       name='name'
                       value={user.name}
                       onChange={handleChange}
                       aria-label='Name'
                      
                       />
                    {errors.name && <div>{errors.name}</div>}
                       
                <input type='email' 
                       placeholder='Email'
                       name='email'
                       value={user.email} 
                       onChange={handleChange}
                       aria-label='Email'
                       />
                       {errors.email && <div>{errors.email}</div>}

                <input type='password' 
                       placeholder='Password' 
                       name='password'
                       value={user.password}
                       onChange={handleChange}
                       aria-label='Password'
                       />
                       {errors.password && <div>{errors.password}</div>}
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;