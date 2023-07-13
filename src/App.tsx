import {
  ChakraProvider,
  Tab,
  TabList,
  Tabs,
  theme,
} from "@chakra-ui/react"
import { css } from "@emotion/react"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Works } from "./components/Works"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Tabs align="center" size="lg" >
        <TabList mb={4}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Tab css={tabStyle}>About</Tab>
          </Link>
          <Link to="Skills" style={{ textDecoration: 'none' }}>
            <Tab css={tabStyle}>Skills</Tab>
          </Link>
          <Link to="Works" style={{ textDecoration: 'none' }}>
            <Tab css={tabStyle}>Works</Tab>
          </Link>
        </TabList>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Works" element={<Works />} />
        </Routes>
      </Tabs>
    </ChakraProvider>
  </BrowserRouter >
)

const tabStyle = css({
  width: '350px'
})
