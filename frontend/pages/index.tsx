import Page from '../components/Page'
import { Flex, Box, Text, Heading, Button, Icon, Path } from '../components'
import { list, item } from '../helpers/withStagger'
import { iconFade } from '../helpers/withIconFade'
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
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fillOpacity: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
        </Icon>
        <Heading>Flexible, scalable, themeable.</Heading>
        <Heading as={motion.h3}>Spruce React UI Framework</Heading>
        <Text>
          A fully customisable design system build with functional CSS and
          atomic design principles.
        </Text>
        <Box initial="hidden" animate="visible" variants={list}>
          <Button variant="primary" variants={item}>
            <Text>View on Github</Text>
          </Button>
          <Button variant="secondary" variants={item}>
            <Text>Contact Us</Text>
          </Button>
        </Box>
      </Box>
    </Flex>
  </Page>
)
