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
  webpack: require("../assets/webpack.png"),
  bg2: require("../assets/bg2.png"),
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
              Week 5: Webpack
            </Heading>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={1} textColor="white">
              隨著前端發展到越來越複雜，code 模組化越來越複雜，但...
            </Heading>
            <List>
              <ListItem>
                  前端難像在 Node 上那樣載入其他模組
              </ListItem>
              <ListItem>
                  第三方套件海
              </ListItem>
              <ListItem>
                  全域命名
              </ListItem>
              <ListItem>
                  ...
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={1} textColor="white">
              Can we pack all the codes in one single file?
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={1} textColor="white">
              Webpack
            </Heading>
            <Image src={images.webpack.replace("/", "")} style={{ width: '90%' }} />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text size={5} lineHeight={1} textColor="white">
              事實上，create-react-app 背後，已經用了 webpack ，使得你寫的 code 最後會包成一包
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                  Webpack Basics
              </ListItem>
              <ListItem>
                  Webpack Loaders and Plugins
              </ListItem>
              <ListItem>
                  Git collaborations
              </ListItem>
              <ListItem>
                  Github Pages
              </ListItem>
            </List>
          </BgSlide>

          {/*

          Basic

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Basic
            </Heading>
            <List>
              <ListItem>
                  Installation
              </ListItem>
              <ListItem>
                  Usage
              </ListItem>
              <ListItem>
                  Config
              </ListItem>
            </List>
          </BgSlide>
        {/*
          <BgSlide>
            <Heading size={4} lineHeight={2} textColor="white">
              Webpack
            </Heading>
            <Image src={images.webpack.replace("/", "")} style={{ width: '90%' }} />
          </BgSlide>
        */}
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Installation
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/installation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Usage
            </Heading>
            <Text textColor="primary">
              First, write some code...
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/simple-usage-js.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Usage
            </Heading>
            <Text textColor="primary">
              Then, use webpack
            </Text>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/simple-usage-command.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Usage
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/command-explanation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Config file
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/simple-config.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Config file
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/simple-config-command.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Watch Mode (Good for Dev!)
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/webpack-watch-mode.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              <a href="https://webpack.github.io/docs/configuration.html#devtool" >devtools</a>
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/simple-config-devtool.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Practice
            </Heading>
          </BgSlide>

          {/*

          Loaders and Plugins

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Loaders and Plugins
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Webpack 提供各類 Loaders 和 plugins
            </Text>
            <Text textColor="primary">
              以做出不同的處理
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders
            </Heading>
            <Text textColor="primary">
              對不同類型檔案做預處理 <br />(JSX, CSS, CoffeeScript, 甚至是圖片檔)
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/config-loaders.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- Babel Loader
            </Heading>
            <Text textColor="primary">
              利用 Babel 把新的語法轉換成大部份瀏覽器可以處理的舊語法
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- Babel Loader
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/babel-loader-installation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- Babel Loader
            </Heading>
            <CodePane
              lang="json"
              source={require("raw!../assets/codes/babel-loader-babelrc.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- Babel Loader
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/babel-loader-config.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- css & style Loader
            </Heading>

          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- css & style Loader
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/style-loader-installation.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- css & style Loader
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/style-loader-config.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Loaders -- css & style Loader
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/style-loader-allow.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Plugins
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Plugin 可以在轉換的過程進行特殊處理
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Webpack 自己內建<a href="https://github.com/webpack/docs/wiki/list-of-plugins">一堆</a>
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Plugins -- <a href="https://github.com/webpack/docs/wiki/list-of-plugins#uglifyjsplugin">UglifyJsPlugin</a>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/plugin-uglifyjs.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Plugins -- <a href="https://github.com/webpack/docs/wiki/list-of-plugins#occurrenceorderplugin">OccurrenceOrderPlugin</a>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/plugin-occurence-order.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Plugins -- <a href="https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin">DefinedPlugin</a>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/plugin-define.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              看看 create-react-app 背後做了什麼
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/react-eject.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Topics not covered yet:
            </Heading>
            <List>
              <ListItem>
                  Hot Module replacement + Dev Server
              </ListItem>
              <ListItem>
                  Code Splitting
              </ListItem>
              <ListItem>
                  Tree Shaking (webpack 2)
              </ListItem>
              <ListItem>
                  <a href="https://github.com/css-modules/webpack-demo">CSS Modules</a> (第七週會上到)
              </ListItem>
            </List>
          </BgSlide>

          {/*

          Production settings

          */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Git collaborations
            </Heading>
            <List>
              <ListItem>
                  branch
              </ListItem>
              <ListItem>
                  checkout
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Github Flow
            </Heading>
            <a href="https://guides.github.com/introduction/flow/">intro</a>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Create branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/create-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              List branches
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/list-branches.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Change to other branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/change-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Delete branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/delete-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Merge branch locally (not suggested)
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/merge-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Push branch and PR on GitHub (suggested)
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/push-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Pull branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/pull-branch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Github Pages
            </Heading>
            <List>
              <ListItem>
                  Create "gh-pages" branch
              </ListItem>
              <ListItem>
                  Add index.html
              </ListItem>
              <ListItem>
                  Link to [username].github.io/[project name]
              </ListItem>
            </List>
          </BgSlide>

        </Deck>
      </Spectacle>
    );
  }
}
