// App.js
import React from 'react';
// Import Components
import BarChart from './bar-chart';
import Dropdown from './dropdown';
import TweetDisplay from './tweet-display';
import SearchBar from './search-bar';
import Annotator from './annotator';
import Toggle from 'react-toggle';
// Import Data
import spData from '../../scripts/SP500.json';
import trumpData from '../../scripts/formattedTrump.json';
import vixData from '../../scripts/VIXCLS.json';
import nasdaqData from '../../scripts/NASDAQCOM.json';
import tnyrData from '../../scripts/DGS10.json';
import djiaData from '../../scripts/DJIA.json';
import crudeoilData from '../../scripts/DCOILWTICO.json';
import {PageHeader} from 'react-bootstrap';

const trumpTweets = {};
trumpData.forEach((day) => {
  trumpTweets[new Date(day.date)] = day.tweets;
});

function findSearchTweets(text) {
  let ret = [];
  if (text !== '') {
    trumpData.forEach((day) => {
      day.tweets.forEach((tweet) => {
        if (tweet.includes(text)) {
          ret = ret.concat([tweet]);
        }
      });
    });
  }
  return ret;
}

function returnPrice(data, date, index) {
  let ret = 0;
  let prev = 0;
  const temp = 0;
  data.forEach((datum) => {
    if (new Date(datum.DATE).valueOf() === date.valueOf()) {
      ret = parseFloat(datum[index]);
      prev = temp;
    } else {
      prev = parseFloat(datum[index]);
    }
  });
  if (ret > prev) {
    return ret;
  }
  return (-1 * ret);

}

const dataSet = {SP500: spData,
  'CBOE Volatility Index': vixData,
  NASDAQ: nasdaqData,
  '10-Yr Treasury Rate': tnyrData,
  DJIA: djiaData,
  'Crude Oil': crudeoilData};

const startDate = new Date('2017-01-20');

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {curIndex: this.props.initIndex,
      indexes: Object.keys(dataSet),
      data: dataSet[this.props.initIndex],
      curDate: startDate,
      searchText: '',
      zoom: false,
      searchTweets: ''};
  }

  render() {
    const margin = {top: 10, bottom: 10, left: 10, right: 10};
    return (
      <div className="flex center flex-column">
        <PageHeader className="header">Mapping Trumps Tweets to Market Indexes</PageHeader>
        <h3>By: Andrew Vallaster, Omar Salemohamed, and Yasoob Rasheed</h3>
        <div className="rowC">
          <TweetDisplay searchText={this.state.searchText}
                          tweets={trumpTweets[this.state.curDate]}
                          searchTweets={findSearchTweets(this.state.searchText)}/>
          <div className="display">
            <div className="row">
              <h3>
                  The Trump Tweet Mapper analyzes the extent to which Trump’s tweets alter
                  the price of many market indices that we consult on a daily basis. We,
                  along with many high frequency trading algorithms, buy and sell on a trigger.
                  What would Trump have to tweet, to trigger you to jump in or out of the market?
                </h3>
              <h3>
                  Trump tweets on average 10-12 times per day, so there is a lot of data that
                  you can query. You can look for Trump’s most used words in the search bar
                  (Great, Big, America, Fake News, Media, etc.) and see the correlation between
                  the climbing or falling market prices. You can also access Trump’s tweets by
                  clicking directly on the bar graph. Try selecting extreme points on the chart
                  and associating them with the political climate or important global events.
                </h3>
              <Dropdown changeIndex={index => this.setState({curIndex: index, data: dataSet[index]})}
                        curIndex={this.state.curIndex} indexes={this.state.indexes}/>
              <SearchBar changeText={text => this.setState({searchText: text})} />
            </div>
          </div>
        </div>
        <div align="center">
          <div className="containerT">
            <div className="leftT">
              <h3 className="anno">Zoom:</h3>
            </div>
            <div className="rightT">
              <Toggle
          defaultChecked={false}
          icons={false}
          onChange={(e) => this.setState({zoom: e.target.checked})}
          />
            </div>
          </div>
          <Annotator price = {returnPrice(dataSet[this.state.curIndex],
                              this.state.curDate,
                              this.state.curIndex)}
                     curDate = {this.state.curDate}
                     curIndex = {this.state.curIndex}/>
        </div>
        <BarChart margin={margin}
                  data={this.state.data}
                  width={2000} height={500}
                  index={this.state.curIndex}
                  searchText={this.state.searchText}
                  changeDate={date => this.setState({curDate: new Date(date), searchText: ''})}
                  curDate = {this.state.curDate}
                  zoom={this.state.zoom}/>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
