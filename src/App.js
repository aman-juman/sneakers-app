import "./styles/globals.scss";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import ModalMode from "./components/content/ModalMode";
import {useState} from "react";

import {bigImages, smallImages} from "./components/data";

function App() {
    const [mode, setMode] = useState(false);

    const [currentBigImg, setCurrentBigImg] = useState(bigImages[0]);
    const [currentSmallImg, setCurrentSmallImg] = useState(0);
    const onChangeImage = (e, i) => {
        // e.stopPropagation();
        setCurrentBigImg(bigImages[i])
    };

    const slideHandleChangeImg = (value) =>{
        if(value == "next"){
            if(currentSmallImg <=smallImages.length ){
                setCurrentBigImg(prev => prev +1)
            } return;
        } else {
            if(0 <=currentSmallImg ){
                setCurrentBigImg(prev => prev -1)
            } return;
        }
    }
  return (
    <div className="App">
      <Header />
        {mode &&
        <ModalMode
            currentBigImg={currentBigImg}
            currentSmallImg={currentSmallImg}
            setCurrentBigImg={setCurrentBigImg}
            setCurrentSmallImg={setCurrentSmallImg}
            onChangeImage={onChangeImage}
            smallImages={smallImages}
            setMode={setMode}
        />}

      <Content
          currentBigImg={currentBigImg}
          currentSmallImg={currentSmallImg}
          setCurrentBigImg={setCurrentBigImg}
          setCurrentSmallImg={setCurrentSmallImg}
          onChangeImage={onChangeImage}
          smallImages={smallImages}
          setMode={setMode}

      />
    </div>
  );
}

export default App;
