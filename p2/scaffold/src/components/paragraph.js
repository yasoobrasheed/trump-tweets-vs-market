import React from 'react';
import nl2br from 'react-newline-to-break';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {nl2br(this.props.descString)}
      </div>
    );
  }
}

Paragraph.displayName = 'Annotator';
export default Paragraph;
