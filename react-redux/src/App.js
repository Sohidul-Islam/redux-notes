import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ReduxPlusHooks from "./Components/ReduxPlusHooks";
import IceCreamContainer from "./Components/IceCreamContainer";
import IceCreamContainerReduxPlusHooks from "./Components/IceCreamContainerReduxPlusHooks";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <ReduxPlusHooks />
        <IceCreamContainer />
        <IceCreamContainerReduxPlusHooks />
      </div>
    </Provider>
  );
}

export default App;
