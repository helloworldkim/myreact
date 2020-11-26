import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NewsPages from './pages/NewsPages';
import Todo from './Todo/Todo';
import AddUser from './User/AddUser';
import EditUser from './User/EditUser';
import UserList from './User/UserList';
import Youtube from './Youtube/Youtube';
import Menu from './components/Menu';


const App = () => {
  // const [category,setCategory] =useState('all');
  // const onSelect = (category)=> setCategory(category);
  // const response = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=274ce622f54e4f0a9cf1572285c896a7');
  //        274ce622f54e4f0a9cf1572285c896a7  api키! https://newsapi.org/
  // http://newsapi.org/v2/top-headlines?country=kr&apiKey=키값  사용되는형식
  // http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=키값  카테고리 포함시 사용되는형식 
  // business entertainment health science sports technology 생략하면 모든카테고리의 정보를 불러옴
  return (
    <>
      {/* category값이 선택적임(optional) 그럴때 ?사용 */}
      <BrowserRouter>
        <Route path='/' component={Menu}></Route>
        <Switch>
          <Route exact={true} path='/' component={Home}></Route>
          <Route path='/news/:category?' component={NewsPages} />
          <Route path="/todo" component={Todo} />
          <Route path="/AddUser" component={AddUser} />
          <Route path="/EditUser" component={EditUser} />
          <Route path="/UserList" component={UserList} />
          <Route path="/Youtube" component={Youtube} />
        </Switch>
      </BrowserRouter >

    </>
  );
};


export default App;