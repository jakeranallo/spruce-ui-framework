import Page from '../components/Page'
import { Flex, Box, Text, Heading, Button } from '../components'
import { list, item } from '../helpers/withStagger'

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
