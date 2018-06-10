import React from 'react';

class Annotator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      curDate: this.props.curDate,
      curIndex: this.props.currIndex};
  }
  render() {
    const sign = (this.props.price > 0) ? 1 : -1;
    const val = this.props.price * sign;
    const cdate = this.props.curDate;
    const up = <i className="fa fa-caret-up" />;
    const down = <i className="fa fa-caret-down" />;
    return (
      <div>
        <h3 className="anno">Date: {cdate.toString().substring(0, 15)}</h3>
        <h3 className="anno">{this.props.curIndex} : {val} {(sign < 1 ? down : up)}</h3>
      </div>
    );
  }
}

Annotator.displayName = 'Annotator';
export default Annotator;
