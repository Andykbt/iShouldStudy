import './App.css';
import Timer from './Components/Timer/Timer'
import Sound from './Components/Sound/Sound'
import illustration from './assets/iShouldStudy illustration.png'

function App() {

  return (
    <div className="App">
      <div className="left">
        <h1 className="heading">I Should Study</h1>
        <p className="subHeading">by Wendy Trinh and Andy Truong</p>
      </div>

      <iframe src="https://open.spotify.com/embed/playlist/471N195f5jAVs086lzYglw" width="275" height="330" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

      <div className="center">
        <img src={illustration} className="illustration" />
      </div>
      <div className="right">
        <Timer />
        <Sound index={0} />
        <Sound index={1} />
        <Sound index={2} />
        <Sound index={3} />
        <Sound index={4} />
        <Sound index={5} />
      </div>

      <div className="footer">
        Illustrations by Wendy Trinh, Developed by Andy Truong
      </div>
    </div>
  );
}

export default App;
