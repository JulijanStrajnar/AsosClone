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
            inputText: "",
        }

        this.inputField = React.createRef();

        this.onFocusInputField = this.onFocusInputField.bind(this);
        this.onDeFocusInputField = this.onDeFocusInputField.bind(this);
        this.onKeyTyped = this.onKeyTyped.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.focusInput = this.focusInput.bind(this);
    }

    onFocusInputField(e) {
        this.setState({
            focusInputFieldClassName: "animationFadeIn",
            shouldShowClose: "",
        });
    }

    onDeFocusInputField(e) {
        var shouldShowCloseTemp;
        if(this.state.inputText == ""){
            shouldShowCloseTemp = "hidden";
        } else shouldShowCloseTemp = "";

        this.setState({
            focusInputFieldClassName: "animationFadeOut",
            shouldShowClose: shouldShowCloseTemp,
        });

    }

    clearInput(e) {
        e.preventDefault();
        this.setState({
            inputText: "",
            shouldShowBlueButton: "hidden",
            searchIconColor: "black",
        });
        this.focusInput();
    }

    focusInput() {
        this.inputField.current.focus();
    }

    onKeyTyped(e) {
        if (e.target.value.length > 0) {
            this.setState({
                shouldShowBlueButton: "",
                searchIconColor: "white",
            });
        } else {
            this.setState({
                shouldShowBlueButton: "hidden",
                searchIconColor: "black",
            });
        }
        this.setState({
            inputText: e.target.value,
        });
    }

    render() {
        return <div className="inner-addon">
            <div id="blackout" className={this.state.focusInputFieldClassName}></div>
            <div className={`btn btn-primary material-icons right-addon ${this.state.shouldShowBlueButton}`}
            >k
            </div>
            <div onMouseDown={this.clearInput}
                 className={`btn btn-light material-icons left-addon ${this.state.shouldShowClose}`}>
                <span>close</span>
            </div>
            <span className={`material-icons right-addon ${this.state.searchIconColor}`}>search</span>

            <input ref={this.inputField} value={this.state.inputText} onChange={this.onKeyTyped}
                   onBlur={this.onDeFocusInputField} onFocus={this.onFocusInputField} onfo
                   type="text"
                   className="form-control" placeholder="Search for items, brands and inspiration"/>

        </div>

    }
}