import React from "react";
import '../CSSFiles/NavigationBar.css';
import AsosLogo from "../Images/ASOSLogo.png";
import HandBagIcon from "../Images/HandBagIcon.png";
import HearthIcon from "../Images/HearthIcon.png";
import PersonIcon from "../Images/PersonICon.png";
import Women from "../Images/Women.png";
import Men from "../Images/Men.png";
import SearchIcon from "../Images/SearchIcon.png";
import {SearchBar} from '../JavaScriptFiles/SearchBar';

export class NavigationBar extends React.Component {
    render() {
        return <div className="container-fluid gx-0">
            <div className="row justify-content-center align-items-center  gx-0">
                <div className="col-auto ">
                    <img src={AsosLogo} className="img-fluid" alt="Responsive"/>
                </div>
                <div className="col-md-auto d-none d-lg-block">
                    <img src={Women} className="img-fluid" alt="Responsive"/>
                </div>
                <div className="col-md-auto d-none d-lg-block">
                    <img src={Men} className="img-fluid" alt="Responsive"/>
                </div>
                <div className="col-md-5 d-none d-md-block">
                    <SearchBar/>
                </div>
                <div className="col-auto d-md-none">
                    <img src={SearchIcon} className="img-fluid" alt="Responsive"/>
                </div>
                <div className="col-auto ">
                    <img src={PersonIcon} className="img-fluid" alt="Responsive"/>
                </div>
                <div className="col-auto ">
                    <img src={HearthIcon} className="img-fluid" alt="Responsive"/>
                </div>
                <div className="col-auto ">
                    <img src={HandBagIcon} className="img-fluid" alt="Responsive"/>
                </div>
            </div>
        </div>
            ;
    }
}