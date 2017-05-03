import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text,
  S,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
} from 'spectacle';
import Terminal from "spectacle-terminal";

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import BgSlide from './BgSlide';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  runners: require('../assets/runners.png'), // eslint-disable-line global-require
  assert: require('../assets/assert.png'), // eslint-disable-line global-require
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: 'white',
  tertiary: 'white',
  quartenary: 'white',
}, {
  primary: 'Open Sans Condensed',
  secondary: 'Open Sans Condensed',
  tertiary: 'Open Sans Condensed',
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500} textColor="white" progress="bar">
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Web Programming Seminar
            </Heading>
            <Heading size={5} fix textColor="white">
              Week 9
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="60px 0px 0px" bold textColor="white">
              Router / Testing
            </Text>
          </BgSlide>
          { /* =================================
            Outline
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Router
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem><Text textColor="primary">Why we need a router</Text></ListItem>
              <ListItem><Text textColor="primary">History (push, replace, back, go)</Text></ListItem>
              <ListItem><Text textColor="primary">Brower History / Hash History / Memory History</Text></ListItem>
              <ListItem><Text textColor="primary">React Router</Text></ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              為什麼我們需要 Router?
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              我們不一定需要 Router
            </Heading>
            <Text textColor="white" lineHeight={2}>
              在網頁功能一定程度複雜後<br />
              我們有必要把功能拆分到不同頁面去<br />
              但同時又必須把模組化<br />
              還有 Component 的特性發揮出來
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Router 需要有操作 History 的能力
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              History 的操作主要有幾種
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem><Text textColor="primary">push - 新增一筆</Text></ListItem>
              <ListItem><Text textColor="primary">replace - 取代目前這筆</Text></ListItem>
              <ListItem><Text textColor="primary">back - 取出上一筆</Text></ListItem>
              <ListItem><Text textColor="primary">go(n) - 到第 n 筆</Text></ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              History 的實作主要有幾種
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem><Text textColor="primary">HTML5 History</Text></ListItem>
              <ListItem><Text textColor="primary">Hash History</Text></ListItem>
              <ListItem><Text textColor="primary">Memory History</Text></ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              HTML5 History
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/session-history.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Hash History
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/hash-history.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Memory History
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem><Text textColor="primary">用 JS Object 來當作 History State</Text></ListItem>
              <ListItem><Text textColor="primary">在測試時可以使用</Text></ListItem>
              <ListItem><Text textColor="primary">也用在 React Native、React VR 等環境</Text></ListItem>
              <ListItem><Text textColor="primary">有 JS Rumtime 就能使用</Text></ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              React Router
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Install React Router
            </Heading>
            <Terminal title="1. chentsulin@chentsulin: ~(zsh)" showFirstEntry output={[
              "$ npm install --save react-router-dom\n\n# or\n\n$ yarn add react-router-dom",
            ]} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Route & Link
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/route-link.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Switch
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/route-switch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              404 Page Not Found (Match All)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/route-404.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Redirect
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/route-redirect.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>


          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Params
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/route-params.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              延伸閱讀
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem><Text textColor="primary">NavLink</Text></ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Testing
            </Heading>
            <Layout>
              <Fill>
                <List style={{ listStylePosition: 'inherit' }}>
                  <ListItem><Text textColor="primary">Philosophy</Text></ListItem>
                  <ListItem><Text textColor="primary">Test Runner</Text></ListItem>
                  <ListItem><Text textColor="primary">Async Test</Text></ListItem>
                  <ListItem><Text textColor="primary">Test Express App</Text></ListItem>
                </List>
              </Fill>
              <Fill>
                <List style={{ listStylePosition: 'inherit' }}>
                  <ListItem><Text textColor="primary">Testing Double</Text></ListItem>
                  <ListItem><Text textColor="primary">Enzyme</Text></ListItem>
                  <ListItem><Text textColor="primary">Continuous Integration (CI)</Text></ListItem>
                  <ListItem><Text textColor="primary">Code Coverage</Text></ListItem>
                </List>
              </Fill>
            </Layout>
          </BgSlide>
          { /* =================================
            Philosophy
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              不熟自動化測試的人，通常都：
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    打開瀏覽器看看正不正常
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    加多一點的 console.log 看看結果
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    資料庫塞塞看可能有問題的資料
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    回報這個 bug 無法重現
                  </Text>
                </ListItem>
              </Appear>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              手動測試跟幾秒鐘就可以跑上百個<br />
              且能精準定位問題並重複執行的單元測試相比<br />
              非常的沒有效率
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              迷思：我沒有時間寫測試
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              寫測試絕對比被回報再 debug 來的快
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              大多寫的根本是不可測試程式碼
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/untestable.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              寫測試可以作為 User 審視 API 設計<br />
              也可以當作使用手冊與文件
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              許多耗時三個月以上的 Project 的敗亡<br />
              都是因為沒有寫測試<br />
              開發者無法應付複雜度，換人無法接手<br />
            </Text>
            <Appear>
              <Text textColor="white" lineHeight={2}>
                如何在要在上萬行且已經上線的專案之中<br />
                不改壞任何功能？
              </Text>
            </Appear>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              不同層級的測試
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  單元測試 Unit Testing
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  整合測試 Integration Testing
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  驗收測試 Acceptance Testing
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              單元測試 Unit Testing
            </Heading>
            <Text textColor="white" lineHeight={2}>
              驗證單元 (function、class、module) 的功能與可靠性<br />
              是專案測試的根基<br />
              可以最快找出 bug
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              整合測試 Integration Testing
            </Heading>
            <Text textColor="white" lineHeight={2}>
              驗證一個設計項目 (一組單元)<br />
              的功能、效能、可靠性<br />
              各物件之間的互動運作正常
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              驗收測試 Acceptance Testing
            </Heading>
            <Text textColor="white" lineHeight={2}>
              是否能針對 user story 正常運作功能<br />
              應該用使用者能懂的方式撰寫驗收測試<br />
              使用真實的系統做測試
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              TDD (Test-Driven Development) 測試驅動開發
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    1. 先寫測試
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    2. 執行測試，看到測試失敗
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    3. 撰寫最少的 code 讓測試通過
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    4. 執行測試，看到測試通過
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    5. 重構
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    6. 維持測試通過
                  </Text>
                </ListItem>
              </Appear>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              回報 bug 的最好方式就是提交失敗的測試
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              BDD (Behavior-Driven Development) 行為驅動開發
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    描述行為的 specification
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    寫得像是英文語句
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    domain-specific language (DSL)
                  </Text>
                </ListItem>
              </Appear>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              TDD v.s. BDD
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/tddbdd.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              London schools of TDD<br />
              v.s.<br />
              Chicago schools of TDD
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/tdddiff.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              開始試著寫測試吧！
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              <Link
                href="https://nodejs.org/api/assert.html"
                target="_blank"
              >node assert</Link>
            </Heading>
            <Image src={images.assert.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/assert.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              只是用 assert 好像很難組織起來
            </Heading>
          </BgSlide>
          { /* =================================
            Test Runner
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              Test Runner
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              直接跑 js 就能測試，不過用 runner 有許多好處
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <Appear>
                <ListItem>
                  <Text textColor="primary">可以比較有架構性的建構測試</Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">可以過濾特定的測試</Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">有比較清楚的 assertion</Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">有比較好的 reporter</Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">有些有平行執行的功能</Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">許多 helper 等等</Text>
                </ListItem>
              </Appear>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              Runners
            </Heading>
            <Image src={images.runners.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Runners
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://github.com/jasmine/jasmine"
                    target="_blank"
                  >
                    Jasmine
                  </Link> - Behavior-driven development framework
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://github.com/facebook/jest"
                    target="_blank"
                  >
                    Jest
                  </Link> - Facebook 基於 Jasmine 打造的 runner
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://github.com/mochajs/mocha"
                    target="_blank"
                  >
                    Mocha
                  </Link> -
                  <Link
                    href="https://github.com/tj"
                    target="_blank"
                  >
                    tj
                  </Link> 以前的作品，現在是主流
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://github.com/avajs/ava"
                    target="_blank"
                  >
                    Ava
                  </Link> -
                  <Link
                    href="https://github.com/sindresorhus"
                    target="_blank"
                  >
                    sindresorhus
                  </Link>
                    花大量時間投入的專案
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Comparison
            </Heading>
            <Link
              href="https://github.com/koajs/koa/issues/703#issue-145571080"
              target="_blank"
            >
              An issue on koa repo
            </Link>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={2} textColor="white">
              Jest
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Install Jest
            </Heading>
            <Terminal title="1. chentsulin@chentsulin: ~(zsh)" showFirstEntry output={[
              "$ npm install --save-dev jest babel-jest\n\n# or\n\n$ yarn add --dev jest babel-jest",
            ]} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              習慣把測試寫在檔案旁邊的 __tests__ 裡面
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/tests.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Execute
            </Heading>
            <Terminal title="1. chentsulin@chentsulin: ~(zsh)" showFirstEntry output={[
              "$ jest",
            ]} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              也要測試極端、負面案例
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/edge.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              除了 it 還可以使用 describe 來把測試分群
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/describe.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              .toBe 跟 .toEqual 的差別？
            </Heading>
          </BgSlide>
          { /* =================================
            Async Tests
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Async Tests
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              JavaScript 裡面很多東西都牽扯到非同步
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              回傳 promise
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/promise.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              使用 ES2016 的 async await
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/async-install.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Heading size={6} lineHeight={2} textColor="white">
              安裝完後就可以使用了
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/async.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          { /* =================================
            Test Express App
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Test Express App
            </Heading>
            <Text textColor="white" lineHeight={2}>
              <Link
                href="https://github.com/visionmedia/supertest"
                target="_blank"
              >
                supertest
              </Link>
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Install supertest
            </Heading>
            <Terminal title="1. chentsulin@chentsulin: ~(zsh)" showFirstEntry output={[
              "$ npm install --save-dev supertest\n\n# or\n\n$ yarn add --dev supertest",
            ]} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/supertest.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          { /* =================================
            Testing Double (測試替身)
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Testing Double (測試替身)
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              有時候你想知道 function 有沒有被 call<br />
              卻不希望發生 function 的 side effects
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/spy.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              有時候你讓 function 回傳假的值<br />
              有時候你想模擬的特定 error
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/stub.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          { /* =================================
            Enzyme
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Enzyme
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/enzyme-install.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/enzyme.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          { /* =================================
            Continuous Integration (CI)
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              測試一定要自動化、想測試一個指令即可觸發
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Continuous Integration (CI)
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              可以把自動化 test、release、deploy 整合<br />
              最好是幾分鐘就能做一個新的 release<br />
              下班前 master 不能 build fail<br />
              把 master 搞到 build fail 的人要受逞罰
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              CI 服務
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://travis-ci.org/"
                    target="_blank"
                  >
                    Travis CI
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://circleci.com/"
                    target="_blank"
                  >
                    Circle CI
                  </Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              Code Coverage
            </Heading>
            <Text textColor="white" lineHeight={2}>
              有百分之多少的程式碼、function 被測試過<br />、跑過幾次
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              涵蓋率低品質一定不好<br />
              但涵蓋率高不太表品質好<br />
              有可能沒測到重點
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              用 jest 來分析測試涵蓋率
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/jest-cov.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Coverage 服務
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://codecov.io/"
                    target="_blank"
                  >
                    Codecov
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://coveralls.io/"
                    target="_blank"
                  >
                    Coveralls
                  </Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="white" lineHeight={2}>
              好的設計不能用工具強制獲得，<br />
              它是由彼此交談、互相學習、<br />
              結隊進行代碼審查的人創造的。 <br />
              - The Art of Unit Testing
            </Text>
          </BgSlide>
          <BgSlide transition={["slide", "spin"]}>
            <Heading caps size={1} textColor="tertiary">
              THE END
            </Heading>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
