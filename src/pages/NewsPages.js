import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';


const NewsPages = ({ match, location, history }) => {
  const category = match.params.category || 'all';
  console.log("match", match);
  console.log("location", location);
  console.log("history", history);
  //url ?뒤의 quertString값을 받을때 해당방법으로 받아올수있음
  //   const search = location.search;
  // const params = new URLSearchParams(search);
  // const category = params.get('category') || 'all';

  console.log(category);
  return (
    <>
      <Categories />
      <NewsList category={category}></NewsList>
    </>
  );
};


export default NewsPages;