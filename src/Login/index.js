import {Component} from 'react'
import './index.css'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


class Login extends  Component {
    state={fname:'',lname:'',number:'',email:'', password:'', errMsg:false}
    
onsubmitFunction=(event)=>{
        event.preventDefault()
        const {email,password}=this.state
        const values={
            email,
            password
        }

      axios.post('http://localhost:8081/login',values)
      .then(response=>{
        console.log("response is",response.data.success)
        if(response.data.success){
            const {history}=this.props
            history.push('/home')
        }
        else{
            this.setState({errMsg:true})
        }
      })

    }

    handleInputEmail=(event)=>{

        this.setState({email:event.target.value})
    }

    handleInputPassword=(event)=>{

        this.setState({password:event.target.value})
    }

    render(){
        const {errMsg}=this.state
        return(

            <div className='root-container d-flex justify-content-center align-items-center bg-primary vh-100' >
                  
            <div className='mainn-container bg-white p-3 rounded w-25'>
                <h1>Signin Page</h1>
                <form>
                    <div className='email-container'>
                    <label><strong>Email</strong></label>
                    <br/>
                    <input type='email'  placeholder=" Enter Email" className="form-control rounded-0"  onChange={this.handleInputEmail}/>
                    </div>
                     <div className='password-container'>
                    <label><strong>Password</strong></label>
                    <br/>
                    <input type="password"  placeholder=" Enter Email" className="form-control rounded-0"  onChange={this.handleInputPassword}/>
                    </div>
                    <button type="submit" onClick={this.onsubmitFunction} className="btn btn-success w-100 rounded-0">Login</button>
                    {errMsg?  <p className='para0'>invalid email or password</p>:''}
                    <div>
                    <p>You are agree to all terms and policies</p>
                    <Link to="/Signup">
                        <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>signup</button>
                    </Link>
                    </div>
                 
                   
                </form>
                </div>
            </div>
        )
    }
}
export default Login