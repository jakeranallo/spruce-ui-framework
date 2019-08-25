import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps
} from 'styled-system'
import { motion } from 'framer-motion'

type BoxProps = SpaceProps & LayoutProps & ColorProps & TypographyProps

export const Box = styled(motion.div)<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${typography}
`
