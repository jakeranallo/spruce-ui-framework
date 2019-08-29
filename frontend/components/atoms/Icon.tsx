import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps
} from 'styled-system'
import { motion } from 'framer-motion'

export type IconProps = SpaceProps & LayoutProps & ColorProps

export const Icon = styled(motion.svg)<IconProps>`
  ${space}
  ${layout}
  ${color}
  overflow: visible;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
`

Icon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 100 100',
  width: '24px'
}
