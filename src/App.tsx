import { useSelector } from "react-redux";
import "./App.css";
import IceCreamPage from "./IceCreamPage";
import { updateSentences } from "./redux/action";
import { AppDispatch, useAppDispatch } from "./redux/store";
import { State } from "./redux/types";

function App() {
  const sentences: string[] = useSelector<State, string[]>(
    (state: State) => state.sentences
  );

  const dispatch: AppDispatch = useAppDispatch();

  const handleAddSentence = () => {
    dispatch(updateSentences(["New sentences"]));
  };

  return (
    <div className="App">
      {sentences.map((sentence) => (
        <p>{sentence}</p>
      ))}

      <button onClick={handleAddSentence}>Add Sentence</button>

      <IceCreamPage />
    </div>
  );
}

export default App;
