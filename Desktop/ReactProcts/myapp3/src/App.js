
import './App.css';
import SidebarDemo from './Side';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import BigImage from './BigImage';
import Card from './Card';
import GiftCardAppHeader from './Header2';
import LoginPage from './Login';
import Login from './Loginn';
import NavBarr from './NavBarr';
import ForHim from './ForHim';
import ForHer from './ForHer';
import Cake from './Cake';
import Flower from './Flower';
import Query from './Query';


function App() {
  return (
    // <div className="App">
    //   {/* <SidebarDemo /> */}
    //   <Router>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/"exact component={<GiftCardAppHeader />} />
    //       <Route path="/login"exact component={<LoginPage />} />
    //         {/* <Header /> */}
    //         {/* <BigImage /> */}
          
    //       {/* <Route path="/cards">
    //         <Card />
    //         <Card />
    //         <Card />
    //       </Route> */}
    //     </Routes>
    //   </div>
    // </Router>

    // </div>
  //   <Router>
  //   <div>
  //     <Navbar />
  //     <Routes>
  //       <Route path="/login" element={<Login />}>
  //         </Route>
  //         <Route path='/forhim' element={<ForHim/>}></Route>
  //       {/* Add other routes as needed */}
  //     </Routes>
  //   </div>
  // </Router>
  <Router>
      <div>
        <NavBarr/>
        <Routes>
        <Route path="/for-him" element={<ForHim/>}></Route>
        <Route path='/for-her' element={<ForHer/>}/>
        <Route path='/cake' element={<Cake/>}/> 
        <Route path='/flower' element={<Flower/>}/>
        <Route path='/query' element={<Query/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
