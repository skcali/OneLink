import { createStackNavigator } from 'react-navigation';
import ImageSelect from './components/ImageSelect';

const Router = createStackNavigator(
    {
        ImageSelect: { screen: ImageSelect }
    },
    {
        initialRouteName: 'ImageSelect'
    }
);

export default Router;
