import { ReactNode, forwardRef, ForwardedRef } from "react"
import { Pressable, PressableProps, View } from "react-native"
import { TOptions } from "i18next"

import { isRTL, TxKeyPath } from "@/i18n"
import { translate } from "@/i18n/translate"

import { Text } from "./Text"

export interface ButtonProps extends PressableProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TOptions
  /**
   * Optional className for button styling (NativeWind)
   */
  className?: string
  /**
   * Optional className for text styling (NativeWind)
   */
  textClassName?: string
  /**
   * Children components.
   */
  children?: ReactNode
}

/**
 * A button component using NativeWind for styling.
 * Built on top of React Native's Pressable with i18n support.
 * @param {ButtonProps} props - The props for the `Button` component.
 * @returns {JSX.Element} The rendered `Button` component.
 */
export const Button = forwardRef(function Button(props: ButtonProps, ref: ForwardedRef<View>) {
  const {
    tx,
    txOptions,
    text,
    children,
    className = "",
    textClassName = "",
    ...pressableProps
  } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  // Default button styling with NativeWind
  const defaultButtonClassName =
    "bg-blue-500 px-4 py-3 rounded-lg active:bg-blue-600 disabled:bg-gray-300"
  const defaultTextClassName = "text-white font-medium text-center"

  const finalButtonClassName = className || defaultButtonClassName
  const finalTextClassName = textClassName || defaultTextClassName

  return (
    <Pressable
      ref={ref}
      className={finalButtonClassName}
      style={({ pressed: _pressed }) => [isRTL && { transform: [{ scaleX: -1 }] }]}
      {...pressableProps}
    >
      {typeof content === "string" ? (
        <Text text={content} className={finalTextClassName} />
      ) : (
        content
      )}
    </Pressable>
  )
})
