import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsListItem from './NewsListItem';
import SearchParameter from './SearchParameter';

const mapStateToProps = state => {
  return {news: state.news }
};

const ConnectedNewsListTable = ({ news }) => (
  <div>
    <h1>News List</h1>
      {news.map((item, index) => (
        <NewsListItem item={item} />
      ))}
    <SearchParameter />
  </div>
);

const NewsListTable = connect(mapStateToProps)(ConnectedNewsListTable);

export default NewsListTable;