import { FC, useEffect } from "react"
import { ViewStyle } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import type { AppStackScreenProps } from "@/navigators/AppNavigator"
import { usePostStore } from "@/stores"

interface PostScreenProps extends AppStackScreenProps<"Post"> {}

export const PostScreen: FC<PostScreenProps> = () => {
  const { posts, fetchPosts } = usePostStore()

  useEffect(() => {
    console.log("Fetching posts...")
    fetchPosts()
  }, [])

  useEffect(() => {
    console.log(Object.values(posts))
  }, [posts])

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="post" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
