import React, { Component, Fragment } from "react";
import AutoFillInput from "./components/input";
import CustomDropdown from "./components/dropdown";
import { autoComplete } from "./utils/utils";

class Hello extends Component {
  state = {
    options: [
      "html",
      "css",
      "htm",
      "jsx",
      "js",
      "javascript",
      "java",
      "react",
      "redux",
      "vue",
      "angular"
    ],
    filteredOptions: [],
    onChangeInput: false,
    inputValue: ""
  };

  setFieldValueCustomized = (value) => {
    this.setState({inputValue:value})
  }

  onChangeHandler = e => {
    // console.log("e", e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    const assumptions = autoComplete(this.state.options, value);
    if (value === "") {
      this.setState({ [name]: value, onChangeInput: false });
    } else {
      this.setState({
        [name]: value,
        onChangeInput: true,
        filteredOptions: assumptions
      });
    }
  };

  selectItem = selectedItem => {
    this.setState({ inputValue: selectedItem, filteredOptions: [] });
  };

  renderLists = () => {
    const mapData = this.state.options.map(item => (
      <Fragment>
        <li>{item} </li>
      </Fragment>
    ));
    return mapData;
  };

  render() {
    return (
      <Fragment>
        <div>Autofill Input Controller</div>
        <hr />
        <div>
          Type items in input that matches with below list contents
          <ul>{this.renderLists()} </ul>
          <AutoFillInput
            onChangeHandler={this.onChangeHandler}
            inputValue={this.state.inputValue}
          />
          {this.state.onChangeInput ? (
            <CustomDropdown
              autoCompleteData={this.state.filteredOptions}
              selectItem={this.selectItem}
            />
          ) : null
          // <CustomDropdown autoCompleteData={this.state.options} />
          }
        </div>
      </Fragment>
    );
  }
}

export default Hello;
