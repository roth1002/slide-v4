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
  reduxMiddleware: require('../assets/redux-middleware.jpg'),
  reactWithoutRedux: require('../assets/react-state-pass.png'),
  reactWithRedux: require('../assets/react-with-redux.png'),
  flux: require('../assets/flux.png'),
  fluxDataFlow: require('../assets/flux-data-flow.png'),
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
              Week 13: Redux
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">

            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Why Redux?
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
            軟體首要技術使命是管理複雜度。– Steve McConnell in <a href="http://stackoverflow.com/questions/1711/what-is-the-single-most-influential-book-every-programmer-should-read">Code Complete</a>
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              React 的出現，已經讓前端的可預測性大大提高
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              但當 React Web App 複雜到一定程度的時候...
            </Heading>
            <Image src={images.reactWithoutRedux.replace('/', '')} style={{ width: '50%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              能不能集中管理 State ?
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              Flux
            </Heading>
            <Image src={images.flux.replace('/', '')} style={{ width: '90%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              1. 集中管理的 state
            </Heading>
            <Image src={images.reactWithRedux.replace('/', '')} style={{ width: '70%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              2. Unidirectional data flow
            </Heading>
            <Image src={images.fluxDataFlow.replace('/', '')} style={{ width: '90%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Flux 因為一些歷史因素和本身的缺點，被另一套繼承自它且更簡單的框架取代
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={2} textColor="white">
              Redux
            </Heading>
            <Text textColor="primary">
              React EU Conference 意外做出來的
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                  Principles
              </ListItem>
              <ListItem>
                  Elements
              </ListItem>
              <ListItem>
                  with React
              </ListItem>
              <ListItem>
                  Async
              </ListItem>
            </List>
          </BgSlide>
          {/* Principles */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Principles
            </Heading>
            <List>
              <ListItem>
                  Single Source of True
              </ListItem>
              <ListItem>
                  Read-Only State
              </ListItem>
              <ListItem>
                  Pure-Function State Change
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              <a href="http://chentsulin.github.io/redux/docs/introduction/ThreePrinciples.html">Redux 三大原則</a>
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              Single source of True
            </Heading>
            <Text textColor="primary">
              整個前端 App 的 state 全存在唯一的樹狀 store 裡面
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              Read-Only State
            </Heading>
            <Text textColor="primary">
              改變 store 的唯一方式是送一個描述改變的 object ，也就是 action
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={1} textColor="white">
              Pure-Function State Change
            </Heading>
            <Text textColor="primary">
              store 根據 action 如何變化， 必須寫成一個 Rure Function，也就是 reducer
            </Text>
          </BgSlide>

          {/* Elements */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Elements
            </Heading>
            <List>
              <ListItem>
                  Action
              </ListItem>
              <ListItem>
                  Reducer
              </ListItem>
              <ListItem>
                  Store
              </ListItem>
              <ListItem>
                  Middleware
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Action
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/action.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              發送 Action
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/action-dispatch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              發送 Action (比較好的作法)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/action-dispatch-better.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Reducer
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/reducer.example")}
              margin="0 20px 0"
              textSize="1.2em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Reducer Implementation
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/reducer-implementation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              DO NOT MUTATE STATE!
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/reducer-implementation-wrong.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Store
            </Heading>
            <Text textColor="primary">
              應用程式中唯一的 state 來源
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              把 reduce 丟進 createStore 來組成 store
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/store.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              實際應用上會有多個 reducer，此時就用 combineReducer 組起來
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/store-combine-reducers-1.example")}
              margin="0 20px 0"
              textSize="0.5em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/store-combine-reducers-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Redux 有諸多限制，但都是為了符合三大原則，讓程式變得更好維護
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Middleware
            </Heading>
            <Image src={images.reduxMiddleware.replace('/', '')} style={{ width: '70%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Middleware
            </Heading>
            <Text textColor="primary">
              對 dispatch 來的東西（可以不用是 action）動手腳
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              applyMiddleware
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/apply-middleware.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              redux-logger for dev
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/use-redux-logger.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          {/* With React */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              react-redux
            </Heading>
            <List>
              <ListItem>
                  Provider
              </ListItem>
              <ListItem>
                  connect
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              Redux 本身並不依賴特定 View Layer ，這邊介紹 React
            </Text>
            <Text textColor="primary">
              使用 react-redux ，只有兩個API: Provider 和 connect
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              installation
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/react-redux-install.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              Provider
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/provider.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              connect
            </Heading>
            <Text textColor="primary">
              回傳一個 <a href="https://facebook.github.io/react/docs/higher-order-components.html">High-Order component</a> (傳進去一個 component，回傳一個修飾過的 component)
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              connect
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/connect.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              connect - mapStateToProps
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/connect-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              connect - mapDispatchToProps
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/connect-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={1} textColor="white">
              connect - mergeProps
            </Heading>
            <Text textColor="primary">
              有時候非常好用，但會增加 debug 難度
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/connect-3.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              常見的 src folder structure
            </Heading>
            <List>
              <ListItem>
                  actions: 放各種 action 和 action creator
              </ListItem>
              <ListItem>
                  reducers: 放各種 reducer
              </ListItem>
              <ListItem>
                  component: 放 presentational components
              </ListItem>
              <ListItem>
                  container: 放 container components
              </ListItem>
            </List>
            <Text>
              <a href="http://redux.js.org/docs/basics/UsageWithReact.html">Usage with react</a>
            </Text>
          </BgSlide>

          {/* Async */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Async
            </Heading>
            <List>
              <ListItem>
                  Design
              </ListItem>
              <ListItem>
                  redux-thunk
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              前端資料流中，AJAX 幾乎是最重要的
            </Text>
          </BgSlide><BgSlide transition={['slide']}>
            <Text textColor="primary">
              但 Redux 本身是同步（synchronous）處理 action
            </Text>
            <Text textColor="primary">
              所以如果要處理非同步，你可以：
            </Text>
            <List>
              <ListItem>
                1. 在 redux 外面處理
              </ListItem>
              <ListItem>
                2. 把非同步機制整合到 redux 裡面 (今天要討論的)
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              無論採取哪種方法，都要先設計好 actions 和 reducers
            </Text>
            <Text textColor="primary">
              這裡以 AJAX 為範例
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              Actions
            </Text>
            <List>
              <ListItem>
                1. GET_DATA_SUCCESS: 成功要回資料，把資料放在 payload
              </ListItem>
              <ListItem>
                2. GET_DATA_ERROR: 要資料過程發生錯誤，把錯誤訊息放在 error
              </ListItem>
              <ListItem>
                3. GET_DATA_START: 某些情況要讓使用者知道正在請求資料
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              Reducers
            </Text>
            <List>
              <ListItem>
                1. data: 把資料放在 payload，遇到 GET_DATA_SUCCESS 就更新
              </ListItem>
              <ListItem>
                2. isFetching: 是否正在要資料，init=false, 遇到 GET_DATA_START 改為 true，GET_DATA_SUCCESS 和 GET_DATA_ERROR 改為 false
              </ListItem>
              <ListItem>
                3. error: 放錯誤狀態，遇到 GET_DATA_ERROR 就更新
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              四個有名的 <a href="https://medium.com/react-native-training/redux-4-ways-95a130da0cdc">redux 非同步處理機制</a>
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              redux-thunk
            </Heading>
            <Text textColor="primary">
              讓使用者可以 dispatch 一個 function
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              redux-thunk: install
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/dispatch-thunk-install.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              redux-thunk: setup middleware
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/redux-thunk-setup-middleware.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              redux-thunk: new action creator
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/dispatch-thunk.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              redux-thunk: use it everywhere
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/dispatch-thunk-usage.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <a href="http://chentsulin.github.io/redux/docs/advanced/AsyncActions.html">更詳細的介紹</a>
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              redux-thunk 簡單易用，但有一些問題
            </Text>
            <List>
              <ListItem>
                1. 不好測試，尤其對一些複雜的流程（例如登入登出）
              </ListItem>
              <ListItem>
                2. 不容易中止非同步的 action
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              於是有了 redux-saga
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary">
              已經對 redux async 駕輕就熟的同學，可以參考<a href="https://denny.qollie.com/2016/05/14/redux-saga/">這裡</a>
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              淺談 redux 的設計和實作流程
            </Heading>
            <List>
              <ListItem>
                1. 思考頁面要呈現什麼給使用者
              </ListItem>
              <ListItem>
                2. 思考 store （reducer）裡面要有什麼
              </ListItem>
              <ListItem>
                3. 思考 store 會因應什麼樣的 action 而改變
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              淺談 redux 的設計和實作流程 - 續
            </Heading>
            <List>
              <ListItem>
                4. 定義 action 並寫 action creator
              </ListItem>
              <ListItem>
                5. 實作 reducer
              </ListItem>
              <ListItem>
                6. 把 store 裡的資料和 UI 接在一起
              </ListItem>
            </List>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
