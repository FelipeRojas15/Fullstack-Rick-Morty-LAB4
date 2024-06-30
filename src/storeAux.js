import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers';

const storeAux = configureStore({
    reducer: {
        holaAPP: reducers
    }
});

export default storeAux;