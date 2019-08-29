import { Box, Flex, Input } from '..'

interface IIconInput {
  before?: React.ReactNode
  after?: React.ReactNode
}

export const IconInput = (props: IIconInput) => (
  <Flex width="auto" alignItems="center" {...props}>
    {props.before && (
      <Box position="absolute" left="0" pl={2}>
        {props.before}
      </Box>
    )}
    <Input
      py={2}
      pl={props.before ? 4 : 2}
      pr={props.after ? 4 : 2}
      {...props}
    />
    {props.after && (
      <Box position="absolute" right="0" pr={2}>
        {props.after}
      </Box>
    )}
  </Flex>
)
