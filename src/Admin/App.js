import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../Header';
import Menu from './Menu';
import Footer from '../Footer';
import Home from '../Home';



export default class App extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("login")
        const user_type =localStorage.getItem("user_type")

        
        let loggedIn =true
        if(token==null){
            loggedIn = false
        }
        let type = '0'
        if(user_type==='1'){
           type='1'
        }
        if(user_type==='2'){
            type='2'
         }
    
         if(user_type==='3'){
            type='3'
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
        if(this.state.type ==='1'){
            return <Redirect to="/moderator_dashboard"/>
        }
        if(this.state.type ==='2'){
            return <Redirect to="/halthAgent_dashboard"/>
        }
        if(this.state.type ==='3'){
            return <Redirect to="/redactor_dashboard"/>
        }
        return (

            <div>

                <Header/>
                <Menu/>
                <Home/>
                <Footer/>
            </div>
            
        );
    }
}
