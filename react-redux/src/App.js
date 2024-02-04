import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ReduxPlusHooks from "./Components/ReduxPlusHooks";
import IceCreamContainer from "./Components/IceCreamContainer";
import IceCreamContainerReduxPlusHooks from "./Components/IceCreamContainerReduxPlusHooks";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />

        <NewCakeContainer />
        <ReduxPlusHooks />
        <IceCreamContainer />
        <IceCreamContainerReduxPlusHooks />

        <ItemContainer />
        <ItemContainer cake />
      </div>
    </Provider>
  );
}

export default App;
