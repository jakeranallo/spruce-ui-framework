import Page from '../components/Page'
import { Flex, Box, Text, Heading } from '../components'
import { Button } from '../components/atoms/Button'

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
        <Button variant="primary">View on Github</Button>
        <Button variant="secondary">Contact Us</Button>
      </Box>
    </Flex>
  </Page>
)
