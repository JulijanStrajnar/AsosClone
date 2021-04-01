import React from "react";
import '../CSSFiles/SearchBar.css';

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focusInputFieldClassName: "",
            shouldShowClose: "hidden",
            shouldShowBlueButton: "hidden",
            searchIconColor: "black",
        }

        this.onFocusInputField = this.onFocusInputField.bind(this);
        this.onDeFocusInputField = this.onDeFocusInputField.bind(this);
        this.onKeyTyped = this.onKeyTyped.bind(this);
    }

    onFocusInputField(e) {
        this.setState({
            focusInputFieldClassName: "animationFadeIn",
            shouldShowClose: "",
        });
    }

    onDeFocusInputField(e) {
        this.setState({
            focusInputFieldClassName: "animationFadeOut",
            shouldShowClose: "hidden",
        });
    }

    onKeyTyped(e) {
        if (e.target.value.length > 0) {
            this.setState({
                shouldShowBlueButton: "",
                searchIconColor:  "white",
            });
        } else {
            this.setState({
                shouldShowBlueButton: "hidden",
                searchIconColor: "black",
            });
        }

    }

    render() {
        return <div className="inner-addon">
            <div id="blackout" className={this.state.focusInputFieldClassName}></div>
            <a className={`btn btn-primary material-icons right-addon ${this.state.shouldShowBlueButton}`} href="#"
               role="button">k</a>
            <span className= {`material-icons right-addon ${this.state.searchIconColor}`}>search</span>
            <span className={`material-icons left-addon ${this.state.shouldShowClose}`}>close</span>
            <input onChange={this.onKeyTyped} onBlur={this.onDeFocusInputField} onFocus={this.onFocusInputField} onfo
                   type="text"
                   className="form-control" placeholder="Search for items, brands and inspiration"/>
        </div>

    }
}