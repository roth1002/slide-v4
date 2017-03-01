import React from "react";

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
  TableItem
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import BgSlide from "./BgSlide";
import MyListItem from "./MyListItem";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  browser: require("../assets/browser.png"),
  backend: require("../assets/backend.png"),
  frontpage: require("../assets/frontpage.gif"),
  dreamweaver: require("../assets/dreamweaver.jpg"),
  rails: require("../assets/rails.png"),
  railsLike: require("../assets/rails-like.png"),
  trend: require("../assets/trend.png"),
  xml: require("../assets/xml.jpg"),
  json: require("../assets/json.png"),
  old: require("../assets/old.png"),
  ajax: require("../assets/ajax.png"),
  xmlvsjson: require("../assets/xml-vs-json.png"),
  lang: require("../assets/lang.png"),
  reactEco: require("../assets/react-eco.jpg"),
  reactNative: require("../assets/react-native.png"),
  hotMotion: require("../assets/hot-motion.gif"),
  npm: require("../assets/npm.png"),
  npm2: require("../assets/npm2.png"),
  module: require("../assets/module.png"),
  moduleCount: require("../assets/module-count.png"),
  console: require("../assets/console.png"),
  responsibility: require("../assets/responsibility.png"),
  html: require("../assets/html.png"),
  domTree: require("../assets/dom-tree.svg"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "white",
  tertiary: "white",
  quartenary: "white"
}, {
  primary: "Open Sans Condensed",
  secondary: "Open Sans Condensed",
  tertiary: "Open Sans Condensed"

});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} textColor="white" progress="bar">
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Web Programming Seminar
            </Heading>
            <Heading size={5} fix textColor="white">
              Week 1
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              Web 發展 / JavaScript / DOM
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} textColor="white">
              既然這門專題是<br />
              Web Programming
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textSize="1.5em" textColor="white">那麼不外乎</Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>
              前端
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} textColor="white">瀏覽器使用者介面</Heading>
            <Image src={images.browser.replace("/", "")} style={{ width: "80%" }} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>
              後端
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} textColor="white">處理使用者請求的伺服器、資料庫</Heading>
            <Image src={images.backend.replace("/", "")} style={{ width: "80%" }} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={2} textColor="white">
              Web 應用程式的發展
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>
              <Text textColor="white"><code>.edu</code> 的網頁保存了很多歷史遺跡...</Text>
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.5}>
              十五年前<br />
              小學、國中會教你使用 Frontpage<br />
              或是 Dreamweaver 來開發網站
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Image src={images.frontpage.replace("/", "")} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">其實一直有在推陳出新，以前還不屬於 Adobe</Text>
            <Image src={images.dreamweaver.replace("/", "")} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={2} textColor="white">那時候的 fashion 就是</Heading>
            <List>
              <Appear><ListItem>會閃爍的跑馬燈</ListItem></Appear>
              <Appear><ListItem>像仙女棒一般的滑鼠游標</ListItem></Appear>
              <Appear><ListItem>紀錄來客數的計數器</ListItem></Appear>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={5} textColor="white">那時我們看到的網頁是這樣的</Heading>
            <List>
              <Appear><ListItem>
                <Link
                  href="https://www.google.com.tw/search?es_sm=91&q=個人首頁&oq=個人首頁"
                  target="_blank"
                >Google 搜尋個人首頁</Link>
              </ListItem></Appear>
              <Appear><ListItem>
                <Link
                  href="https://www.google.com.tw/search?es_sm=91&q=個人網頁&oq=個人網頁"
                  target="_blank"
                >Google 搜尋個人網頁</Link>
              </ListItem></Appear>
              <Appear><ListItem>
                <Link
                  href="http://www.tdes.chc.edu.tw/works/computer/kimo/kimo.htm"
                  target="_blank"
                >奇怪的游標</Link>
              </ListItem></Appear>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={5} textColor="white">之後漸漸地出現了所謂動態網站</Heading>
            <List>
              <Appear><ListItem>可以查詢資料庫、記錄使用者</ListItem></Appear>
              <Appear><ListItem>那時候好像清一色都是用什麼 P 開發 <br />JSP、PHP、ASP</ListItem></Appear>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <CodePane
              lang="php"
              source={require("raw!../assets/codes/old-php.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">現在這種寫法已經不太能被接受</Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>Ruby on Rails 出現</Heading>
            <Image src={images.rails.replace("/", "")} />
            <Text textColor="white">優雅、且對開發者友善，很快地席捲 Web 開發</Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>哲學</Heading>
            <List>
              <ListItem>Don't Repeat Yourself</ListItem>
              <ListItem>Convention Over Configuration</ListItem>
              <ListItem>RESTful</ListItem>
              <ListItem>Test Driven Development</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">現在各種語言幾乎都有一套承襲 Rails Style 的框架</Text>
            <Image src={images.railsLike.replace("/", "")} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>
              Ajax 的盛行
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.5}>
              還記得哪個時候漸漸的<br />
              網頁換頁之間 loading 比較少出現白畫面了嗎？<br />
              像是 Gmail, Google Map 等 app <br />
              操作體驗都不太會中斷的時候<br />
              這就是 Ajax (Asynchronous JavaScript and XML) 的功勞
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>
              Ajax 說明
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.2} style={{ marginTop: '-35px' }}>
              早期的網頁要跟伺服器交換資料，按下超連結或是提交表單，都會直接送出並回傳新的頁面的 HTML 回來
            </Text>
            <Image src={images.old.replace("/", "")} style={{ width: '60%', marginTop: '25px' }} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.2} style={{ marginTop: '-30px' }}>
              透過 JavaScript 非同步的方式，跟後台拿資料，<br />
              在這中間使用者還是可以進行其他操作，不會被打斷
            </Text>
            <Image src={images.ajax.replace("/", "")} style={{ width: '60%', marginTop: '20px' }} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.2}>
              雖然叫做 Asynchronous JavaScript and XML...<br />
              但現在都用 JSON
            </Text>
            <Image src={images.xmlvsjson.replace("/", "")} />
          </BgSlide>


          <BgSlide transition={["slide"]}>
            <Heading>XML</Heading>
            <Image src={images.xml.replace("/", "")} style={{ width: "80%" }} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>JSON</Heading>
            <Image src={images.json.replace("/", "")} style={{ width: '90%' }} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white" size={5}>
              才稍微開始有所謂<br />
              前後分離的工作方式開始出現
            </Heading>
          </BgSlide>


          <BgSlide transition={["slide"]}>
            <Heading>
              Client Side Render 技術
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white" size={3}>
              問題：
            </Heading>
            <List>
              <ListItem>網頁往應用程式發展，越來越龐大</ListItem>
              <ListItem>Ajax 使用太多會導致程式意外的複雜</ListItem>
              <ListItem>前端需要一些架構，MVX (之後還會提到)</ListItem>
              <ListItem>前後端所使用的 View 模板不容易共用</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white" size={3}>
              解決方式：
            </Heading>
            <List>
              <ListItem>讓 JavaScript 來負責顯示畫面</ListItem>
              <ListItem>全面使用 Ajax 並使用一些架構模式</ListItem>
              <ListItem>伺服器則變成 API server</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">2010 年開始，風向一直在變</Text>
            <Image src={images.trend.replace("/", "")} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white" size={3}>元件式開發 & 狀態決定 UI</Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/component.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="white" lineHeight={1.8}>
              這就是 React 帶來的影響<br />
              會在後幾個禮拜漸漸講到
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white" size={3}>後端的語言現在百花齊放</Heading>
            <br />
            <Text textColor="white">可以跑在伺服器 (電腦) 的程式語言都可以用</Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white" size={4}>現在主流的伺服器程式語言</Heading>
            <Image src={images.lang.replace("/", "")} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white" size={3}>這門專題會涵蓋的內容</Heading>
            <List>
              <ListItem>JavaScript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Backend Framework</ListItem>
              <ListItem>Database - MySQL</ListItem>
              <ListItem>Node</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>JavaScript</Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              因為是瀏覽器內獨佔的程式語言<br />
              基本上它的引擎就有以下公司在幫忙加強：
            </Text>
            <List>
              <ListItem>Microsoft (IE, Edge)</ListItem>
              <ListItem>Google (Chrome)</ListItem>
              <ListItem>Mozilla (Firefox)</ListItem>
              <ListItem>Apple (Safari)</ListItem>
            </List>
            <Text textColor="white">相對其他直譯式語言速度稍微較快</Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              因為可以直接在網頁分享<br />
              所以傳播速度、社群能量較強
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              另一方面 Web 技術可以使用在開發特定的<br />
              手機應用程式、桌面應用程式開發上
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>React</Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              facebook 在 2013 年 open source<br />
              它嘗試證明有比過去 10 年的主流 - MVC 更好的方式<br />
              至今已經被許多開發者、公司採用
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading textColor="white" size={4}>用 Native 的 UI 跨足 Mobile</Heading>
            <img src={images.reactEco.replace("/", "")} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">前年九月才剛 release android 的版本</Text>
            <Image src={images.reactNative.replace("/", "")} style="width: 75%" />
            <Text>from <a href="https://twitter.com/yannickdot/status/643920055944744960?lang=zh-tw">twitter@yannickdot</a></Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">配合 electron 做桌面程式</Text>
            <Image src="https://cloud.githubusercontent.com/assets/3382565/10557547/b1f07a4e-74e3-11e5-8d27-79ab6947d429.gif" />
            <Text>from <a href="https://github.com/chentsulin/electron-react-boilerplate">chentsulin/electron-react-boilerplate</a></Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">甚至還可以用在 Command line UI</Text>
            <Image src={images.hotMotion.replace("/", "")} style="width: 65%" />
            <Text>from <a href="https://github.com/gaearon/react-blessed-hot-motion">github@react-blessed-hot-motion</a></Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">或是 VR！</Text>
            <Image src="https://cloud.githubusercontent.com/assets/3382565/21223806/26ee6904-c304-11e6-96eb-0fbbbd17aecf.png" style={{ 'width': '90%' }} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>Node.js</Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              最初 (2009) 是為了能做出一套<br />
              非同步的伺服器架構而成
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">它的套件庫 npm 有難以想像的下載量</Text>
            <br />
            <Image src={images.npm.replace("/", "")} style={{ width: "100%" }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading>啊不對</Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              那是上學期的<br />
              下面這個才是現在的
            </Text>
            <Image src={images.npm2.replace("/", "")} style={{ width: "100%" }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              增加太快，有點懶得更新了...
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">npm 的套件數量也已經遠超過其他語言</Text>
            <br />
            <Image src={images.module.replace("/", "")} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading>啊不對</Heading>
            <br />
            <Link href="http://www.modulecounts.com/" target="_blank">這才是最新的</Link>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              一路漫延到手機應用程式、桌面應用程式、<br />
              IoT、機器人、VR 開發
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>Backend Framework</Heading>
            <List>
              <ListItem>Restful</ListItem>
              <ListItem>MVC</ListItem>
              <ListItem>ORM (Active Record)</ListItem>
              <ListItem>Migration</ListItem>
              <ListItem>Generator</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>Database</Heading>
            <List>
              <ListItem>關聯式資料庫跟 SQL</ListItem>
              <ListItem>NoSQL</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} textColor="white">學會這些不是最重要的</Heading>
            <br />
            <Text textColor="white">重點是能去實做一些東西出來</Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <List>
              <ListItem>Rethink Best Practice</ListItem>
              <ListItem>Write Clean Code</ListItem>
              <ListItem>Reduce complexity</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} textColor="white">進入 JavaScript 主題</Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">想要測試語法，請直接打開瀏覽器</Text>
            <br />
            <Image src={images.console.replace("/", "")} style={{ width: "100%" }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">console.log 是你 debug 好夥伴</Text>
            <br />
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/console.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>型別</Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">JS 只有五種內建型別 (primitive types) 其他都是物件</Text>
            <br />
            <Table>
              <TableRow>
                <TableHeaderItem>型別</TableHeaderItem>
                <TableHeaderItem>範例值</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>Undefined (未定義)</TableItem>
                <TableItem>undefined</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Null (空值)</TableItem>
                <TableItem>null</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>String (字串)</TableItem>
                <TableItem>'哎呀'</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Boolean (布林值)</TableItem>
                <TableItem>true, false</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Number (數字)</TableItem>
                <TableItem>3.1415926</TableItem>
              </TableRow>
            </Table>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">常用物件</Text>
            <br />
            <Table>
              <TableRow>
                <TableHeaderItem>型別</TableHeaderItem>
                <TableHeaderItem>範例值</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>Plain Object (物件)</TableItem>
                <TableItem>{'{'} name: 'Tim', age: 21 {'}'}</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Array (陣列)</TableItem>
                <TableItem>[1, 2, '3', true]</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Date (日期)</TableItem>
                <TableItem>new Date()</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>RegExp (正規表達式)</TableItem>
                <TableItem>/\.css$/</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Number (數字)</TableItem>
                <TableItem>3.1415926</TableItem>
              </TableRow>
            </Table>
          </BgSlide>

          <BgSlide transition={["slide", "spin"]}>
            <Heading size={3} textColor="white">所有的值被分成兩種</Heading>
            <List>
              <ListItem>Truthy</ListItem>
              <ListItem>Falsy</ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide", "spin"]}>
            <Text textColor="white">不是 Falsy 的值..都是 Truthy</Text>
            <br />
            <Appear><div class="fragment">
              <Text textColor="white" lineHeight={1.8}>
                Falsy 的值：
                <code>false</code>, <code>null</code>, <code>undefined</code>, <code>0</code>, <code>NaN</code>, <code>''</code>
              </Text>
              <Link href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank">MDN</Link>
            </div></Appear>
            <br />
            <Appear>
              <Text textColor="white" lineHeight={1.8}>
                這會用在 <code>if</code>, <code>while</code>
                邏輯運算子 <code>&&</code>, <code>||</code>, 三元運算子判斷等等地方
              </Text>
            </Appear>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} textColor="white">Variable Hoist</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/hoist.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} textColor="white">Function Scope</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fnhoist.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} textColor="white">Function Declaration</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fn.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} textColor="white">Function Expression</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fn-expression.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white" lineHeight={1.8}>
              <code>if else</code>
              <code>switch case</code><br />
              <code>for loop</code>
              <code>while loop</code><br />
              這些跟其他語言沒有太大差異
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Image src={images.responsibility.replace("/", "")} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">DOM</Heading>
            <Text textColor="white" lineHeight={1.2}>
              文件物件模型 (Document Object Model, DOM)<br />
              它提供了一個文件（樹）的結構化表示法，並定義讓程式可以存取並改變文件架構、風格和內容的方法。<br />
              本身不是 JavaScript 的一部分，是瀏覽器環境提供的<br />
              以後教到 node 就不會有瀏覽器裡面的<br />
              <code>window</code>, <code>document</code> 物件
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">要把這種文字檔，轉換成可操作的形式</Text>
            <br />
            <Image src={images.html.replace("/", "")} style={{ width: "80%" }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">DOM 是由一個一個的 DOM Node 組成</Text>
            <br />
            <Image src={images.domTree.replace("/", "")} style="background-color: white" />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="white">
              瀏覽器裡面最重要的就是的<br />
              <code>window</code>, <code>document</code> 物件<br />
              <code>window</code> 是全域物件<br />
              而 <code>document</code> 是 <code>window</code> 物件下的一個屬性<br />
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">對於 API 有任何疑惑時</Heading>
            <Text textColor="white">
              請參考
              <Link href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank">MDN</Link>
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">開一個 HTML 檔來試試</Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">選擇 DOM Node</Heading>
            <List>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById"
                  target="_blank"
                >
                  document.getElementById(id)
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName"
                  target="_blank"
                >
                  document.getElementsByClassName(className)
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName"
                  target="_blank"
                >
                  document.getElementsByTagName(tagName)
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector"
                  target="_blank"
                >
                  document.querySelector(selectors)
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll"
                  target="_blank"
                >
                  document.querySelectorAll(selectors)
                </Link>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">ID selector</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/id-selector.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">Class selector</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/class-selector.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">Tag selector</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/tag-selector.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">querySelector</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/querySelector.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">DOM Node 物件</Heading>
            <List>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode"
                  target="_blank"
                >Node.parentNode
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild"
                  target="_blank"
                >Node.firstChild
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild"
                  target="_blank"
                >Node.lastChild
                </Link>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">建立 DOM Node</Heading>
            <List>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"
                  target="_blank"
                >
                document.createElement(tagName)
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode"
                  target="_blank"
                >
                Document.createTextNode(text)
                </Link>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">createElement</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/createElement.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">createTextNode</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/createTextNode.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">插入 DOM Node</Heading>
            <List>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"
                  target="_blank"
                >Element.innerHTML = htmlString
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild"
                  target="_blank"
                >Node.appendChild(node)
                </Link>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">innerHTML</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/innerHTML.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">appendChild</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/appendChild.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">改變 style, class</Heading>
            <List>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style"
                  target="_blank"
                >HTMLElement.style
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className"
                  target="_blank"
                >Element.className
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"
                  target="_blank"
                >Element.classList
                </Link>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">style example</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/style.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">className example</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/className.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">classList example</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/classList.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">事件</Text>
            <Table>
              <TableRow>
                <TableHeaderItem>名稱</TableHeaderItem>
                <TableHeaderItem>發生處理狀況</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>click</TableItem>
                <TableItem>發生處理狀況</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>focus</TableItem>
                <TableItem>開始在輸入框輸入的時候</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>blur</TableItem>
                <TableItem>離開輸入框的時候</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>change</TableItem>
                <TableItem>輸入值改變的時候</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>keydown</TableItem>
                <TableItem>鍵盤按下去的時候</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>keyup</TableItem>
                <TableItem>鍵盤按下去的鍵上來的時候</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>mouseenter</TableItem>
                <TableItem>滑鼠進到元素裡面的時候</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>mouseleave</TableItem>
                <TableItem>滑鼠移出元素的時候</TableItem>
              </TableRow>
            </Table>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading textColor="white">監聽事件</Heading>
            <List>
              <ListItem>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
                  target="_blank"
                >
                  EventTarget.addEventListener(eventType, listener)
                </Link>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="white">addEventListener example</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/addEventListener.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading>練習</Heading>
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
