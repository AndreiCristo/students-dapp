import React, {useState} from "react";
import {Formik} from "formik";
import { studentContract } from "../../components/abi/abi.js";
import Web3 from "web3";




const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0x97219a7E6e4819f0746BbBc5354bbB48F1ee450C";
const storageContract = new web3.eth.Contract(studentContract, contractAddress);



export  function Form(){


    

    const [name, setName] = useState(0);
    const [age, setAge] = useState(0);
    const [IdentityCard, setIdentityCard] = useState(0);
    const [FathersInitial, setFathersInitial] = useState(0);
    const [DateOfBirth, setDateOfBirth] = useState(0);
    const [MailingAddress, setMailingAddress] = useState(0);
    const [PhoneNumber, setPhoneNumber] = useState(0);
    const [Country, setCountry] = useState(0);
    const [Nationality, setNationality] = useState(0);
    const [index, setIndex] = useState(0);

    
  
    const [getData, setGet] = useState("0");
  
    
    const dataSet = async (t) => {
      t.preventDefault();
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      const gas = await storageContract.methods.setData(name, age, IdentityCard,FathersInitial, DateOfBirth, MailingAddress, PhoneNumber, Country, Nationality).estimateGas();
      const post = await storageContract.methods.setData(name, age, IdentityCard, FathersInitial, DateOfBirth, MailingAddress, PhoneNumber, Country, Nationality).send({
        from: account,
        gas,
      }).then(receipt=>{console.log(receipt)});
    };
    
    const dataGet = async (t) => {
      t.preventDefault();
      const post = await storageContract.methods.getStudent().call();
      setGet(post);
    };
  
    return (
        <div className="main">
          <div className="card">
            <form className="form" onSubmit={dataSet}>
              <label>
                Name:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setName(t.target.value)}
                />
              </label>
              <label>
                Age:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setAge(t.target.value)}
                />
              </label>
              <label>
              IdentityCard:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setIdentityCard(t.target.value)}
                />
              </label>
              <label>
              FathersInitial:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setFathersInitial(t.target.value)}
                />
              </label>
              <label>
              DateOfBirth:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setDateOfBirth(t.target.value)}
                />
              </label>
              <label>
              MailingAddress:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setMailingAddress(t.target.value)}
                />
              </label>
              <label>
              PhoneNumber:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setPhoneNumber(t.target.value)}
                />
              </label>
              <label>
              Country:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setCountry(t.target.value)}
                />
              </label>
              <label>
                Nationality:
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={(t) => setNationality(t.target.value)}
                />
              </label>
              <button className="button" type="submit" value="Confirm">
                Confirm
              </button>
            </form>
            <br />
            <button className="button" onClick={dataGet} type="button">
              Get your data
            </button>
            {getData}
          </div>
        </div>
    );

 }

/*
 json-server --watch db.json --static ./src/images/thumbnails/ --port 9000
        
*/