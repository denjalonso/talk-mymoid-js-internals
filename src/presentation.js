// @ts-check
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Layout,
  Fit,
  Fill,
  S
} from 'spectacle';
import createTheme from './theme/index';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-graphql';
import './style.css';
import { colors } from './theme/colors';

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="bar" transition={[]} transitionDuration={0}>
        <Slide>
          <Heading size={2}>
            <S type="bold" textColor={colors.blue.base}>
              mymoid-js internals
            </S>
          </Heading>
          <Text margin="40px 0 0 0">
            Denis Alonso{' '}
            <Link href="https://twitter.com/denjalonso" title="@denjalonso" />
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Talk about trending tech</Heading>
          <List>
            <ListItem>React suspense</ListItem>
            <ListItem>React lazy load</ListItem>
            <ListItem>Hooks??</ListItem>
          </List>
        </Slide>

        <Slide>but...</Slide>

        <Slide>
          <Image
            src={require('./images/hooksIntroduction.webp')}
            height={300}
          />
          <Link
            title="React Today and Tomorrow"
            href="https://www.youtube.com/watch?v=dpw9EHDh2bM"
          />
        </Slide>

        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `
              };
            }
          ]}
          bgColor="slategray"
        >
          <Image src={require('./images/kat.png')} margin="0px auto 40px" />
          <Heading size={1}>Wait what?</Heading>
        </Slide>

        <Slide>
          <Heading size={1}>🎣</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>Mymoid innovation, why?? </Heading>
          <List>
            <ListItem>Current payment form</ListItem>
            <ListItem>Batch processing</ListItem>
            <ListItem>Adhoc infrastructure</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading fit>How to: side projects</Heading>
          <Image src={require('./images/side-projects.png')} height={300} />
        </Slide>

        <Slide>
          <Heading size={3}>New payment form?, really?</Heading>
          <List>
            <ListItem>Current solution its ok</ListItem>
            <ListItem>Not overkilling</ListItem>
            <ListItem>
              Innovation under control, useful for company, improve costs
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={require('./images/hdd.jpg')} height={500} />
        </Slide>

        <Slide>
          <Text>
            El formulario actual es UN FORMULARIO, mala experiencia
            desarrollador.
          </Text>
          <Text>Necesitamos facilidad de integración.</Text>
        </Slide>

        <Slide>
          <Image src={require('./images/stripe-downloads.png')} height={300} />
          <Image
            src={require('./images/spreedly-downloads.png')}
            height={300}
          />
        </Slide>

        <Slide>
          <Heading size={2}>Current payment form flow</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>On boarding proccess (minimun)</Heading>
          <List>
            <ListItem>
              Manual process, a comunication between mymoid and dev (best case
              scenario) or admin .... are necesary
            </ListItem>
            <ListItem>Give us styles</ListItem>
            <ListItem>Where is my merchant?</ListItem>
          </List>
        </Slide>

        <Slide>
          <CssCode>{`
/* Form action color */
@brand-primary:				#ffb60f;
@header-primary:   			#fff;
/* Background color */
@background-color:  		#ffffff; // Default. Overriden below if not 'default'
@reference-background:		#fafaf8; // Default #fafaf8. Sets the colour for the webreference display
/* ... and more */

          `}</CssCode>
        </Slide>

        <Slide>
          <Heading size={3}>On boarding proccess: building styles</Heading>
          <List>
            <ListItem>Not versioned, adhoc project in local env 👎</ListItem>
            <ListItem>Reference and payment forms are coupled 👎</ListItem>
            <ListItem>
              Dificult maintenance, no good practices, old techs, no test ....
              👎
            </ListItem>
            <ListItem>Without build techs under npm 👎</ListItem>
            <ListItem>Without CI, CD ... manual upload to S3 ⛔🙈👎</ListItem>
          </List>
        </Slide>

        <Slide>
          <Image
            src={require('./images/current-payment-form.png')}
            height={500}
          />
        </Slide>

        <Slide>
          <Heading size={2}>But, do everything is bad? NO?</Heading>
          <List>
            <ListItem>
              <strong>
                Solves the problem?, how to embed in costumer web?
              </strong>
            </ListItem>
            <ListItem>Web</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>
            <Link title="mymoid-js" href="http://34.244.43.30/api/elements" />
            to rescue
          </Heading>
          <Image
            src="https://media.giphy.com/media/l0HUqsz2jdQYElRm0/giphy.gif"
            height={300}
          />
        </Slide>

        <Slide>
          <Heading>
            {' '}
            New thinking: around browser{' '}
            <strong>(not enterprise patterns)</strong>
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>FB philosophy</Heading>
          <BlockQuote>Write once, run anywhere (Oracle)</BlockQuote>
          <BlockQuote>Learn once, write anywhere. (FB)</BlockQuote>
        </Slide>

        <Slide>
          <Heading size={3}>From this (fucking-experience 💩)</Heading>
          <JsxCode>{`
            <iframe src="https://sandbox.mymoid.com/tpv/?p=H4K4NH"></iframe>
          `}</JsxCode>
        </Slide>

        <Slide>
          <Heading size={3}>To this (mymoid-js)</Heading>
          <JsCode>{`
