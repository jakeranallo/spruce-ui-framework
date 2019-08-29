import Page from '../components/Page'
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Icon,
  Input,
  IconInput,
  Path
} from '../components'
import {
  staggerList,
  staggerItem,
  iconFade,
  iconTransition
} from '../animation'
import { icons } from '../global/paths'
import { motion } from 'framer-motion'

export default () => (
  <Page title="Home">
    <Flex
      as="section"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box as="main" width={2 / 3} textAlign="center">
        <Icon width={2 / 4} color="primary" mb={4} viewBox="0 0 180 81">
          <Path
            d={icons.logo}
            variants={iconFade}
            transition={iconTransition}
          />
        </Icon>
        <Heading>Flexible, scalable, themeable.</Heading>
        <Heading as={motion.h3}>Spruce React UI Framework</Heading>
        <Text>
          A fully customisable design system build with functional CSS and
          atomic design principles.
        </Text>
        <Box as="form">
          <IconInput
            before={
              <Icon width="24px" color="primary" mb={4} viewBox="0 0 180 81">
                <Path
                  d={icons.logo}
                  variants={iconFade}
                  transition={iconTransition}
                />
              </Icon>
            }
          />
          <Input placeholder="Email address..." />
        </Box>
        <Box variants={staggerList}>
          <Button variant="primary" variants={staggerItem}>
            <Text>View on Github</Text>
          </Button>
          <Button variant="secondary" variants={staggerItem}>
            <Text>Contact Us</Text>
          </Button>
        </Box>
      </Box>
    </Flex>
  </Page>
)
