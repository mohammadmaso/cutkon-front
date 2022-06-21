import { theme as defaultTheme, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import siteConfig from '~/site-config'

// const body = `Jost,${defaultTheme.fonts.body}`
// const heading = `Jost,${defaultTheme.fonts.heading}`
// const mono = `Cousine,${defaultTheme.fonts.mono}`
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const fonts = {
    heading: "peyda",
    body: "IranyekanWeb",
    p: "IranyekanWeb"

}
const direction = "rtl"
export const theme = extendTheme({
  components: {
    Link: {
      variants: {
        link: props => ({
          color: mode(siteConfig.themeColor, siteConfig.themeColor)(props),
        }),
      },
    },
  },
  fonts,
  config
})





