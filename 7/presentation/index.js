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
  lifecycle: require("../assets/lifecycle.png"),
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
              Week 7: More on React
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              Key / Lifecycle Hook / Styling
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                  Key
              </ListItem>
              <ListItem>
                  Lifecycle Hook
              </ListItem>
              <ListItem>
                  Styling React
              </ListItem>
              <ListItem>
                  Git Commit Operations
              </ListItem>
            </List>
          </BgSlide>

          {/*

          Key

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Key
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Provide keys to components makes React render faster
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Add key
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/add-key.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Key should be...
            </Heading>
            <List>
              <ListItem>
                  unique among siblings
              </ListItem>
              <ListItem>
                  stable for same data
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              <a href="https://facebook.github.io/react/docs/lists-and-keys.html">Lists and Keys</a>
            </Text>
          </BgSlide>


          {/*

          Lifecycle Hook

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Lifecycle Hook
            </Heading>
            <List>
              <ListItem>
                  Mounting
              </ListItem>
              <ListItem>
                  Updating
              </ListItem>
              <ListItem>
                  Unmounting
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Don't use these methods before you're familiar with them.
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Image src={images.lifecycle.replace("/", "")} style={{ width: '90%' }} />
            <Text textColor="primary">
              <a href="https://facebook.github.io/react/docs/state-and-lifecycle.html">State and Lifecycle</a>
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Mounting
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentWillMount
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentWillMount.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentDidMount
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentDidMount.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Updating
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentWillReceiveProps
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentWillReceiveProps.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              shouldComponentUpdate
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/shouldComponentUpdate.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentWillUpdate
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentWillUpdate.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentDidUpdate
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentDidUpdate.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Unmounting
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentWillUnmount
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentWillUnmount.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>


          {/*

          Styling React

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Styling React
            </Heading>
            <List>
              <ListItem>
                  inline style
              </ListItem>
              <ListItem>
                  className
              </ListItem>
              <ListItem>
                  css modules
              </ListItem>
              <ListItem>
                  Styled Component
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              inline style
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              <a href="https://speakerdeck.com/vjeux/react-css-in-js">inline style</a>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/inline-style.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              Also used in React-Native development
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              className
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              className (correspond to 'class' of HTML)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/className.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              CSS 問題
            </Heading>
             <List>
              <ListItem>
                  global naming
              </ListItem>
              <ListItem>
                  dependency
              </ListItem>
              <ListItem>
                  ...
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              CSS Modules （一種概念，不是一種工具）
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              有許多種作法，我們使用最常見的 Webpack CSS loader
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              change webpack settings
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/css-modules-webpack.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              in your component...
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/css-modules-react.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Change Local Indent Name (解決 global naming)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/css-modules-webpack-localidentname.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Compose from other file (解決 dependancy 的其中一種方法)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/css-modules-compose-css.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Styled Component
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              A package, also enforce best practice.
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              installation
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/styled-component-install.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Basic Usage
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/styled-component-basic.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Style based on props
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/styled-component-with-props.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Compose from other component
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/styled-component-compose.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Styled Component 多了一些好處
            </Heading>
            <List>
              <ListItem>
                更徹底的模組化：不用寫多餘的 css file
              </ListItem>
              <ListItem>
                更少的設定：不用寫 Webpack，近乎無痛支援 React Native
              </ListItem>
              <ListItem>
                促進寫出更好的程式架構：分離程式邏輯和樣式
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              但 Styled Component，仍有些缺點，比如說動態 inject CSS, 會有效能問題
            </Heading>
          </BgSlide>

          {/*

          Git Commit Operations

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Git commit operations
            </Heading>
            <List>
              <ListItem>
                revert / reset
              </ListItem>
              <ListItem>
                rebase
              </ListItem>
              <ListItem>
                cherrypick
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              在 push 之前，commit-level 操作經常出現：
            </Heading>
            <List>
              <ListItem>
                對剛完成的操作重新來過
              </ListItem>
              <ListItem>
                準備和另外一支 branch 的合併
              </ListItem>
              <ListItem>
                修改，刪除，或合併某些過往 commits （讓 commit history 更乾淨）
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              revert: undo a commit by creating a new commit
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/git-revert.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              reset: get back to a previous commit by deleting its latter commits
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/git-reset.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              <a href="https://www.atlassian.com/git/tutorials/undoing-changes#git-revert" target="_blank">reset v.s. revert</a>
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              rebase: re-arrange the base of branch
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/git-rebase.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              rebase interactively: more complicate commit operations
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/git-rebase-interactive.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              cherry pick: select commit
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/codes/git-cherrypick.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
