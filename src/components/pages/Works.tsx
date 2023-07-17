import { Box, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Text, HStack, Tag, Center } from '@chakra-ui/react'
import { SkillTags } from '../Items/SkillTags'

export const Works = () => {
  const skillsQiita = ['Ruby', 'TypeScript', 'React', 'Ruby on Rails', 'Docker']
  const skillsSalesGram = ['PHP', 'JavaScript', 'Codeigniter', 'Vue.js', 'PostgreSQL', 'AWS']
  const skillsNgWordCheckAndAddressCheck = ['PHP', 'JavaScript', 'jQuery', 'Codeigniter']

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Works</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' >
              Qiita株式会社(2023/2~)
            </Heading>
            <Text pt='4' fontSize='sm'>
              エンジニアに関する知識を記録・共有するためのサービス「Qiita」の開発・運用
            </Text>
            <Center mt='1'>
              <SkillTags skills={skillsQiita} />
            </Center>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              株式会社コマースロボティクス(2020/9~2023/1)
            </Heading>
            <Text pt='4' fontSize='sm'>
              請求書作成・送受信システム「SALESGRAM請求」の開発
            </Text>
            <Center mt='1'>
              <SkillTags skills={skillsSalesGram} />
            </Center>
            <Text mt='2' fontSize='sm'>
              社内システムair-logi・ecroboと連携用API「アドレスチェック」の開発・運用
            </Text>
            <Center mt='1'>
              <SkillTags skills={skillsNgWordCheckAndAddressCheck} />
            </Center>
            <Text mt='2' fontSize='sm'>
              社内向けアプリ「NGワードチェック」の開発・運用
            </Text>
            <Center mt='1'>
              <SkillTags skills={skillsNgWordCheckAndAddressCheck} />
            </Center>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}
