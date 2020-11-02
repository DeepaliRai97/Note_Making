import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from '../src/screens/IndexScreen';
//import {BlogProvider} from '../src/context/BlogContext';
import ViewNotes from '../src/screens/ViewNotes';
import AddNotes from '../src/screens/AddNotes';

const navigator = createStackNavigator({
       /* Index:{
            screen:IndexScreen
        },*/
        ViewNotes:{
            screen:ViewNotes
        },
        AddNotes:{
            screen:AddNotes
        }
},{
    initialRouteName:'ViewNotes',
    headerMode:'none',
    mode:'modal'
    /*defaultNavigationOptions:{
        title:'Notes'
    }*/
});

const Navg = createAppContainer(navigator);

export default Navg;

/*export default () => {
    return <BlogProvider>
       <Navg/>
    </BlogProvider>
}*/