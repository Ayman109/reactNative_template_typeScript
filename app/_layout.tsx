import { Provider } from "react-redux";
import {persistor, store} from "../redux/store"
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";


export default function RootLayout() {

  return (
<Provider store={store}>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
  );
}
