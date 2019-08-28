import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  ButtonStyleProps,
  variant
} from 'styled-system'
import { motion } from 'framer-motion'

type ButtonProps = SpaceProps & LayoutProps & ColorProps & ButtonStyleProps

export const Button = styled(motion.button)<ButtonProps>`
  ${space}
  ${layout}
  ${color}
  ${variant({
    prop: 'variant',
    scale: 'buttonVariants'
  })}
`
Button.defaultProps = {
  m: 2,
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 }
}
