import {
  ChakraProvider,
  Tab,
  TabList,
  Tabs,
  theme,
} from "@chakra-ui/react"
import { css } from "@emotion/react"
import { About } from "./components/pages/About"
import { Skills } from "./components/pages/Skills"
import { Works } from "./components/pages/Works"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

const pathname = location.pathname;
const tabsIndex = pathname?.split('/')[1] === 'Skills' ? 1 : pathname?.split('/')[1] === 'Works' ? 2 : 0

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Tabs align="center" size="lg" defaultIndex={tabsIndex}>
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
