import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box, Text } from "@chakra-ui/react"

export const Skills = () => {
  return (
    <Card >
      <CardHeader>
        <Heading size='md'>My Skills</Heading>
      </CardHeader>

      <CardBody >
        <Stack divider={<StackDivider />} spacing='4'>
          <Box >
            <Heading size='xs' textTransform='uppercase'>
              言語
            </Heading>
            <Text pt='2' fontSize='sm'>
              Ruby / PHP / Javascript / TypeScript
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              フレームワーク
            </Heading>
            <Text pt='2' fontSize='sm'>
              Ruby on Rails / Codeigniter / React
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              インフラ/データベース
            </Heading>
            <Text pt='2' fontSize='sm'>
              MySql / PostgreSQL / ECS / AWS Batch / S3 / Cloud Watch
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              資格
            </Heading>
            <Text pt='2' fontSize='sm'>
              AWS Certified Solutions Architect - Associate / 2級ファイナンシャル・プランニング技能士
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}
