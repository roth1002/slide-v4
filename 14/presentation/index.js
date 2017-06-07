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
import Terminal from 'spectacle-terminal';

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
  orm: require('../assets/orm.png'),
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
              Week 14
            </Heading>
            <Text
              textSize="1.5em"
              lineHeight={1.3}
              margin="60px 0px 0px"
              bold
              textColor="white"
            >
              Password Hash / Migration / ORM
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
              <ListItem>
                <Text textColor="primary">
                  Password Hash
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Migration
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  ORM
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          {/* =================================
            Password Hash
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Password Hash
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              開發者有責任保護好<br />使用者的密碼
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              不要用常用密碼去註冊<br />來路不明的網站
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              密碼強度
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  長度越長越好，應該至少十五位
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  要有大寫字母
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  要有小寫字母
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  要有數字
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  {
                    '要有符號，例如： ` ! " ? $ ? % ^ & * ( ) _ - + = { [ } ] : ; @ \' ~ # |  < , > . ? /'
                  }
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以參考<Link
                    href="https://strongpasswordgenerator.com/"
                    target="_blank"
                  >
                    Strong Password
                  </Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              不要使用可解密的加密來處理密碼
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              不要使用可能被暴力碰解的<br />雜湊方式：md5、sha1..
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Salt
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  在原始密碼任意位置插入特定字串
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  避免
                  {' '}
                  <Link
                    href="http://project-rainbowcrack.com/table.htm"
                    target="_blank"
                  >
                    Rainbow Table
                  </Link>
                  {' '}的直接反查
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  對短密碼特別有效
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  比較嚴謹的雜湊這個步驟可能很複雜
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              增加 Round 來降速防暴力破解
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  幾乎沒有破解不了的東西，只有成本大不大。例如：金錢、時間。
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  算一次的時間變長，就能大幅度的增加成本
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              推薦的雜湊方式
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  Bcrypt - 最常用
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  PBKDF2
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Scrypt
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Bcrypt
            </Heading>
            <CodePane
              lang="javascript"
              source={require('raw!../assets/codes/bcrypt.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          {/* =================================
            Migration
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Migration
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  程式碼可以用 Git 同步了，但是 Database Schema 卻沒有
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  程式碼回到上個月的，但 Database Schema 不相容
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  起開發時怎麼同步多個人的開發環境
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  上線時怎麼確保 Database Schema 一致
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={5} lineHeight={2} textColor="white">
              用程式碼來同步 Database Schema<br />程式碼一樣交給 Git
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              原理
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  在 Database 開一個 Table 紀錄做過的 DB 操作
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  每個 DB 操作寫成程式碼
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  檔名必須包括時間
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  檔案內必須要有 up、down 兩個操作
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  up、down 定義剛好相反的兩個操作，例如：createTable、dropTable
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              Knex Migration
            </Heading>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Terminal
              title="1. chentsulin@chentsulin: ~(zsh)"
              showFirstEntry
              output={['$ npm install -g knex']}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="http://knexjs.org/#Migrations" target="_blank">
                Knex Migration
              </Link>
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  需要有設定檔 knexfile.js
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以針對不同環境使用不同設定，development、staging、production
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Knex Init
            </Heading>
            <Terminal
              title="1. chentsulin@chentsulin: ~(zsh)"
              showFirstEntry
              output={[
                '$ knex init',
                <div style={{ color: '#33B969' }}>Created ./knexfile.js</div>,
                '\n',
                '$ cat ./knexfile.js',
                <div>
                  {`// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};`}
                </div>,
              ]}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Knex Create Migrate
            </Heading>
            <Terminal
              title="1. chentsulin@chentsulin: ~(zsh)"
              showFirstEntry
              output={[
                '$ knex migrate:make create_table_users',
                <div style={{ color: '#33B969' }}>
                  Created Migration:
                  /Users/chentsulin/Projects/web-hackathon/slide-v4/14/demo/database/migrations/20170607121255_create_table_users.js
                </div>,
                '\n',
                '$ cat migrations/20170607121255_create_table_users.js',
                <div>
                  {`exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};`}
                </div>,
              ]}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="http://knexjs.org/#Schema" target="_blank">
                Schema Builder
              </Link>
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  用來對 Table 進行各種操作，例如：createTable、dropTable、renameColumn
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  也用來指定 Column 的 Data Type
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Example
            </Heading>
            <Terminal
              title="1. chentsulin@chentsulin: ~(zsh)"
              showFirstEntry
              output={[
                <div>
                  {`exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('email');
    table.string('password', 60);
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};`}
                </div>,
              ]}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Knex Migrate Latest
            </Heading>
            <Terminal
              title="1. chentsulin@chentsulin: ~(zsh)"
              showFirstEntry
              output={[
                '$ knex migrate:latest',
                <div>
                  <div style={{ color: '#33B969' }}>
                    Batch 1 run: 1 migrations
                  </div>
                  <div style={{ color: '#2EAEBC' }}>
                    /Users/chentsulin/Projects/web-hackathon/slide-v4/14/demo/database/migrations/20170607121255_create_table_users.js
                  </div>
                </div>,
                '\n# specifiy env\nknex migrate:latest --env production',
              ]}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Knex Migrate Rollback
            </Heading>
            <Terminal
              title="1. chentsulin@chentsulin: ~(zsh)"
              showFirstEntry
              output={[
                '$ knex migrate:rollback',
                <div>
                  <div style={{ color: '#33B969' }}>
                    Batch 1 rolled back: 1 migrations
                  </div>
                  <div style={{ color: '#2EAEBC' }}>
                    /Users/chentsulin/Projects/web-hackathon/slide-v4/14/demo/database/migrations/20170607121255_create_table_users.js
                  </div>
                </div>,
              ]}
            />
          </BgSlide>

          {/* =================================
            Seed Files
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              想塞固定的資料可以參考 <br />
              - {' '}
              <Link href="http://knexjs.org/#Migrations" target="_blank">
                Seed Files
              </Link>
            </Heading>
          </BgSlide>

          {/* =================================
            ORM
            ================================= */}
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              ORM (Object Relational Mapping)
            </Heading>
            <Text textColor="primary" lineHeight={2}>
              用於實現物件導向編程語言裡<br />不同類型系統的資料之間的轉換
            </Text>
            <Image src={images.orm.replace('/', '')} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Naming Convention
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  Model 用 PascalCase (首字大寫)的單數型態命名
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Table 用 snake_case 小寫 + 底線的多數型態命名
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  用一個 id 當作 Primary key
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Foreign key 用 table name 的單數 + _id，例如：user_id
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              <Link href="http://bookshelfjs.org/index.html#" target="_blank">
                Bookshelf.js ORM
              </Link>
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  基於 knex 之上
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  支援 PostgreSQL、MySQL、SQLite3
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Terminal
              title="1. chentsulin@chentsulin: ~(zsh)"
              showFirstEntry
              output={['$ npm install bookshelf']}
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Bookshelf Model
            </Heading>
            <CodePane
              lang="javascript"
              source={require('raw!../assets/codes/bookshelf.example')}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={2} lineHeight={2} textColor="white">
              <Link
                href="http://bookshelfjs.org/index.html#Model-subsection-methods"
                target="_blank"
              >
                Model Methods
              </Link>
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  - set, get
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  - save, destroy
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  - fetch, fetchAll
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          {/* =================================
            Auth
            ================================= */}

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Authentication
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  Cookie Based
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Token Based
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Token Based Authentication 優勢
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  跨網域
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  不擔心 CSRF 攻擊
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  支援無法使用 Cookie 的客戶端
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              延伸閱讀
            </Heading>
            <List style={{ listStylePosition: 'inherit' }}>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://auth0.com/docs/jwt" target="_blank">
                    JSON Web Token(JWT)
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link
                    href="https://blog.yorkxin.org/2013/09/30/oauth2-1-introduction"
                    target="_blank"
                  >
                    OAuth 2
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
