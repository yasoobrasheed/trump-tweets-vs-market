import React from 'react';
import {Media} from 'react-bootstrap';
import ReactScrollbar from 'react-scrollbar-js';

class TweetDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: this.props.searchText};
  }

  render() {

    const tweets = (
      this.props.tweets.map((tweet) =>
        <div>
          <Media>
            <Media.Left>
              <img width={50} height={50} src="trump.png" alt="trump" />
            </Media.Left>
            <Media.Body>
              <Media.Heading> @realDonaldTrump </Media.Heading>
              <h3> {tweet} </h3>
            </Media.Body>
          </Media>
        </div>
    ));
    const searchTweets = (
      this.props.searchTweets.map((tweet) =>
        <div>
          <Media>
            <Media.Left>
              <img width={100} height={100} src="trump.png" alt="trump" />
            </Media.Left>
            <Media.Body>
              <Media.Heading> @realDonaldTrump </Media.Heading>
              <h3> {tweet} </h3>
            </Media.Body>
          </Media>
        </div>
    ));
    const scrollBar = {width: 800, height: 300};
    const displayTweets = (this.props.searchText !== '') ? searchTweets : tweets;

    return (
      <div className="tweet-display-border">
        <ReactScrollbar style={scrollBar}>
          <div className="scrollBar">
            <p>
              {displayTweets}
            </p>
          </div>
        </ReactScrollbar>
      </div>
    );
  }
}
TweetDisplay.displayName = 'TweetDisplay';
export default TweetDisplay;
