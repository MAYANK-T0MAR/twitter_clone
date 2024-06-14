import './App.css';
import Header from './components/Header.';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Explore from './components/Explore';

import { useState, useEffect } from 'react';
import AllTweets from './components/AllTweets';

function App() {
  const [tweets, settweets] = useState([]);
  const [searchedItem, setsearchedItem] = useState("");
  const [searchResult, setsearchResult] = useState([]);

  async function getTweets(){
    let rawData = await fetch("https://apex.oracle.com/pls/apex/mayank281/tweets/get");
    let data = await rawData.json();
    settweets(data.items);
  }

  useEffect(() => {
    getTweets();
  }, []);

  async function postTweets(tweet){
    let current_date = new Date().toLocaleString();
    let username = "visitor";
    let userhandle = "@visitor";
    await fetch(
      `https://apex.oracle.com/pls/apex/mayank281/tweets/post?username=${username}&userhandle=${userhandle}&tweet=${tweet}&likes=0&retweets=0&comments=0&datetime=${current_date}`, {method: "POST"}
    );
    getTweets();
    

  }
  return (
    <>
      <div className="container">
        <Header searchedItem={searchedItem} setsearchedItem={setsearchedItem} tweets={tweets} setsearchResult={setsearchResult}/>
        <div className="row" style={{margin: -6}}>
          <Sidebar />
          
          <div className="col-6 border border-top-0 border-bottom-0">
            <CreatePost postTweets = {postTweets}/>
            
            
            <AllTweets tweets = {tweets} />

          </div>
          <Explore searchResult={searchResult}/>
          
        </div>
      </div>
    </>
  );
}

export default App;
