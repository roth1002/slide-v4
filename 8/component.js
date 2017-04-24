{ /* =================================
  Code block
  ================================= */ }
<BgSlide transition={['slide']}>
  <Heading size={4} lineHeight={2} textColor="white">
    Promise.then()
  </Heading>
  <CodePane
    lang="js"
    source={require("raw!../assets/codes/promise-with-then.example")}
    margin="0 20px 0"
    textSize="0.6em"
  />
</BgSlide>

{ /* =================================
  Image
  ================================= */ }
<Image src={images.promise.replace('/', '')} style={{ width: '80%' }} />

{ /* =================================
  List with link
  ================================= */ }
<BgSlide transition={['slide']}>
  <Heading size={4} lineHeight={2} textColor="white">
    Reference
  </Heading>
  <List>
    <ListItem>
      <Text textColor="primary">
        <Link href="http://bevacqua.github.io/promisees/#" target="_blank">Promise playground</Link>
      </Text>
    </ListItem>
    <ListItem>
      <Text textColor="primary">
        <Link href="http://caniuse.com/#search=Promise" target="_blank">Can I use Promise</Link>
      </Text>
    </ListItem>
  </List>
</BgSlide>

{ /* =================================
  HEADER
  ================================= */ }
<BgSlide transition={['slide']}>
  <Heading size={4} lineHeight={2} textColor="white">
    Promise
  </Heading>
</BgSlide>
