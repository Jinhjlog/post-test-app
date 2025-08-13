import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { MemoScreen } from "@/screens/MemoScreen"
import { PostScreen } from "@/screens/PostScreen"
import { SettingScreen } from "@/screens/SettingScreen"

export type MainTabNavigatorParamList = {
  Post: undefined
  Memo: undefined
  Setting: undefined
}

const Tab = createBottomTabNavigator<MainTabNavigatorParamList>()

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Memo" component={MemoScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  )
}
