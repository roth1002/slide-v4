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


// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import BgSlide from './BgSlide';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  caniuse: require('../assets/caniuse.png'), // eslint-disable-line global-require
  comptable: require('../assets/comp-table.png'), // eslint-disable-line global-require
  socket: require('../assets/socket.png'), // eslint-disable-line global-require
  babel: require('../assets/babel.png'), // eslint-disable-line global-require
  babelIs: require('../assets/babel-is.png'), // eslint-disable-line global-require
  react: require('../assets/react.png'), // eslint-disable-line global-require
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
              Week 4: React
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              ES6 (ES2015) / Babel / JSX / React
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  ES6 (ES2015)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Babel
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  JSX
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  React
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              ES6 (ES2015)
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              幾個 ES2015 語法
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Arrow function
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/arrow-function.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Class
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/class-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/class-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Destructuring
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/destructuring.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Default
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/default.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Rest
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/rest.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Spread
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/spread.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Const
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/const.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Let
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/let.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={1} textColor="white">
              要用舊的語法做出相同的功能可以參考
            </Heading>
            <Link href="https://github.com/addyosmani/es6-equivalents-in-es5">
              ECMAScript 6 equivalents in ES5
            </Link>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              One more thing..
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Object Rest Spread!
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              A stage 3 proposal in<br />
              <Link
                href="https://github.com/tc39/ecma262"
                target="_blank"
              >
                tc39/ecma262
              </Link>
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Object Rest
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/object-rest.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Object Spread
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/object-spread.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              有了這些語法..但是..
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              瀏覽器支援度
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              之前推薦過的用來查瀏覽器支援度的
              <Link
                href="http://caniuse.com/"
                target="_blank"
              >caniuse</Link>
            </Heading>
            <Image src={images.caniuse.replace('/', '')} style={{ width: '90%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              JavaScript 版本相容性 table
              <Link
                href="https://kangax.github.io/compat-table/es6/"
                target="_blank"
              >版本相容性 table</Link>
            </Heading>
            <Image src={images.comptable.replace('/', '')} style={{ width: '90%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              等到所有 browser 支援<br /> 是不實際的
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              必須編譯 JavaScript<br /> 還有其他理由
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              在網路上傳輸：size 很重要
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Gzip：可壓縮至原本 30%
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Uglify：可壓縮至原本 50%
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  壓縮後通常會命名為 `.min.js`，例如：`https://fb.me/react-0.13.3.min.js`
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              瀏覽器 socket 數量限制
            </Heading>
            <Image src={images.socket.replace('/', '')} style={{ width: '60%' }} />
            <Text textColor="primary">
              在 HTTP2 普及之前
            </Text>
            <List>
              <ListItem>
                <Text textColor="primary">
                  把檔案串接 (concat) 成一個大檔
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  用多個網域來放 static resource
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Dead Code Elimination
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/dead-code-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/dead-code-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Babel
            </Heading>
            <Image src={images.babel.replace('/', '')} style={{ width: '90%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Image src={images.babelIs.replace('/', '')} style={{ width: '90%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              簡單的 setup 步驟
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  安裝 babel-cli, babel-preset-react, babel-preset-latest, babel-plugin-transform-object-rest-spread
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  寫 .babelrc，列出 presets 和 plugins
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  寫對應的 compile npm scripts
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              實際操作
            </Heading>
            <Link
              href="https://github.com/web-seminar/slide-v3/tree/gh-pages/4/demo/babel-setup"
              target="_blank"
            >範例</Link>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              React
            </Heading>
            <Image src={images.react.replace('/', '')} style={{ width: '60%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              應用程式狀態
            </Heading>
            <Text textColor="primary">
              應用程式的狀態存在於各個程式片斷中
            </Text>
            <Text textColor="primary">
              而且可能有許多複本存在不同變數中需要同步
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              React 的基本概念
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/react-basic.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              UI 由一個個的 Component 組合而成
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              定義 UI 而不要去操作 UI
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Hello World Component
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              定義一個 React Component
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/react-hello.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              把 Component render 到畫面上
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/react-render.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              就這麼簡單
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              JSX
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              jsx 是一種 JavaScript 的擴充語法<br />
              看起來像是 HTML<br />
              Babel 有支援 jsx 的編譯
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/react-element.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              背後其實是用 `React.createElement` 去作轉換
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/createElement.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              可以用 {'{}'} 傳非固定字串的屬性進去
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/prop-pass.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/className-htmlFor.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              更詳細可以看
              <Link
                href="https://facebook.github.io/react/docs/jsx-in-depth.html"
                target="_blank"
              >JSX in Depth</Link>
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Component render 常見錯誤
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              錯誤範例：回傳的根 element 只能有一個
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/comperror-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              包進一個共同根 element 是比較普遍的做法
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/compsolution-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              錯誤範例：用 undefined 去 createElement
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/comperror-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              props and state
            </Heading>
            <Text textColor="primary">
              這是初學者最容易有疑惑的地方
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              props
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              可以把 Yo 當做 props 傳下去：
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/prop-yo.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              沒有傳就會用預設值
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/prop-default.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              可以設定 prop 型別檢查，詳細的 propTypes 可以看
              <Link
                href="https://facebook.github.io/react/docs/reusable-components.html#prop-validation"
                target="_blank"
              >
                這裡
              </Link>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/prop-types.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              包在 element 裡面的東西則會作為 this.props.children 傳下去
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              只依靠 props 決定 UI 的 Component<br />
              稱為 Stateless Component<br />
              而且很容易測試<br />
              大部份的 component 都是這種
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              Stateless Functional Component
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/sfc.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              state
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              通常是比較高階的 component 才會有<br />
              有 state 的 component 被稱為 stateful component
            </Heading>
          </BgSlide>

           <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/state.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              如果能沒有 state 就不要有 state<br />
              發現兩個 component 用到同一個 state 就在往上提一層
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              它們相似的地方
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  都是一般 JavaScript 物件
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  都會觸發 UI 更新
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  對 UI 有決定性影響
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              如果 component 需要在某個時間點改變某個屬性<br />
              才需要是 state<br />
              大部份時候應該是 props
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Event System
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              React 使用 SyntheticEvent
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  在 nativeEvent 上封裝來達成跨平台
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  用 Event Delegation
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  用 Event pool
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  都是使用 camelCase
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              onSomeEvent...
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/event.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              詳細可以使用的 event 可以看
              <Link
                href="https://facebook.github.io/react/docs/events.html"
                target="_blank"
              >
                官方文件
              </Link>
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Controlled Components
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/no-value.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fix-value.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              通常的 Controlled Component 手法
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/controlled.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Think in React
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              用 component 的角度<br />
              <Link
                href="https://facebook.github.io/react/docs/thinking-in-react.html"
                target="_blank"
              >
                官方文件
              </Link>
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Step 1: break the UI into a component hierarchy
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Step 2: Build a static version in React
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Step 3: Identify the minimal (but complete) representation of UI state
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Step 4: Identify where your state should live
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Step 5: Add inverse data flow
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              事情發生的順序大多不重要
            </Heading>
            <Text textColor="primary">
              事件發生 (onClick..) 會去改變資料<br />
              資料決定 UI 長什麼樣跟事件本身無關
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              React Devtools
            </Heading>
            <Link
              href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
              target="_blank"
            >載點</Link>
          </BgSlide>

          <BgSlide transition={["slide", "spin"]}>
            <Heading caps size={1} textColor="tertiary">
              THE END
            </Heading>
            <Heading size={4} textColor="white">
              Thank you for listening!
            </Heading>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
