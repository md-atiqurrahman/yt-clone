import YtPlaylists from "./components/YtPlaylists/YtPlaylists";
import YtVideos from "./components/YtVideos/YtVideos";
import './App.css';


function App() {
  return (
    <div className="app">
      <YtVideos></YtVideos>
      <YtPlaylists></YtPlaylists>
    </div>
  );
}

export default App;
