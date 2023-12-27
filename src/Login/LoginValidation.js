/*const  Loginvalidation=(props)=>{
    console.log(email)
    const {email,password}=props
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[s@]+$/
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(email===''){
        error.email=" email should not be empty"
    }
    else if(!email_pattern.test(email)){
        error.email="email didn't match"
    }
    else{
        error.email=''
    }
    if(password===''){
        error.password="password should not be empty"

    }
    else if(!password_pattern.test(password)){
        error.password='password did not match'
    }
    else{
        error.password=""
    }
    return error
}
export default Loginvalidation*/