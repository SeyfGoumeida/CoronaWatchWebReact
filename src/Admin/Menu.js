import React, { Component } from 'react';

//Styles
const asideStyle={
    backgroundColor:'white' 
};
const blueStyle={
    color: '#172B4D'
}; 



export default class Menu extends Component {
    render() {
        return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={asideStyle}>
                {/* Brand Logo */}
                <a href="/admin_dashboard" className="brand-link">
                <img id="logoIMG" src="../dist/img/CoronaWatchLogo.png" alt="CoronaWatch Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light" style={blueStyle}><b>CoronaWatch</b></span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                    <img src="../dist/img/avatar.png" className="img-circle elevation-2" alt="UserImage" />
                    </div>
                    <div className="info">
                    <a id="user" href="/admin_dashboard" className="d-block" style={blueStyle}>Admin</a>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                   <li className="nav-item">
                        <a href="/admin_dashboard/home" className="nav-link">
                        <i className="nav-icon fas fa-home" style={{color:'#bf00ff'}}/>
                        <p id="nav-item1" style={blueStyle}>Home</p>
                        </a>
                    </li>
                   <li className="nav-item">
                        <a href="/admin_dashboard/users" className="nav-link">
                        <i className="nav-icon fas fa-user" style={{color:'#00e6e6'}} />
                        <p id="nav-item2" style={blueStyle}>Users</p>
                        </a>
                    </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
</div>

        )
    }
}
