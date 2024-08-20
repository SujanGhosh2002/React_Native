/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App2 from './App2';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './components/Redux/store';

const AppRedux = () => (
    <Provider store={store}>
        <App2 />
    </Provider>
)
AppRegistry.registerComponent(appName, () => AppRedux);
