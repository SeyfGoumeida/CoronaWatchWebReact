import React, { Component } from 'react';
import axios from 'axios';


const API_URL = 'https://coronawatch.herokuapp.com/api/geo';

//Styles
const bodyStyle={
    backgroundColor:'#172B4D' 
};

const whiteStyle={
    color: 'white'
}; 

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
             nb_death__sum:'',
             nb_recovered__sum:'',
             nb_suspected__sum:'',
             nb_confirmed__sum:'',
             nb_notyetsick__sum:''
        }

    }
    componentDidMount(){
        //for get statistics total of word
        let url = `${API_URL}/worldstats/`;
        axios.get(url)
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                this.setState({ nb_death__sum: response.data.nb_death__sum})
                this.setState({ nb_recovered__sum: response.data.nb_recovered__sum})
                this.setState({ nb_notyetsick__sum: response.data.nb_notyetsick__sum})
                this.setState({ nb_suspected__sum: response.data.nb_suspected__sum})
                this.setState({ nb_confirmed__sum: response.data.nb_confirmed__sum})
                console.log("statistics total of word getted")
              }
        })
        .catch(error => {
            console.log(error.message)
            console.log(error)
            console.log("status===",error.response.status)
        })

    }
    render() {
        const {nb_death__sum,nb_recovered__sum,
            nb_suspected__sum,nb_confirmed__sum}= this.state
        return (
            <div>
                          <div className="content-wrapper" style={bodyStyle}>
                {/* Content Header (Page header) */}
                <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 style={whiteStyle}>Home</h1>
                    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
 
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="/admin_dashboard" style={whiteStyle}>Home</a></li>
                        <li className="breadcrumb-item active" style={whiteStyle}>Dashboard</li>
                        </ol>
                    </div>
                    </div>
                </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                
                    <section className="content">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm-3 col-md-6 col-lg-4 col-xl-2"></div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="info-box">
                        <span className="info-box-icon bg-info"><i className="fas fa-chart-line" /></span>
                        <div className="info-box-content">
                            <span id="span1" className="info-box-text">Infected</span>
                            <span className="info-box-number">{nb_suspected__sum}</span>
                        </div>
                        {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>

                    <div className="col-md-3 col-sm-6 col-12"></div>
                    {/* /.col */}
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="info-box">
                        <span className="info-box-icon bg-success"><i className="fas fa-user-check" /></span>
                        <div className="info-box-content">
                            <span id="span2" className="info-box-text">Recovered</span>
                            <span className="info-box-number">{nb_recovered__sum}</span>
                        </div>
                        {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>

  
                    <div className="col-sm-3 col-md-6 col-lg-4 col-xl-2"></div>
                    {/* /.col */}
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="info-box">
                        <span className="info-box-icon bg-warning"><i className="fas fa-user-minus" /></span>
                        <div className="info-box-content">
                            <span id="span3" className="info-box-text">Deceased</span>
                            <span className="info-box-number">{nb_death__sum}</span>
                        </div>
                        {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>

                    <div className="col-md-3 col-sm-6 col-12"></div>
                    {/* /.col */}
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="info-box">
                        <span className="info-box-icon bg-danger"><i className="fas fa-user-times" /></span>
                        <div className="info-box-content">
                            <span id="span4" className="info-box-text">Currently Sick</span>
                            <span className="info-box-number">{nb_confirmed__sum}</span>
                        </div>
                        {/* /.info-box-content */}
                        </div>
                        {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    </div>
                    {/* /.row */}
                </div></section>
<div>
    <br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/> 

</div>
                </div> 
            </div>
        )
    }
}
