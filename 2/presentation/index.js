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
  why: require("../assets/why.jpg"),
  ctlinSay: require("../assets/ctlin-say.png"),
  npm2: require("../assets/npm2.png"),
  browsers: require("../assets/browsers.png"),
  classI: require("../assets/class-i.png"),
  prototypeI: require("../assets/prototype-i.png"),
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
              Week 2: More on JavaScript
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              Good Parts / Bad Parts / ESLint
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Text textColor="primary">JavaScript 是個很棒也很糟糕的程式語言</Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">JavaScript is designed in 10 days.</Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Inspired by the <a href="https://youtu.be/hQVTIJBZook">speech</a> given by Doug Crockford (inventor of JSON)
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Bad Parts
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Good Parts
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Dangerous Parts
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  ESLint
                </Text>
              </ListItem>
            </List>
          </BgSlide>

        {/*

          Bad part

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Bad Parts
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  semicolon insertion
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  type transform (typeof)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  numbers (isNaN, floating point)
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              semicolon insertion
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              or
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              都幾?
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-3.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              or
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-4.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              都幾?
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Javascript will automatically add semicolons during run-time,<br />
              so the previous examples are not coding-style problem.
            </Text>
            <Appear>
              <Heading size={1} textColor="white">
                They are bugs!
              </Heading>
            </Appear>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-bug-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              ...
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-bug-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-bug-3.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              ...
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/semicolon-insertion-bug-4.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Image src={images.why.replace("/", "")} style={{ width: '80%' }} />
            <Appear>
              <Text textColor="primary">
                Because JS tries to add semicolon at the end of the line<br />
                If nothing bad happend, the semicolon will remain there.
              </Text>
            </Appear>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Add semicolons manually!
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              type transform
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              JS is Dynamic Weak type.
            </Text>
            <List>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    Dynamic: type checking during run-time
                  </Text>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Text textColor="primary">
                    Weak: implicity type conversion
                  </Text>
                </ListItem>
              </Appear>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/type-transform.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/type-transform-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/type-transform-3.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Image src={images.why.replace("/", "")} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading textColor="primary">
              Be carefull when transforming types
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              numbers
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading textColor="primary" size={5} lineHeight={1.5}>
              JavaScript use float64 as numbers (no int)<br />
              (double-precision 64-bit format IEEE 754)
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/numbers-1.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading textColor="primary" size={5} lineHeight={1.5}>
              Another 雷
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/numbers-2.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Image src={images.ctlinSay.replace("/", "")} style={{ width: '80%' }} />
          </BgSlide>

          {/*

          Good part

         */}

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Good Parts
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Simplicity
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/simplicity.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              By the way, it works with JSON directly!
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Object-Oriented Programming
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/oop.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Functional Programming
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fp.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              lambda function (inspired by Scheme)
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/lambda.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Dynamic Objects (inspired by Self)
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/dynamic-objects.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              easy to mock property or methods
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Closure
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/closure.example")}
              margin="0 20px 0"
              textSize="0.5em"
            />
            <Text textColor="primary">
              The independence variable can be referenced by object methods. <br />
              One of the most important property of JS OOP.
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Community
            </Text>
            <Image src={images.npm2.replace("/", "")} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Best of the Best: Cross Platform
            </Text>
            <Image src={images.browsers.replace("/", "")} style={{ width: '80%' }} />
          </BgSlide>

        {/*

        Dangerous part

         */}

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Dangerous Parts
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  this
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Constructor are written in functions
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/constructor.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              To add methods...
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/object-add-method.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              It's confused what 'this' actually points to. <br />
              'this' points to <em>who call the function</em>.
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/wrong-this.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/callback-wrong-this.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              Use 'bind' to connect 'this' to the desire target (the original object, etc.)
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/bind.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>


          <BgSlide transition={["slide"]}>
            <Heading size={2} lineHeight={2} textColor="white">
              Topics not mentioned:
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Prototype Inheritance
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  strict mode
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          {/*

          ESLint

         */}

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              ESLint
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Why ESLint?
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  What is ESLint?
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  How to use ESLint?
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              Why ESLint?
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              1. Javascript have some bad parts
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              2. coding style matters
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/ugly.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              2. coding style matters
            </Text>
            <List>
              <ListItem>
                <Text textColor="primary">
                  讀 code 的時間 90%，寫 code 的時間 10%
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Project 應該保持一致，方便多人協作
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  善待你自己
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary" textSize="2em">
              3. bug-fix before run-time
            </Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/bug.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              What is ESLint?
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={2} lineHeight={2} textColor="white">
              History
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  JSLint (cannot turn-off rules...)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  JSHint (too few rules...)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  ESLint -- custom coding style rule
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={1} lineHeight={2} textColor="white">
              How to use ESLint?
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              create project
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/npm-init.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              install eslint
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/install-eslint.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              install Airbnb coding style packages
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/install-airbnb.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              add .eslintrc.js
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/eslintrc.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              write some code and lint it!
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/run-eslint.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              write some code and lint it!
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/run-eslint.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              custom rules in .eslintrc.js
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/eslint-custom.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              custom rules in specific file
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/eslint-custom-file.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Thanks
            </Heading>
          </BgSlide>


        </Deck>
      </Spectacle>
    );
  }
}
