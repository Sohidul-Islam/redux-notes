import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ReduxPlusHooks from "./Components/ReduxPlusHooks";
import IceCreamContainer from "./Components/IceCreamContainer";
import IceCreamContainerReduxPlusHooks from "./Components/IceCreamContainerReduxPlusHooks";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
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
