import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'

export type InputProps = SpaceProps & LayoutProps

export const Input = styled.input<InputProps>`
  ${space}
  ${layout}
`
