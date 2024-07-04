import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const title = "welcome to new blog"
  // booleans and objects cant be displayed dynamically '
  // numbers arrays all are converted to strings before displaying them 
  // any kind of js  { } in these kind of brackets in jsx

  //--------functions with complex logics can be used -----------
  // function cont (){
  //   return " You "
  // }
  const link = "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"

  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
       <Routes>
        <Route exact path='/' element= { <Home></Home>}></Route>
        <Route exact path='/create' element= { <Create></Create>}></Route>
        <Route exact path='/blog/:id' element = {<BlogDetails></BlogDetails>}></Route>
        
       </Routes>
      </div>
    </div>
    </Router>
    
  );
}
// switch specific routes are shown only 

export default App;
