import { FC } from "react"
import { ViewStyle } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import type { AppStackScreenProps } from "@/navigators/AppNavigator"

// import { useNavigation } from "@react-navigation/native"

interface SettingScreenProps extends AppStackScreenProps<"Setting"> {}

export const SettingScreen: FC<SettingScreenProps> = () => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="setting" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
