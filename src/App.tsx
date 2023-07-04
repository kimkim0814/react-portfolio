import * as React from "react"
import {
  ChakraProvider, Tabs, TabList, TabPanels, Tab, TabPanel, theme,
} from "@chakra-ui/react"
import { About } from "./components/About"
import { css } from "@emotion/react"
import { Skills } from "./components/Skills"
import { Work } from "./components/Work"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Tabs align="center" size="lg" >
      <TabList >
        <Tab css={tabStyle}>About</Tab>
        <Tab css={tabStyle}>Skills</Tab>
        <Tab css={tabStyle}>Work</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Skills />
        </TabPanel>
        <TabPanel>
          <Work />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </ChakraProvider>
)

const tabStyle = css({
  width: '350px'
})
