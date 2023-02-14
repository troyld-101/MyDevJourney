import "./App.css";
import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";

function Cards() {
  return (
    <Accordion className="px-4 my-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="bg-light border">
          <h5>Code Editor</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>VS Code Power User</h3>
          <p>
            Be a developer who can utilize Visual Studio Code to create and
            maintain code files.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <ul>
            <li>Discuss the uses of VS Code in Web Development</li>
            <li>Install VS Code on your computer</li>
            <li>Open and close files</li>
            <li>Open an entire folder in VS Code</li>
            <li>Locate and open the embedded terminal</li>
            <li>Install and use extensions in VS Code.</li>
            <li>
              Modify editor settings for specific coding languages and global
            </li>
            <li>Apply formatting to poorly formatted code</li>
            <li>Format code using keyboard shortcut</li>
          </ul>
          <h4>Suggested Learning:</h4>
          <ul>
            <li>
              <a href="https://youtu.be/0fROnrISdZU" target="\_blank">
                VS Code for Beginners
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=WPqXP_kLzpo"
                target="\_blank"
              >
                FreeCodeCamp.org Visual Studio Code Crash Course
              </a>
            </li>
            <li>
              <a href="https://youtu.be/fJEbVCrEMSE" target="\_blank">
                CodeSTACKr Visual Studio Code 2022
              </a>
            </li>
            <li>
              <a
                href="https://code.visualstudio.com/docs/introvideos/basics"
                target="\_blank"
              >
                Microsoft's Getting Started with VS Code
              </a>
            </li>
            <li>
              <a
                href="https://code.visualstudio.com/docs/getstarted/settings"
                target="\_blank"
              >
                VS Code Documentation on Settings
              </a>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="bg-light border">
          <h5>Browser Tools</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Chrome Dev Tools</h3>
          <p>
            Be a developer who can utilize Chrome Dev Tools to inspect and
            diagnose web-based front-ends.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>
                    Discuss the utility of Chrome Dev Tools for front-end web
                    development
                  </li>
                  <li>Open Chrome Dev Tools using the mouse</li>
                  <li>Inspect HTML elements and view CSS styles</li>
                  <li>Open Chrome Dev Tools using a keyboard shortcut</li>
                  <li>Make live changes to HTML and CSS</li>
                  <li>Locate and list the files that make up a website</li>
                  <li>View errors and logs in the console</li>
                  <li>
                    Understand which resources and requests take longer to load
                  </li>
                  <li>Simulate websites on mobile devices</li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a
                      href="https://developer.chrome.com/docs/devtools/"
                      target="\_blank"
                    >
                      Google's Intro
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Use console errors to find bugs in Javascript code</li>
                  <li>Set and watch break points in Javascript code</li>
                  <li>Set conditional breakpoints</li>
                  <li>
                    Demonstrate the difference between breakpoints in global
                    scope and in function scope.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="bg-light border">
          <h5>HTML</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>HTML</h3>
          <p>
            Be a developer who can code independently and build simple and
            well-structured websites.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>Explain the building blocks of HTML documents</li>
                  <li>Identify HTML elements that control page layout</li>
                  <li>
                    Differentiate between common HTML attributes like ID, Class
                    and Styles
                  </li>
                  <li>
                    Utilize structural tags like paragraphs, divisions, headers
                    and footers
                  </li>
                  <li>
                    Utilize typography tags like headers, strong, and italics
                  </li>
                  <li>
                    Implement navigation to both local html files and external
                    url
                  </li>
                  <li>Utilize list tags for unordered and ordered lists</li>
                  <li>
                    Construct a table of data including header, footer, rows,
                    and columns
                  </li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://www.codecademy.com/learn/learn-html"
                      target="\_blank"
                    >
                      Learn HTML
                    </a>
                  </li>
                  <li>
                    <a href="https://www.w3schools.com/html/" target="\_blank">
                      W3C HTML5 Tutorial
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Pre-formatted Text</li>
                  <li>Accessibility Tags (aria)</li>
                  <li>
                    Clickable Regions/Maps (rectangles, circles, polygons)
                  </li>
                  <li>User Input</li>
                  <li>Form (action, method, target, submit)</li>
                  <li>Form Validation</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className="bg-light border">
          <h5>Cascade Style Sheets (CSS)</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>CSS Developer</h3>
          <p>
            Be a developer who can utilize CSS to apply simple styles to web
            elements.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>Describe why CSS is important to web development</li>
                  <li>Discuss how selectors enable CSS</li>
                  <li>
                    Modify the visual style of HTML elements using inline styles
                    and styles from the head section.
                  </li>
                  <li>
                    Differentiate between selectors, properties and values in
                    the CSS Context
                  </li>
                  <li>
                    Apply non-inline styles to elements based on element id,
                    class and tag name
                  </li>
                  <li>
                    Control the color of elements using color names, RGB values
                    and Hex values
                  </li>
                  <li>Change font and text style using CSS</li>
                  <li>Understand element spacing using the “box model”</li>
                  <li>
                    Use margin, padding and borders to control element spacing
                  </li>
                  <li>
                    Add borders to inline and block elements using various
                    colors and border styles
                  </li>
                  <li>
                    Change element style in real-time based on mouse hover-state
                  </li>
                  <li>Import CSS from local files into an HTML document</li>
                  <li>
                    Describe how your browsers’ built-in styles affect custom
                    styling efforts
                  </li>
                </ul>

                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a
                      href="https://learn.shayhowe.com/advanced-html-css/"
                      target="\_blank"
                    >
                      Learn to Code Advanced HTML and CSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codecademy.com/catalog/language/html-css"
                      target="\_blank"
                    >
                      HTML & CSS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.theodinproject.com/" target="\_blank">
                      The Odin Project
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Understand element spacing using the “box model”</li>
                  <li>
                    Describe how your browsers’ built-in styles affect custom
                    styling efforts
                  </li>
                  <li>
                    Control the transparency of HTML elements using RGBa values
                  </li>
                  <li>
                    Differentiate between shorthand and longhand properties in
                    CSS
                  </li>
                  <li>
                    Override existing CSS styles using principles of specificity
                  </li>
                  <li>
                    Override existing CSS styles using grouping and nesting
                  </li>
                  <li>Differentiate between inline and block elements</li>
                  <li>Apply background images to block and inline elements.</li>
                  <li>Control the display or visibility of HTML elements</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    Build layouts and position elements using floats, inline,
                    flexbox, and grid
                  </li>
                  <li>
                    Control the display and style of elements across various
                    window sizes using media queries
                  </li>
                  <li>
                    Utilize various non-experimentatl pseudo classes to control
                    CSS states
                  </li>
                  <li>
                    Utilize various non-experimentatl pseudo elements to perform
                    non-standard CSS manipulation
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className="bg-light border">
          <h5>JavaScript</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>JavaScript Developer</h3>
          <p>
            A developer who can write basic JavaScript code to solve simple
            problems.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>
                    Variables (storing values and functions in variables,
                    reading values)
                  </li>
                  <li>Arrays (Creating, adding to, removing, indexes)</li>
                  <li>Functions (creating and calling)</li>
                  <li>Primitives and other built-in datatypes</li>
                  <li>Objects (creation, reading values)</li>
                </ul>
              </Col>

              <Col>
                <ul>
                  <li>Comparisons</li>
                  <li>Loops</li>
                  <li>Control Structures</li>
                  <li>Callbacks</li>
                  <li>Value vs reference</li>
                  <li>
                    Browser DOM (select element, change contents and styles, add
                    event listeners)
                  </li>
                  <li>Adheres to popular conventions for indentation</li>
                </ul>
              </Col>

              <Col>
                <ul>
                  <li>Setting/clearing Timeouts and Intervals</li>
                  <li>The this Keyword</li>
                  <li>
                    Using objects and properties with both object dot notation
                    and bracket notation
                  </li>
                  <li>JSON, Parsing, Stringifying</li>
                  <li>
                    Built-In Array Iterators (forEach, IndexOf, Find, Map,
                    Filter, Reduce, Some)
                  </li>
                  <li>Prevent form postback with preventDefault</li>
                  <li>Parse string to JSON</li>
                  <li>Convert JSON to string</li>
                  <li>Promises</li>
                  <li>
                    Adheres to popular conventions for indentation and code
                    style
                  </li>
                  <li>Async/Await</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Imports</li>
                  <li>Modules</li>
                  <li>Object Constructors</li>
                  <li>Classes</li>
                  <li>Prototypes</li>
                  <li>Factory Functions</li>
                  <li>Arrays of promises</li>
                  <li>
                    Able to work with multiple remote API’s and combine the
                    results.
                  </li>
                  <li>
                    Understand and able to implement javascript code using OOP
                    principles.
                  </li>
                  <li>Writes and maintains pure functions</li>
                  <li>
                    Adheres to popular conventions for indentation and code
                    style
                  </li>
                </ul>
              </Col>
            </Row>
            <h4>Suggested Learning:</h4>
            <ul>
              <li>
                {" "}
                <a
                  href="https://www.codecademy.com/catalog/language/javascript"
                  target="\_blank"
                >
                  Learn JavaScript
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/watch?v=PFmuCDHHpwk"
                  target="\_blank"
                >
                  Object-oriented Programming in JavaScript: Made Super Simple
                </a>
              </li>
              <li>
                {" "}
                <a href="Scrimba.com" target="\_blank">
                  Scrimba
                </a>
              </li>
            </ul>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className="bg-light border">
          <h5>The Command Line</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>The Command Line</h3>
          <p>Someone who can use the basic features of a bash terminal.</p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <ul>
            <li>
              Open a bash terminal (Windows users: We suggest you to use Git
              Bash)
            </li>
            <li>
              Navigate a folder structure (opening a folder, going back one
              folder level, going to home)
            </li>
            <li>List all folders and files in a directory</li>
            <li>Make a folder</li>
            <li>Create a file from command-line</li>
            <li>Rename a file</li>
            <li>Copy a file</li>
            <li>Remove a file</li>
            <li>Rename a folder</li>
            <li>Remove a folder</li>
          </ul>
          <h4>Suggested Learning:</h4>
          <ul>
            <li>
              <a
                href="https://www.udemy.com/course/command-line/"
                target="\_blank"
              >
                Udemy
              </a>
            </li>
            <li>
              <a href="https://www.theodinproject.com/" target="\_blank">
                The Odin Project
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=5XgBd6rjuDQ"
                target="\_blank"
              >
                How to use the Command line:
              </a>
            </li>
            <ol>
              <li>pwd - print working directory</li>
              <li>ls - List files</li>
              <li>cd directoryname - Change directory</li>
              <li>touch filename - Make file</li>
              <li>rm filename - Remove file</li>
              <li>rm -r directoryname - Remove directory</li>
              <li>clear - clear what’s on the screen</li>
              <li>nano - create a file and write in it</li>
              <li>../ - go up one leve</li>
            </ol>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header className="bg-light border">
          <h5>Source Control</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Git & GitHub</h3>
          <p>
            Be a developer who can share code with other developers through a
            distributed version control system like Git.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>
                    Discuss the problems that can be solved by source control
                    systems like Git
                  </li>
                  <li>Fork a repository in Github</li>
                  <li>Differentiate between copies of repositories</li>
                  <li>Clone from a remote repository</li>
                  <li>Differentiate between local and remote changes</li>
                  <li>Open source control panel in VS Code</li>
                  <li>Commit changes with a good message</li>
                  <li>Sync changes between local and remote repositories</li>
                  <li>Discuss the impact of well-written commit messages</li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a
                      href="https://dev.to/vishnuchilamakuru/git-cheatsheet-1oaj"
                      target="\_blank"
                    >
                      Git CheatSheet
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codecademy.com/learn/learn-git"
                      target="\_blank"
                    >
                      Codecademy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.udemy.com/course/git-started-with-github/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-LcWa2fBnTmPI5KyCoiS5ug"
                      target="\_blank"
                    >
                      Udemy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.udemy.com/course/git-started-with-github/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-LcWa2fBnTmPI5KyCoiS5ug"
                      target="\_blank"
                    >
                      Learn git branching
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Creating/Deleting Branches</li>
                  <li>Merging</li>
                  <li>Resolving Merge Conflicts</li>
                  <li>Working with Multiple Remotes</li>
                  <li>Rebasing with Conflicts</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header className="bg-light border">
          <h5>SASS</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Sass</h3>
          <p>
            A developer who is able to use SASS/SCSS effectively in a web
            application.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>Understand what Sass does for you</li>
                  <li>Differentiate between CSS and Sass syntax</li>
                  <li>Install Sass in a website project</li>
                  <li>Modularize and re-use CSS</li>
                  <li>
                    Use variables to reuse constants like colors and fonts
                  </li>
                  <li>
                    Use mixins to build groups of CSS declarations for reuse
                  </li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a
                      href="https://www.udemy.com/course/sass-for-the-beginners/"
                      target="\_blank"
                    >
                      Sass for Beginners
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codecademy.com/learn/learn-sass"
                      target="\_blank"
                    >
                      Codecademy
                    </a>
                  </li>
                  <li>
                    <a href="https://sass-lang.com/" target="\_blank">
                      Sass Documentation
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    Use variables to reuse constants like colors and fonts
                  </li>
                  <li>
                    Use mixins to build groups of CSS declarations for reuse
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="8">
        <Accordion.Header className="bg-light border"><h5>Advanced Git</h5></Accordion.Header>
        <Accordion.Body>
          <h3>VS Code Power User</h3>
          <p>
            Be a developer who can utilize Visual Studio Code to create and
            maintain code files.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h4>Suggested Learning:</h4>
          <ul>
            <li>
              <a href="" target="\_blank">
                Learn git branching
              </a>
            </li>
            <li>
              <a href="" target="\_blank">
                Learn git branching
              </a>
            </li>
            <li>
              <a href="" target="\_blank">
                Learn git branching
              </a>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item> */}
      <Accordion.Item eventKey="9">
        <Accordion.Header className="bg-light border">
          <h5>JQuery</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>JQuery</h3>
          <p>
            Learn the basics of jQuery, a JavaScript library that allows you to
            easily add dynamic behavior to static web pages.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <ul>
            <li>Explain the utility of the jQuery object (“$”)</li>
            <li>Selection of DOM elements (CSS, ID, Name, etc)</li>
            <li>Work with collections of elements</li>
            <li>Listening for and reacting to events on DOM elements</li>
            <li>Creating/appending/prepending DOM elements</li>
            <li>Modifying existing DOM elements (attributes, content)</li>
            <li>Removing DOM elements</li>
            <li>Perform basic animations</li>
            <li>
              Integrate 3rd party plugins to get functionality without having to
              create it
            </li>
          </ul>
          <h4>Suggested Learning:</h4>
          <ul>
            <li>
              <a
                href="https://www.udacity.com/course/intro-to-jquery--ud245"
                target="\_blank"
              >
                Intro to jQuery
              </a>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header className="bg-light border">
          <h5>Postman</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Postman</h3>
          <p>
            A user of Postman who is able to use its features to access API’s
            using HTTP requests.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <ul>
            <li>Understand what Postman is used for</li>
            <li>Install Postman to your computer.</li>
            <li>Able to create collections</li>
            <li>Able to create new requests</li>
            <li>Able to save requests for reuse</li>
            <li>Can add headers to the request</li>
          </ul>
          <h4>Suggested Learning:</h4>
          <ul>
            <li>
              <a href="https://learning.postman.com/" target="\_blank">
                Postman Learning Center
              </a>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header className="bg-light border">
          <h5>Bootstrap</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Bootstrap Developer</h3>
          <p>
            Be a developer who can utilize Twitter’s Bootstrap to build
            nicely-styled and formatted web applications with minimal effort.
          </p>

          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>
                    Describe the utility of Bootstrap in front-end web
                    development
                  </li>
                  <li>
                    Import Bootstrap CSS code from a remote CDN into an HTML
                    document
                  </li>
                  <li>Add padding and margin using Bootstrap styles</li>
                  <li>
                    Style buttons with various Bootstrap states like warning,
                    info, primary, etc
                  </li>
                  <li>Use containers to frame content</li>
                  <li>
                    Use the grid system to format content in rows and columns
                  </li>
                  <li>
                    Use some of Bootstrap’s most common components in a web
                    page:
                    <ul>
                      <li>Alert</li>
                      <li>Badge</li>
                      <li>Nav</li>
                      <li>Spinner</li>
                      <li>List Group</li>
                      <li>Card</li>
                    </ul>
                  </li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://www.freecodecamp.org/news/want-to-learn-bootstrap-4-heres-our-free-10-part-course-happy-easter-35c004dc45a4/"
                      target="\_blank"
                    >
                      Learn Bootstrap 4
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://www.freecodecamp.org/news/the-best-bootstrap-examples/"
                      target="\_blank"
                    >
                      FreeCodeCamp’s Tutorial
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
                      target="\_blank"
                    >
                      Bootstrap’s Documentation
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    Create responsive navbars using nav tag (fixed at top)
                  </li>
                  <li>Build navs from scratch with tabs and pills</li>
                  <li>Display content in a modal</li>
                  <li>Use cards to display groups of content</li>
                  <li>Use list groups to display lists of items</li>
                  <li>
                    Use a theme to change the style of an entire site at once
                  </li>
                  <li>
                    Include bootstrap-icons (or Font Awesome icons) as accents
                    in the website
                  </li>
                  <li>Build responsive forms with all HTML input types</li>
                  <li>
                    Can utilize the following components:
                    <ul>
                      <li>Carousel</li>
                      <li>Tooltips</li>
                    </ul>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header className="bg-light border">
          <h5>API's</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Rest API</h3>
          <p>A software developer who can interact with simple REST API’s.</p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>Understand the utility of REST API’s</li>
                  <li>
                    Able to read and write to a REST API using a REST Utility
                  </li>
                  <li>Understands how and when to use querystring</li>
                  <li>Can use API Keys to gain access to secured data</li>
                  <li>Read API responses.</li>
                  <li>Properly form JSON payloads for requests</li>
                  <li>
                    Recognize common HTTP Error codes (200’s, 300’s, 400’s,
                    500’s)
                  </li>
                  <li>
                    Utilize JavaScript’s built-in Fetch (get, put, post, delete)
                    to interact with an API
                  </li>
                  <li>
                    Utilize JQuery’s AJAX functions (get, put, post, delete) to
                    interact with an API
                  </li>
                  <li>Process API response to display data on a web page</li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a
                      href="https://www.w3schools.com/jquery/jquery_ajax_intro.asp"
                      target="\_blank"
                    >
                      AJAX
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freecodecamp.org/news/apis-for-beginners-full-course/"
                      target="\_blank"
                    >
                      API's for Beginners
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=uBR2wAvGces"
                      target="\_blank"
                    >
                      JavaScript Fetch API
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h4>Suggested API's for Testing</h4>
                <ul>
                  <li>
                    <a href="https://openweathermap.org/api" target="\_blank">
                      Open Weather API
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://jsonplaceholder.typicode.com/"
                      target="\_blank"
                    >
                      JSON Placeholder
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header className="bg-light border">
          <h5>Packages</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>NPM</h3>
          <p>
            A developer who can use npm and its packages to enhance
            javascript-based applications.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>
                    Install NodeJS and NPM (NPM comes bundled with NodeJs)
                  </li>
                  <li>Use npm to install global packages</li>
                  <li>Use npm to initialize a new application</li>
                  <li>Use npm to install packages for an existing project</li>
                  <li>Use npm to add packages to an application</li>
                  <li>Add dev-only packages to an application</li>
                  <li>Remove npm packages</li>
                  <li>Update npm packages</li>
                  <li>Run a security audit</li>
                  <li>Fix security vulnerabilities automatically</li>
                  <li>Use npm packages in a javascript application</li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a
                      href="https://www.udemy.com/course/npm-mastering-the-basics/"
                      target="\_blank"
                    >
                      Udemy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.impressivewebs.com/npm-for-beginners-a-guide-for-front-end-developers/"
                      target="\_blank"
                    >
                      Npm for beginners
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freecodecamp.org/learn/"
                      target="\_blank"
                    >
                      Freecodecamp.org’s API’s and Microservices
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Initialize an application.</li>
                  <li>Use NPM to install global packages</li>
                  <li>Use NPM to install local packages</li>
                  <li>Add package as a dependency manually to package.json.</li>
                  <li>Change the version of a package.</li>
                  <li>Add and run scripts.</li>
                  <li>Add and run scripts.</li>
                  <li>Update packages</li>
                  <li>Uninstall packages (global or local)</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header className="bg-light border">
          <h5>Webpack</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Webpack</h3>
          <p>
            A developer who is able to effectively integrate and use Webpack in
            a web project.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>Implement webpack in a new application.</li>
                  <li>Use webpack to bundle ES6 modules</li>
                  <li>Optimize html, css, and js output for quick download</li>
                  <li>
                    Use Loaders to handle Sass precompiling and Babel
                    transpiling
                  </li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a href="https://webpack.js.org/" target="\_blank">
                      Webpack Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://webpack.js.org/guides/asset-modules/"
                      target="\_blank"
                    >
                      Asset Modules
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=TOb1c39m64A"
                      target="\_blank"
                    >
                      Webpack 5 Full Project Setup
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Implement webpack in an existing application</li>
                  <li>Use loaders to embed images into html.</li>
                  <li>
                    Explain the concept of “Code Splitting” and why you might
                    want it.
                  </li>
                  <li>
                    Explain the concept of “Tree Shaking” and why you might want
                    it.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="16">
        <Accordion.Header className="bg-light border">
          <h5>Babel</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Babel</h3>
          <p>
            A developer who is able to work with Babel to transpile javascript
            code to standard ES6 code.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>Explain what babel does for you</li>
                  <li>
                    Demonstrate how babel transpiles javascript using a “repl”
                  </li>
                  <li>Install babel in your web project</li>
                  <li>
                    Transpile all modern (ES6+) javascript in a project to
                    browser-compatible JavaScript with one command (npm script)
                  </li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a href="https://flaviocopes.com/babel/" target="\_blank">
                      Simple guide to Babel
                    </a>
                  </li>
                  <li>
                    <a href="" target="\_blank">
                      Learn git branching
                    </a>
                  </li>
                  <li>
                    <a href="https://babeljs.io/" target="\_blank">
                      Babel Documentation
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Explain the utility of Babel plugins in general</li>
                  <li>Extend Babel with existing plugins</li>
                  <li>Explain the utility of Babel presets in general</li>
                  <li>Utilize existing Babel presets</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="17">
        <Accordion.Header className="bg-light border">
          <h5>React</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>React</h3>
          <p>
            A developer who is able to effectively use ReactJS to build
            immersive front-end applications.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <ul>
            <li>Able to use the CLI to start a new React application.</li>
            <li>
              Use snippets and template code for new components and common React
              structures.
            </li>
            <li>Able to route traffic from browser url to components.</li>
            <li>Differentiate between the DOM and React’s Virtual DOM.</li>
            <li>Able to build reusable components (with and without JSX).</li>
            <li>Able to render data using components.</li>
            <li>Able to pass components to other components in props.</li>
            <li>Able to pass data into components using props.</li>
            <li>Able to control component state.</li>
            <li>
              Able to respond to events in elements like click, touch, change.
            </li>
            <li>Able to handle events triggered by components.</li>
            <li>
              Understand and discuss component lifecycle and ways to interact
              with the component at those different lifecycle stages.
            </li>
            <li>
              Able to create functional components and knows when they are ideal
              to use.
            </li>
            <li>
              Able to build containers or views that utilize many smaller
              components.
            </li>
            <li>Able to debug a React app.</li>
            <li>Able to use 3rd party packages and components.</li>
            <li>Able to use inline styles and css to style components.</li>
            <li>
              Able to make “ajax” requests (or http requests) to outside API’s
              to get and give data.
            </li>
            <li>
              Able to use data received from outside API’s to populate data in a
              component (and subsequently on the screen) Suggested{" "}
            </li>
          </ul>
          <h4>Suggested Learning:</h4>
          <ul>
            <li>
              <a href="https://scrimba.com/learn/learnreact" target="\_blank">
                Learn React for free
              </a>
            </li>
            <li>
              <a
                href="https://www.codecademy.com/learn/react-101"
                target="\_blank"
              >
                Codecademy
              </a>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="18">
        <Accordion.Header className="bg-light border">
          <h5>Unit Testing</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>JavaScript Unit Testing (Test Driven Data)</h3>
          <p>
            Able to develop Javascript code using various forms of testing.
            Learn to write unit tests in JavaScript with Mocha.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>Describe the “system under test”</li>
                  <li>Describe arrange, act and assert phases of a test</li>
                  <li>
                    Differentiate between unit, integration, e2e and acceptance
                    testing
                  </li>
                  <li>Able to write and run unit tests in javascript</li>
                  <li>
                    Able to demonstrate a failing test that fails “for the right
                    reason”
                  </li>
                  <li>Able to make a previously failing test to pass</li>
                  <li>Can include meaningful assertions in unit tests</li>
                  <li>Can write and run an integration test</li>
                </ul>
                <h4>Suggested Learning:</h4>
                <ul>
                  <li>
                    <a
                      href="https://www.codecademy.com/learn/learn-javascript-unit-testing"
                      target="\_blank"
                    >
                      Learn JavaScript Unit Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.udacity.com/course/javascript-testing--ud549"
                      target="\_blank"
                    >
                      JavaScript Testing
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Can set up test runner and initial tests from scratch</li>
                  <li>Discuss why mocking is necessary in testing</li>
                  <li>
                    Able to mock internal and external modules to keep unit
                    tests isolated
                  </li>
                  <li>
                    Can use fakes or mocks to impersonate functionality from
                    dependent services (ex: 3rd party API)
                  </li>
                  <li>Discuss what unit test coverage demonstrates</li>
                  <li>Can generate coverage report.</li>
                  <li>Can test async functions</li>
                  <li>Can write and run an E2E test.</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="19">
        <Accordion.Header className="bg-light border">
          <h5>Firebase</h5>
        </Accordion.Header>
        <Accordion.Body>
          <h3>Firebase</h3>
          <p>
            A developer who is able to use Firebase to develop secure,
            data-driven web applications.
          </p>
          <hr></hr>
          <h4>Master the following skills:</h4>
          <ul>
            <li>
              Able to discuss the types of problems Firebase tries to solve
            </li>
            <li>Integrate Firebase with an existing front-end application</li>
            <li>
              Utilize the Cloud Firestore to create, read, update and delete
              data from the front-end
            </li>
            <li>
              Query data in Firebase and display the array of responses in the
              front-end application
            </li>
            <li>Host a front-end web application with Firebase Hosting</li>
          </ul>
          <h4>Suggested Learning:</h4>
          <ul>
            <li>
              <a
                href="https://firebase.google.com/docs/web/setup"
                target="\_blank"
              >
                Firebase Docs and Tutorial
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=9zdvmgGsww0&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb"
                target="\_blank"
              >
                Firebase FireStore tutorial
              </a>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Cards;
