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
import { QiitaAchievement } from "./components/pages/QiitaAchievement"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

const pathname = location.pathname;
const tabsIndex = pathname?.split('/')[1] === 'skills' ? 1 : pathname?.split('/')[1] === 'works' ? 2 : pathname?.split('/')[1] === 'qiita-achievement' ? 3 : 0

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Tabs align="center" size="lg" defaultIndex={tabsIndex}>
        <TabList mb={4}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Tab css={tabStyle}>About</Tab>
          </Link>
          <Link to="skills" style={{ textDecoration: 'none' }}>
            <Tab css={tabStyle}>Skills</Tab>
          </Link>
          <Link to="works" style={{ textDecoration: 'none' }}>
            <Tab css={tabStyle}>Works</Tab>
          </Link>
          <Link to="qiita-achievement" style={{ textDecoration: 'none' }}>
            <Tab css={tabStyle}>QiitaAchievement</Tab>
          </Link>
        </TabList>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="works" element={<Works />} />
          <Route path="qiita-achievement" element={<QiitaAchievement />} />
        </Routes>
      </Tabs>
    </ChakraProvider>
  </BrowserRouter >
)

const tabStyle = css({
  width: '350px'
})
