import { useState } from "react";


const FormValidation = ()=>{
    const [formData  , setFormData] = useState({email : "" , password : ""});
    const validate = ()=>{
        let err = {};
        const {email , password} = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            err.email = "Invalid Email format";
        }

        if(password.length < 6){
            err.password = "passsword is not secured"
        }

        return err;

    }
    const handleSubmit = ()=>{
        // e.preventDefault();

        const data = validate();
       if(Object.keys(data).length ===0){
        console.log("form is succesfully submiited ")
       }
        else{
            console.log(data);
        }
       
    }
    return(
        <div>
            <h1>Form</h1>
            <input 
             type="email"
             placeholder="Enter your email"
             required
             value={formData.email}
             onChange={(e)=>setFormData({...formData , email : e.target.value})}
             />
            <input
             type="password"
             placeholder="Enter the password"
             required
             minLength={6}
             value={formData.password}
             onChange={(e)=>setFormData({...formData , password : e.target.value})}
            />
            <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
    )
}

export default FormValidation;