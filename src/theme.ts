import { ThemeOverride, extendTheme } from "@chakra-ui/react"
import { colors } from "./styles/colors";
import { screens } from "./styles/screens";

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme: ThemeOverride = extendTheme({
    styles: {
        global: ({ colorMode }: { colorMode: string }) => ({
            body: {
                bg: colorMode === 'light' ? "#EEF7FF" : "#26355D"
            }
        })
    },
    colors: {
        bgHover: colors.bgHover,
        bgPressed: colors.bgPressed,
        bgDisabled: colors.bgDisabled,
        header: colors.header,
        footer: colors.footer,
        white: colors.white,
        orange: colors.orange,
        link: colors.link,
        linkTitle: colors.linkTitle,
        error: colors.error,
        success: colors.success,
        yellow: colors.yellow,
        red: colors.red,
        black: colors.black,
        blackText: colors.blackText,
        bakcTextDisabled: colors.bakcTextDisabled,
        grayPagination: colors.grayPagination,
        grayText: colors.grayText,
        grayBorder: colors.grayBorder,
        grayBg: colors.grayBg,
        grayBgHover: colors.grayBgHover,
        grayBorderHover: colors.grayBorderHover,
        littleGrayDivider: colors.littleGrayDivider,
        shadow: colors.shadow,
        tooltip: colors.tooltip,
        whiteButton: colors.whiteButton,
        chipsEnabled: colors.chipsEnabled,
        chipsHover: colors.chipsHover,
        chipsFocused: colors.chipsFocused,
        chipsPressed: colors.chipsPressed,
        chipsDisabled: colors.chipsDisabled,
        favorite: colors.favorite,
        promoYellow: colors.promoYellow,
        shadow_1dp: colors.shadow_1dp,
        shadow_2dp: colors.shadow_2dp,
        shadow_3dp: colors.shadow_3dp,
        shadow_4dp: colors.shadow_4dp,
        shadow_5dp: colors.shadow_5dp,
        shadow_6dp: colors.shadow_6dp,
        shadow_7dp: colors.shadow_7dp,
        shadow_8dp: colors.shadow_8dp,
        shadow_16dp: colors.shadow_16dp,
    },
    screen: {
        sm: screens.sm,
        md: screens.md,
        lg: screens.lg,
        xl: screens.lg,
    },
    components: {
        Button: {
            variants: {
                lagre_orange: {
                    bg: "orange",
                    w: "100%",
                    rounded: "2xl",
                    color: "white",
                    fontSize: "1rem",
                    border: "1px solid orange"
                },
                // link: {
                //     colors: "orange"
                // }
            }
        }
    },
    config
})

export default theme;