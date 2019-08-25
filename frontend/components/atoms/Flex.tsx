import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  flex,
  FlexProps
} from 'styled-system'

type FlexBoxProps = SpaceProps & LayoutProps & ColorProps & FlexProps

export const Flex = styled.div<FlexBoxProps>`
  ${space}
  ${layout}
  ${color}
  ${flex}
`
