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
  mvc: require('../assets/mvc.png'), // eslint-disable-line global-require
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: 'white',
    tertiary: 'white',
    quartenary: 'white',
  },
  {
    primary: 'Open Sans Condensed',
    secondary: 'Open Sans Condensed',
    tertiary: 'Open Sans Condensed',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck
          transition={['zoom', 'slide']}
          transitionDuration={500}
          textColor="white"
          progress="bar"
        >
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Web Programming Seminar
            </Heading>
            <Heading size={5} fix textColor="white">
              Week 13
            </Heading>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              SQL builder / MVC / Cookie & Session
            </Text>
          </BgSlide>
          {/* =================================
            Outline
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                SQL builder
              </ListItem>
              <ListItem>
                MVC
              </ListItem>
              <ListItem>
                Cookie & Session
              </ListItem>
            </List>
          </BgSlide>

          {/* =================================
            SQL builder
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              SQL builder
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Knex.js
            </Heading>
            <List>
              <ListItem>

                More then SQL builder

              </ListItem>
              <ListItem>

                Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle

              </ListItem>
              <ListItem>

                Node style callbacks as well as a promise interface

              </ListItem>
              <ListItem>

                open source on GitHub

              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Install
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/install.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Usage
            </Heading>
            <List>
              <ListItem>

                Connecting to the DB

              </ListItem>
              <ListItem>

                Only using SQL builder

              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Connecting to the DB
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/connecting.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Only using SQL builder
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/only-builder.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              SELECT, FROM
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/select-from.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              prefix
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/prefix.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              WHERE
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/where.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Operator
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/operator.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              more where (1/2)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/more-where.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              more where (2/2)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/more-where-2.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              JOIN (1/2)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/join.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              JOIN (2/2)
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/join-2.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              clear API
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/clear.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              groupBy, orderBy
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/by.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              INSERT
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/insert.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              UPDATE
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/update.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              DELETE
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/delete.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              mysql
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/mysql.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              mysql-knex
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/mysql-knex.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              knex
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/knex.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          {/* =================================
            MVC
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              MVC
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Model–view–whatever
            </Heading>
            <List>
              <ListItem>
                Model–view–controller
              </ListItem>
              <ListItem>
                Model–view–adapter
              </ListItem>
              <ListItem>
                Model–view–presenter
              </ListItem>
              <ListItem>
                Model–view–viewmodel
              </ListItem>
              <ListItem>
                Model–view–whatever
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link
                href="https://alexatnet.com/model-view-controller-mvc-in-javascript/"
                target="_blank"
              >
                MVC
              </Link>
            </Heading>
            <List>
              <ListItem>
                Model - stores an application data
              </ListItem>
              <ListItem>
                View - renders Model for a client
              </ListItem>
              <ListItem>
                Controller - updates Model by reacting on client's actions
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              MVC
            </Heading>
            <Image
              src={images.mvc.replace('/', '')}
              style={{ width: 'auto' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Model
            </Heading>
            <List>
              <ListItem>
                The domain-specific representation of the information on which the application operates. The model is another name for the domain layer. Domain logic adds meaning to raw data
              </ListItem>
              <ListItem>
                (e.g., calculating if today is the user's birthday, or the totals, taxes and shipping charges for shopping cart items).
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Model
            </Heading>
            <List>
              <ListItem>
                資料傳輸物件
              </ListItem>
              <ListItem>
                實作商業邏輯
              </ListItem>
              <ListItem>
                對資料庫進行操作
              </ListItem>
              <ListItem>
                包含所有的邏輯、物件，內容豐富
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              View
            </Heading>
            <List>
              <ListItem>
                Renders the model into a form suitable for interaction, typically a user interface element.
              </ListItem>
              <ListItem>
                MVC is often seen in web applications, where the view is the HTML page and the code which gathers dynamic data for the page.
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              View
            </Heading>
            <List>
              <ListItem>
                視圖
              </ListItem>
              <ListItem>
                包含畫面、顯示的邏輯
              </ListItem>
              <ListItem>
                僅呈現，故盡量單純(笨笨)的呈現即可
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Controller
            </Heading>
            <List>
              <ListItem>
                Processes and responds to events, typically user actions, and invokes changes on the model and perhaps the view.
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Controller
            </Heading>
            <List>
              <ListItem>
                處理和回應使用者輸入和互動
              </ListItem>
              <ListItem>
                控制程式流程
              </ListItem>
              <ListItem>
                以傳遞資料為主
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              MVC mini example
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/mvc.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              MVC Pros
            </Heading>
            <List>
              <ListItem>
                使程式結構更加直覺
              </ListItem>
              <ListItem>
                增加程式可用性
              </ListItem>
              <ListItem>
                程式方便管理
              </ListItem>
              <ListItem>
                程式擴充性高
              </ListItem>
              <ListItem>
                職責分離，有利於團隊開發
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              MVC Cons
            </Heading>
            <List>
              <ListItem>
                管理文件增加
              </ListItem>
              <ListItem>
                嚴謹的系統架構與規劃
              </ListItem>
              <ListItem>
                需要重覆的測試
              </ListItem>
            </List>
          </BgSlide>
          {/* =================================
            Cookie & Session
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Cookie & Session
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              History
            </Heading>
            <List>
              <ListItem>
                1994 年網景公司推 Netscape
              </ListItem>
              <ListItem>
                由文字瀏覽器 Lynx 合作開發者 Lou Montulli 發明
              </ListItem>
              <ListItem>
                1997 年 RFC 2190
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Cookie
            </Heading>
            <List>
              <ListItem>
                server 發送 Set-Cookie 到 client 端
              </ListItem>
              <ListItem>
                瀏覽器儲存 Cookie
              </ListItem>
              <ListItem>
                每次瀏覽器都會發送 Cookie 到 server
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Cookie 參數
            </Heading>
            <List>
              <ListItem>
                path: 符合的路徑才送 Cookie
              </ListItem>
              <ListItem>
                Expires, Max-Age: 告訴瀏覽器何時過期
              </ListItem>
              <ListItem>
                Expires: UTC 時間字串
              </ListItem>
              <ListItem>
                Max-Age: 多久之後過期，不是固定時間點
              </ListItem>
              <ListItem>
                HttpOnly: 不允許透過 document.cookie 更改 Cookie
              </ListItem>
              <ListItem>
                Secure: 只有在 HTTPS 的時候才生效，較難被竊聽，安全性高。
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Cookie 參數
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/set-cookie.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Cookie 特性
            </Heading>
            <List>
              <ListItem>
                Domain specific：只針對原本的 domain 起作用。
              </ListItem>
              <ListItem>
                舉例，在 *.example.com 存入的 cookie，不會出現在 *.not-example.com
              </ListItem>
              <ListItem>
                設定期限過後會自動失效
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              使用 cookie-parser
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/cookie-parser.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Cookie 優化
            </Heading>
            <List>
              <ListItem>
                盡量減少 Cookie 大小
              </ListItem>
              <ListItem>
                靜態元件用不同的主機名稱
              </ListItem>
              <ListItem>
                Cookie 無法保護敏感資料
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Session
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Session 特性
            </Heading>
            <List>
              <ListItem>
                放在 server
              </ListItem>
              <ListItem>
                一般設定 20 分鐘過期
              </ListItem>
              <ListItem>
                比 Cookie 有更高的安全性
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Session Store
            </Heading>
            <List>
              <ListItem>
                memory
              </ListItem>
              <ListItem>
                cookie (不推薦)
              </ListItem>
              <ListItem>
                cache (Redis, Memcached)
              </ListItem>
              <ListItem>
                mongoDB
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              使用 express-session
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/express-session.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              利用 cache 當做 session store
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/tj/connect-redis">
                  connect-redis
                </Link>
              </ListItem>
              <ListItem>
                不同 process 可以共享 session
              </ListItem>
              <ListItem>
                擴充性高
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Cookie 和 Session mapping
            </Heading>
            <List>
              <ListItem>
                1. 直接將 sessionId 存在 Cookie
              </ListItem>
              <ListItem>
                2. client 利用 query string 送到 server
              </ListItem>
              <ListItem>
                3. ETag (不介紹)
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              直接將 sessionId 存在 Cookie
            </Heading>
            <List>
              <ListItem>
                Cookie 只有 sessionId
              </ListItem>
              <ListItem>
                使用者儲存的資料少
              </ListItem>
              <ListItem>
                安全性較佳
              </ListItem>
              <ListItem>
                <Link
                  href="https://github.com/senchalabs/connect"
                  target="_blank"
                >
                  connect
                </Link>
                {' '}
                套件使用此方法實作
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              client 利用 query string 送到 server
            </Heading>
            <List>
              <ListItem>
                http://www.example.com/?sessionId='xxxx'
              </ListItem>
              <ListItem>
                安全性低
              </ListItem>
              <ListItem>
                網址容易被竄改和分享
              </ListItem>
              <ListItem>
                可以避免使用者沒有開啟 Cookie 功能
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Signed Cookie
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Signed Cookie
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/signed-cookie.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              cookie-session
            </Heading>
            <List>
              <ListItem>
                將 Session 存在 Cookie
              </ListItem>
              <ListItem>
                利用對稱加密，key 存在 server
              </ListItem>
              <ListItem>
                將加密過後的字串傳到 Cookie 儲存
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              cookie-session
            </Heading>
            <CodePane
              lang="js"
              source={require('raw!../assets/codes/cookie-session.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Signed Cookie vs. cookie-session
            </Heading>
            <List>
              <ListItem>
                Signed Cookie 可見不可竄改
              </ListItem>
              <ListItem>
                cookie-session 不可見也不可竄改
              </ListItem>
              <ListItem>
                Signed Cookie 一般是長期保存
              </ListItem>
            </List>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
