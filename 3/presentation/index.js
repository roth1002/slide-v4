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
  node: require('../assets/node.png'), // eslint-disable-line global-require
  ryan: require('../assets/ryan_dahl.jpg'), // eslint-disable-line global-require
  v8: require('../assets/v8.jpg'), // eslint-disable-line global-require
  nonblocking: require('../assets/nonblocking.png'), // eslint-disable-line global-require
  nodeApi: require('../assets/nodeApi.png'), // eslint-disable-line global-require
  http: require('../assets/http1-req-res-details.png'), // eslint-disable-line global-require
  url: require('../assets/url.png'), // eslint-disable-line global-require
  middleware: require('../assets/middleware.png'), // eslint-disable-line global-require
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
              Week 3: Node
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              CommonJS / Express / npm script / Git
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>Node</ListItem>
              <ListItem>
                  CommonJS
              </ListItem>
              <ListItem>
                  HTTP / Express
              </ListItem>
              <ListItem>
                  Server side render
              </ListItem>
              <ListItem>
                  npm script
              </ListItem>
              <ListItem>
                  Git warm up
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Image src={images.node.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Ryan Dahl
            </Heading>
            <Image src={images.ryan.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              History
            </Heading>
            <List>
              <ListItem>
                  Non-blocking
              </ListItem>
              <ListItem>
                  Event-driven
              </ListItem>
              <ListItem>
                  V8 engine
              </ListItem>
              <ListItem>
                  JS
              </ListItem>
              <ListItem>
                  2009 open source Node.js
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={2} textColor="white">
              V8 engine
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            libuv: 跨平台（*nix, windows）抽象封裝層
            <Image src={images.v8.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={2} textColor="white">
              Non-blocking
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              當你被 block 了就是 blocking
            </Heading>
            <br />
            <Heading size={4} lineHeight={1} textColor="white">
              當你沒有被 block 就是 non-blocking
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Node 是單執行緒 non-blocking
            </Heading>
            <Image src={images.nonblocking.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={1} textColor="white">
              CommonJS
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              CommonJS
            </Heading>
            <List>
              <ListItem>
                  希望 JavaScript 可以 run 在任何地方
              </ListItem>
              <ListItem>
                  模組規範
              </ListItem>
              <ListItem>
                  I/O, 檔案系統
              </ListItem>
              <ListItem>
                  require, exports
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              引用模組 require
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/require.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary" lineHeight={2}>
              引入後便可以使用
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/require-usage.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              模組定義 & 導出 exports
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/exports.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary" lineHeight={2}>
              亦可 require 其他模組再 exports
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/require-exports.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Node 內建模組
            </Heading>
            <Image src={images.nodeApi.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              http 模組
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/node-http.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              fs 模組
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/node-fs.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Demo & Practice
            </Heading>
          </BgSlide>

          { /* =================================
            HTTP / express.js
            ================================= */ }

          <BgSlide transition={['slide']}>
            <Heading size={1} lineHeight={2} textColor="white">
              HTTP / Express.js
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              HTTP
            </Heading>
            <List>
              <ListItem>
                  HyperText Transfer Protocol
              </ListItem>
              <ListItem>
                  超文本傳輸協定
              </ListItem>
              <ListItem>
                  HTTP Client 跟 Server 之間進行請求與回應的標準
              </ListItem>
              <ListItem>
                  2015/5 發表了 HTTP/2
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Request & Response
            </Heading>
            <Image src={images.http.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              <Link href="https://www.tutorialspoint.com/http/http_requests.htm" target="_blank">HTTP request</Link>
            </Heading>
            <List>
              <ListItem>
                  A Request-line
              </ListItem>
              <ListItem>
                  Zero or more header fields followed by CRLF
              </ListItem>
              <ListItem>
                  An empty line (i.e., a line with nothing preceding the CRLF)
              </ListItem>
              <ListItem>
                  Optionally a message-body
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              HTTP request example
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/http-request.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              <Link href="https://www.tutorialspoint.com/http/http_responses.htm" target="_blank">HTTP response</Link>
            </Heading>
            <List>
              <ListItem>
                  A Status-line
              </ListItem>
              <ListItem>
                  Zero or more header fields followed by CRLF
              </ListItem>
              <ListItem>
                  An empty line (i.e., a line with nothing preceding the CRLF)
              </ListItem>
              <ListItem>
                  Optionally a message-body
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              HTTP response example
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/http-response.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              URL structure
            </Heading>
            <Image src={images.url.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>

          { /* =================================
            Express.js
            ================================= */ }

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Express.js
            </Heading>
            <List>
              <ListItem>
                  web framework for Node.js
              </ListItem>
              <ListItem>
                  npm install express --save
              </ListItem>
              <ListItem>
                  npm install express-generator -g
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Express.js 101
            </Heading>
            <List>
              <ListItem>
                  middleware
              </ListItem>
              <ListItem>
                  routing
              </ListItem>
              <ListItem>
                  request (query, params, body)
              </ListItem>
              <ListItem>
                  response (send, json)
              </ListItem>
              <ListItem>
                  render view
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Simple express.js server
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-init.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Middleware
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-middleware.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Middleware
            </Heading>
            <Image src={images.middleware.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Middleware 針對 path
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-middleware-path.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Routing
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-routing.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              express.Router
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-router.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              解析 Request
            </Heading>
            <List>
              <ListItem>
                  req.params
              </ListItem>
              <ListItem>
                  req.query
              </ListItem>
              <ListItem>
                  req.body
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              req.params (1/3)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-req-params.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              req.query (2/3)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-req-query.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              req.body (3/3)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-req-body.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              回傳 Response
            </Heading>
            <List>
              <ListItem>
                  res.send
              </ListItem>
              <ListItem>
                  res.json
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              res.send(1/2)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-res-send.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              res.json(2/2)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-res-json.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={1} textColor="white">
              Render view
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/express-render-view.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Server side render
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              其實就是字串解析
            </Heading>
            <List>
              <ListItem>
                  讀取 template
              </ListItem>
              <ListItem>
                  語法分解（正規表達式）
              </ListItem>
              <ListItem>
                  產生待執行語句
              </ListItem>
              <ListItem>
                  與資料一起執行，產生字串
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              render template
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/render-template.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              demo
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="http://www.slideshare.net/lkiral/git-34157836">Git Warm up</Link>
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              今天帶走這些即可
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/git-basic.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              npm script
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              package.json
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/npm-script.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
