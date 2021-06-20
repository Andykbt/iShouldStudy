import './App.css';
import Timer from './Components/Timer/Timer'
import Volume from './Components/Volume/Volume'

function App() {

  return (
    <div className="App">
      <div className="left">
        <h1 className="heading">I Should Study</h1>
        <p className="subHeading">by Wendy Trinh and Andy Truong</p>
      </div>

      <iframe src="https://open.spotify.com/embed/playlist/471N195f5jAVs086lzYglw" width="275" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

      <div className="center"></div>
      <div className="right">
        <Timer />
        <Volume />
      </div>
    </div>
  );
}

export default App;
