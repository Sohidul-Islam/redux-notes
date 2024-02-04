import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ReduxPlusHooks from "./Components/ReduxPlusHooks";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <ReduxPlusHooks />
      </div>
    </Provider>
  );
}

export default App;
