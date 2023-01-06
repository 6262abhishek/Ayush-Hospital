import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, push, child, update } from "firebase/database";
import './style.css'
//here we will create a new function for registrationform
function Registrationform(){
//hook create
    const[firstName, setFirstName]=useState(null);
    const[lastName, setLastName]=useState(null);
    const[email, setEmail]=useState(null);
    const[password, setPassword]=useState(null);
    const[confirmPassword, setConfirmPassword]=useState(null);

    const handleInputChange = (e)=>{
        const{id, value} = e.target;
        if(id==="firstName"){
            setFirstName(value);
        }
        if(id==="lastName"){
            setLastName(value);
        }
        if(id==="email"){
            setEmail(value);
        }
        if(id==="password"){
            setPassword(value);
        }
        if(id==="confirmPassword"){
            setConfirmPassword(value);
        }

    }
    const handleSubmit =()=>{
        if(password === confirmPassword){
            window.alert("You have been successfully registered in AYUSH V1.0");
            let obj ={
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
            } 
            const newPostKey = push(child(ref(database),'posts')).key;
            const updates = {};
            updates['/' + newPostKey] = obj;
            return update(ref(database), updates);
            
           
        } else{
            window.alert("Password and Confirm Password is not same"); 
            setPassword("");
            setConfirmPassword(""); 
        }  
    }
    return(
        <div className="form">
            <div className="form-body">
            
                <div className='username'>
                    <label className = "form__label" for="firstName">Enter First Name</label>
                    <input className="form__input" type="text" id="firstName" value={firstName} onChange = {(e)=> handleInputChange(e)} placeholder="First Name" required/>
                </div>


                <div className='lastname'>
                    <label className = "form__label" for="lastName">Enter Last Name</label>
                    <input className="form__input" type="text" id="lastName" value={lastName} onChange = {(e)=> handleInputChange(e)} placeholder="Last Name" required/>
                </div>


                <div className='email'>
                    <label className = "form__label" for="email">Enter Email Adress</label>
                    <input className="form__input" type="email" id="email" value={email} onChange = {(e)=> handleInputChange(e)} placeholder="abc@email.com" required/>
                </div>


                <div className='password'>
                    <label className = "form__label" for="password">Create A Password</label>
                    <input className="form__input" type="password" id="password" value={password} onChange = {(e)=> handleInputChange(e)} placeholder="****" required/>
                </div>


                <div className='confirm-password'>
                    <label className = "form__label" for="confirmPassword">Re-enter Your Password</label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e)=> handleInputChange(e)} placeholder="****" required/>
                </div>


            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Click Here For Ayush Registration</button>
            </div>
        </div>
    )
}
export default Registrationform;