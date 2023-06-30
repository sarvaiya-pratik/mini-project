const Validate=(val)=>{
    let err ={}
    const email_patten = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // const password_patten = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z][a-zA-Z0-9]{8,})$/
    
    if(val.email === ""){
        err.email = "Email should not be empty"
    }
    if(!email_patten.test(val.email)){
        err.email = "Enter valid Email"
    }
    if(val.password === ""){
        err.password = "password  should not be empty"
    }
    // if(!password_patten.test(val.password)){
    //     err.password = "password must me 8 char"
    // }
    if(String(val.cpassword) === "" || String(val.password) !== String(val.cpassword)){
        err.cpassword = "Password did't matched"
    }

    return err;
}

export default Validate
