import React, {Component} from 'react'
import { connect } from 'react-redux'
import {setUser, setPassword, setProfile} from './../../ducks/reducer'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Auth extends Component{
    render(){
        const {setUser, setPassword, setProfile} = this.props
        return (
            <div>
                <input onChange={(e)=>setUser(e.target.value)} placeholder='username'></input>
                <input onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
                <button onClick={()=>{
                    axios.post('http://localhost:3001/api/login', 
                    {username:this.props.username, password:this.props.password})
                    .then(res => {console.log(res); this.props.history.push('/dashboard'); setProfile(res.data[0].profile_pic)});}}>Login</button>
                <button onClick={()=>{
                    axios.post('http://localhost:3001/api/register', 
                    {username:this.props.username, password:this.props.password})
                    .then(res => console.log(res))}}>Register</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        username: state.username,
        password: state.password,
        profilePic: state.profilePic
    }
}

export default connect(mapStateToProps, {setUser, setPassword, setProfile})(Auth)