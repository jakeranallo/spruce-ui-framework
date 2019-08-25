import Page from '../components/Page'
import { Signup } from '../components/Signup'
import { Feed } from '../components/Feed'
import { Box } from '../components/atoms/Box'
import { Heading } from '../components/atoms/Heading'

export default () => (
  <Page title="Home">
    <Heading>Heading</Heading>
    <Heading as="h3" color="red">
      Subheading
    </Heading>
    <Box
      as="section"
      color="primary" // Derived from theme.tsx
      width={[
        1, // 100% below the smallest breakpoint (all viewports)
        1 / 2, // 50% from the next breakpoint and up
        1 / 4 // 25% from the next breakpoint and up
      ]}
    >
      <Signup />
      <Feed />
    </Box>
  </Page>
)
