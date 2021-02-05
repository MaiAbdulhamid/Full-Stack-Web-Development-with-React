# Full-Stack Web Development with React
 Full-Stack Web Development with React, Coursera Specialization
 
## Course 1: Front-End Web UI Frameworks and Tools: Bootstrap 4

 ### This course is divided into 4 modules, Each module takes 1 week.
 
 ### Week 1 :
 
 <details>
 <summary>Full Stack Web Development: The Big Picture</summary>
 
  ### 1. What is Full-Stack Web Development?
  
  - **The frond end**: is where we are delivering the content to the user, typically, in a browser where they use accesses the information, and this is where we use technologies like HTML, CSS and JavaScript to render the content for to the user.
  - This information delivery is supported behind the scenes by a back end support which is typically implemented these days using technologies like PHP, Java, ASP.NET, Ruby, Python or NodeJS.
  - The three tier architecture for Web Development:
  - The presentation layer, which is concerned with delivering the to the user, So, this is usually the UI-related concerns that are dealt with at the presentation layer(front-end).
  - The Business Logic Layer, on the other hand, is concerned more about the data, the data validation, the dynamic content processing, and generating the content to be delivered to the user(servers). 
  - This is backed up behind the scenes with the data persistence layer or the data access layer. So, this is concerned with how we store and interact with the data, typically, in the form of a database and access this data through an API(Databases). 
  - Additional Links:
    - [What is a Full Stack developer](https://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)
    - [What is a Full-stack Web Developer After All](https://edward-designer.com/web/full-stack-web-developer/)
    - [The Myth of the Full-stack Developer](https://www.andyshora.com/full-stack-developers.html)
    - [What is the 3-Tier Architecture?](http://www.tonymarston.net/php-mysql/3-tier-architecture.html)
    - [Multitier architecture](https://en.wikipedia.org/wiki/Multitier_architecture).
    
 </details>
 
 <details>
 <summary>Setting up your Development Environment: Git and Node</summary>
  
  ### 2. Setting up Git
  
  - **version control system**: This is a software tool that enables us for the management of changes to source code and maintaining your version history. So as your source code evolves, you will be able to check in the code at different points of times so that you can always have a way of rolling back to a previous version, in case your updates to the code doesn't work correctly.
  - [git-scm](https://git-scm.com/downloads)
  - `$ git --version` -> to check what version of git is installed on your computer.
  - `$ git config --global user.name "username"` -> will configure a global identity parameters, the username.
  - `$ git config --global user.email "email"` -> will configure a global identity parameters, the email.
  - `$ git config --list` -> to insure that this information has been configured.
  
  ### 3. Basic Git Commands
  
  - `$ git init` -> This initializes the current folder as a git repository and when it initializes the folder, it will mark that folder as a master(branch). 
  - `$ git status` -> It'll tell you the current status of the folder.
  - `$ git add .` -> means that all the files in the current directory will be added to what is called as the staging area of my git repository.
  - `$ git commit -m "Message"` -> commit the current state of our folders into our git repositories.
  - `$ git log --oneline` -> will show us a brief log of all the commits, commitNumber and the commit message.
  -  commitNumber -> identifies the particular commit.
  - `$ git checout commitNumber <file>` -> allows us to check out a file from a previous commit in our git repository.
  - `$ git reset HEAD <file>` -> the modified version that I had checked out is still there but this file has been unstaged from the staging area.
  - `$ git checkout -- <file> ` -> discard the changes that you have made to a particular file corresponding to the previous commit.
  - `$ git reset <file> ` -> it'll restore you back to the last commit. So it will reset the staging area to the last commit, without disturbing the changes that you have done to your working directory. 
  - `$ git reset ` -> restore your folder back to the where you were at the starting point of the previous commit.
  
  ### 4. Online Git Repositories
  
  - Online Git repositories enable you to store a copy of your Git repository online.
  - Popular Git repositories: [Github](https://github.com/), [bitbucket](https://bitbucket.org/).
  - `$ git remote add origin <repositoryUrl>` -> Add the remote origin is set to the online repository.
  - `$ git push -u origin master` -> push the local git repository to my online repository.
  - Remember that your local repository can only be matched to one online repository.
  - `$ git clone <repositoryUrl>` -> Make a copy of that Git repository on to your local.
  
  ### 5. Node.js and NPM
  
  - Node.js has played a significant role in this shift of JavaScript from the browser to the desktop.
  - Node js is based on the JavaScript runtime engine that has been built for the Chrome browser.
  - Node.js is built around an event-driven, non-blocking I/O model which makes it very efficient to run JavaScript programs on the desktop, asynchronous JavaScript on the desktop. 
  - When you install Node on your computer NPM automatically gets installed.
  - The Node package manager is the manager for the Node ecosystem.
  - NPM manages all the Node modules and packages that have been made publicly available by many different users.
  - `package.json` -> the manifest file for this Node module.
  
  ### 6. Setting up Node.js and NPM
  
  - To install Node on your machine, go to [Node.js](https://nodejs.org/en/) and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded.
  - `$ node -v` -> to check the version of node installed.
  - `$ npm -v` -> to check the version of NPM installed.
  
  ### 7. Basics of Node.js and NPM
  
  - The **[lite-server](https://github.com/johnpapa/lite-server)**: is something that we're going to extensively use in this and future courses, to be able to see the changes in real time in a browser window as you edit the files of your project.
  - `package.json` file:
    - it serves as the documentation on what all other packages that your project is dependent upon.
    - it allows you to specify which specific version of a package that your project is dependent on.
    - it makes your builds reproducible, which means that when you share your code with others, then they can also do installation of all the node modules.
  - `$ npm init` ->  initialize the `package.json` file.
  - `$ npm i lite-server --save-dev` -> Set up this lite server.
  - save-dev option specifies that this lite server is used for development dependency for our project. 
  - You will immediately notice that there is a folder there created named node_modules, which contain node modules.
  - This lite-server node module is dependent on other node modules to provide it with some additional functionality. So that's the reason when you install the light server node module, it'll in turn install many other node modules, on which the light server itself is dependent on.
  - In `package.json` file: there is an option called scripts. Add `"start":"npm run lite"` before `"test"`. Add `"lite": "lite-server"` after `"test"`.
  - now our project is configured, so that now if you start the lite- server, the contents of your folder will be now served up in your favorite browser.
  - `$ npm start` -> Start the lite-server, and it will serve up the contents of this folder.
  - This should automatically open the browser window of your default browser, and show the contents of index or HTML in the browser window.
  - So when you make a change and then save the file, the modified code is immediately loaded into your browser. So you can immediately see the change being reflected in your browser window.
  - Add `.gitignore` file, and the first line of that file, we will type as node_modules. So what this means is that the node_modules folder is going to be excluded from our git commit.
  
 </details>
 
 <details>
 <summary>Introduction to Bootstrap</summary>

  ### 8. Front-end Web UI Frameworks
  
  - Front-end Web UI Frameworks are becoming their go-to approach for designing and implementing their recent websites.
  - Front-end Frameworks provide you with a consistent way of designing websites. And, most of these it support responsive web design.
  - responsive web design: design your website to automatically adapt itself to cater to the size constraints of each of these different devices, from which your website is being accessed. 
  - Bootstrap is the most popular among all the front-end web UI frameworks.
  - Cross browser compatibility: no two browsers render the same website exactly the same way.
  - front-end frameworks have managed to deliver consistent rendering of your website on different browsers.
  
  ### 9. Introduction to Bootstrap
  - [Bootstrap website](https://getbootstrap.com/).
  - Bootstrap claims to be the most popular HTML, CSS, and JavaScript based framework that is in use today and specially designed for developing responsive mobile first websites.
  - It supports a number of CSS classes that enable you to design radius, web components very effectively.
  - It supports many different kinds of that components like buttons, tables, navigation bars, modals, images, carousels, and many other, as well as many JavaScript enabled competence.
  - Mark Otto and Jacob Thornton from Twitter designed Bootstrap for their own internal use and then ended up releasing it for the rest of the web development community to use for consistent website design.
  
  ### 10. Getting Started with Bootstrap
  - Open starter code, there is `index.html` file, `package.json`.
  - `$ cd projectDirectory`.
  - Type `$ npm i` -> it will download all packages in the `package.json` file.
  - Add `.gitignore` file.
  - `$ git init`
  - `$ git add .`
  - `$ git commit -m "Initial setup"`
  - `$ npm install bootstrap@4.0.0` -> install bootstrap using npm.
  - `$ npm install jquery@3.3.1 popper.js@1.12.9`
  - `$ npm start`
  - Add this code before the `title`:
  
  ```
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
  ```
  - Add this scripts after `footer`:
  
  ```
    <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  ```
  - Because when you are loading the page from a web server, you want the CSS classes to be loaded immediately so that as the page starts rendering, when the JavaScript is fetched, the JavaScript needs to execute in order to make changes to your page with the JavaScript code, and that will take a little bit of time. 
  - So you don't want the user to be waiting for the entire page to be loaded before they see something in their browser window. 
  - So that's why we normally load the JavaScript classes towards the end of our html page just before the body tech.
  - [Migrating to v4](https://getbootstrap.com/docs/4.0/migration/)
  - [Top Frontend Frameworks](https://www.keycdn.com/blog/frontend-frameworks).
  - [The 5 Most Popular Front-end Frameworks Compared](https://www.sitepoint.com/most-popular-frontend-frameworks-compared/).
  
  </details>
  
  <details>
  <summary>Responsive Design and Bootstrap Grid System</summary>
 
  ### 11. Responsive Design
  
  - An approach that will automatically adapt your website to the size of the screen on which it is being viewed.
  - It will automatically adapt to the viewport of the user's device.
  - The second related concept that you will hear is **mobile first**. The mobile first approach instead looks at designing a website for a mobile device first.
  - There are several concepts that are built in to your frame time web UI frameworks:
    - First and foremost is what is called is a Grid system.
    - The second aspect is fluid images, so that your images that you include in your website will automatically adapt itself to the screen size.
    - The third part is what is a CSS media queries from your CSS code. You can query the size of the media and then appropriately adjust your CSS classes to fit the size of the device's screen. 
  - So doing media queries, your web UI framework is able to establish what kind of device you're rendering your website on. And correspondingly adjust the CSS classes to fit that particular devices screen size.
  
  ### 12. Bootstrap Grid System
  - This `meta` tag :
  ```<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">```
  
  automatically adapt the rendering of the page to the devices screen width. That way, then we have responsive classes, CSS classes built into our UI framework, then that will ensure that our web page is correctly rendered for that particular screen size.
  
  - Bootstrap grid is designed to be:
    - responsive.
    - Mobile first.
    - Fluid.
  - The Bootstrap grid takes advantage of the CSS flexbox layout.
  - This flexbox layout can easily handle dynamic content and can adapt the containers to the dynamic content, and also can easily adapt to unknown size of the actual content enclosed inside the containers.
  - The way the Bootstrap grid works, is by applying a container plus to the outermost layer. We might use a `div` for defining the element for which we apply the `container` class in general. 
  - This `container` class enables this fixed width to automatically adapt itself to the size of the screen by using media queries.
  - we'll include an inner `div` to which we will apply the `row` class. So, the content itself will be vertically divided into multiple rows. 
  - Each row in Bootstrap, will be divided into `12` equal sized columns. 
  - whatever content you layout all of those 12 columns will automatically adjust itself to the width that is allowed for the content.
  - `col-sm-5` -> this particular content that is enclosed inside those div, will occupy five columns for all screen sizes, from small all the way to extra large.
  - Whenever you specify any `col-` and any screen size, then that applies to that particular screen size and everything above that screen size. 
  - The reason for choosing `12` is that 12 is a good multiple of two,three, four and so on.
  - Between these two pieces of content they'll be a small empty white space that'll be left, which is just `30px` by default. `15px` is from one piece of content and `15px` from other piece of content. 
  - `order-sm-first`, `order-sm-last` -> allow you to reorder the content on the screen.
  - `align-items-center` -> content will be laid out vertically-aligned (centered vertically) within that particular row.
  - `justify-content-center` -> the entire content in this particular row will be centered with respect to the row horizontal.
  
  ### 13. Exercise: Responsive Design and Bootstrap Grid System Part 1
  - In this exercise we looked at the use of the container, row, and column classes in order to design our web page a little bit nicer.
  
  ### 14. Exercise: Responsive Design and Bootstrap Grid System Part 2
  - In this exercise, we saw the use of custom CSS classes, and also used some of the classes for justifying the content horizontally and vertically in our rows.
  
  </details>
 
  <details>
  <summary>Assignment 1</summary>
  
  ### 15. Assignment
  
  - [Grid system](https://getbootstrap.com/docs/4.0/layout/grid/).
  - [Display property](https://getbootstrap.com/docs/4.0/utilities/display/).
  - [Full Page Screen Capture](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl).
 
  </details>
 
  ### week 2:
  
 <details>
 <summary>Navigation and Navigation Bar</summary>
 
  ### 1. Navigation and Navigation Bar
  - The information architecture begins with the structure of the system, with respect to the way the information is organized, labelled. 
  - Navigation is provided through the content or through this information.
  - when you're designing a website, it is important to understand the need to design the information navigation structures within your website.
  - Indicating the location of the user within the hierarchy of your website is very useful to provide a user-friendly way of navigating your websites.
  - You should not have too many choices in your navigation bar.
  - The breadcrumbs sort of indicate some kind of a navigational hierarchy within which you're currently In your website. 

  ### 2. Exercise: Navbar and Breadcrumbs
  - Adding `navbar` to `git-test` project.
  - `navbar` -> That class allows me to create a navigation bar.
  - `navbar-dark` -> Make navigation bar to be dark in color, with a darker background.
  - `navbar-light` -> Which is a lighter color navigation bar.
  - `navbar-expand-sm` ->  That class means that for small and extra small screens, this navbars will become a toggle-able navbar.
  - `bg-primary` -> Is that primary color that is defined in your bootstrap. 
  - `fixed-top` ->  It fixes the navigation bar to the top of the browser window where this web page is being rendered.
  - `navbar-nav` -> This is the class that will help me to define the set of links that will be included in my navigation bar. 
  - `mr-auto` -> This is a utility class that is available in bootstrap that allows me to specify the right margin (the content will be pushed as left as possible within the navigation bar).
  - To make Link items in the `nav ul`:
  ```
    <li class="nav-item">
     <a class="nav-link" href="#">
       Home
     </a>
   </li>
  ```
  
  ### 3. Icon Fonts
  - Icon fonts are a set of symbols or glyphs that can be used in your website design.
  - These can be used just like regular fonts, just like regular text fonts that you use in your website.
  - Their advantage is that you can style them and then expand and contract them and use all typical stylings that you use on your text, for your icons also.
  - They are seen as a popular lightweight replacement for simple graphics that you can use in your web pages. 
  - [Font Awesome](https://fontawesome.com/start), is a very popular icon font.
  
  ### 4. Exercise: Icon Fonts
  - `$ npm install font-awesome@4.7.0` -> To install fontawesome.
  - `$ npm install bootstrap-social@5.1.1` -> To install bootstrap-social
  - Import fontawesome and bootsrtap:
  ```
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
  ```
  - `<span class="fa fa-iconName fa-lg"></span>` -> Use icons in the navbar Links and footer.
  
 </details>
 
 <details>
 <summary>User Input: Buttons and Forms</summary>
 
  ### 5. User Input
  - User interaction needs to be supported on websites using many different approaches including buttons, forms, text boxes, check boxes, and many others.
  - The button behavior depends upon where it is positioned in bootstrap.
  - Hyperlinks could also be hijacked to be styled and presented in the form of a button.
  - [The Difference Between Anchors, Inputs and Buttons](https://davidwalsh.name/html5-buttons).
  
  ### 6. Exercise: Buttons
  - Dowload `contactus.html` page.
  - Add `btn` To this page.
  - We define the button bar using the `btn-group` class.
  - Add the three buttons using the `a` tag. 
  - In this case, the three buttons are hyperlinks that cause an action and have an `href` associated with them.
  - So we decided to use the `a` tag instead of the `button` tag.
  - Note how the `a` tags have been styled using the btn class.
  - [Button group](https://getbootstrap.com/docs/4.0/components/button-group/)
  
  ### 7. Exercise: Forms
  - We will add a simple form to the page at the location identified by "Form goes here". Add the following code to page to create a simple horizontal form with two fields:
  ```
    <form>
        <div class="form-group row">
            <label for="firstname" class="col-md-2 col-form-label">First Name</label>
            <div class="col-md-10">
                <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="lastname" class="col-md-2 col-form-label">Last Name</label>
            <div class="col-md-10">
                <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name">
            </div>
        </div>
    </form>
  ```
  - [forms](https://getbootstrap.com/docs/4.0/components/forms/).
  
 </details>
 
 <details>
 <summary>Displaying Content: Tables and Cards</summary>
 
  ### 8. Bootstrap Tables and Cards
  - The table used in bootstrap based that page is similar to how you use tables in standard HTML pages.
  - Bootstrap provides many different classes for styling tables like, table striped for zebra striped tables as we saw in the example earlier.
  - [Tables](https://getbootstrap.com/docs/4.0/content/tables/).
  - [Card](https://getbootstrap.com/docs/4.0/components/card/).
  - [Blockquotes](https://getbootstrap.com/docs/4.0/content/typography/#blockquotes)
  
  ### 9. Exercise: Displaying Content: Tables and Cards
  - In this exercise we will be modifying the `aboutus.html` page to add a table, a card with some content and a card with a quotation.
  
 </details>
 
 <details>
 <summary>Images and Media: Images, Thumbnails, Media Objects</summary>
 
 ### 10. Images and Media
 - Bootstrap provides extensive support for including images and various kinds of media in your websites and your web pages.
 - `img-fluid` -> Will make your images responsive(meaning that the size of the image will automatically adjust to different screen sizes).
 - `img-thumbnail` -> Will put a white border around your image.
 - `rounded` -> to create a image with rounded corners.
 - `rounded-<top|bottom|left|right>` -> to create a image with rounded corners to the selected corner.
 - `rounded-circle` -> to create a image circle.
 - `card-image-top` -> image class with cards. 
 - A media object allows you to specify an image that you can position either to the left or to the right of the description.
 - You can include a media body which contains the description that goes together with the image.
 - `embed-responsive embed-responsive-<4by3|16by9>` -> You can use the embed or iframe or video or object HTML tags and then enclose it inside a div.
 - `<4by3|16by9>` -> dimensions which you want to use.
 - [Images](https://getbootstrap.com/docs/4.0/content/images/).
 
 ### 11. Exercise: Images and Media
 - We will now update the `index.html` file to include images and media objects on the web page.
 - Add logo `img`.
 - Next we will work with the media object classes to style the content in the content rows.
 - **Note**: Since Bootstrap dropped the "media object" in `version 5`, you will now have to use the utility classes instead.
 
 </details>
 
 <details>
 <summary>Alerting Users: Badges, Alerts, Progress Bars</summary>
 
 ### 12. Alerting Users
 - Badges are an easy way of adding small amount of information to your website to attract the attention of visitors.
 - `badge  badge-danger` -> Red colored badge.
 - `badge-pill` -> which creates a rounded rectangle.
 - Alerts are another way of informing users about information.
 - The Alert can be created by a appling the `alert` class together with additional qualifying alert classes, which enable you to create alerts in different colors.
 - `alert-dismissible` -> allows you to include a class there which the user can click to dismiss an alert.
 - Progress bars are included in websites to keep users informed about the progress of whatever we have initiated on the website.
 - `progress` -> a progress bar created.
 - [Badge](https://getbootstrap.com/docs/4.0/components/badge/)
 - [Alerts](https://getbootstrap.com/docs/4.0/components/alerts/)
 - [Progress](https://getbootstrap.com/docs/4.0/components/progress/)
 
 ### 13. Exercise: Alerting Users
 - we're going to make use of badges to add badges to our web page, so that we can highlight some information for our visitors to our website.
 - **Note**: Since Bootstrap dropped the "badge-<color>" in `version 5`, you will now have to use the background utilities classes instead.
 - **Note**: Since Bootstrap dropped the "badge-pill" in `version 5`, you will now have to use the rounded utilities classes instead.
 
 </details>
 
 <details>
 <summary>Assignment 2</summary>
 
 - In this assignment, you will continue to work with the website that you have been developing in the exercises. You will edit the home page (index.html). You will start with the current home page at the end of the last exercise in this module. At the end of this assignment, you should have completed the following tasks:
   - Designed a form to enable users to submit a reservation request for a table. Note that at this stage the form will be inactive. This form should have been included in a new content row that you create just before the footer of the page.
   - Formatted the contents of the second row of the page using media class. The content column of the row should have been converted to a media object. In addition it should include a badge.
   - Added a button to the Jumbotron to enable users to access the form to reserve a table at the restaurant. Clicking on this button should take you to the reservation form at the bottom of the page.
 
 </details>
## Course 2: Front-End Web Development with React

 ### This course is divided into 4 modules, Each module takes 1 week.
 
 ### week 1 :
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 
## Course 3: Multiplatform Mobile App Development with React Native

 ### This course is divided into 4 modules, Each module takes 1 week.
 
 ### week 1 :
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 
 
 ## Course 4: Server-side Development with NodeJS, Express and MongoDB

 ### This course is divided into 4 modules, Each module takes 1 week.
 
 ### week 1 :
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 ### week 2 :
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>What is Full-Stack Web Development?</summary>
 
  ### Second
  
 </details>