mymoid.elements.config({ appId, appSecret, referenceId });
var myInput = mymoid.elements.input.create();
myInput.on('paymentMethod', function(paymentMethodId) {//...});
myInput.on('error', function(messages) {//...});
myInput.render({ selector: "#..." });
mymoid.tokenize({ holderName, expiryDate });
          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={3}>To this (mymoid-components)</Heading>
          <JsxCode>{`
        <MymoidProvider appId="..." appSecret="...">
            <Reference referenceId="...">
                <input type="text" placeholder="holderName">
                <Pan />
            </Reference>
        </MymoidProvider>
          `}</JsxCode>
        </Slide>

        <Slide>
          <Heading size={3}>Or this (mymoid-components)</Heading>
          <JsxCode>{`
    <MymoidProvider appId="..." appSecret="...">
        <Reference referenceId="...">
            <TextInput
                onChangeText={(text) => this.setState({text})}
            />
            <Pan />
        </Reference>
    </MymoidProvider>
          `}</JsxCode>
        </Slide>

        <Slide>
          <Heading size={3}>TextInput??????</Heading>
          <Image
            src="https://media.giphy.com/media/Wq7xqylQsSVhK/giphy.gif"
            margin="0px auto 40px"
          />
        </Slide>

        <Slide>
          <Image src={require('./images/nomnoml.png')} height={500} />
        </Slide>

        <Slide>
          <Text>Denis es un freak, si!!!!!!!!!,pero esto ayuda a la empresa?</Text>
          <Image src={require('./images/rewrite.jpeg')} height={300} />
        </Slide>

        <Slide>
          <Heading size={2}>Js fatigue</Heading>
          <List>
            <ListItem>asimilas tecnologías/patrones de forma natural</ListItem>
            <ListItem>
              se promueve la innovación para solucionar problemas{' '}
            </ListItem>
            <ListItem>Evitar overengieneering</ListItem>
            <ListItem>
              No aprender más de dos tecnologías en un nuevo side project
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Thinking in React</Heading>
          <Link href="https://reactjs.org/docs/thinking-in-react.html" />
        </Slide>

        <Slide>
          <Heading size={2}>WHAT IS REACT?</Heading>
          <Text>
            React is a Javascript Library for building user interfaces
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>LIBRARY VS FRAMEWORK</Heading>
        </Slide>

        <Slide>
          <Text>
            A library is essentially a set of functions that you can call, these
            days usually organized into classes. Each call does some work and
            returns control to the client. -- Martin Fowler
          </Text>
        </Slide>

        <Slide>
          <Text>
            A framework embodies some abstract design, with more behavior built
            in. In order to use it you need to insert your behavior into various
            places in the framework either by subclassing or by plugging in your
            own classes. The framework's code then calls your code at these
            points. -- Martin Fowler
          </Text>
        </Slide>
        <Slide>
          <List>
            <ListItem>REACT IS A LIBRARY</ListItem>
            <ListItem>REACT IS JUST THE UI. IT'S THE V IN THE MVC.</ListItem>
            <ListItem>REACT API SURFACE IS SMALL</ListItem>
            <ListItem>
              REACT IS ALL ABOUT MODULAR AND COMPOSABLE COMPONENTS.
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3}>THIS IS A COMPONENT</Heading>
          <JsCode>{`
            import React from react;

            class HelloMymoid extends React.Component {
                render() {
                    return <h1>Hello Mymoid</h1>;
                }
            }
          `}</JsCode>
        </Slide>

        <Slide>
          <Link title="Try it" href="https://codesandbox.io/s/8lm025zq3l" />
        </Slide>

        <Slide>
          <Image src={require('./images/taliban.jpg')} height={300} />
        </Slide>

        <Slide>
          <Heading size={1}>Functional programming</Heading>
          <List>
            <ListItem>declaritive: what no how ...</ListItem>
            <ListItem>Functional programming is not write functions</ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={require('./images/exceptions.png')} height={300} />
        </Slide>

        <Slide>
          <Link title="Try it" href="https://codesandbox.io/s/8lm025zq3l" />
        </Slide>

        <Slide>
          <Text>mmmmmmmmm, can you render logic???</Text>
          <JsxCode>
            {`
                    <ErrorBoundary>
                        // if thrown .....
                    </ErrorBoundary>
                  `}
          </JsxCode>
          <Text>🤔 WTF!!!!!!</Text>
        </Slide>

        <Slide>
          <Heading size={2}>ComponentDidCatch</Heading>
        </Slide>

        <Slide>
          <Text>can you repeat?? Reference?????</Text>
          <JsxCode>{`
                <MymoidProvider appId="..." appSecret="...">
                    <Reference referenceId="...">
                        <Pan />
                    </Reference>
                </MymoidProvider>
          `}</JsxCode>
          <Text>🤔 WTF!!!!!!</Text>
        </Slide>

        <Slide>
          <Heading> Components with logic, without view 🤯</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>What options do we have now?</Heading>
          <List>
            <ListItem>HoC (Higher Order Components)</ListItem>
            <ListItem>Render props</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Higher Order Components</Heading>
        </Slide>

        <Slide>
          <JsCode>{`
function withSize(Component) {
  return class extends React.Component {
    state = {
      width: window.innerWidth
    };
    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
    handleResize = () => {
      this.setState({ width: window.innerWidth });
    };
    render() {
      return <Component {...this.props} size={this.state.width}/>
    }
  }
}
          `}</JsCode>
        </Slide>

        <Slide>
          <JsCode>{`
const A = withSize(function A({ size }) {
  return <div>A component {size}</div>
});

const B = withSize(function B({ size }) {
  return <div>B component {size}</div>
});
          `}</JsCode>

          <Link href="https://codesandbox.io/s/p9509pmr9q" />
        </Slide>

        <Slide>
          <Heading size={2}>Render props</Heading>
        </Slide>

        <Slide>
          <JsCode>{`
class Size extends React.Component {
  state = {
    width: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    return this.props.children({ width: this.state.width });
  }
}
          `}</JsCode>
        </Slide>

        <Slide>
          <JsCode>{`
function A() {
  return (
    <Size>
      {({ width }) => (
        <div>A component {width}</div>
      )}
    </Size>
  );
}
          `}</JsCode>

          <Link href="https://codesandbox.io/s/7kn5xjzl06" />
        </Slide>

        <Slide>
          <Link title="Try it" href="https://codesandbox.io/s/8lm025zq3l" />
        </Slide>

        <Slide>
          <Heading size={2}>How to improve this?</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>What are hooks?</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>What problem does it solve?</Heading>
          <List>
            <ListItem>Hard to reuse stateful logic between components</ListItem>
            <ListItem>Complex components become hard to understand</ListItem>
            <ListItem>Classes confuse both people and machines</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>What problem solves?</Heading>
          <List>
            <ListItem>
              <strong>Hard to reuse stateful logic between components</strong>
            </ListItem>
            <ListItem>Complex components become hard to understand</ListItem>
            <ListItem>Classes confuse both people and machines</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Wrapper hell</Heading>

          <JsCode>{`
 export default compose(
     gqlCompose(graphql(TODOS_QUERY, { name: 'todosData' })),
     createTodoMutation,
     toggleTodoMutation,
     deleteTodoMutation,
     editTodoMutation,
     connect(mapStateToProps, mapDispatchToProps),
     withLoadingContainer,
     withActionHandlers,
     filterTodosMapper,
     withEditState,
     pure
 )(TodoComponent);
          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={3}>Then =></Heading>
          <Image src={require('./images/wrapper-hell.png')} height={500} />
        </Slide>

        <Slide>
          <Heading size={2}>Hooks</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>useReference</Heading>
          <Heading size={3}>usePreauth</Heading>
          <Heading size={3}>😜</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>coming soon 😞</Heading>
        </Slide>

        <Slide>
          <Heading>Questions?</Heading>
          <Heading size={5} margin="40px 0 0 0">
            @denjalonso
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

const JsCode = ({ children, ...other }) => (
  <CodePane lang="javascript" source={children} {...other} />
);

const CssCode = ({ children, ...other }) => (
  <CodePane lang="css" source={children} {...other} />
);

const JsxCode = ({ children, ...other }) => (
  <CodePane lang="jsx" source={children} {...other} />
);

const Link = ({ href, title }) => (
  <a href={href} target="_blank">
    {title || href}
  </a>
);
