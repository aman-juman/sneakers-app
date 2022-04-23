import "./styles/globals.scss";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import ModalMode from "./components/content/ModalMode";
import {useState} from "react";


function App() {
    const [mode, setMode] = useState(false);

    return (
        <div className="App">
            <Header/>
            {mode && <ModalMode mode={mode} setMode={setMode}/>}
            <Content setMode={setMode}/>
        </div>
    );
}

export default App;
