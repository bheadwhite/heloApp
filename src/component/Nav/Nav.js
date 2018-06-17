import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Nav(props){
    if(props.location.pathname === '/'){
        return null
    }
    return (
        <div>
<Link to="/Dashboard"><button>Home</button></Link>
<Link to="/new"><button>New Post</button></Link>
<div>
    <img src={props.profilePic} alt='profile pic' />
</div>
<Link to="/"><button>Logout</button></Link>
        </div>
    )
}

function mapStateToProps(state){
    return {
        username: state.username,
        profilePic: state.profilePic
    }
}

export default connect(mapStateToProps)(Nav)