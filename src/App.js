import './App.css';
import Header from './components/Header.';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Explore from './components/Explore';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row" style={{margin: -6}}>
          <Sidebar />
          <div className="col-6 border border-top-0 border-bottom-0">
            <CreatePost />
          </div>
          <Explore />
        </div>
      </div>
    </>
  );
}

export default App;
