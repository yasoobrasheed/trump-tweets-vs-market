import React from 'react';
import {FormGroup, FormControl, Form, Button} from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

  }

  render() {

    return (
      <Form inline onKeyPress={(e) => {
        if (e.which === 13) {
          e.preventDefault();
        }
      }}>
        <FormGroup controlId="formBasicText" className="search-bar">
          <FormControl
          bsSize="lg"
          type="text"
          value={this.state.value}
          placeholder="Search for a tweet"
          onChange={(e) => this.setState({value: e.target.value})}
        />
          <FormControl.Feedback />
        </FormGroup>
        <Button className="search-btn" onClick={() => {
          this.props.changeText(this.state.value);
          this.setState({value: ''});
        }}><i className="fa fa-search" /></Button>
      </Form>
    );
  }
}
SearchBar.displayName = 'SearchBar';
export default SearchBar;
