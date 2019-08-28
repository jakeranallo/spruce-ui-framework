import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Logo = styled(motion.path)``

Logo.defaultProps = {
  d: 'M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z',
  fill: 'currentColor'
}
