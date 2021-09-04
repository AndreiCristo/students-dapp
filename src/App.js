import logo from './logo.svg';
import './App.css';
import { HomePage } from "./containers/HomePage";
import React, { useState } from "react";
import { studentContract } from "./components/abi/abi.js";
import Web3 from "web3";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { StudentAccessPage } from './containers/studentAccessPage';
import { NewHomePage } from './containers/NewHomePage';
import { FormPage } from './containers/FormPage';


const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0x97219a7E6e4819f0746BbBc5354bbB48F1ee450C";
const storageContract = new web3.eth.Contract(studentContract, contractAddress);

function App() {
/*
  const [nameReg, setnameReg] = useState('');
  const [emailReg, setemailReg] = useState('');
  const [passReg, setpassReg] = useState('');
  const [confirmpassReg, confirmsetpassReg] = useState('');
 */
  
  return (
    <div className="App">
     <Router>
      <Switch>
       <Route path="/" exact component={HomePage} />
       <Route path="/student/access" component={StudentAccessPage} />
       <Route path="/newhomepage" component={NewHomePage} />
       <Route path="/studentsform" component={FormPage} />
      </Switch>
     </Router>
    </div>
  );
}

export default App;
