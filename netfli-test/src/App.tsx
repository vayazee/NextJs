import MusicPlayerSlider from "./components/MusicPlayerSlider";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Router from "./router/Router";

const App = () => {
    return (
        <div className="App">
            <ResponsiveAppBar></ResponsiveAppBar>
            <Router></Router>
        </div>
    );
};

export default App;
