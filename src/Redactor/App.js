import React, { Component } from 'react';
import Header from '../Header';
import Menu from './Menu';
import Footer from '../Footer';
import Home from '../Home';
import {Redirect} from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("login")
        const user_type =localStorage.getItem("user_type")

        
        let loggedIn =true
        if(token==null){
            loggedIn = false
        }
        let type = '3'
        if(user_type==='0'){
           type='0'
        }
        if(user_type==='2'){
            type='2'
         }
    
         if(user_type==='1'){
            type='1'
         }
        this.state = {
             loggedIn,
             type
        }
    }
    render() {
        if(this.state.loggedIn ===false){
            return <Redirect to="/"/>
        }
        if(this.state.type ==='0'){
            return <Redirect to="/admin_dashboard"/>
        }
        if(this.state.type ==='2'){
            return <Redirect to="/halthAgent_dashboard"/>
        }
        if(this.state.type ==='1'){
            return <Redirect to="/moderator_dashboard"/>
        }
        return (
            <div>
                <Header/>
                <Menu/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}
