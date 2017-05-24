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
  // eslint-disable global-require
  cap: require('../assets/cap.png'),
  otherCap: require('../assets/other-cap.png'),
  circle: require('../assets/circle.jpg'),
  database: require('../assets/database.png'),
  databaseSupport: require('../assets/DatabaseSupport.jpg'),
  manyToMany: require('../assets/many-to-many.png'),
  oneToMany: require('../assets/one-to-many.png'),
  map: require('../assets/map.png'),
  nosqlType: require('../assets/nosql-type.jpg'),
  nosqlMap: require('../assets/nosql-map.jpg'),
  sqls: require('../assets/sqls.png'),
  table: require('../assets/table.jpg'),
  mom: require('../assets/mom.png'),
  // eslint-enable global-require
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
              Week 12
            </Heading>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              Database / SQL
            </Text>
          </BgSlide>
          {/* =================================
            Outline
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem><Text textColor="primary">Database</Text></ListItem>
              <ListItem><Text textColor="primary">SQL</Text></ListItem>
            </List>
          </BgSlide>
          {/* =================================
            Database
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Database
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              DBMS
            </Heading>
            <Text textColor="primary">(Database Manage System)</Text>
            <Image
              src={images.database.replace('/', '')}
              style={{ width: '50%' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              Database 的發展已經有超過 50 年以上
            </Heading>
            <Text textColor="primary">
              <Link
                href="https://speakerdeck.com/yunglin/nosql-da-chang-hua"
                target="_blank"
              >
                這份投影片
              </Link>
              有一些介紹可以看
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              經典款：RDBMS
            </Heading>
            <Text textColor="primary">
              Relational Database Management System，關聯式資料庫
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              主流的種類
            </Heading>
            <Image
              src={images.sqls.replace('/', '')}
              style={{ width: '80%' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              許多許多的優點
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  資料處理很穩健
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  會使用的人多，資源多易學
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  歷史悠久，長年效能優化
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可使用 join 等關聯功能，查詢功能強
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              有支援 Transaction 的 ACID 特性
            </Heading>
            <List style={{ listStylePosition: 'inherit', fontSize: '10px' }}>
              <ListItem>
                <Text textColor="primary">
                  原子性 (atomicity)：所有操作，只能全部完成或全部不完成。有錯誤會被 rollback
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  一致性 (consistency)：寫入的資料必須完全符合所有的預設規則，包含資料的精確度等等
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  隔離性 (isolation)：多個並發事務同時對數據進行讀寫修改的能力，可以防止由於交叉執行而導致數據的不一致。
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  持久性 (durability)：對資料庫所作的改變持久地保存在資料庫之中
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary" lineHeight={1.4}>
              但是...<br />
              即便長年下來 SQL 衍伸出很多<br />
              垂直分割、讀寫分離、合併查詢等等等技術<br />
              但遇到某些狀況還是不適合用 SQL 處理..<br />
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              CAP
            </Heading>
            <Image src={images.cap.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              CAP
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  Consistency 一致性
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Availability 可用性
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Partition tolerance 分區容忍
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Wiki
            </Heading>
            <Text textColor="primary" lineHeight={1.4}>
              根據定理，分布式系統只能滿足三項中的兩項而不可能滿足全部三項。理解 CAP 理論的最簡單方式是想像兩個節點分處分區兩側。允許至少一個節點更新狀態會導致數據不一致，即喪失了 C 性質。如果為了保證數據一致性，將分區一側的節點設置為不可用，那麼又喪失了 A 性質。除非兩個節點可以互相通信，才能既保證 C 又保證 A，這又會導致喪失 P 性質。
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Image
              src={images.otherCap.replace('/', '')}
              style={{ width: '90%' }}
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Image
              src={images.circle.replace('/', '')}
              style={{ width: '75%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              NoSQL (Not only SQL)
            </Heading>
            <Text textColor="primary" lineHeight={1.4}>
              非關係型、分散式、<br />不提供 ACID 的資料庫設計模式
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              主要分成
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  Document
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Graph
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Key-Value
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Column
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Object
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Image
              src={images.nosqlType.replace('/', '')}
              style={{ width: '65%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Image
              src={images.nosqlMap.replace('/', '')}
              style={{ width: '80%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              每個功能模組適用的 database 都不一樣
            </Heading>
            <Image src={images.map.replace('/', '')} style={{ width: '95%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              資源：
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  Mongodb:
                  <Link href="https://university.mongodb.com/" target="_blank">
                    Mongo University
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Redis:
                  <Link href="http://try.redis.io/" target="_blank">
                    Try Redis
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Neo4j:
                  <Link href="http://console.neo4j.org/" target="_blank">
                    Neo4j
                  </Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              SQL 入門
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              SQL 基礎介紹
            </Heading>
            <Text textColor="primary">Structured Query Language</Text>
            <br />
            <Text textColor="primary">Relational Database Management System(RDBMS) 的標準語言</Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              常見的幾種 RDBMS
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  MySQL
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  PostgreSQL
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  MS SQL-Server(ֵ使用 Transact-SQL)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  SQLite
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RDBMS 架構階層
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  Server 伺服器
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Database 資料庫
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Table 資料表
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Column 欄位
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              GUI
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://dev.mysql.com/downloads/workbench/" target="_blank">
                    MySQL Workbench
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://www.sequelpro.com/" target="_blank">
                    Sequel Pro(Only For Mac)
                  </Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Database
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  顯示現有資料庫
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/show-databases.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  建立資料庫
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/create-database.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  刪除資料庫
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/drop-database.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  使用資料庫
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/use-database.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Table
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  顯示現有資料表
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/show-tables.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  建立資料表
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/create-table.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  顯示資料表欄位
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/show-columns.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  清空資料表
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/truncate-table.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  刪除資料表
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/drop-table.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              常見 Data Types
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  Int
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Float
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Varchar
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Text
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Date
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  不同 DB 有些微的不同
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              修改 Table
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/alter-table.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Insert
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  新增一筆資料
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/insert-into.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Update
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  針對所有資料修改
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/update.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  針對符合條件的資料修改
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/update-where.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Delete
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  刪除所有資料
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/delete.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  刪除符合條件的資料
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/delete-where.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Select
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  查詢所有資料
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/select.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  查詢特定的欄位
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/select-fields.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  查詢符合條件的資料
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/select-where.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Text textColor="primary" lineHeight={2}>
              其他還有 LIKE、COUNT、MAX、MIN、SUM、AVG、<br />
              GROUP BY、ORDER BY 等等的就不一一介紹了
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              Primary Key 主鍵
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  一張表只能有一個
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以由多個欄位組成
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  不能重複不能 null
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  建立時指定 Primary Key
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/create-primary.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  變更 Primary Key
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/alter-primary-key.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              Unique Key
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  一張表可以多個
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以由多個欄位組成
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  值不能重複
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以 null，但第二個 null 不行
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              Index 索引
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  一張表可以多個
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以由多個欄位組成
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以重複可以 null
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  顯示 Index
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/show-index.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  建立 Index
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/create-index.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  刪除 Index
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/drop-index.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              Index 的優缺點
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  優點：加快查詢速度 O(n) -> O(log n)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  缺點：創建 Index 費時、減慢 Insert、Delete 的速度
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              Foreign Key 外鍵
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  一張表可以有多個
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以加上限制跟連動關係
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  加上 FK
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/add-fk.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  刪除 FK
                </Text>
                <CodePane
                  lang="sql"
                  source={require("raw!../assets/codes/drop-fk.example")}
                  margin="0 20px 0"
                  textSize="0.6em"
                />
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Link href="https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins" target="_blank">
              <Image
                src={'https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_V2.png'}
                style={{ width: '75%' }}
              />
            </Link>
            <br />
            <Link href="https://stackoverflow.com/questions/38549/what-is-the-difference-between-inner-join-and-outer-join" target="_blank">
              What is the difference between “INNER JOIN” and “OUTER JOIN”?
            </Link>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              Relationship
            </Heading>
            <Image
              src={images.table.replace('/', '')}
              style={{ width: '75%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              One to Many
            </Heading>
            <Text textColor="primary">通常會有一個 Foreign Key 關聯到另一個表的 PK</Text>
            <Image
              src={images.oneToMany.replace('/', '')}
              style={{ width: '75%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Many to Many
            </Heading>
            <Text textColor="primary">中間需要有 Pivot Table 記錄兩邊的 PK</Text>
            <Image
              src={images.manyToMany.replace('/', '')}
              style={{ width: '75%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              SQL Injection
            </Heading>
            <Image
              src={images.mom.replace('/', '')}
              style={{ width: '100%' }}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              延伸閱讀
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://blog.jobbole.com/100349/" target="_blank">
                    如果有人问你数据库的原理，叫他看这篇文章
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://www.sqlstyle.guide/" target="_blank">
                    SQL Style Guide
                  </Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
