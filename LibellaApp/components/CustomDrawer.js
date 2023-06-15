import React from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}
            contentContainerStyle={{backgroundColor: "#F2F2F2"}}>
                <DrawerItemList {...props}/>

            </DrawerContentScrollView>
            <View>
                <Text>ALO</Text>
            </View>
        </View>
    )
}

export default CustomDrawer