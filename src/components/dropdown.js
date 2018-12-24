import React, { Fragment } from "react";

const CustomDropdown = props => {
  const renderData = props.autoCompleteData.map((item, index) => (
    <Fragment key={index}>
      <li className="dropdown-item">
        <a href="#" onClick={() => props.selectItem(item)}>
          {item}
        </a>
      </li>
    </Fragment>
  ));

  return (
    <Fragment>
      <div className="dropdown-container">
        <ul className="dropdown-lists">{renderData}</ul>
      </div>
    </Fragment>
  );
};

export default CustomDropdown;
