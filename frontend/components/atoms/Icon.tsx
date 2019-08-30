import styled from 'styled-components'
import { motion } from 'framer-motion'
import { COMMON, CommonProps } from '../../global'
export interface IIcon {
  path: string
  variants?: any
  transition?: any
  fill?: string
  initial?: string
  animate?: string
  xmlns?: string
  viewBox?: string
}

const SVG = styled(motion.svg)`
  overflow: visible;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
`

const Path = styled(motion.path)``

const IconBase = ({
  path,
  variants,
  fill,
  transition,
  initial,
  animate,
  xmlns,
  viewBox,
  ...props
}: IIcon) => (
  <SVG xmlns={xmlns} viewBox={viewBox} {...props}>
    <Path
      d={path}
      variants={variants}
      transition={transition}
      fill={fill}
      initial={initial}
      animate={animate}
    />
  </SVG>
)

export const Icon = styled(IconBase)<CommonProps>`
  ${COMMON}
`

SVG.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 100 100'
}

Path.defaultProps = {
  fill: 'currentColor',
  initial: 'hidden',
  animate: 'visible'
}
