import theme from './theme'
import { css, createGlobalStyle } from 'styled-components'

const textBaseSize = '1em'
const textScaleRatio = 1.35

export const typography = css`
  body {
    font-family: ${theme.fonts.primaryFont};
  }
  h1 {
    font-size: calc(
      1.2 * ${textBaseSize} * ${textScaleRatio} * ${textScaleRatio} *
        ${textScaleRatio}
    );
  }
  h2 {
    font-size: calc(
      1.2 * ${textBaseSize} * ${textScaleRatio} * ${textScaleRatio}
    );
  }
  h3 {
    font-size: calc(1.2 * ${textBaseSize} * ${textScaleRatio});
  }
  p {
    font-size: ${textBaseSize};
  }
`

export const Typography = createGlobalStyle`${typography}`
