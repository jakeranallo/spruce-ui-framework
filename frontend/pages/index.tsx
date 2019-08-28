import Page from '../components/Page'
import { Flex, Box, Text, Heading, Button, Icon, Logo } from '../components'
import { list, item } from '../helpers/withStagger'
import { icon } from '../helpers/withIconFade'

export default () => (
  <Page title="Home">
    <Flex
      as="section"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box as="main" width={2 / 3} textAlign="center">
        <Icon width="20%" color="red" mb={6}>
          <Logo
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fillOpacity: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
        </Icon>
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
