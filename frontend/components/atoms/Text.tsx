import styled from 'styled-components'
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  color,
  ColorProps
} from 'styled-system'

type TextProps = SpaceProps & TypographyProps & ColorProps

export const Text = styled.p<TextProps>`
  ${space}
  ${typography}
  ${color}
`
