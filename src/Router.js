import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import Loading from './components/Loading';
import Result from './components/Result';

const Router = createStackNavigator(
    {
        HomePage: { screen: HomePage },
        Loading: { screen: Loading },
        Result: { screen: Result }
    },
    {
        initialRouteName: 'HomePage'
    }
);

export default Router;
