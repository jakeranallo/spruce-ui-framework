import styled from 'styled-components'
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  color,
  ColorProps
} from 'styled-system'

type HeadingProps = SpaceProps & TypographyProps & ColorProps

export const Heading = styled.h1<HeadingProps>`
  ${space}
  ${typography}
  ${color}
`
