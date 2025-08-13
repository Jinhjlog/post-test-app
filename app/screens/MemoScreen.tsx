import { FC } from "react"
import { ViewStyle } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import type { AppStackScreenProps } from "@/navigators/AppNavigator"

// import { useNavigation } from "@react-navigation/native"

interface MemoScreenProps extends AppStackScreenProps<"Memo"> {}

export const MemoScreen: FC<MemoScreenProps> = () => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="memo" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
