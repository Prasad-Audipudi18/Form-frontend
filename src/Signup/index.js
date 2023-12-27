import {Component} from 'react'
import './index.css'
import axios from 'axios'
class Signup extends  Component {
    state={fname:'',lname:'',number:'',email:'', password:'',firstnamePara:'',lasttnamePara:'',mobilepara:'',emailpara:'',passwordpara:''}
    
onsubmitFunction=(event)=>{
        event.preventDefault()
        const {fname,lname,number,email,password}=this.state
        const values={
            fname,
            lname,
            number,
            email,
            password

        }
        const CheckAllinputvalues=(number)=>{
            if(number[0]!=='9' && number[0]!=='8' && number[0]!=='7' && number[0]!=='6'){
                console.log('hello')
                alert('mobile Number should start with 6 or 7 or 8 or 9')
                return true
               }
               else if(number.length!==10){
                alert('number length should be 10')
                return true
               }
        
            else if(isNaN(number)){
                
              alert('mobile number should be contains only digits')
              return true
            }
            
            
             else{
                return false
             }
        }
       
        
        
       const emailregex= /^[a-z]+@gmail.com/
       const regexPattern= /^([a-zA-Z]){3,25}$/;
     
        if(!regexPattern.test(fname)){
            //this.setState({firstnamePara:'Enter valid firstname'})
            alert('Enter valid firstname');
           
        }
      
         else if(!regexPattern.test(lname)){
            alert('Enter valid lastname');
        }
         else if(CheckAllinputvalues(number)){
          alert('check mobile number')
            
        }
        else if(!emailregex.test(email)){
            alert('give proper email')
         }
         else if(password.length<8){
            alert('password length should be atleast 8')

         }
     
        else{
            console.log('hello server')
            axios.post('http://localhost:8081/register',values)
            //const {history}=this.props;
            //history.push('/')
        }
           
        
        
      }
     
    

    handleInputFirstname=(event)=>{
     
        this.setState({fname:event.target.value})
    }

    handleInputLastname=(event)=>{
         this.setState({lname:event.target.value})
    }

    handleInputNumber=(event)=>{
      this.setState({number:event.target.value})
    }

    handleInputEmail=(event)=>{

        this.setState({email:event.target.value})
    }

    handleInputPassword=(event)=>{

        this.setState({password:event.target.value})
    }

    handleBlurfunctionOnFirstname=(event)=>{
        if(event.target.value===""){
            this.setState({firstnamePara:"Enter Firstname"})
        }
      
         
    }

    handleBlurfunctionOnLastname=(event)=>{
        if(event.target.value===""){
            this.setState({lasttnamePara:"Enter lastname"})
        }
   }

   handleBlurfunctionOnMobilenumber=(event)=>{
    if(event.target.value===""){
        this.setState({mobilepara:"Enter mobileNumber"})
    }
   }

   handleBlurfunctionOnEmail=(event)=>{
    if(event.target.value==="" ){
        this.setState({emailpara:"Enter email"})
    }
   }

   handleBlurfunctionOnPassword=(event)=>{
    if(event.target.value==="" ){
        this.setState({passwordpara:"Enter password"})
    }
   }
    render(){
        const {firstnamePara,lasttnamePara,mobilepara,emailpara,passwordpara,fname,lname,number,email,password}=this.state
        return(
            <div className='root-container d-flex justify-content-center align-items-center bg-primary vh-100'>
                  
            <div className='main-container bg-white p-3 rounded w-25'>
                <h1>Signup Page</h1>
                <form>
                    <div  className="mb-3">
                        <label><strong> FirstName</strong></label>
                        <br/>
                        <input type='text' placeholder=" Enter FirstName" className="form-control rounded-0" onChange={this.handleInputFirstname} onBlur={this.handleBlurfunctionOnFirstname} value={fname}/>
                        <p className='namepara'>{firstnamePara}</p>
                    </div>
                    <div className="mb-3">
                        <label><strong> LastName</strong></label>
                        <br/>
                        <input type='text' placeholder=" Enter LastName" className="form-control rounded-0" onChange={this.handleInputLastname} onBlur={this.handleBlurfunctionOnLastname} value={lname}/>
                         <p className='namepara'>{lasttnamePara}</p>
                    </div>
                    <div className="mb-3">
                        <label><strong>Mobile Number</strong></label>
                        <br/>
                        <input type='text'  placeholder=" Enter Number" className="form-control rounded-0" onChange={this.handleInputNumber} onBlur={this.handleBlurfunctionOnMobilenumber} value={number}/>
                        <p className='namepara'>{mobilepara}</p>
                    </div>
                    <div className="mb-3">
                    <label><strong>Email</strong></label>
                    <br/>
                    <input type='email' placeholder=" Enter Email" className="form-control rounded-0"  onChange={this.handleInputEmail} onBlur={this.handleBlurfunctionOnEmail} value={email}/>
                    <p className='namepara'>{emailpara}</p>
                    </div>
                     <div className="mb-3">
                    <label><strong>Password</strong></label>
                    <br/>
                    <input type="password"  placeholder=" Enter Password" className="form-control rounded-0"  onChange={this.handleInputPassword} onBlur={this.handleBlurfunctionOnPassword} value={password}/>
                     <p className='namepara'>{passwordpara}</p>
                    </div>
                    <button type="submit" onClick={this.onsubmitFunction} className='button'>submit</button>
                </form>
            </div>
            </div>
        )
    }
}
export default Signup