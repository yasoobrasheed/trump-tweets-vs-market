import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const indexItems = (
    this.props.indexes.map((index, i) =>
      <MenuItem
        eventKey={i}
        onClick={() => {
          this.props.changeIndex(index);
        }}
      >{index}</MenuItem>,
    )
    );

    return (
      <DropdownButton title={this.props.curIndex}>
        {indexItems}
      </DropdownButton>
    );
  }
}
Dropdown.displayName = 'Dropdown';
export default Dropdown;
