import Page from '../components/Page'
import { Flex, Box, Text, Heading } from '../components'
import { Button } from '../components/atoms/Button'

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 }
}

export default () => (
  <Page title="Home">
    <Flex
      as="section"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box as="main" width={2 / 3} textAlign="center">
        <Heading>Flexible, scalable, themeable.</Heading>
        <Heading as="h3">Spruce React UI Framework</Heading>
        <Text>
          A fully customisable design system build with functional CSS and
          atomic design principles.
        </Text>
        <Box initial="hidden" animate="visible" variants={list}>
          <Button variant="primary" variants={item}>
            View on Github
          </Button>
          <Button variant="secondary" variants={item}>
            Contact Us
          </Button>
        </Box>
      </Box>
    </Flex>
  </Page>
)
