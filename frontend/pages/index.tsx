import Page from '../components/templates/Page'
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Icon,
  Input,
  IconInput,
  ButtonGroup
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
        <Icon
          path={icons.logo}
          variants={iconFade}
          transition={iconTransition}
          width={2 / 4}
          color="blue.5"
          mb={4}
          viewBox="0 0 180 81"
        />
        <Heading>Flexible, scalable, themeable.</Heading>
        <Heading as={motion.h3}>Spruce React UI Framework</Heading>
        <Text>
          A fully customisable design system build with functional CSS and
          atomic design principles.
        </Text>
        <Box as="form">
          <IconInput
            width={1}
            placeholder="text"
            before={
              <Icon
                path={icons.logo}
                variants={iconFade}
                transition={iconTransition}
                width={2 / 4}
                color="blue.1"
                mb={4}
                viewBox="0 0 180 81"
              />
            }
          />
          <Input placeholder="Email address..." />
        </Box>
        <ButtonGroup variants={staggerList}>
          <Button m={0} variant="primary" variants={staggerItem}>
            <Text>View on Github</Text>
          </Button>
          <Button m={0} variant="secondary" variants={staggerItem}>
            <Text>Contact Us</Text>
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  </Page>
)
