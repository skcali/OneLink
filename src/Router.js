import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import Ads from './components/Ads';
import Result from './components/Result';

const Router = createStackNavigator(
    {
        HomePage: { screen: HomePage },
        Ads: { screen: Ads },
        Result: { screen: Result }
    },
    {
        initialRouteName: 'HomePage'
    }
);

export default Router;
