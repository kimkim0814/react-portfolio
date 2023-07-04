import { Image, Text, Link, Center, Circle } from '@chakra-ui/react';
import CustomIcon from './Items/CustomIcon'
import { css } from "@emotion/react"

export const About = () => {
  return (
    <>
      <Image
        borderRadius="full"
        boxSize="250px"
        src="img/me.png"
      />
      <Text fontSize="2xl" mt={2}>Tsubasa Kimura</Text>
      <Text fontSize="xl" >Web developer</Text>
      <Text fontSize="2xl" fontWeight="bold" mt={4}>About</Text>
      <Text mt={1}>
        元PHPerのエンジニアです。
        趣味はカラオケ行ったり。<br />
        3週間でSAA取得(今はインフラ触ってない😵‍💫)
      </Text>
      <Text fontSize="xl" fontWeight="bold" mt={20}>Contact</Text>
      <Center mt={2}>
        <Link href="https://twitter.com/te_sin_" mr={30}>
          <Circle size="50px" css={defaultIconStyle(twitterIconStyle)}>
            <CustomIcon icon={"twitter"} />
          </Circle>
        </Link>
        <Link href="https://github.com/kimkim0814" mr={30}>
          <Circle size="50px" css={defaultIconStyle(githubIconStyle)}>
            <CustomIcon icon={"github"} />
          </Circle>
        </Link>
        <Link href="https://qiita.com/kim_t0814" >
          <Circle size="50px" css={defaultIconStyle(qiitaIconStyle)}>
            <CustomIcon icon={"search"} />
          </Circle>
        </Link>
      </Center>
    </>
  )
}

const twitterIconStyle = {
  background: "#1DA1F2",
}

const githubIconStyle = {
  background: "#171515",
}

const qiitaIconStyle = {
  background: "#59bb0c",
}



const defaultIconStyle = (theme: object) =>
  css({
    color: "#FFFFFF",
    ...theme,
  })
