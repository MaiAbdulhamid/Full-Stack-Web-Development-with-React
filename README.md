# Full-Stack Web Development with React
 
 Full-Stack Web Development with React, Coursera Specialization.
 
 This Specialization contains 4 Courses: Front-End Web UI Frameworks and Tools: Bootstrap 4, Front-End Web Development with React, Multiplatform Mobile App Development with React Native, Server-side Development with NodeJS, Express and MongoDB.
 
## Course 1: [Front-End Web UI Frameworks and Tools: Bootstrap 4](https://www.coursera.org/learn/bootstrap-4)

 This course is divided into 4 modules, Each module takes 1 week.
 
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
  - In this assignment, you will continue to work with the website that you have been developing in the exercises. You will add the About Us web page to the website. To get you started, you are provided with a partially formatted aboutus.html.zip file given above that you need to download, unzip and move the aboutus.html to the conFusion folder that contains your website. At the end of this assignment, you should have completed the following tasks:
    - Updated the page to make use of Bootstrap classes and Bootstrap grid
    - Formatted the contents of the web page using the container, row and column classes
    - Use the responsive utilities (hidden-* classes) to enable hiding of the detailed descriptions in the extra small screen size devices
    
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
   
  - Additional links:
    - [Responsive helpers](https://v4-alpha.getbootstrap.com/utilities/responsive-helpers/)
 
 </details>
 
### week 3 :
 
 <details>
 <summary>Bootstrap JavaScript Components Overview</summary>
 
  ### 1. Bootstrap JavaScript Components
  - Most of these components started with a base class that you applied. Like for example, `btn` class.
  - Bootstrap supports a number of components that are supported through JavaScript plugins.
  - The Bootstrap JavaScript-based components essentially take JQuery-based support, but then package them in a way that you can employ them in your webpage even without writing a single line of JavaScript code.
  - The JavaScript components support a number of `data-*` attributes that you can apply to your `HTML` tags.
  - [Programmatic API](https://getbootstrap.com/docs/4.0/getting-started/javascript/).
  - [Js and Data attributes](https://getbootstrap.com/docs/4.0/getting-started/javascript/#data-attributes).
  - [Bootstrap and JavaScript](https://getbootstrap.com/docs/4.0/getting-started/javascript/).
  
 </details>
 
 <details>
 <summary>Tabs, Pills and Tabbed Navigation</summary>
 
  ### 2. Tabs, Pills and Tabbed Navigation
  - Tabs and pills provide a interesting navigation structure for our web page.
  - They will allow you to enclose content inside your web page that the user can navigate among the content without reloading the web page to a different web page.
  
  ### 3. Exercise: Tabs
  - Add tabs to `aboutus` page:
  
  ```
     <ul class="nav nav-tabs">
         <li class="nav-item">
           <a class="nav-link active" href="#peter"
             role="tab" data-toggle="tab">Peter Pan, CEO</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#danny" role="tab"
             data-toggle="tab">Danny Witherspoon, CFO</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#agumbe"role="tab"
             data-toggle="tab">Agumbe Tang, CTO</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#alberto" role="tab"
             data-toggle="tab">Alberto Somayya, Exec. Chef</a>
         </li>
     </ul>
  ```
  
  - Note the use of the <ul> tag with the nav and nav-tabs classes to set up the tab navigation. Each list item within the list acts as the tab element. Within each list item, note that we set up the <a> tags with the href pointing to the id of the tab pane of content to be introduced later. Also note that the <a> tag contains the data-toggle=tab attribute. The first list element's <a> tag contains the class active. This tab will be the open tab when we view the web page. We can switch to the other tabs using the tabbed navigation that we just set up.
 - [JavaScript behavior](https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior)
  
 </details>
 
 <details>
 <summary>Hide and Seek: Collapse and Accordion</summary>
 
  ### 4. Collapse and Accordion
  - The Accordion makes use of the Collapse plugin for its functioning. 
  - The Collapse plugin provides an easy way of revealing and hiding content on your web page.
  - This revealing and hiding of the content is usually triggered by the user clicking on a button or a link in your web page.
  - The way the Accordion works is that one piece of content is revealed and the remaining three are hidden.
  
  ### 5. Exercise: Accordion
  - Update the `nav-tabs` to have `accordion` instead.
  - [Collapse](https://getbootstrap.com/docs/4.0/components/collapse/).
  - [Accordion](https://getbootstrap.com/docs/4.0/components/collapse/#accordion-example)
  
 </details>
 
 <details>
 <summary>Revealing Content: Tooltips, Popovers and Modals</summary>
 
  ### 6. Tooltips, Popovers and Modals
  - Tooltips, popovers, and modals are a way of revealing content to the users, when the user interacts with certain elements on your web page.
  - The information is displayed as an overlay on top of your web page.
  - The underlying content of the web page is still there, but this is laid out on top of the underlying content.
  - In some circumstances, popovers are more useful than tooltips.
  - A modal allows you to present more detailed information to the users than a tooltip and popover.
  
  ### 7. Exercise: Tooltips and Modals
  - To add tooltip:
    - `data-toggle="tooltip"`
    - `data-html="true"` -> That means that the tooltip content can be styled using HTML
    - `title="tooltipContent, html Tag "` -> This is where the contents of the tooltip will be enclosed. you can use `HTML` to format the contents of the tooltip.
    - `data-placement="direction"` -> Specify The direction of showing tooltip.
  - Tooltips are a nice way of providing some additional information for the user when the user navigates to different locations on the page.
  - Add Modal:
    - Advises that all modal related code be placed at the top of your page.
    ```
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
        </div>
      </div>
    </div>
    ```
    - Add login button to the navbar to attached with the Modal.
  - **Note**: Since Bootstrap dropped the `data-*` in `version 5`, you will now have to use the `data-ba-*` instead.
   
 </details>
 
 <details>
 <summary>Carousel</summary>
 
  ### 8. Carousel
  -  The carousel allows you to display multiple items on your web page and provides an animated display of these items.
  
  ### 9. Exercise: Carousel
  - The carousel will be added to the `index.html` page.
  - [Carousel](https://getbootstrap.com/docs/4.0/components/carousel/)
  
 </details>
 
 <details>
 <summary>Assignment 3</summary>
 
  - In this assignment, you will continue to work with the website that you have been developing in the exercises. You will edit the home page (index.html). You will start with the current home page at the end of the last exercise in this module. At the end of this assignment, you should have completed the following tasks:

    - Moved the table reservation form from the last content row into a modal.
    - Included a radio button group in the table reservation form to enable diners to ask for a table in the smoking/non-smoking section of the restaurant.
    - Removed the tooltip from the Reserve Table button.
    - Updated the Reserve Table button to show the modal containing the table reservation form when the button is clicked.
  
 </details>
 
 
### week 4 :
 
 <details>
 <summary>Bootstrap and JQuery</summary>
 
  ### 1. Bootstrap and JQuery
  - Bootstrap has a number of interesting JavaScript-based components.
  - Bootstrap's JavaScript components are built upon jQuery.
  - Bootstrap's JavaScript-based components can be used in your webpage without writing a single line of JavaScript code.
  - So this is where the data-* attributes come to our rescue.
  - You can write code using the jQuery syntax and then use that together to control your Bootstrap's JS components.
  - `jQuery` is a very powerful, lightweight JavaScript-based library that provides a number of different components.
  - It is a feature rich library that enables writing code for doing HTML or DOM manipulation.
  - It allows you to do CSS manipulation.
  - jQuery also supports various effects and animations that can be applied to your HTML elements.
  - It allows you to handle HTML events, and when those events occur you can implement methods that are being executed in response to the occurrence of these events. 
  - Also jQuery enables you to interact with a back end server using AJAX.
  - `jQuery` Syntax -> `$(selector).action()` :
    - The `$` at the start of a sentence implies that this defines and accesses jQuery's library plugins that are available.
    - whenever we use the `$`, you also supply a selector.
    - The selector is used to query and find those HTML elements within your DOM to which you want to apply this manipulation.
    - Then the third aspect of a jQuery statement is the `action` that you specify.
    - Action can be performed on the selected HTML element.
    
  - `JQuery` Example:
  ```
  $(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip();
  })
  ```
  - You can specify a selector by specifying any specific HTML element by specifying the tag. So you can say p, button, h4, h3, or any of the HTML tags directly.
  - When you apply a selector like this, you're saying all the elements that match this criteria will be selected.
  - Then you can also specify a specific HTML DOM element by specifying the ID of that element by using the `#id`.
  - The other possibility is to specify an attribute that has been applied to HTML element.
  - You can also specify jQuery events, events based on which you respond.
  - We can even talk about the entire document.
  - `$("#myCarousel").on('slide.bs.carousel')` -> That mean when that slide action starts, then invoke this function, and then do something inside that function there. 
  
  ### 2. Exercise: Bootstrap and JQuery
  - We're going to explore this index exercise by using some JavaScript-based controls for our `Carousel` that we included in the `index.html` page in the previous exercise.
  - We are adding the two buttons inside a button group with the ID carouselButtons. The two buttons contain the pause and play glyphicons to indicate their corresponding actions:
  
  ```
  <div class="btn-group" id="carouselButton">
    <button class="btn btn-danger btn-sm" id="carousel-pause">
      <span class="fa fa-pause"></span>
    </button>
    <button class="btn btn-danger btn-sm" id="carousel-play">
      <span class="fa fa-play"></span>
    </button>
  </div>
  ```
  - To active that  buttons:
  ```
    <script>
      $(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );
        $("#carousel-pause").click(function(){
          $("#mycarousel").carousel('pause');
        });
        $("#carousel-play").click(function(){
          $("#mycarousel").carousel('cycle');
        });
      });
    </script>
  ```
  
  ### 3. Exercise: More Bootstrap and JQuery
  - We will modify the carousel control buttons in the carousel component that we already included in the index.html page. Instead of two buttons, we will use a single button that will indicate if the carousel is currently cycling or paused. Furthermore we can use the button to toggle the carousel cycling behavior:
  ```
    $("#carouselButton").click(function(){
      if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
      }
      else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
      }
    });
  ```
  
  - [Bootstrap Carousel Methods](https://getbootstrap.com/docs/4.0/components/carousel/#methods).
  - [Jquery](https://jquery.com/).
  
  
 </details>
 
 <details>
 <summary>Less is More!: Less and Sass</summary>
 
  ### 4. CSS Preprocessors: Less and Sass
  - Bootstrap is built using `Sass` for its source.
  - `CSS` is great for defining styles and repeatedly applying these styles to various `HTML` elements.
  - `CSS` doesn't have what you typically expect in a programming language, like variables, nesting of selectors, variables, expressions, and functions.
  - This means that writing `CSS` code becomes cumbersome, and maintaining `CSS` code becomes cumbersome.
  - This is where the `CSS` preprocessors come to our rescue.
  - There are several popular `CSS` preprocessors that try to address some of the shortcomings of `CSS` by supporting many of these features. Two in particular that is of interest to us is `Less` and `Sass`.
  - What these preprocessing languages bring to us is more programming language-like syntax.
  - CSS preprocessors bring is the support for variables, nesting selectors, expressions, functions and mixins.
  - Variables in the CSS preprocessor languages can also have their own scope.
  
  ### 5. Exercise: Less
  - In this exercise you will learn to write Less code and then automatically transform it into the corresponding CSS code.
  - Make `style.less` file and add `less` Code.
  - Add global variables:
  ```
  @lt-gray: #ddd;
  @background-dark: #512DA8;
  @background-light: #9575CD;
  @background-pale: #D1C4E9;

  // Height variables
  @carousel-item-height: 300px;
  ```
  - Add Mixin:
  ```
  .zero-margin (@pad-up-dn: 0px, @pad-left-right: 0px) {
   margin:0px auto;
   padding: @pad-up-dn @pad-left-right;
  }
  ```
  - Nesting styles:
  ```
  .carousel {
      background:@background-dark;

      .carousel-item {
          height: @carousel-item-height;
          img {
              position: absolute;
              top: 0;
              left: 0;
              min-height: 300px;
          }
      }
  }
  ```
  - `$ npm install -g less@2.7.2` -> This will install the less NPM module globally so that it can be used by any project.
  - `$ cd css` -> Change directory to css folder.
  - `$ lessc styles.less styles.css` -> To compile the Less file into a CSS file.
  
  ### 6. Exercise: Scss
  - In this exercise you will learn to write Scss code and then automatically transform it into the corresponding CSS code.
  - Add the following Scss variables into the file:
  
  ```
  $lt-gray: #ddd;
  $background-dark: #512DA8;
  $background-light: #9575CD;
  $background-pale: #D1C4E9;

  // Height variables
  $carousel-item-height: 300px;
  ```
  
  - Next we add a mixin into the file as follows:
  ```
  @mixin zero-margin($pad-up-dn, $pad-left-right) {
   margin:0px auto;
   padding: $pad-up-dn $pad-left-right;
  }
  ```
  
  - Using the variables and Mixin class that we defined earlier to the styles.
  - Next we add a nesting of classes:
  ```
  .carousel {
      background:$background-dark;

      .carousel-item {
          height: $carousel-item-height;
          img {
              position: absolute;
              top: 0;
              left: 0;
              min-height: 300px;
          }
      }
  }
  ```
  - `$ npm install --save-dev node-sass@4.7.2` -> This will install the node-sass NPM module into your project and also add it as a development dependency in your package.json file.
  - Next open your package.json file and add the following line into the scripts object there.  This adds a script to enable the compilation of the Scss file into a CSS file:
  `"scss": "node-sass -o css/ css/"`
  - `$ npm run scss` -> In order to transform the Scss file to a CSS file.
  - [Less](http://lesscss.org/).
  - [Sass](https://sass-lang.com/guide).
  - [Getting Started with Less](https://scotch.io/tutorials/getting-started-with-less).
  - [Getting Started with SASS](https://scotch.io/tutorials/getting-started-with-sass).
  - [Less NPM package](https://www.npmjs.com/package/less).
  - [Node-sass NPM package](https://www.npmjs.com/package/node-sass).
  
 </details>
 
 <details>
 <summary>Assignment 4</summary>
 
  - In this assignment, you will continue to work with the website that you have been developing in the exercises. You will edit the home page (index.html), the JavaScript code (scripts.js) and the SCSS code (styles.scss). You will start with the current home page at the end of the last exercise in this module. At the end of this assignment, you should have completed the following tasks:

   - Removed the data-* attributes from the Reserve Table button and the Login link in the Navbar that control the two modals.
   - Updated the button and the link so that they will trigger the appropriate JavaScript code when clicked.
   - Included appropriate JavaScript code using the modal methods to toggle the showing and hiding of the modals when the two buttons are clicked.
   - Add SCSS code to style the modal with colors
 
  - [Modal Methods](https://getbootstrap.com/docs/4.0/components/modal/#methods)
  
 </details>
 
 <details>
 <summary>Building and Deployment: NPM Scripts</summary>
 
  ### 7. Building and Deployment
  - Once your website is ready, the next step is to be able to build your website and to deploy it to a web server, so that it becomes publicly available.
  - The CSS code using one of the CSS preprocessing languages, like Sass or Less, then you need to convert that code into the corresponding CSS code. Thereafter, you need to do additional processing on your CSS files like minification, compaction, and concatenation.
  -  All these tasks are repetitive tasks, which we would like to automate as far as possible, so that we can concentrate on the actual design and building of our website, rather than these repetitive tasks.
  - Minification is the process of removing all the unnecessary characters, the white space, newlines, comments, from your CSS code.
  - Concatenation is the process of concatenate all of css files into a single CSS file at the end.
  - The uglification of the JavaScript code, which stands for minification, meaning removing all the unnecessary white space and comments and so on.
  - Mangling of the code, meaning reducing the names of the local variables to single letters wherever feasible.
  - You might include a lot of images into your web pages. Once your website is ready, you may want to compact those images so that you optimize the file sizes, so that their images will be minimum sized files to be deployed.
  - We could use watch tasks, whose main job is to keep a watch on all these files. And if any changes are done to these files, the tasks will be automatically executed.
  - One other aspect, while you're doing your development, is to be able to serve up your code and watch the code in your browser.
  - If you are writing code, you obviously need to carry out testing of your code.
  - You want to be able to accomplish all these tasks and then build up your final deployment code that can then be uploaded to your web server to make your website available for the general public.
  
  ### 8. NPM Scripts
  - NPM scripts are supported through this scripts property in the package.json file as we have seen in the example earlier.
  - `start-script` -> That you can add the prompt type `$ npm start`, and then the corresponding script referred to by the start, will be started.
  - We can define arbitrary scripts in the scripts property and then run them by saying NPM run and the name of the script. Ex: `$ npm run scss`.
  - We are going to leverage this to be able to develop a few additional scripts that will automate a lot of those tasks.
  
  ### 9. Exercise: NPM Scripts Part 1
  - Keep JavaScript code which is inside `index.html` in a separate file which contains all our scripts, and then include that file into `index.html`.
  - Create a new file with the name `scripts.js`.
  - The next step that I would like to do is to install a couple of NPM modules that I'm going to make use of for automating some tasks.
  - [onchange](https://github.com/Qard/onchange) module is going to watch files in my project folder, and then whenever those files change, then it automatically triggers a task to be executed.
  - There is another NPM model called `Watch`, which you can also use for the same purpose.
  - [parallelshell](https://github.com/darkguy2008/parallelshell) module allows me to execute multiple NPM scripts in `parallelshells` as the name implies.
  - `$ npm install --save-dev onchange@3.3.0 parallelshell@3.0.2` -> To install packages.
  - If you are doing the exercise on a Windows computer, please use the following two script items:
  ```
    "watch:scss": "onchange \"css/*.scss\" -- npm run scss",
    "watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""
  ```
  - Add the following two script items to `package.json` if you are doing the exercise on a MacOS computer or a Linux computer:
  ```
    "watch:scss": "onchange 'css/*.scss' -- npm run scss",
    "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"
  ```
  - You will also update the start script as follows: `"start": "npm run watch:all",`.
  - `$ npm start` -> To start watching for changes to the SCSS file, compile it to CSS, and run the server.
  
  ### 10. Exercise: NPM Scripts Part 2
  - Build a distribution (dist) folder which contains all the files for our project that we can simply deploy to a web server that hosts our website.
  - `$ npm install --save-dev rimraf@2.6.2` ->  [rimraf](https://github.com/isaacs/rimraf) module helps us to clean out a folder completely.
  - Then, set up the following script: `"clean": "rimraf dist",` -> This means is that, when executed, will clean out the `distribution` folder.
  - Your project uses font-awesome fonts. These need to be copied to the distribution folder.
  - `$ npm -g install copyfiles@2.0.0` -> [copyfiles](https://github.com/calvinmetcalf/copyfiles) module to copy some `font` files from my `node_modules` folder into my `distribution` folder.
  - Then set up the following script: `"copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",`.
  - `$ npm run copyfiles` -> When this runs, it's going to create a folder named dist in my project folder hierarchy. And then inside the dist, there will be a subfolder named fonts, which will contain the font files.
  - `$ npm run clean` -> This is going to delete that `distribution` folder.
  - `$ npm -g install imagemin-cli@3.0.0` -> We use the [imagemin-cli](https://github.com/imagemin/imagemin-cli) NPM module to help us to compress our images to reduce the size of the images being used in our project.
  - Then set up the following script: `"imagemin": "imagemin img/* --out-dir='dist/img'",`.
  - Update `.gitignore` file:
  ```
   node_modules
   dist
  ```
  - [usemin-cli](https://github.com/nelsyeung/usemin-cli) module is the one that allows me to do the transformation from my HTML file. And then concatenate and combine all the CSS files into a single CSS file, and then put it into the `distribution` folder.
  - But this `usemin-cli` takes the help of three other node modules called the [cssmin](https://github.com/jbleuzen/node-cssmin), then [uglifyjs](https://github.com/mishoo/UglifyJS), and [htmlmin](https://github.com/jserme/htmlmin). 
  - `$ npm install --save-dev usemin-cli@0.5.1 cssmin@0.4.3 uglifyjs@2.4.11 htmlmin@0.0.7` -> Install the usemin-cli, cssmin, uglifyjs and htmlmin NPM packages.
  - Add the following two scripts to the package.json file:
  ```
  "usemin": "usemin contactus.html -d dist --htmlmin -o dist/contactus.html && usemin aboutus.html -d dist --htmlmin -o dist/aboutus.html && usemin index.html -d dist --htmlmin -o dist/index.html",
  "build": "npm run clean && npm run imagemin && npm run copyfonts && npm run usemin"
  ```
  - `<!-- build:css css/main.css  -->` -> Is a comment in html page before all css files. This means is that these Block of CSS files will all be combined together, and then concatenated, minified, and then put into this file called `main.css`.
  - `<!-- endbuild -->` -> After all css files.
  - whatever is between this `build` and `endbuild`, this group will be treated as a unit for being combined by our `usemin` npm module there.
  - Do the same change in js files:
  ```
    <!-- build:js js/main.js -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
    <!-- endbuild -->
  ```
  - `$ npm run build` -> To build the `distribution` folder.
  - The transformed files will be put into the distribution folder created from these files. 
  
  ### Additional Resources:
  
  - [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/).
  - [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/).
  - [The Command Line for Web Design](https://webdesign.tutsplus.com/series/the-command-line-for-web-design--cms-777).

  
 </details>
 
 <details>
 <summary>Building and Deployment: Task Runners: Grunt and Gulp</summary>
 
  ### 11. Task Runners
  - Will concentrate on task renders. Two in particular, `Grunt` and `Gulp`, and try to understand how they facilitate their automation of the various web developement tasks.
  - `Grunt` and `Gulp` enable us to double up automated tasks for executing and building and deploying our website.
  - `Grunt` operates based on doing configuration.
  - `Gulp` concentrates more on code.
  - Both are built around plugins. So, both Grunt and Gulp provide a framework for which you write various plugins that enable you to perform these kinds of tasks.
  
  ### 12. Exercise: Grunt Part 1
  - `$ npm install -g grunt-cli@1.2.0` -> install [Grunt-command-line](https://www.npmjs.com/package/grunt-cli)interface (CLI).
  - `$ npm install grunt@1.0.2 --save-dev` -> install [Grunt](https://www.npmjs.com/package/grunt) to use within your project.
  - Next create a file named `Gruntfile.js` in the project folder and add the following code:
  ```
  'use strict';

  module.exports = function (grunt) {
    // Define the configuration for all the tasks
    grunt.initConfig({

    });
  };
  ```
  
  This sets up the Grunt module ready for including the grunt tasks inside the function above.
  
  - Next, we are going to set up our first `Grunt` task. The `SASS` task converts the `SCSS` code to `CSS`. 
  - To do this, you need to include some Grunt modules that help us with the tasks:
    - [grunt-sass](https://www.npmjs.com/package/grunt-sass) -> installs the Grunt module for SCSS to CSS conversion
    - [time-grunt](npmjs.com/package/time-grunt) -> generates time statistics about how much time each task consumes 
    - [jit-grunt](https://www.npmjs.com/package/jit-grunt) -> enables us to include the necessary downloaded Grunt modules when needed for the tasks.
    
  - Install the following modules by typing the following at the prompt:
  ```
  $ npm install grunt-sass@2.1.0 --save-dev
  $ npm install time-grunt@1.4.0 --save-dev
  $ npm install jit-grunt@0.10.0 --save-dev
  ```
  - Now, configure the SASS task in the Gruntfile as follows, by including the code inside the function in Gruntfile.js:
  ```
  'use strict';

  module.exports = function (grunt) {
      // Time how long tasks take. Can help when optimizing build times
      require('time-grunt')(grunt);

      // Automatically load required Grunt tasks
      require('jit-grunt')(grunt);

      // Define the configuration for all the tasks
      grunt.initConfig({
          sass: {
              dist: {
                  files: {
                      'css/styles.css': 'css/styles.scss'
                  }
              }
          }
      });

      grunt.registerTask('css', ['sass']);

  };
  ```
  - `$ grunt css` -> run the grunt SASS task.
  
  - The final step is to use the Grunt modules:
  ```
  $ npm install grunt-contrib-watch@1.0.0 --save-dev
  $ npm install grunt-browser-sync@2.2.0 --save-dev
  ```
  - [grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch), [grunt-browser-sync](https://www.npmjs.com/package/grunt-browser-sync) -> watch and browser-sync to spin up a web server and keep a watch on the files and automatically reload the browser when any of the watched files are updated
  - After this, we will configure the browser-sync and watch tasks by adding the following code to the Grunt file:
  ```
   ,
   watch: {
      files: 'css/*.scss',
      tasks: ['sass']
   },
   browserSync: {
      dev: {
          bsFiles: {
              src : [
                  'css/*.css',
                  '*.html',
                  'js/*.js'
              ]
          },
          options: {
              watchTask: true,
              server: {
                  baseDir: "./"
              }
          }
      }
   }
  ```
  - `grunt.registerTask('default', ['browserSync', 'watch']);` -> add to Grunt file.
  - `$ grunt` -> It will start the server, and open the web page in your default browser. It will also keep a watch on the files in the css folder, and if you update any of them, it will compile the scss file into css file and load the updated page into the browser (livereload).
  
  ### 13. Exercise: Grunt Part 2
  - [grunt-contrib-clean](npmjs.com/package/grunt-contrib-copy) to copy over files to a distribution folder named dist, and [grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean) to clean up the dist folder when needed. Install the following Grunt modules:
  ```
  $ npm install grunt-contrib-copy@1.0.0 --save-dev
  $ npm install grunt-contrib-clean@1.1.0 --save-dev
  ```
  - Add the following code to `Gruntfile.js` after the configuration of the SASS task.:
  ```
   ,
   copy: {
      html: {
          files: [
          {
              //for html
              expand: true,
              dot: true,
              cwd: './',
              src: ['*.html'],
              dest: 'dist'
          }]                
      },
      fonts: {
          files: [
          {
              //for font-awesome
              expand: true,
              dot: true,
              cwd: 'node_modules/font-awesome',
              src: ['fonts/*.*'],
              dest: 'dist'
          }]
      }
   },
   clean: {
       build: {
           src: [ 'dist/']
       }
   }
  ```
  - `$ npm install grunt-contrib-imagemin@2.0.1 --save-dev` -> install the grunt-contrib-imagemin module and use it to process the images.
  - Configure the imagemin task as shown below in the Gruntfile:
  ```
   ,
   imagemin: {
       dynamic: {
           files: [{
               expand: true,                  // Enable dynamic expansion
               cwd: './',                   // Src matches are relative to this path
               src: ['img/*.{png,jpg,gif}'],   // Actual patterns to match
               dest: 'dist/'                  // Destination path prefix
           }]
       }
   }
  ```
  - Use the Grunt usemin module together with concat, cssmin, uglify and filerev to prepare the distribution folder. To do this, install the following Grunt modules:
  ```
   $ npm install grunt-contrib-concat@1.0.1 --save-dev
   $ npm install grunt-contrib-cssmin@2.2.1 --save-dev
   $ npm install grunt-contrib-htmlmin@2.4.0 --save-dev
   $ npm install grunt-contrib-uglify@3.3.0 --save-dev
   $ npm install grunt-filerev@2.3.1 --save-dev
   $ npm install grunt-usemin@3.1.1 --save-dev
  ```
  - Configuration within the `Gruntfile.js`:
  ```
  ,
  useminPrepare: {
     foo: {
         dest: 'dist',
         src: ['contactus.html','aboutus.html','index.html']
     },
     options: {
         flow: {
             steps: {
                 css: ['cssmin'],
                 js:['uglify']
             },
             post: {
                 css: [{
                     name: 'cssmin',
                     createConfig: function (context, block) {
                     var generated = context.options.generated;
                         generated.options = {
                             keepSpecialComments: 0, rebase: false
                         };
                     }       
                 }]
             }
         }
     }
  },

  // Concat
  concat: {
     options: {
         separator: ';'
     },

     // dist configuration is provided by useminPrepare
     dist: {}
  },

  // Uglify
  uglify: {
     // dist configuration is provided by useminPrepare
     dist: {}
  },

  cssmin: {
     dist: {}
  },

  // Filerev
  filerev: {
     options: {
         encoding: 'utf8',
         algorithm: 'md5',
         length: 20
     },

     release: {
     // filerev:release hashes(md5) all assets (images, js and css )
     // in dist directory
         files: [{
             src: [
                 'dist/js/*.js',
                 'dist/css/*.css',
             ]
         }]
     }
  },

  // Usemin
  // Replaces all assets with their revved version in html and css files.
  // options.assetDirs contains the directories for finding the assets
  // according to their relative paths
  usemin: {
     html: ['dist/contactus.html','dist/aboutus.html','dist/index.html'],
     options: {
         assetsDirs: ['dist', 'dist/css','dist/js']
     }
  },

  htmlmin: {                                         // Task
     dist: {                                        // Target
         options: {                                 // Target options
             collapseWhitespace: true
         },
         files: {                                   // Dictionary of files
             'dist/index.html': 'dist/index.html',  // 'destination': 'source'
             'dist/contactus.html': 'dist/contactus.html',
             'dist/aboutus.html': 'dist/aboutus.html',
         }
     }
  }
  ```
  - update the jit-grunt configuration:
  ```
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });
  ```
  - Update the Grunt build task:
  ```
  grunt.registerTask('build', [
     'clean',
     'copy',
     'imagemin',
     'useminPrepare',
     'concat',
     'cssmin',
     'uglify',
     'filerev',
     'usemin',
     'htmlmin'
  ]);
  ```
  - `$ grunt build` -> run Grunt.
  

  ### 14. Exercise: Gulp Part 1
  - [Gulp](https://gulpjs.com/).
  - `$ npm install -g gulp-cli` -> install Gulp command-line interface (CLI).
  - `$ npm install gulp` -> install Gulp.
  - `$ npm i gulp-dart-sass browser-sync` -> Install Gulp Plugins [gulp-dart-sass](https://www.npmjs.com/package/gulp-dart-sass) and [Browser-Sync](https://browsersync.io/docs/gulp).
  - Create a file named `gulpfile.js` in the project folder.
  - Load in all the Gulp plugins by including the following code in the Gulp file:

  ```
  "use strict";

  var gulp = require("gulp"),
      sass = require('gulp-dart-sass'),
      browserSync = require("browser-sync");

  gulp.task("sass", function () {
    return gulp
      .src("./css/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest('./css'));
  });

  gulp.task("sass:watch", function () {
    gulp.watch("./css/*.scss", ["sass"]);
  });
  gulp.task("browser-sync", function () {
    var files = [
      "./*.html",
      "./css/*.css",
      "./js/*.js",
      "./img/*.{jpg, jpeg, gif}",
    ];
    browserSync.init(files, {
      server: {
        baseDir: "./",
      },
    });
  });

  gulp.task('default', gulp.series('browser-sync', 'sass:watch'))
  ```
  - The way Gulp works is like you take a set of files and you specify the set of files by saying gulp source
  - The pipe allows the stream to be piped through a function.
  - The gulp dest specifies the destination of the files that have been processed.
  - Your stream files through the pipes until they are transferred and then they will be deposited at specified destination.
  - `$ gulp` -> run the default task.

  ### 15. Exercise: Gulp Part 2
  - [del module with gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md).
  - `$ npm install del` -> create the tasks for copying the font files and cleaning up the distribution folder.
  - `var del = require('del')` -> require module.
  - Add the code for the Clean task and the copyfonts task as follows:
  ```
  // clean Task
  gulp.task('clean', function(){
    return del(['dist'])
  })

  // Copyfiles
  gulp.task('copyfiles', function(){
    return gulp.src('./node_modules/font-awesome/fonts/**/*.{eot, svg, ttf, woff, woff2}*')
           .pipe(gulp.dest('./dist/fonts'));
  })
  gulp.task('default', gulp.series('browser-sync', 'sass:watch'))
  ```
  - `$ npm i gulp-imagemin` -> install [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) plugin.
  - `var imagemin = require('gulp-imagemin'),` -> require module.
  - create the imagemin task:
  ```
  // Images
  gulp.task('imagemin', function() {
    return gulp.src('img/*.{png,jpg,gif}')
         .pipe(imagemin([
           imagemin.gifsicle({interlaced: true}),
           imagemin.mozjpeg({quality: 75, progressive: true}),
           imagemin.optipng({optimizationLevel: 5})
         ]))
        .pipe(gulp.dest('dist/img'));
  });
  ```
  - Execute the clean task before the remaining tasks are executed because we want to first clean up the distribution folder. And that has to be completed before the remaining tasks are done.
  - `$ npm install gulp-uglify gulp-usemin gulp-rev gulp-clean-css gulp-flatmap gulp-htmlmin` -> install the gulp-usemin and other related Gulp plugins.
  - Require plugins and add usemin task:
  ```
  var
      uglify = require('gulp-uglify'),
      usemin = require('gulp-usemin'),
      rev = require('gulp-rev'),
      cleanCss = require('gulp-clean-css'),
      flatmap = require('gulp-flatmap'),
      htmlmin = require('gulp-htmlmin');


  gulp.task('usemin', function() {
    return gulp.src('./*.html')
    .pipe(flatmap(function(stream, file){
        return stream
          .pipe(usemin({
              css: [ rev() ],
              html: [ function() { return htmlmin({ collapseWhitespace: true })} ],
              js: [ uglify(), rev() ],
              inlinejs: [ uglify() ],
              inlinecss: [ cleanCss(), 'concat' ]
          }))
      }))
      .pipe(gulp.dest('dist/'));
  });
  
  ```
  - Flatmap takes these multiple htmlfiles and then starts up parallel pipelines for each one of these htmlfiles. Each one of them going through the same set of steps and then finally, converging and copying it into the destination folder. 
  - Usemin task takes the htmlfiles and then looks up the CSS and JavaScript blocks in the htmlfiles, combines, concatenates, and minifies and nuglifies the files and then replaces them by using the concatenated file in the distribution folder. 
  - All the tasks that we specify here are going to be executed in parallel:
  ```
  // Build Task
  gulp.task('build', gulp.series('clean','copyfiles', 'imagemin', 'usemin'))
  ```
  
  - `$ gulp build` -> Run!
  
 </details>
 
 
## Course 2: [Front-End Web Development with React](https://www.coursera.org/learn/front-end-react)

 This course is divided into 4 modules, Each module takes 1 week.
 
 ### week 1 :
 
 <details>
 <summary>Welcome to Front-End Web Development with React</summary>
 
 ### 1. Welcome to Front-End Web Development with React
 - we are concentrating more on building up our hard web development skills.
 - this course concentrates on the React library and the React ecosystem.
 
 ### 2. How to Use the Learning Resources
 - As you learn and make use of the concepts and technologies that you learn in this course, you'll begin to understand more and more about this particular topic.
 
 ### Additional Resources
 - [React](https://reactjs.org/)
  
 </details>
 <details>
 <summary>Full Stack Web Development: The Big Picture</summary>
 
 ### 3. What is Full-Stack Web Development?

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
  
 ### 4. Setting up Git

 - **version control system**: This is a software tool that enables us for the management of changes to source code and maintaining your version history. So as your source code evolves, you will be able to check in the code at different points of times so that you can always have a way of rolling back to a previous version, in case your updates to the code doesn't work correctly.
 - [git-scm](https://git-scm.com/downloads)
 - `$ git --version` -> to check what version of git is installed on your computer.
 - `$ git config --global user.name "username"` -> will configure a global identity parameters, the username.
 - `$ git config --global user.email "email"` -> will configure a global identity parameters, the email.
 - `$ git config --list` -> to insure that this information has been configured.

 ### 5. Basic Git Commands

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

 ### 6. Online Git Repositories

 - Online Git repositories enable you to store a copy of your Git repository online.
 - Popular Git repositories: [Github](https://github.com/), [bitbucket](https://bitbucket.org/).
 - `$ git remote add origin <repositoryUrl>` -> Add the remote origin is set to the online repository.
 - `$ git push -u origin master` -> push the local git repository to my online repository.
 - Remember that your local repository can only be matched to one online repository.
 - `$ git clone <repositoryUrl>` -> Make a copy of that Git repository on to your local.

 ### 7. Node.js and NPM

 - Node.js has played a significant role in this shift of JavaScript from the browser to the desktop.
 - Node js is based on the JavaScript runtime engine that has been built for the Chrome browser.
 - Node.js is built around an event-driven, non-blocking I/O model which makes it very efficient to run JavaScript programs on the desktop, asynchronous JavaScript on the desktop. 
 - When you install Node on your computer NPM automatically gets installed.
 - The Node package manager is the manager for the Node ecosystem.
 - NPM manages all the Node modules and packages that have been made publicly available by many different users.
 - `package.json` -> the manifest file for this Node module.

 ### 8. Setting up Node.js and NPM

 - To install Node on your machine, go to [Node.js](https://nodejs.org/en/) and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded.
 - `$ node -v` -> to check the version of node installed.
 - `$ npm -v` -> to check the version of NPM installed.

 ### 9. Basics of Node.js and NPM

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
 <summary>Introduction to React</summary>
 
 ### 10. Front-end JavaScript Frameworks and Libraries Overview
 - When you need complex manipulations of the DOM, especially by fetching data from a server and then update the DOM, it gets fairly complicated using tools like jQuery and plain Vanilla JavaScript.
 - we realize that for a full-fledged web application, we will need a structured way of approaching this, and so that is where software engineering paradigms like the Model-View-Controller, Model-View-ViewModel, help us to structure our web application.
 - A software library gives you a well-defined collection of implementations or repeated behaviors that you can use to quickly implement complicated applications.
 - A software framework is an abstraction in which the framework provides a set of generic functionality that you can then customize by implementing it on user defined code.
 - A framework clearly defines how the application should be implemented and very often, it is highly opinionated in the way the application needs to be implemented.
 - **ٌReact** will call upon their specific functionality that you implement as a web application designer in order to customize the generic functionality that the framework provides (inversion of control).
 - In an imperative approach, the application designer clearly specifies how the work needs to be accomplished or how the application needs to be executed.
 - In the declarative approach, the application designer simply specifies what needs to be accomplished and leaves it up to the framework to decide how the work is going to be accomplished.

 ### 11. Introduction to React
 - React is a JavaScript library for building user interfaces.
 - React also states that it uses a declarative approach.
 - React takes care of automatically updating the UI and then rendering any changes to their specific components as required on your page.
 - React Indeed is a component based approach.
 - React makes no assumptions about the entire technology stack that you're going to use for implementing your Web applications. React plays well with any technology stack that you can use behind the seats.
 - React itself concentrates only on the user interface side of the story, and that leaves it up to the application designer to decide how they want to implement the architecture and how they want your application to interact with the back-end server.
 - React history:
  - React was first designed by Jordan Walke who was part of the Facebook team. 
  - It was first deployed for Facebook's news feed around 2011. 
  - Subsequently in 2013, React was open sourced at this JS conference.
  - React took off as an approach for implementing Web applications from then onwards. 
  - React is designed for speed, speed of implementing the application, simplicity, and scalability.

 ### 12. Exercise: Getting Started with React
 - In this course I'm going to use [Yarn](https://yarnpkg.com/) for installing and downloading all my Node modules for my React application.
 - yarn global add create-react-app -> `$ yarn create react-app confusion` or `$ npx create-react-app confusion`.
 - `$ cd confusion`
 - `$ yarn start` or `$ npm start`.
 - You can initialize your project to be a Git repository:
 ```
 $ git init
 $ git add .
 $ git commit -m "Initial Setup"
 ```
 - You can synchronize this git repository with an online git repository either on GitHub or on bitbucket. 

 ### 13. React App Overview
 - Element is the smallest building in React -> ` const element = <h1 className="App-title">Welcome to React</h1>;`.
 - Components are made of elements -> ` class App extends Component { elements }`.
 - Rendered using ReactDOM. In `./src/index.js`:
 
 ```
 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root')
 )
 ```
 - In `./public/index.html` -> `<div id="root"></div>`.

 ### 14. Introduction to JSX
 - JSX : 
   - Syntactic extension to JavaScript
   - Shorthand notation to represent JavaScript functions calls that evaluate to JavaScript objects
   - Avoids artificial separation of rendering logic from other UI logic
 - Many of the standard HTML CACs have corresponding react components that are already defined, predefined react components.


 ### 15. Exercise: Configuring your React Application
 - `Reactstrap` supplies is Bootstrap components re-implement using React components. 
 ```
 $ yarn add bootstrap
 $ yarn add reactstrap
 $ yarn add react-popper
 ```
 - Open `index.js` file in the `src` folder and add the following line into the imports:
 ```
 import 'bootstrap/dist/css/bootstrap.min.css';
 ```
 - Open `App.js` in the `src` folder and update it:
 ```
 import { Navbar, NavbarBrand } from 'reactstrap';

 class App extends Component {
   render() {
     return (
       <div className="App">
         <Navbar dark color="primary">
           <div className="container">
             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
           </div>
         </Navbar>
       </div>
     );
   }
 }
 ```

 ### Additional Resources
 - [Imperative vs Declarative](http://latentflip.com/imperative-vs-declarative).
 - [Imperative vs. Declarative Programming](https://www.netguru.com/blog/imperative-vs-declarative).
 - [Inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control).
 - [Why isn't React called framework? What does it lack to be a framework?](https://hashnode.com/post/why-isnt-react-called-framework-what-does-it-lack-to-be-a-framework-ciwm324og010xzx53wjfq354i)
  
 </details>
  
 <details>
 <summary>React Components</summary>
 

 ### 15. React Components
 - We can look at a component as a unit that returns a group of React elements that together render it part of the screen.
 - The use of react components enables us to split the user interface into multiple independent, reusable pieces. 
 - You can easily control what a component renders by supplying inputs to the component.
 - You should always start the name of the component with a capital letter. 

 ### 16. Exercise: React Components Part 1
 - First, download the images.zip file provided above and then unzip the file. Create a folder named assets in the public folder. Move the resulting images folder containing some PNG files to the React project's public/assets folder. These image files will be useful for our exercises.
 - Next, add a new folder named `components` in the `src` folder, and create a new file named `MenuComponent.js` in this folder.
 - Add the following code to `MenuComponent.js`:
 ```
 import React, { Component } from 'react'
 import { Media } from 'reactstrap'

 class Menu extends Component{
   constructor(props){
     super(props)
     this.state = {
       dishes: [
         {
           id: 0,
           name:'Uthappizza',
           image: 'assets/images/uthappizza.png',
           category: 'mains',
           label:'Hot',
           price:'4.99',
           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
         },
         {
           id: 1,
           name:'Zucchipakoda',
           image: 'assets/images/zucchipakoda.png',
           category: 'appetizer',
           label:'',
           price:'1.99',
           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
         },
         {
           id: 2,
           name:'Vadonut',
           image: 'assets/images/vadonut.png',
           category: 'appetizer',
           label:'New',
           price:'1.99',
           description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
         },
         {
            id: 3,
            name:'ElaiCheese Cake',
            image: 'assets/images/elaicheesecake.png',
            category: 'dessert',
            label:'',
            price:'2.99',
            description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
         }
       ]
     }
   }
   render(){
     const menu  = this.state.dishes.map(dish => {
       return (
         <div key={dish.id} className="col-12 mt-5">
         <Media tag="li">
           <Media  left middle href="#">
             <Media object src={dish.image} alt={dish.name} />
           </Media>
           <Media body className="ml-5">
             <Media heading>
               {dish.category}
             </Media>
             {dish.description}
           </Media>
         </Media>
         </div>
       )
     });

     return(
       <div className="container">
         <div className="row">
           <Media list>
             {menu}
           </Media>
         </div>
       </div>
     );
   }
 }

 export default Menu;

 ```
 - Next, open App.js file and update it:
 ```
 import Menu from './components/MenuComponent';
 ```
 - Open `App.css` file and delete all its contents.

 - Any component in React (a class component), should implement method called `render()` which will turn the corresponding view for this component.
 - Don't forget to export the component from this file.
 - The `state` stores in. Properties related to this component that we can make use of. 
 - In React, every item requires a `key` attribute to be specified for it.
 - The key helps React to recognize each one of these elements and while it is updating the screen so the keys will enable it to identify each of those elements uniquely.

 ### 17. React Components: State and Props
 - In react, only class components can store state.
 - The `state` information is usually declared in the constructor of the class component.
 - You cannot directly go and update the `state` by changing the property values. Instead, any update to a `state`  has to be done through `satState()` method.
 - When you make use of the child component in your own component, then whatever attributes that you specify to the JSX element will be passed in as `props` to the child component.
 - like the way you handle events in the DOM, you can also handle events similarly in react. But when you specify the events, then you use camel case to specify the events.

 ### 18. Exercise: React Components Part 2
 - Inside `src` folder, create a new subfolded named `shared` subfolder.
 - In the `shared` folder, create a new file named `dishes.js`.
 - Use the `shared` subfolder to store all the information that is shared among various components in my React Application that I'm designing.
 - We need to define the state in `App.js` file.
 - Update `App.js`:
 
 ```
 import { DISHES } from './shared/dishes';

 . . .

 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       dishes: DISHES
     };
   }

 . . .

  <Menu dishes={this.state.dishes} /> 
 ```
 
 - Open `MenuComponent.js` and update its contents.
 - We have removed the dishes variable from the state of the component, and updated it to use the Card:
 ```
 . . .
 
 import { Card, CardImg, CardImgOverlay, CardText, CardBody,
     CardTitle } from 'reactstrap';

 class Menu extends Component {

     constructor(props) {
         super(props);

         this.state = {
             selectedDish: null
         }
     }

     onDishSelect(dish) {
         this.setState({ selectedDish: dish});
     }

     renderDish(dish) {
         if (dish != null)
             return(
                 <Card>
                     <CardImg top src={dish.image} alt={dish.name} />
                     <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                     </CardBody>
                 </Card>
             );
         else
             return(
                 <div></div>
             );
     }

     render() {
         const menu = this.props.dishes.map((dish) => {
             return (
               <div  className="col-12 col-md-5 m-1">
                 <Card key={dish.id}
                   onClick={() => this.onDishSelect(dish)}>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                   <CardImgOverlay>
                       <CardTitle>{dish.name}</CardTitle>
                   </CardImgOverlay>
                 </Card>
               </div>
             );
         });

         return (
             <div className="container">
                 <div className="row">
                     {menu}
                 </div>
                 <div className="row">
                   <div  className="col-12 col-md-5 m-1">
                     {this.renderDish(this.state.selectedDish)}
                   </div>
                 </div>
             </div>
         );
     }
 }

 . . .
 
 ```
 
 ### 19. React Components: Lifecycle Methods Part 1
 - Every class component has a life cycle associated with it.
 - Each React component, when it is required will be created by React and then added into the DOM of your entire application.
 - So, every time a React component needs to be included into your applications view, then the component that hosts the specific part of the view will be created and added into the overall React component hierarchy.
 - A component passes through a life cycle of creation, mounting, and then existing in the hierarchy, then unmounting, and then disappearing at the point.

 ### Additional Resources
 - [React.Component and Lifecycle Methods](https://reactjs.org/docs/react-component.html).
 - [Card reactstrap](https://reactstrap.github.io/components/card/).
 - [React Dev Tools](https://github.com/facebook/react-devtools).
 - [React Dev Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).
  
 </details>
   
 <details>
 <summary>Assignment 1: React Components</summary>
 
 - In this assignment, you will continue to work with the React application that you have been developing in the exercises. You will add a new component named DishdetailComponent that will display the details of a selected dish. You will then design the view for the component using the card component. At the end of this assignment, you should have completed the following tasks:

   - Created a new DishdetailComponent and added it to your React application. 
   - Updated the view of the DishdetailComponent to display the details of the selected dish using an reactstrap card component.
   - Updated the view of the DishdetailComponent to display the list of comments about the dish using the Bootstrap unstyled list component.
  
 </details>
 
 ### week 2 :
 
 <details>
 <summary>React Component Types</summary>
 
 ### 1. Presentational and Container Components
 - There is no formal description of these kinds of components in React itself,
 - A pure presentational component:
  - Mainly concerned with rendering the "view"
  - Render the view based on the data that is passed to them in props. 
  - Do not maintain their own local state
 - Container Components:
  - Responsible for making things work.
  - Make use of presentational components for rendering
  - Provide the data to the presentational components
  - Maintain state and communicate with data sources.

 ### 2. Exercise: Presentational and Container Components
 - We will implement the menu component as a pure presentational component, and the dish detail component is already a pure presentational component.
 - Make sure that yarn start or npm start that you executed in the very first exercice, keeps running continuously.
 - `{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}` -> will turn that ISO string into an actual date that can be displayed in a format that is more easily readable.
 - Add a new component named `MainComponent.js` in the components folder and update its contents:
 ```
 import React, { Component } from 'react';
 import { Navbar, NavbarBrand } from 'reactstrap';
 import Menu from './MenuComponent';
 import DishDetail from './DishdetailComponent';
 import { DISHES } from '../shared/dishes';

 class Main extends Component {

   constructor(props) {
     super(props);
     this.state = {
         dishes: DISHES,
         selectedDish: null
     };
   }

   onDishSelect(dishId) {
     this.setState({ selectedDish: dishId});
   }

   render() {
     return (
       <div>
         <Navbar dark color="primary">
           <div className="container">
             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
           </div>
         </Navbar>
         <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
       </div>
     );
   }
 }

 export default Main;
 ```

 ### 3. React Components: Lifecycle Methods Part 2
 - Lifecycle methods: are called when a component is being re-rendered or being updated.
 - React Component goes through the following lifecycle stages:
   – Mounting: Called when an instance of a component is being created and inserted into the DOM.
   – Updating: Called when a component is being re-rendered
   – Unmounting: Is called when the component is being removed from the DOM:
 - Several lifecycle methods available in each stage.

 ### 4. Functional Components
 - For components that simply work only using their props that are sent by their parent, there is an even simpler way of implementing the components what are called as Functional Components.
 - Functional Components: Simplest way to define React components.
 - It is a JavaScript function that returns a React element, or a collection of React elements that define the view

 ### 5. Exercise: Functional Components
 - Update `MenuComponent.js` and `DishdetailComponent.js` files to be functional components.

 ### Additional Resources
 - [Functional Stateless Components in React](https://www.jackfranklin.co.uk/blog/functional-stateless-components-react/)


 </details>
 
 <details>
 <summary>React Router</summary>
 
 ### 6. React Virtual DOM
 - Browser DOM is a browser object. And so when you render something in your web page, the Browser DOM is built up, and so any changes that you want to make to your web page will be effected when you make changes to the Browser DOM.
 - The Virtual DOM in React terminology is a lightweight representation of a Browser DOM.
 - When you change anything in the Browser DOM, you need to go and re-render the web page allover again(refresh page).
 - But the Virtual DOM, since it is maintained in memory by your React application, you can easily make changes to the Virtual DOM.
 - So any changes are reflected at the Virtual DOM first.
 - Virtual DOM is created completely from scratch every time you call the setState.
 - To update the DOM, React runs in *diffing algorithm*.
 - The *diffing algorithm* identifies the minimum number of components or minimum part of the tree that needs to be updated in order to make the modified version in sync with that Browser DOM.
 - You can use the key attribute in the list items in order to indicate which child elements are stable.
 - When the diffing algorithm works, if it notices that some parts of the list cannot change, they don't need to be re-rendered. And so, it'll re-render only those list items that have actually been modified. 
- There is a new version of the React diffing algorithm called *React Fiber*. 
- This is a new reconciliation algorithm that has been launched with React 16 and it is a lot more faster in performing the diffing and then identifying what needs to be changed in the Browser DOM to update the views.

 ### 7. Exercise: Header and Footer
 - Add a header and footer for our application
 - `$ yarn add font-awesome bootstrap-social` -> fetch Font Awesome and Bootstrap-social
 - open index.js file and update it:
 
 ```
 import 'font-awesome/css/font-awesome.css';
 import 'bootstrap-social/bootstrap-social.css';
 ```
 
 - Create a new file named `HeaderComponent.js`.
 - The reason for adding a header and footer component is so that all our pages in our application they get the same header and footer.
 - The reason for creating this as a class component as opposed to a functional component is because we need to maintain some UI state in the Header Component.
 - *React fragment*: enables us to group together a bunch of React elements and then return it. And also ensures that their alternative they're going to use a div to enclose all the React elements.
 - `<></>` -> this is the short form syntax for using the *React fragment*. The long form would be to say `<React.Fragment></React.Fragment>`.
 - Then Create a new file named `FooterComponent.js`.
 - Open `MainComponent.js` and update it:
 ```
 . . .

 import Header from './HeaderComponent';
 import Footer from './FooterComponent';

 . . .

         <Header />
         <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
         <Footer />

 . . .
 ```
 - Update `App.css` to add some new CSS.

 ### 8. React Router
 - React Router: Collection of navigational components.
 - Uses a browser-based bookmarkable URLs as an instruction to navigate to a client-generated view in your web app.
 - Route matching components:
   – `<Route>’s path prop` enables specification of the current location’s pathname
   – `<Route>’s component prop` specifies the corresponding view for the location
   – Using `exact` attribute ensures that the path must be exactly matched
   – `<Redirect>` enables the default route specification
   – `<Switch>` enables grouping together several routes
 - Navigation is supported through:
   – `<Link>` creates links in your application
   - `<NavLink>` also attaches the active class to the link when its prop matches the current location

 ### 9. Exercise: React Router
 - `$ yarn add react-router-dom` -> install React Router.
 - Update `App.js`:
 ```
 . . .

 import { BrowserRouter } from 'react-router-dom';

 . . .

     <BrowserRouter>
       <div className="App">
         <Main />
       </div>
     </BrowserRouter>

 . . .
 ```
 - Create a new file named `HomeComponent.js` in the `components` folder.
 - Import it into `MainComponent.js`.
 - 
 ```
 . . .

 import Home from './HomeComponent';

 . . .

 import { Switch, Route, Redirect } from 'react-router-dom';

 . . .

   render() {


     const HomePage = () => {
       return(
           <Home 
           />
       );
     }

 . . .

           <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
               <Redirect to="/home" />
           </Switch>

 . . .
 ```
 - When you have a URL ending with `/home`, then this will route me to this particular component that is going to act as the view here.
 - Open `HeaderComponent.js` and update its contents.
 - `NavbarToggler` reactstrap component adds in a button to the `Navbar`, and this button will be shown only on extra small to small screen sizes.
 - Collapse also requires `isOpen` attribute, a Boolean attribute which defined in my state called `this.state.isOpen`.
 - Open `FooterComponent.js` and update it:
 ```
 . . .

 import { Link } from 'react-router-dom';

 . . .

                         <li><Link to='/home'>Home</Link></li>
                         <li><Link to='/aboutus'>About Us</Link></li>
                         <li><Link to='/menu'>Menu</Link></li>
                         <li><Link to='/contactus'>Contact Us</Link></li>

 . . .
 ```
 - Open `MenuComponent.js` and remove the `onClick()` from the Card in the `RenderMenuItem()` function.

 ### Additional Resources
 - React:
   - [react-router](https://github.com/ReactTraining/react-router).
   - [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom).
   - [React Router Documentation](https://reactrouter.com/).
   - [React Router Dom Documentation](https://reactrouter.com/web/guides/philosophy).
 - Other Resources:
   - [React Router DOM: set-up, essential components, & parameterized routes](https://blog.logrocket.com/react-router-dom-set-up-essential-components-parameterized-routes-505dc93642f1/).
  
 </details>
 
 <details>
 <summary>Single Page Applications</summary>
 
 ### 10. Single Page Applications
 - single-page applications has a web application or a website that fits into a single page. So you don't need to reload an entire page again.
 - single-page applications enable you to deliver a user experience that is more closer to what they see with desktop applications. 
 - Web application or web site that fits in a single page
   – No need to reload the entire page
   – UX like a desktop/native application
   – Most resources are retrieved with a single page load
   – Redraw parts of the page when needed without requiring a full server roundtrip

 ### 11. Exercise: Single Page Applications Part 1
 - Add a new file named `ContactComponent.js`.
 - Update the MainComponent.js file to integrate the ContactComponent:
 ```
 . . .

 import Contact from './ContactComponent';

 . . .

              <Route exact path='/contactus' component={Contact} />} />
 ```
 - Update the `HomeComponent.js` file to fetch and display the featured dish, promotion and leader.
 - Next, update `MainComponent.js`:
 ```
 . . .

 import { COMMENTS } from '../shared/comments';
 import { PROMOTIONS } from '../shared/promotions';
 import { LEADERS } from '../shared/leaders';

 . . .

 class Main extends Component {

   constructor(props) {
     super(props);

     this.state = {
       dishes: DISHES,
       comments: COMMENTS,
       promotions: PROMOTIONS,
       leaders: LEADERS
     };
   }

   . . .

     const HomePage = () => {
       return(
           <Home 
               dish={this.state.dishes.filter((dish) => dish.featured)[0]}
               promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
               leader={this.state.leaders.filter((leader) => leader.featured)[0]}
           />
       );
     }

 . . .
 ```

 ### 12. React Router: Parameters
 - Paths specified as a URL
 - Route parameters specified in the path specification as a token -> `path="menu/:id"` where `id` is the token.
 - Route parameters can be specified using a link parameter while specifiyng the link -> ```<Link to{`/menu/${dish.id}`} >```.
 - Route passes three props to the component: `match`, `location`, `history`.
 - `Match` is the one that carries the route parameters inside it as its own properties.
 - `Location` where you are in the URL location.
 - `History` will allow you to go back. 

 ### 13. Exercise: Single Page Applications Part 2
 - Configure the routes in your React router configuration to enable the use of route parameters within the URL to pass information to a component.

 ### Additional Resources
 - [Single-page application](https://en.wikipedia.org/wiki/Single-page_application)
 - [Deep linking](https://en.wikipedia.org/wiki/Deep_linking)
 - [Single page apps in depth](http://singlepageappbook.com/)
 - [SPA and the Single Page Myth](https://johnpapa.net/pageinspa/)

  
 </details>
 
 <details>
 <summary>Assignment 2:</summary>
 - In this assignment you will continue working with the React application by adding a new component named AboutComponent to serve up the details of the corporate leaders, and you will then integrate the AboutComponent into the single page application.
 
 ### here
  
 </details>
 
 
 ### week  3:
 
 <details>
 <summary>Controlled Forms</summary>

 ### 1. Controlled Forms
 - Forms are a standard way of seeking user input.
 - In HTML, you can easily create a form wherever you want in your html page by using the `form` tag.
 - The `input` form element allows us to create the input boxes in the form where you can fill in information. 
 - The input type could be of the type text, password, submit, radio button, checkbox, email, telephone number, date and time, and many more.
 - These elements maintain their own state and update it based on user input.
 - Controlled Components: Make the React component control the form that it renders.

 ### 2. Exercise: Controlled Forms
 - You will start out by importing the necessary components from reactstrap into `ContactComponent.js` :
 ```
 . . .

 import React, { Component } from 'react';
 import { Breadcrumb, BreadcrumbItem,
             Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

 . . .
 ```
 - Since we need to store the state of the form in the state of our react component, we need to turn this component into a class component.
 - Update the `ContactComponent.js` file and add the `form`.
 - 
 
 ```
 . . .

     constructor(props) {
         super(props);

         this.state = {
             firstname: '',
             lastname: '',
             telnum: '',
             email: '',
             agree: false,
             contactType: 'Tel.',
             message: ''
         };

         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

     }

     handleInputChange(event) {
         const target = event.target;
         const value = target.type === 'checkbox' ? target.checked : target.value;
         const name = target.name;

         this.setState({
           [name]: value
         });
     }

     handleSubmit(event) {
         console.log('Current State is: ' + JSON.stringify(this.state));
         alert('Current State is: ' + JSON.stringify(this.state));
         event.preventDefault();
     }

 . . .
 ```
 - The default behavior when you submit a Form in any browser is to go to the next page. So, we will prevent that from happening.
 - Remember to make sure that the names that you give to the input box will be the same as what you use for the properties in the state.

 ### 3. Exercise: Controlled Form Validation
 - In this exercise you will be introduced to simple form validation for controlled forms in React.
 - Use another state property called `touched`, which will keep track of whether a particular field has been touched or not. 

 ### Additional Resources
 - [Controlled Components](https://reactjs.org/docs/forms.html).
 - [Controlled / Uncontrolled React Components](https://www.viget.com/articles/controlling-components-react/).
 
  
 </details>
 
 <details>
 <summary>Uncontrolled Forms</summary>
 
 ### 4. Uncontrolled Components
 - Uncontrolled component approach allows you to handle the form data by the DOM itself.
 - Instead of writing an event handler for every state update, use a ref to get form values from the DOM

 ### 5. Exercise: Uncontrolled Forms
 - Update `HeaderComponent.js` :
 ```
 import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
     Button, Modal, ModalHeader, ModalBody,
     Form, FormGroup, Input, Label } from 'reactstrap';

 . . .

         this.state = {
             isNavOpen: false,
             isModalOpen: false
         };

 . . .

         this.toggleModal = this.toggleModal.bind(this);

 . . .


       toggleModal() {
         this.setState({
           isModalOpen: !this.state.isModalOpen
         });
       }

 . . .

                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                     <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                     <ModalBody>

                     </ModalBody>
                 </Modal>

 . . .
 ```
 - To invoke this modal, we will add in a button into our header here into the navbar:
 ```
 . . .

                       <Nav className="ml-auto" navbar>
                           <NavItem>
                               <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                           </NavItem>
                       </Nav>

 . . .
 ```
 - Add the form to the modal body:
 ```
 <Form onSubmit={this.handleLogin}>
     <FormGroup>
         <Label htmlFor="username">Username</Label>
         <Input type="text" id="username" name="username"
             innerRef={(input) => this.username = input} />
     </FormGroup>
     <FormGroup>
         <Label htmlFor="password">Password</Label>
         <Input type="password" id="password" name="password"
             innerRef={(input) => this.password = input}  />
     </FormGroup>
     <FormGroup check>
         <Label check>
             <Input type="checkbox" name="remember"
             innerRef={(input) => this.remember = input}  />
             Remember me
         </Label>
     </FormGroup>
     <Button type="submit" value="submit" color="primary">Login</Button>
 </Form>
 ```
 
 - Add the following function to the class to handle the form submission:
 ```
 . . .

         this.handleLogin = this.handleLogin.bind(this);
 . . .

     handleLogin(event) {
         this.toggleModal();
         alert("Username: " + this.username.value + " Password: " + this.password.value
             + " Remember: " + this.remember.checked);
         event.preventDefault();

     }

 . . .
 ```
 
 
 ### Additional Resources
 - [Controlled and uncontrolled form inputs in React don't have to be complicated](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/).
  
 </details>
 
 <details>
 <summary>Introduction to Redux</summary>
 
 ### 6. The Model-View-Controller Framework
 - Design Patterns: Well-documented solution to a recurring problem.
 - Software design pattern: Reusable solution to commonly occurring problems
 - The Model-View-Controller (MVC): Software engineering architecture pattern:
   – Isolation of domain logic from user interface
   – Permits independent development, testing and maintenance (separation of concerns)
 - we can divide our entire application into three parts:
   - The View, that is primarily concerned with presenting the information to the user. 
   - The Model, that stores the domain state and the domain logic and also provides the way of manipulating this state from the rest of the application.
   - The Controller that mediates between the view and the model. 
 - Model View View-Model (MVVM): Descendent of MVC.
 - You have the model that represents the business logic and the data for your application. 

 ### 7. The Flux Architecture
 - Facebook found issues with using the standard MVC architecture pattern.
 - Flux Architecture: just like MVC, it is a software engineering pattern. It is a suggestion idea or a pattern for you to organize your code, and not necessarily the only way of doing things.
 - One of the salient features of flux is unidirectional data flow.
 - New actions propagated through the system in response to user interactions, and the dispatcher becomes the center unit that controls all the changes and mediates to ensure that changes to the store are sent through it.
 - So the only way you can do any changes is by sending `actions` into the `dispatcher` and the dispatcher then serializes these changes to your store. 

 ### 8. Introduction to Redux
 - Redux is one such approach that has been suggested as a way of organizing your react application.
 - Redux derives a lot of its ideas also from the Flux architecture but it is a realization of the Flux architecture.
 - Redux is Predictable state container for JavaScript apps.
 - Main Principles of Redux:
  - Single source of truth -> Single state object tree within a single store.
  - State is read-only (only getters, no setters) –> Changes should only be done through actions.
  - Changes are made with pure functions -> Take previous state and action and return next state.
 - The pure function takes the previous state of your application, and the action that is specified, and given the previous state and the actual that is specified, it'll generate the new state for the application.
 - Redux Concepts:
  - State: stored in plain JS object
  - Action: plain JS object with a type field that specifies how to change something in the state
  - Reducer: pure functions that take the current state and action and return a new state.
 - In immutability, if you have an object you won't change that directly, but instead you derive a new object by copying the previous object and then generate a new object as a copy with the modification applied.

 ### 9. Exercise: Introduction to Redux
 - `$ yarn add redux react-redux` -> As a first step you will install Redux and React-Redux into your application.
 - Next, create a folder named `redux` in the `src` folder and then add a file named `reducer.js` where I will implement my reducer function.
 - dishes, comments, leaders and promotions -> move them from `MainComponent.js` into `reducer.js` file.
 - We need to set up the reducer function because our store needs to know what to do when an action is dispatched to it:
 ```
 import { DISHES } from '../shared/dishes';
 import { COMMENTS } from '../shared/comments';
 import { PROMOTIONS } from '../shared/promotions';
 import { LEADERS } from '../shared/leaders';

 export const initialState = {
     dishes: DISHES,
     comments: COMMENTS,
     promotions: PROMOTIONS,
     leaders: LEADERS
 };

 export const Reducer = (state = initialState, action) => {
     return state;
 };
 ```
 - Then, add a file named `configureStore.js` in the `redux` folder:
 ```
 import {createStore} from 'redux';
 import { Reducer, initialState } from './reducer'

 export const ConfigureStore = () => {
     const store = createStore(
         Reducer, // reducer
         initialState, // our initialState
     );

     return store;
 }
 ```
 - `createStore` -> It allows me to create the Redux Store and then also, let me import the reducer and `initialState`.
 - Upadte `App.js` :
 ```
 . . .


 import { Provider } from 'react-redux';
 import { ConfigureStore } from './redux/configureStore';

 const store = ConfigureStore();


 . . .

       <Provider store={store}>
         <BrowserRouter>
           <div className="App">
             <Main />
           </div>
         </BrowserRouter>
       </Provider>

 . . .
 ```
 
 - The provider is part of react-redux. This provider component allows me to configure my React application so that the Redux Store becomes available to all components in my application.
 
 - Finally, update `MainComponent.js` to connect it to Redux store and use it:
 ```
 . . .

 import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
 import { connect } from 'react-redux';


 const mapStateToProps = state => {
   return {
     dishes: state.dishes,
     comments: state.comments,
     promotions: state.promotions,
     leaders: state.leaders
   }
 }

 . . .

     const HomePage = () => {
       return(
           <Home 
               dish={this.props.dishes.filter((dish) => dish.featured)[0]}
               promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
               leader={this.props.leaders.filter((leader) => leader.featured)[0]}
           />
       );
     }

     const DishWithId = ({match}) => {
       return(
           <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
             comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
       );
     };

     return (
       <div>
         <Header />
         <div>
           <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} />
               <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
               <Route path='/menu/:dishId' component={DishWithId} />
               <Route exact path='/contactus' component={Contact} />} />
               <Redirect to="/home" />
           </Switch>
         </div>
         <Footer />
       </div>
     );
   }
 }

 export default withRouter(connect(mapStateToProps)(Main));
 ```
 
 - `mapStateToProps` function will will map the Redux Store's state into props that will become available to my component. 

 ### Additional Resources
 - [Flux](https://facebook.github.io/flux/).
 - [Redux](https://redux.js.org/).
 - [Redux Basics Documentation](https://redux.js.org/tutorials/fundamentals/part-1-overview).
 - [Redux Tutorials](https://github.com/markerikson/react-redux-links/blob/master/redux-tutorials.md).

  
 </details>
 
 <details>
 <summary>React Redux Form</summary>
 
 ### 10. React Redux Forms
 - React-Redux-Form: A versatile, fast, and intuitive library for creating complex and performant forms in React and Reduxز
 - Suppose you want to persist the state of the form even across page reloads or as you navigate in and out of a view, then React-Redux-Form would be of use to you. 

 ### 11. Exercise: React Redux Form
 - `$ yarn add react-redux-form` -> Install the react-redux-form.
 - Then open `ContactComponent.js` and update:
 ```
 . . .

 import { Breadcrumb, BreadcrumbItem,
             Button, Row, Col, Label } from 'reactstrap';
 import { Control, LocalForm, Errors } from 'react-redux-form';

 . . .


     handleSubmit(values) {
         console.log('Current State is: ' + JSON.stringify(values));
         alert('Current State is: ' + JSON.stringify(values));
         // event.preventDefault();
     }

 . . .

                         <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                             <Row className="form-group">
                                 <Label htmlFor="firstname" md={2}>First Name</Label>
                                 <Col md={10}>
                                     <Control.text model=".firstname" id="firstname" name="firstname"
                                         placeholder="First Name"
                                         className="form-control"
                                          />
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Label htmlFor="lastname" md={2}>Last Name</Label>
                                 <Col md={10}>
                                     <Control.text model=".lastname" id="lastname" name="lastname"
                                         placeholder="Last Name"
                                         className="form-control"
                                          />
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                 <Col md={10}>
                                     <Control.text model=".telnum" id="telnum" name="telnum"
                                         placeholder="Tel. Number"
                                         className="form-control"
                                          />
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Label htmlFor="email" md={2}>Email</Label>
                                 <Col md={10}>
                                     <Control.text model=".email" id="email" name="email"
                                         placeholder="Email"
                                         className="form-control" />
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Col md={{size: 6, offset: 2}}>
                                     <div className="form-check">
                                         <Label check>
                                             <Control.checkbox model=".agree" name="agree"
                                                 className="form-check-input"
                                                  /> {' '}
                                                 <strong>May we contact you?</strong>
                                         </Label>
                                     </div>
                                 </Col>
                                 <Col md={{size: 3, offset: 1}}>
                                     <Control.select model=".contactType" name="contactType"
                                         className="form-control">
                                         <option>Tel.</option>
                                         <option>Email</option>
                                     </Control.select>
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Label htmlFor="message" md={2}>Your Feedback</Label>
                                 <Col md={10}>
                                     <Control.textarea model=".message" id="message" name="message"
                                         rows="12"
                                         className="form-control" />
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Col md={{size:10, offset: 2}}>
                                     <Button type="submit" color="primary">
                                     Send Feedback
                                     </Button>
                                 </Col>
                             </Row>
                         </LocalForm>

 . . .
 ```

 ### 12. Exercise: React Redux Form Validation
 - Open `ContactComponent.js` and update it:
 ```
 . . . 


 const required = (val) => val && val.length;
 const maxLength = (len) => (val) => !(val) || (val.length <= len);
 const minLength = (len) => (val) => val && (val.length >= len);
 const isNumber = (val) => !isNaN(Number(val));
 const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

 . . .

                             <Row className="form-group">
                                 <Label htmlFor="firstname" md={2}>First Name</Label>
                                 <Col md={10}>
                                     <Control.text model=".firstname" id="firstname" name="firstname"
                                         placeholder="First Name"
                                         className="form-control"
                                         validators={{
                                             required, minLength: minLength(3), maxLength: maxLength(15)
                                         }}
                                          />
                                     <Errors
                                         className="text-danger"
                                         model=".firstname"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength: 'Must be greater than 2 characters',
                                             maxLength: 'Must be 15 characters or less'
                                         }}
                                      />
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Label htmlFor="lastname" md={2}>Last Name</Label>
                                 <Col md={10}>
                                     <Control.text model=".lastname" id="lastname" name="lastname"
                                         placeholder="Last Name"
                                         className="form-control"
                                         validators={{
                                             required, minLength: minLength(3), maxLength: maxLength(15)
                                         }}
                                          />
                                     <Errors
                                         className="text-danger"
                                         model=".lastname"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength: 'Must be greater than 2 characters',
                                             maxLength: 'Must be 15 characters or less'
                                         }}
                                      />
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                 <Col md={10}>
                                     <Control.text model=".telnum" id="telnum" name="telnum"
                                         placeholder="Tel. Number"
                                         className="form-control"
                                         validators={{
                                             required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                         }}
                                          />
                                     <Errors
                                         className="text-danger"
                                         model=".telnum"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength: 'Must be greater than 2 numbers',
                                             maxLength: 'Must be 15 numbers or less',
                                             isNumber: 'Must be a number'
                                         }}
                                      />
                                 </Col>
                             </Row>
                             <Row className="form-group">
                                 <Label htmlFor="email" md={2}>Email</Label>
                                 <Col md={10}>
                                     <Control.text model=".email" id="email" name="email"
                                         placeholder="Email"
                                         className="form-control"
                                         validators={{
                                             required, validEmail
                                         }}
                                          />
                                     <Errors
                                         className="text-danger"
                                         model=".email"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             validEmail: 'Invalid Email Address'
                                         }}
                                      />
                                 </Col>
                             </Row>

 . . .
 ```

 ### Additional Resources
 - [React Redux Form Documentation](https://davidkpiano.github.io/react-redux-form/docs.html).
 - [Should you store your form state in Redux?](https://goshakkk.name/should-i-put-form-state-into-redux/)

  
 </details>
 
 <details>
 <summary>Assignment 3</summary>
 
 - In this assignment you will update the DishdetailComponent.js to include a form and do the form validation in code. At the end of this assignment, you should have completed the following tasks to update the page:

   - Added a new class component named CommentForm to DishdetailComponent.js.
   - Provide a form to enable users to submit their comments
   - Validate the information entered by the users in the form
  
 </details>
 
### week 4:
 
 <details>
 <summary>Redux Actions</summary>
 
 ### 1. Redux Actions
 - Actions: payloads of information that send data from your application to the store.
 - Based on the type property of the action, you will write typically that the Reducer function as a switch statement.

 ### 2. Exercise: Combining Reducers
 - In the `redux` folder, create a new file named `dishes.js` :
 ```
 import { DISHES } from '../shared/dishes';

 export const Dishes = (state = DISHES, action) => {
     switch (action.type) {
         default:
           return state;
       }
 };
 ```
 - Do the same with `comments.js` , `promotions.js` , `leaders.js`.
 - We have split the management of state into different reducers that manage partial state, we need to combine them together. 
 - Open `configureStore.js` and update it:

 ### 3. Exercise: Redux Actions
 - In the redux folder create a new file named `ActionTypes.js` -> `export const ADD_COMMENT = 'ADD_COMMENT';`
 - Then, create a file named `ActionCreators.js` :
 ```
 import * as ActionTypes from './ActionTypes';

 export const addComment = (dishId, rating, author, comment) => ({
     type: ActionTypes.ADD_COMMENT,
     payload: {
         dishId: dishId,
         rating: rating,
         author: author,
         comment: comment
     }
 });
 ```
 - You send this to the store.
 - The payload contains whatever needs to be carried in so the data that is sent back by the addComment.
 - Next, update `comments.js` to initiate action when the action is dispatched by the `ActionCreator` :

 ```
 import { COMMENTS } from '../shared/comments';
 import * as ActionTypes from './ActionTypes';

 export const Comments = (state = COMMENTS, action) => {
     switch (action.type) {
         case ActionTypes.ADD_COMMENT:
             var comment = action.payload;
             comment.id = state.length;
             comment.date = new Date().toISOString();
             console.log("Comment: ", comment);
             return state.concat(comment);

         default:
           return state;
       }
 };
 ```
 - We will add it into the comments array, and then so the view will be able to show that comment.
 - The concat is an immutable operation on the state, and that will create a new object and that object I can return from my function here.
 - what we're doing here is we're only adding it in memory. So, when you restart your application, any comments that you add by filling in the forms will be lost completely. We are not persisting the changes in any way.
 - Now update `MainComponent.js` to make the action available for use within the `DishdetailComponent` :

 ```
 . . .

 import { addComment } from '../redux/ActionCreators';

 . . .

   const mapDispatchToProps = dispatch => ({

     addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

   });

 . . .

       <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
         comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
         addComment={this.props.addComment}
       />

 . . .

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
 ```
 - Finally, update `DishdetailComponent.js` :

 ```
 . . .

   function RenderComments({comments, addComment, dishId}) {



 . . .

       <CommentForm dishId={dishId} addComment={addComment} />


 . . .

         this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);



 . . .

       <RenderComments comments={props.comments}
         addComment={props.addComment}
         dishId={props.dish.id}
       />

 . . .
 ```
 - So, when you submit the comment, you'll see that the submission of the comment will trigger action to be sent to your redux store, and then this action will result in the comment being added into the comments part of the state of your redux store, and then when the changes, then that will result in the store emitting a change, and that will result in your main component going and getting the updated state from the redux store, and then the main component passes the new state to all the chilled components, and then when you come down the RenderComments component realizes that the comments part has changed, so it will have to be rendered. So, react takes care of re rendering that with new the comment added into the list there. 

 ### Additional Resources
 - [Redux Actions](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow).
 - [Redux Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers).
 - [Redux Usage with React](https://redux.js.org/tutorials/fundamentals/part-5-ui-react)
  
 </details>
 
 <details>
 <summary>Redux Thunk</summary>
 
 ### 4. Redux Thunk
 - Provides the capability to run code after an action is dispatched, but before it reaches the reducer.
 - This is a place which enables third party extensions to be injected into your Redux application.
 - When you need to use the middleware in your Redux application then you use that applied middleware function that is available from Redux.
 - In programming, a `thunk` is a subroutine used to inject an additional calculation in another subroutine:
   – Delay a calculation until its result is needed,
   – Insert operations at the beginning or end of the other subroutine.
 - `Redux Thunk` is one kind of a middleware that allows you to write an action creator that will return a function instead of an action.
 - Inner function receives the `dispatch()` and `getState()` store methods
 - Useful for complex synchronous logic:
   – Multiple dispatches
   – Conditional dispatches
   – Simple Async logic
 - Redux Saga: Uses ES6 generators to control pausable functions
   – Comples async logic
   – Ongoing “background thread” like processing behavior

 ### 5. Exercise: Redux Thunk
 - `$ yarn add redux-thunk redux-logger` -> Install Redux Thunk and Logger.
 - Then open `configureStore.js` and update it to use the Thunk and Logger :

 ```
  import {createStore, combineReducers, applyMiddleware } from 'redux';

  . . .

  import thunk from 'redux-thunk';
  import logger from 'redux-logger';

  . . .

          combineReducers({
              dishes: Dishes,
              comments: Comments,
              promotions: Promotions,
              leaders: Leaders
          }),
          applyMiddleware(thunk, logger)

  . . .
  ```

 - Next, open `ActionTypes.js` :

 ```
 export const DISHES_LOADING = 'DISHES_LOADING';
 export const DISHES_FAILED = 'DISHES_FAILED';
 export const ADD_DISHES = 'ADD_DISHES';
 ```
 - The `DISHES_LOADING` means that the dishes are currently being fetched, perhaps from a server. The dishes information has been fetched from a server. 
 - The `DISHES_FAILED` means that you failed to fetch the dishes information from a server.
 - Then `ADD_DISHES` means that you want to add the dishes into your store.
 - Then open `ActionCreators.js` and add new actions:

 ```
 . . .

 import { DISHES } from '../shared/dishes';

 . . .


 export const fetchDishes = () => (dispatch) => {

     dispatch(dishesLoading(true));

     setTimeout(() => {
         dispatch(addDishes(DISHES));
     }, 2000);
 }

 export const dishesLoading = () => ({
     type: ActionTypes.DISHES_LOADING
 });

 export const dishesFailed = (errmess) => ({
     type: ActionTypes.DISHES_FAILED,
     payload: errmess
 });

 export const addDishes = (dishes) => ({
     type: ActionTypes.ADD_DISHES,
     payload: dishes
 });
 ```
 - Next, open `dishes.js` and add the code to respond to actions :

 ```
 import * as ActionTypes from './ActionTypes';

 export const Dishes = (state = { isLoading: true,
     errMess: null,
     dishes:[]}, action) => {
     switch (action.type) {
         case ActionTypes.ADD_DISHES:
             return {...state, isLoading: false, errMess: null, dishes: action.payload};

         case ActionTypes.DISHES_LOADING:
             return {...state, isLoading: true, errMess: null, dishes: []}

         case ActionTypes.DISHES_FAILED:
             return {...state, isLoading: false, errMess: action.payload};

         default:
             return state;
     }
 };
 ```
 - If the `isLoading` is set to true, I may just want to display a loading spinner on the screen.
 - Add a new component named `LoadingComponent.js` to display a loading message:

 ```
 import React from 'react';

 export const Loading = () => {
     return(
         <div className="col-12">
             <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
             <p>Loading . . .</p>
         </div>
     );
 };
 ```
 - Now we will update the remaining components to use the actions.
 - To see the logger middleware's operation in your browser, open your JavaScript console of your browser.

 ### 6. Exercise: React-Redux-Form Revisited
 - If we want to make use of the full power of the React-Redux-Form whereby the form state is persisted in the Redux store instead of in the components state, then we need to update our form to make use of the regular form rather than the local form from the React-Redux-Form.
 - Add a new file named `forms.js` in the `redux` folder :

 ```
 export const InitialFeedback = {
     firstname: '',
     lastname: '',
     telnum: '',
     email: '',
     agree: false,
     contactType: 'Tel.',
     message: ''
 };
 ```
 - Then, open `configureStore.js` :

 ```
 . . .

 import { createForms } from 'react-redux-form';

 . . .

 import { InitialFeedback } from './forms';

 . . .

         combineReducers({
             dishes: Dishes,
             comments: Comments,
             promotions: Promotions,
             leaders: Leaders,
             ...createForms({
                 feedback: InitialFeedback
             })
         }),

 . . .
 ```
 - Once we import the initial feedback and so if we initialize it like this, this we'll add in the necessary reducer functions and also the state information into my create store.
 - So we don't need to write our own reducers or our action creators and so on, React-Redux-Form fills in all the details by itself. 
 - Next, open `MainComponent.js` :

 ```
 . . .

 import { actions } from 'react-redux-form';

 . . .

   resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

 . . .

               <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />

 . . .
 ```
 - Open `ContactComponent.js` :

 ```
 . . .

 import { Control, Form, Errors, actions } from 'react-redux-form';

 . . .

     handleSubmit(values) {
         console.log('Current State is: ' + JSON.stringify(values));
         alert('Current State is: ' + JSON.stringify(values));
         this.props.resetFeedbackForm();
         // event.preventDefault();
     }

 . . .

                         <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>

                           . . .


                         </Form>

 . . .
 ```
 - So even though I have moved away from this view and then came back to the view, since this form state is preserved in the Redux store, I'm able to see that the form state is preserved even though I navigated away from this view. Now let's go ahead and submit this form.
 - So that's the reset feedback from function to be implemented, initiating the action to reset the form after submitting. 

 ### Additional Resources
 - [Middleware](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware).
 - [Redux Thunk](https://github.com/reduxjs/redux-thunk).
 - [Logger for Redux](https://github.com/LogRocket/redux-logger).
 - [React Redux Form](https://davidkpiano.github.io/react-redux-form/docs.html)
 
 
  
 </details>
 
 <details>
 <summary>Client-Server Communication</summary>
 
 ### 7. Networking Essentials
 - Many of Web applications have a “Cloud” backend.
 - HTTP protocol, the protocol that is used for communicating between the client and the server.
 - The HTTP protocol, for it to work, needs a URL to be supplied to it, the Uniform Resource Locator.
 - URL: this is a string of characters separated by slashes with an http: or an https: attached in front of it.
 - JSON: the JavaScript Object Notation is one way of encoding data that is being shipped from the server side to the client side or vice versa.
 - SOAP as a protocol that allows communication between distributed entities within the network.
 - When you are communicating with a server, the client server communication causes unexpected amount of delays or indeterminate amount of delay while the data is being either fetched or uploaded to the server from the client side.
 - The Hypertext Transfer Protocol: this is a protocol that is used for encoding the messages that you exchange between your client application and a server side.
 - In order to be able to talk to a server, you have the support from various HTTP actions or what we refer to as HTTP verbs, the head, get, post, put, delete, trace, options, and connect.
 - In the HTTP protocol, you are sending a request from your client application to the server, and this is encoded in the form of an HTTP request message. The request message typically carries a URL in the request message indicating what is it that you want the server side to send it to you. And this is typically a get message if you want data to be downloaded from the server side, and you will also specify which particular server you are communicating with. When the server receives your request, the server will retrieve the data from its data storage, typically a database on the server side, and then package this data in an appropriate format and send the data back to you on your client side.
 - A request message is typically sent from the client to the server and the request message consists of a request line plus a bunch of headers where you supply additional information to qualify the request.

 ### 8. Brief Representational State Transfer (REST)
 - Web services are a way of designing systems to support interoperability among systems that are connected over a network, like the Internet as we see today.
 - Representational State Transfer(REST): is a style of software architecture that is specially designed for distribution hypermedia over the World Wide Web.
 - Four basic design principles:
  – Use HTTP methods explicitly
  – Be stateless
  – Expose directory structure-like URIs
  – Transfer using XML, JavaScript Object Notation (JSON), or both.
 - Nouns specifically refer to resources, and these are resources are usually identified by their URLs and these are unconstrained.
 - Verbs are constrained and these specify the actions to be done on the resources(CRUD operations).
 - Representations, when the information needs to be conveyed from the server to the client or from the client or the server, how you encode the information, typically, either using JSON or using XML. 

 ### 9. Exercise: Setting up a Server using json-server
 - we will make use of a simple node module called json-server, which helps us to quickly set up a simple server with several data that is given to it in the form of a JSON file.
 - At any convenient location on your computer, create a new folder named `json-server`, and move to this folder.
 - Download the `db.json` file provided above to this folder.
 - `$ npm install json-server -g` -> json-server is a node module, and hence can be installed globally.
 - Create a `public` folder in your json-server folder.
 - Download the `images.zip` file that we provide above, unzip it and move the images folder containing the images to the public folder.
 - `$ json-server --watch db.json -p 3001 -d 2000` -> To Start the server.
 - `-d` flag -> specify the Delay, `-p` flag -> specify the Port.
 - This should start up a server at port number 3001 on your machine. The data from this server can be accessed by typing the following addresses into your browser address bar:
 ```
 http://localhost:3001/dishes
 http://localhost:3001/promotions
 http://localhost:3001/leaders
 http://localhost:3001/feedback
 ```
 - Restart the json-server as we did before. Now your server will serve up the images for our React app. You can view these images by typing the following into your browser address bar: `http://localhost:3001/images/<image name>.png`.

 ### Additional Resources
 - [JSON Server](https://github.com/typicode/json-server).
 - [Creating Demo APIs with json-server](https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server).
 - [JSON](https://www.json.org/json-en.html).
  
 </details>
 
 <details>
 <summary>Fetch</summary>
 
 ### 10. Promises
 - Promise is a mechanism that supports asynchronous computation.
 - A promise will return a promise to you saying that when the result becomes available it'll come back and deliver the results to you.
 - So, a promise returns a proxy object to you and you hold onto the proxy object and that proxy object will give you access to the results when they become available.
 - Solves the callback hell (heavily nested callback
code) problem
 - Promises can be chained
 - Can immediately return:
  – Promise.resolve(result)
  – Promise.reject(error)

 ### 11. Fetch
 - The Fetch API is a modern replacement for XMLHttpRequest.
 - Fetch Abstractions:
 - Request: Represents a resource request
  - Response: Represents the response to a request
  - Headers: Represents response/request headers, allowingyou to query them and take different actions depending on the results
  - Body: Provides methods relating to the body of the response/request, allowing you to declare what its content type is and how it should be handled.
  - Cross-Fetch library provides support for Fetch both in Node applications and Browsers.
 - Fetch Alternatives -> Axios, Superagent.

 ### 12. Exercise: Fetch from Server
 - One of the most important things that you need to ensure when you're doing the exercise of communicating with the server, is that the server should be up and running.
 - Open server in port `3001`, and react application in port `3000`
 - `$ yarn add cross-fetch` -> install Fetch into our project.
 - Now that we have installed Fetch, let us configure your application to connect to the server. First, create a file named `baseUrl.js` in the `shared` folder:
 ```
 export const baseUrl = 'http://localhost:3001/';
 ```
 - Next, open ActionTypes.js and add the following:
 ```
 . . .

 export const ADD_COMMENTS = 'ADD_COMMENTS';
 export const COMMENTS_FAILED = 'COMMENTS_FAILED';
 export const PROMOS_LOADING = 'PROMOS_LOADING';
 export const ADD_PROMOS = 'ADD_PROMOS';
 export const PROMOS_FAILED = 'PROMOS_FAILED';
 ```
 - Then, open `ActionCreators.js` and update it :

 ```
 . . .

 import { baseUrl } from '../shared/baseUrl';

 . . .

     return fetch(baseUrl + 'dishes')
     .then(response => response.json())
     .then(dishes => dispatch(addDishes(dishes)));

 . . .


 export const fetchComments = () => (dispatch) => {    
     return fetch(baseUrl + 'comments')
     .then(response => response.json())
     .then(comments => dispatch(addComments(comments)));
 };

 export const commentsFailed = (errmess) => ({
     type: ActionTypes.COMMENTS_FAILED,
     payload: errmess
 });

 export const addComments = (comments) => ({
     type: ActionTypes.ADD_COMMENTS,
     payload: comments
 });

 export const fetchPromos = () => (dispatch) => {

     dispatch(promosLoading());

     return fetch(baseUrl + 'promotions')
     .then(response => response.json())
     .then(promos => dispatch(addPromos(promos)));
 }

 export const promosLoading = () => ({
     type: ActionTypes.PROMOS_LOADING
 });

 export const promosFailed = (errmess) => ({
     type: ActionTypes.PROMOS_FAILED,
     payload: errmess
 });

 export const addPromos = (promos) => ({
     type: ActionTypes.ADD_PROMOS,
     payload: promos
 });
 ```
 
 - Next, open `comments.js` :

 ```

 import * as ActionTypes from './ActionTypes';

 export const Comments = (state = { errMess: null, comments:[]}, action) => {
   switch (action.type) {
     case ActionTypes.ADD_COMMENTS:
       return {...state, errMess: null, comments: action.payload};

     case ActionTypes.COMMENTS_FAILED:
       return {...state, errMess: action.payload};

     case ActionTypes.ADD_COMMENT:
         var comment = action.payload;
         comment.id = state.comments.length;
         comment.date = new Date().toISOString();
         return { ...state, comments: state.comments.concat(comment)};

     default:
       return state;
   }
 };
 ```
 - Similarly, open `promotions.js` and update it.
 - Now that the Redux actions are all updated, it's time to update the components.
 - Open `MainComponent.js` and update it :
 ```
 . . .

 import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

 . . .


 const mapDispatchToProps = dispatch => ({
   addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
   fetchDishes: () => { dispatch(fetchDishes())},
   resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
   fetchComments: () => dispatch(fetchComments()),
   fetchPromos: () => dispatch(fetchPromos())
 });

 . . .

   componentDidMount() {
     this.props.fetchDishes();
     this.props.fetchComments();
     this.props.fetchPromos();
   }

 . . .

           <Home 
               dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
               dishesLoading={this.props.dishes.isLoading}
               dishErrMess={this.props.dishes.errMess}
               promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
               promoLoading={this.props.promotions.isLoading}
               promoErrMess={this.props.promotions.errMess}
               leader={this.props.leaders.filter((leader) => leader.featured)[0]}
           />

 . . .

           <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
             isLoading={this.props.dishes.isLoading}
             errMess={this.props.dishes.errMess}
             comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
             commentsErrMess={this.props.comments.errMess}
             addComment={this.props.addComment}
           />

 . . .
 ```
 - Then, open `MenuComponent.js` :
 ```
 . . .

 import { baseUrl } from '../shared/baseUrl';

 . . .

                     <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />

 . . .
 ```
 - Instead of using the images that are configured in our application. Because that is how we want it to be, because if the dishes in the server is updated, then I don't want to suddenly realize that the corresponding image doesn't exist in my application and so I wouldn't know how to render the image.

 ### 13. Exercise: Fetch Handling Errors
 - When you throw the error in a promise handler, we can then implement a catch at the bottom which will catch the error and then handle the error appropriately.
 - Open `ActionCreators.js` and update it:

 ```
 export const fetchDishes = () => (dispatch) => {

     dispatch(dishesLoading(true));

     return fetch(baseUrl + 'dishes')
     .then(response => {
         if (response.ok) {
           return response;
         } else {
           var error = new Error('Error ' + response.status + ': ' + response.statusText);
           error.response = response;
           throw error;
         }
       },
       error => {
             var errmess = new Error(error.message);
             throw errmess;
       })
     .then(response => response.json())
     .then(dishes => dispatch(addDishes(dishes)))
     .catch(error => dispatch(dishesFailed(error.message)));
 }
 ```
 - Do the same with `fetchComments` and `fetchPromos`.

 ### 14. Exercise: Fetch Post Comment
 - when you post a comment, you will first send the comment over to the server, and if the comment is successfully added on the server site and the server sends back a success of the posting of the comment, only then you will add it to the redux store.
 - Open ActionCreators.js and update it:

 ```
 . . .

 export const addComment = (comment) => ({
     type: ActionTypes.ADD_COMMENT,
     payload: comment
 });

 export const postComment = (dishId, rating, author, comment) => (dispatch) => {

     const newComment = {
         dishId: dishId,
         rating: rating,
         author: author,
         comment: comment
     };
     newComment.date = new Date().toISOString();

     return fetch(baseUrl + 'comments', {
         method: "POST",
         body: JSON.stringify(newComment),
         headers: {
           "Content-Type": "application/json"
         },
         credentials: "same-origin"
     })
     .then(response => {
         if (response.ok) {
           return response;
         } else {
           var error = new Error('Error ' + response.status + ': ' + response.statusText);
           error.response = response;
           throw error;
         }
       },
       error => {
             throw error;
       })
     .then(response => response.json())
     .then(response => dispatch(addComment(response)))
     .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
 };

 . . .
 ```
 - Open `comment.js` and remove the following two lines from it:
 ```
 . . .

        comment.id = state.comments.length;
        comment.date = new Date().toISOString();

  . . .
 ```
 - Open `MainComponent.js` and update it:
 ```
 . . .

 import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

 . . .

   postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))

 . . .

             postComment={this.props.postComment}

 . . .
 ```
 - Finally, open `DishdetailComponent.js` :
 ```
 . . .

     function RenderComments({comments, postComment, dishId}) {

 . . .

                     <CommentForm dishId={dishId} postComment={postComment} />

 . . .

             this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);

 . . .

                             postComment={props.postComment}

 . . .
 ```

 ### Additional Resources
 - [Cross fetch](https://github.com/lquixada/cross-fetch)
 - [Introduction to fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch).
 - [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
  
 </details>
 
 <details>
 <summary>React Animations</summary>
 
 ### 15. React Animations
 - Animations in React can be supported through several React animation libraries
 - Two that we will explore in this course:
  – React-transition-group
  – React-animation-components
 
 ### 16. Exercise: React Animations
 - `$ yarn add react-transition-group` -> Install react-transition-group in your React project.
 - Configure CSS classes for use in animation. Open App.css and add the following classes:
 ```
 . . .

 .page-enter {
     opacity: 0.01;
     transform: translateX(-100%);
 }

 .page-enter-active {
     opacity: 1;
     transform: translateX(0%);
     transition: all 300ms ease-in;
 }

 .page-exit {
     opacity: 1;
     transform: translateX(0%);
 }

 .page-exit-active {
     opacity: 0.01;
     transform: translateX(100%);
     transition: all 300ms ease-out;
 }

 ```
 - Then, open `MainComponent.js` and add in the following to configure the animation:
 ```
 . . .

 import { TransitionGroup, CSSTransition } from 'react-transition-group';

 . . .

           <TransitionGroup>
             <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
               <Switch location={this.props.location}>
                   <Route path='/home' component={HomePage} />
                   <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} />
                   <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                   <Route path='/menu/:dishId' component={DishWithId} />
                   <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                   <Redirect to="/home" />
               </Switch>
             </CSSTransition>
           </TransitionGroup>

 . . .
 ```
 - whenever you want to apply the animation, we'll surround that by the transition group.
 -  recall that term every component receives ( match, location and history). So that's what we're using, location key. 

 ### 17. Exercise: React Animation Components
 - Install `react-animation-components` into your React app as follows:

 ```
 $ yarn add react-animation-components@3.0.0
 $ yarn add prop-types@15.6.0
 ```
 - Open `HomeComponents.js` and update as follows:

 ```
 . . .

 import { FadeTransform } from 'react-animation-components';

 . . .

             <FadeTransform
                 in
                 transformProps={{
                     exitTransform: 'scale(0.5) translateY(-50%)'
                 }}>
                 <Card>
                     <CardImg src={baseUrl + item.image} alt={item.name} />
                     <CardBody>
                     <CardTitle>{item.name}</CardTitle>
                     {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                     <CardText>{item.description}</CardText>
                     </CardBody>
                 </Card>
             </FadeTransform>

 . . .
 ```
 - Open `DishdetailComponents.js` and update it as follows:

 ```
 . . .

 import { FadeTransform, Fade, Stagger } from 'react-animation-components';

 . . .

             <FadeTransform
                 in
                 transformProps={{
                     exitTransform: 'scale(0.5) translateY(-50%)'
                 }}>
             <Card>
                 <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                 <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                 </CardBody>
             </Card>
             </FadeTransform>

 . . .

                     <Stagger in>
                         {comments.map((comment) => {
                             return (
                                 <Fade in>
                                 <li key={comment.id}>
                                 <p>{comment.comment}</p>
                                 <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                 </li>
                                 </Fade>
                             );
                         })}
                         </Stagger>

 . . .
 ```

 ### Additional Resources
 - [React Transition Group](https://reactcommunity.org/react-transition-group/)
 - [react-animation-components](https://github.com/chrisjcodes/react-animation-components).
 - [Animation Add-Ons](https://reactjs.org/docs/animation.html).
 - [How to build animated microinteractions in React](https://www.freecodecamp.org/news/how-to-build-animated-microinteractions-in-react-aab1cb9fe7c8/).
  
 </details>
 
 <details>
 <summary>Assignment 4</summary>
 
 - In this assignment, you will update the web application to get data from the server to render the information corresponding to the leadership team of the company. In addition, you will handle the submission of the feedback form by posting the feedback to the server.
  
 </details>
 
 <details>
 <summary>Building and Deployment</summary>
 
 ### 18. Introduction to Webpack
 - webpack is a module bundler for modern JavaScript applications.
 - Bundle: a JavaScript file that incorporates assetsز 

 ### 19. Exercise: Building and Deploying the React Application
 - `$ npm run build` -> This should build a distribution folder named `build` containing all your application files.
 - Our next step is to just copy the contents of the `build` folder into our web server and then the web server will be up and serving up our react application.
 - copy all the files from this `build` folder, and then I will go to the `json-server` folder and then into the `public` folder.
 - Now if we go to web server port we can see our application works exactly the same our react application.
 - Now your React application can be accessed at the link `http://localhost:3001/`.
 - If you are setting up a server on the cloud or anywhere, all that you need to do is copy the contents of the build folder to the server side to deploy your React application. The exact procedure depends on the cloud service provider that you choose to use. Please consult their documentation to see the procedure to set up the server.

 ### Additional Resources
 - [Webpack: An Introduction](https://v5.angular.io/guide/webpack).
 - [create-react-app Build](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-build).
 - [Webpack](https://webpack.js.org/concepts/).
 - [Webpack on Github](https://webpack.github.io/).

  
 </details>
 

 ## Course 3: [Server-side Development with NodeJS, Express and MongoDB](https://www.coursera.org/learn/server-side-nodejs)

 ### This course is divided into 4 modules, Each module takes 1 week.
 
 ### week 1 :
 
 <details>
 <summary>Welcome to Server-Side Development with NodeJS, Express and MongoDB</summary>
 
 ### 1. Welcome to Server-Side Development with NodeJS, Express and MongoDB
 - Course Overview 

 ### 2. How to Use the Learning Resources
 - This course is divided into 4 modules, Each module takes 1 week.

 ### Additional Resources
 - [NodeJS](https://nodejs.org/en/).
 - [NPM](https://www.npmjs.com/).
 - [ExpressJS](http://expressjs.com/).
 - [MongoDB](https://www.mongodb.com/).
 - [Mongoose](https://mongoosejs.com/).
  
 </details>
 
 <details>
 <summary>Node Modules</summary>
 
 ### 3. Node Modules
 - Each file in a Node application becomes its own Node module.
 -Node modules can be of three categories. 
  - File-based	Modules
  - Core	Modules
  - External	Node	modules

 ### 4. Exercise (Video): Understanding Node Modules
 - Create a folder named node-examples and then move into this folder.
 - `$ npm init -y` -> initialize a `package.json` file.
 - Add `"start": "node index"` to `package.json` file into scripts.
 - Create a file named `index.js` and add the following code:

 ```
 var rect = {
  perimeter: (x, y) => (2*(x+y)),
  area: (x, y) => (x*y)
 };

 function solveRect(l,b) {
     console.log("Solving for rectangle with l = " + l + " and b = " + b);

     if (l <= 0 || b <= 0) {
         console.log("Rectangle dimensions should be greater than zero:  l = "
                + l + ",  and b = " + b);
     }
     else {
      console.log("The area of the rectangle is " + rect.area(l,b));
      console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
     }
 }

 solveRect(2,4);
 solveRect(3,5);
 solveRect(0,5);
 solveRect(-3,5);
 ```
 - Now with node, we have the option of using JavaScript or Typescript.
 - `$ npm start` -> To run the Node application.
 - Now, create a file named `rectangle.js`:

 ```
 exports.perimeter =  (x, y) => (2*(x+y));

 exports.area = (x, y) => (x*y);
 ```
 
 - Then, update `index.js` : 
 ```
 var rect = require('./rectangle');

 . . .
 ```
 - Run the Node application like before.

 ### 5. Node Modules: Callbacks and Error Handling
 -  First-class	functions:	A	function	can	be	treated	the	same	way	as	any	other	variable(callback).
 -  Closures:
  - A	function	defined	inside	another	function	has	access	to	all	the	variables	declared	in	the	outer	function	(outer	scope)
  – The	inner	function	will	continue	to	have	access	to	the	variables	from	the	outer	scope	even	after	the	outer	function	has	returned
 - Node.js is organized into a single threaded event loop. This single threaded event loop basically, picks up requests as they come in and execute it one after another.
 - The event loop is a continuously running loop which basically picks up requests from the request queue, and then services them one at a time.
 - Event	Loop:
  - timers:	this	phase	executes	
  - callbacks	scheduled	by setTimeout() and setInterval().
  - I/O	callbacks:	executes	almost	all	callbacks	with	the	exception	of	close	callbacks,	the	ones	scheduled	by	timers,	and setImmediate().
  - idle,	prepare:	only	used	internally.
  - poll:	retrieve	new	I/O	events;	node	will	block	here	when	appropriate.
  - check: setImmediate() callbacks	are	invoked	here.
  - close	callbacks:	e.g. socket.on('close',	...). 

 ### 6. Exercise (Video):Node Modules: Callbacks and Error Handling
 - Update  `rectangle.js` :

 ```
 module.exports = (x,y,callback) => {
     if (x <= 0 || y <= 0)
         setTimeout(() => 
             callback(new Error("Rectangle dimensions should be greater than zero: l = "
                 + x + ", and b = " + y), 
             null),
             2000);
     else
         setTimeout(() => 
             callback(null, {
                 perimeter: () => (2*(x+y)),
                 area:() => (x*y)
             }), 
             2000);
 }

 ```
 - Then,  update `index.js` :

 ```

 . . .

 function solveRect(l,b) {
     console.log("Solving for rectangle with l = "
                 + l + " and b = " + b);
     rect(l,b, (err,rectangle) => {
         if (err) {
          console.log("ERROR: ", err.message);
      }
         else {
             console.log("The area of the rectangle of dimensions l = "
                 + l + " and b = " + b + " is " + rectangle.area());
             console.log("The perimeter of the rectangle of dimensions l = "
                 + l + " and b = " + b + " is " + rectangle.perimeter());
         }
     });
     console.log("This statement after the call to rect()");
 };

 . . .
 ```

 ### Additional Resources
 
 - [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
 - [Node Modules](https://nodejs.org/api/modules.html)
 - [RequireJS](https://requirejs.org/)

 </details>
 
 <details>
 <summary>Node and HTTP</summary>

 ### 7. Networking Essentials
  - Many of Web applications have a “Cloud” backend.
 - HTTP protocol, the protocol that is used for communicating between the client and the server.
 - The HTTP protocol, for it to work, needs a URL to be supplied to it, the Uniform Resource Locator.
 - URL: this is a string of characters separated by slashes with an http: or an https: attached in front of it.
 - JSON: the JavaScript Object Notation is one way of encoding data that is being shipped from the server side to the client side or vice versa.
 - SOAP as a protocol that allows communication between distributed entities within the network.
 - When you are communicating with a server, the client server communication causes unexpected amount of delays or indeterminate amount of delay while the data is being either fetched or uploaded to the server from the client side.
 - The Hypertext Transfer Protocol: this is a protocol that is used for encoding the messages that you exchange between your client application and a server side.
 - In order to be able to talk to a server, you have the support from various HTTP actions or what we refer to as HTTP verbs, the head, get, post, put, delete, trace, options, and connect.
 - In the HTTP protocol, you are sending a request from your client application to the server, and this is encoded in the form of an HTTP request message. The request message typically carries a URL in the request message indicating what is it that you want the server side to send it to you. And this is typically a get message if you want data to be downloaded from the server side, and you will also specify which particular server you are communicating with. When the server receives your request, the server will retrieve the data from its data storage, typically a database on the server side, and then package this data in an appropriate format and send the data back to you on your client side.
 - A request message is typically sent from the client to the server and the request message consists of a request line plus a bunch of headers where you supply additional information to qualify the request.

 ### 8. Node and the HTTP Module
 - Node	HTTP	Module: Core	networking	module	supporting	a	high-performance	foundation	for	a	HTTP	stack

 ### 9. Exercise (Video): Node and the HTTP Module
 ```
 const http = require('http');

 const hostname = 'localhost';
 const port = 3000;

 const server = http.createServer((req, res) => {
     console.log(req.headers);
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/html');
     res.end('<html><body><h1>Hello, World!</h1></body></html>');
 })

 server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });
 ```
 - You can also use postman chrome extension to send requests to the server and see the response. Alternately, you can download the stand-alone Postman tool from `http://getpostman.com` and install it on your computer.
 - In the `public` folder, create a file named `index.html` and `aboutus.html`.
 - Then update `index.js` :
 
 ```
  . . .

 const server = http.createServer((req, res) => {
   console.log('Request for ' + req.url + ' by method ' + req.method);

   if (req.method == 'GET') {
     var fileUrl;
     if (req.url == '/') fileUrl = '/index.html';
     else fileUrl = req.url;

     var filePath = path.resolve('./public'+fileUrl);
     const fileExt = path.extname(filePath);
     if (fileExt == '.html') {
       fs.exists(filePath, (exists) => {
         if (!exists) {
           res.statusCode = 404;
           res.setHeader('Content-Type', 'text/html');
           res.end('<html><body><h1>Error 404: ' + fileUrl + 
                       ' not found</h1></body></html>');
           return;
         }
         res.statusCode = 200;
         res.setHeader('Content-Type', 'text/html');
         fs.createReadStream(filePath).pipe(res);
       });
     }
     else {
       res.statusCode = 404;
       res.setHeader('Content-Type', 'text/html');
       res.end('<html><body><h1>Error 404: ' + fileUrl + 
               ' not a HTML file</h1></body></html>');
     }
   }
   else {
       res.statusCode = 404;
       res.setHeader('Content-Type', 'text/html');
       res.end('<html><body><h1>Error 404: ' + req.method + 
               ' not supported</h1></body></html>');
   }
 })

 . . .
 ```

 ### Additional Resources
 - [path](https://nodejs.org/api/path.html)
 - [fs](https://nodejs.org/api/fs.html)
 - [http](https://nodejs.org/api/http.html)
 - [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
 - [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

 </details>
 
 <details>
 <summary>Introduction to Express</summary>
 
 ### 10. Introduction to Express
 - Express: Fast, unopinionated, minimalist web framework for Node.js (from expressjs.com)ز
 - The `package-lock.json` file is automatically generated by npm which stores information about the exact tree that was generated when you install other Node modules 

 ### 11. Exercise (Video): Introduction to Express
 - Create a folder named node-express in the NodeJS folder and move to that folder.
 - Copy the public folder from node-http to this folder.
 - At the prompt, type the following to initialize a package.json file in the node-express folder: `$ npm init`
 - `$ npm install express` -> install the Express framework
 - Create a file named `.gitignore` and add the following to it: `node_modules`
 - Create a file named `index.js` and add:

 ```
 const express = require('express'),
      http = require('http');

 const hostname = 'localhost';
 const port = 3000;

 const app = express();

 app.use((req, res, next) => {
   console.log(req.headers);
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end('<html><body><h1>This is an Express Server</h1></body></html>');

 });

 const server = http.createServer(app);

 server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });
 ```
 - Start the server by typing: `$ npm start`.
 - `$ npm install morgan` -> Install morgan.
 - Update `index.js` :

 ```
 . . .

 const morgan = require('morgan');

 . . .

 app.use(morgan('dev'));

 app.use(express.static(__dirname + '/public'));

 . . .
 ```
 - Start the server.

 ### 12. Brief Representational State Transfer (REST)
 - Web	Services: A	system	designed	to	support	interoperability	of	systems	connected	over	a	network.
  - Service	oriented	architecture	(SOA)
  – A	standardized	way	of	integrating	web-based	applications	using	open	standards	operating	over	the	Internet.
 - Two	common	approaches	used	in	practice:
  – SOAP	(Simple	Object	Access	Protocol)	based	services
  – REST	(Representational	State	Transfer)
 - Representational	State	Transfer	(REST): A	style	of	software	architecture	for	distributed	hypermedia	systems	such	as	the	World	Wide	Web.
 - Nouns: specifically refer to resources and these resources are usually identified by their URLs and these are unconstrained.
 - Verbs: are constraint and these specify the actions to be done on the resources.
 - Representations: When the information needs to be conveyed from the server to the client or from the client to the server, how you encode the information.
 - Corresponding	to	the	CRUD	operations:
  - HTTP	GET -> READ
  - HTTP	POST	-> CREATE
  - HTTP	PUT	-> UPDATE
  - HTTP	DELETE	-> DELETE

 ### 13. Express Router
 - Express's support for various matters like app.all, app.get, put, post, and delete, and how these methods can be used to construct a REST API server.
 - Express also supports defining the endpoints with parameters -> ` /dishes/:id`.
 - Verb methods can all be chained together into the route in defining the code for our application.

 ### 14. Exercise (Video): Express Router
 - You will continue in the node-express folder and modify the server in this exercise.
 - `$ npm install body-parser@1.18.3` -> Install body-parser.
 - whenever you need to use a middleware, you'll say, `app.use()`.
 - Update `index.js` :

 ```
 . . .

 const bodyParser = require('body-parser');

 . . .

 app.use(bodyParser.json());

 app.all('/dishes', (req,res,next) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   next();
 });

 app.get('/dishes', (req,res,next) => {
     res.end('Will send all the dishes to you!');
 });

 app.post('/dishes', (req, res, next) => {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
 });

 app.put('/dishes', (req, res, next) => {
   res.statusCode = 403;
   res.end('PUT operation not supported on /dishes');
 });

 app.delete('/dishes', (req, res, next) => {
     res.end('Deleting all dishes');
 });

 app.get('/dishes/:dishId', (req,res,next) => {
     res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
 });

 app.post('/dishes/:dishId', (req, res, next) => {
   res.statusCode = 403;
   res.end('POST operation not supported on /dishes/'+ req.params.dishId);
 });

 app.put('/dishes/:dishId', (req, res, next) => {
   res.write('Updating the dish: ' + req.params.dishId + '\n');
   res.end('Will update the dish: ' + req.body.name + 
         ' with details: ' + req.body.description);
 });

 app.delete('/dishes/:dishId', (req, res, next) => {
     res.end('Deleting dish: ' + req.params.dishId);
 });

 . . .
 ```

 - `403` means their operation not supported.
 - `res.write()` can be used to add a line to the reply message.
 - Create a new folder named `routes` in the `node-express` folder.
 - Create a new file named `dishRouter.js` in the routes folder and add the following code to it:

 ```
 const express = require('express');
 const bodyParser = require('body-parser');

 const dishRouter = express.Router();

 dishRouter.use(bodyParser.json());

 dishRouter.route('/')
 .all((req,res,next) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     next();
 })
 .get((req,res,next) => {
     res.end('Will send all the dishes to you!');
 })
 .post((req, res, next) => {
     res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
 })
 .put((req, res, next) => {
     res.statusCode = 403;
     res.end('PUT operation not supported on /dishes');
 })
 .delete((req, res, next) => {
     res.end('Deleting all dishes');
 });

 module.exports = dishRouter;
 ```
 - Update `index.js` :

 ```
 . . .


 const dishRouter = require('./routes/dishRouter');

 app.use('/dishes', dishRouter);

 . . .
 ```

 ### Additional Resources
 - [Express](http://expressjs.com/).
 - [Connect](https://github.com/senchalabs/connect).
 - [Understanding Express](http://evanhahn.com/understanding-express/).
 - [A short guide to Connect Middleware](https://stephensugden.com/middleware_guide/)

 </details>
 
 <details>
 <summary>Assignment 1</summary>
 
 In this assignment you will continue the exploration of Node modules, Express and the REST API. You will design two new express routers to support REST API end points for promotions and leadership.
  
 </details>
  
 ### week 2 :
 
 <details>
 <summary>Express Generator</summary>
 
 ### 1. Express Generator
 - Express	Generator: Quick	scaffolding	tool	to	generate	an	Express	application	skeleton

 ### 2. Exercise (Video): Express Generator
 - `$ npm install express-generator@4.16.0 -g` -> Install express-generator.
 - `$ express conFusionServer` -> To scaffold out an Express application.
 - `$ cd conFusionServer` -> Move to the `conFusionServer` folder.
 - `$ npm install` -> install all the Node modules.

 ### Additional Resources
 - [Express application generator](http://expressjs.com/en/starter/generator.html)
  
 </details>
 
 <details>
 <summary>Introduction to MongoDB</summary>
 
 ### 3. Introduction to MongoDB
 - Databases	are	used	to	store	structured	information.
 - SQL	(structured	query	language)	based	relational	databases	have	been	very	popular	means	of	storing	data
 - NoSQL	databases	are	increasingly	becoming	popular	to	address	some	challenges	encountered	with	SQL	databases.
 - Four	broad	categories:
  – Document	databases	(e.g.,	MongoDB)	
  – Key-value	databases	(e.g.,	Redis)	
  – Column-family	databases	(e.g.,	Cassandra)	
  – Graph	databases	(e.g.,	Neo4J)
 - Document	Databases:
  - Document:	A	self-contained	piece	of	information
  - Collection:	collection	of	documents
  - Database:	A	set	of	collections

 ### 4. Exercise (Video): Introduction to MongoDB
 - Go to [mongodb](http://www.mongodb.org), then download and install MongoDB.
 - After installing mongodb, Create a folder named `mongodb`.
 - `$ mongod` -> start the MongoDB server.
 - `$ mongo` -> start the mongo REPL shell.
 - The Mongo REPL shell will start running and give you a prompt to issue commands to the MongoDB server:

 ```
  $ db
  $ use conFusion
  $ db
  $ db.help()
 ```
 - `$ db.dishes.insert({ name: "Uthappizza", description: "Test" })` -> create a collection named dishes, and insert a new dish document in the collection.
 - If this collection already exists, then this will access the dishes collection. If it doesn't exist, then it'll create the dishes collection at this point.
 - `$ db.dishes.find().pretty();` -> Then to print out the dishes in the collection.
 - Next, we will learn the information encoded into the ObjectId:
 ```
   var id = new ObjectId();
   id.getTimestamp();
 ```

 ### Additional Resources
 - [MongoDB documentation](https://docs.mongodb.com/manual/).
 - [MongoDB Installation](https://docs.mongodb.com/manual/installation/).
 - [MongoDB Installing Community Edition](https://docs.mongodb.com/manual/administration/install-community/).
 - [The mongo Shell](https://docs.mongodb.com/manual/mongo/).
  
 </details>
  
 <details>
 <summary>Node and MongoDB</summary>
 
 ### 5. Node and MongoDB
 - Provides	a	high-level	API	for	a	Node	application	to	interact	with	the	MongoDB Server

 ### 6. Exercise (Video): Node and MongoDB Part 1
 - Create a new folder named `node-mongo` and move into the folder.
 - `$ npm init` -> initialize a `package.json` file.
 - Create a new file named `index.js`:

 ```
 const MongoClient = require('mongodb').MongoClient;
 const assert = require('assert');

 const url = 'mongodb://localhost:27017/';
 const dbname = 'conFusion';

 MongoClient.connect(url, (err, client) => {

     assert.equal(err,null);

     console.log('Connected correctly to server');

     const db = client.db(dbname);
     const collection = db.collection("dishes");
     collection.insertOne({"name": "Uthappizza", "description": "test"},
     (err, result) => {
         assert.equal(err,null);

         console.log("After Insert:\n");
         console.log(result.ops);

         collection.find({}).toArray((err, docs) => {
             assert.equal(err,null);

             console.log("Found:\n");
             console.log(docs);

             db.dropCollection("dishes", (err, result) => {
                 assert.equal(err,null);

                 client.close();
             });
         });
     });

 });
 ```
 - Make sure that your MongoDB server is up and running.
 - `$ npm start` -> Start the server and see the result.

 ### 7. Exercise (Video): Node and MongoDB Part 2
 - Create a new file named `operations.js` that contains a few MongoDB operations and add the following code:

 ```
 const assert = require('assert');

 exports.insertDocument = (db, document, collection, callback) => {
     const coll = db.collection(collection);
     coll.insert(document, (err, result) => {
         assert.equal(err, null);
         console.log("Inserted " + result.result.n +
             " documents into the collection " + collection);
         callback(result);
     });
 };

 exports.findDocuments = (db, collection, callback) => {
     const coll = db.collection(collection);
     coll.find({}).toArray((err, docs) => {
         assert.equal(err, null);
         callback(docs);        
     });
 };

 exports.removeDocument = (db, document, collection, callback) => {
     const coll = db.collection(collection);
     coll.deleteOne(document, (err, result) => {
         assert.equal(err, null);
         console.log("Removed the document ", document);
         callback(result);        
     });
 };

 exports.updateDocument = (db, document, update, collection, callback) => {
     const coll = db.collection(collection);
     coll.updateOne(document, { $set: update }, null, (err, result) => {
         assert.equal(err, null);
         console.log("Updated the document with ", update);
         callback(result);        
     });
 };
 ```
 - Update the file named index.js as follows:

 ```
 . . .

 const dboper = require('./operations');

 . . .

     dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
         "dishes", (result) => {
             console.log("Insert Document:\n", result.ops);

             dboper.findDocuments(db, "dishes", (docs) => {
                 console.log("Found Documents:\n", docs);

                 dboper.updateDocument(db, { name: "Vadonut" },
                     { description: "Updated Test" }, "dishes",
                     (result) => {
                         console.log("Updated Document:\n", result.result);

                         dboper.findDocuments(db, "dishes", (docs) => {
                             console.log("Found Updated Documents:\n", docs);

                             db.dropCollection("dishes", (result) => {
                                 console.log("Dropped Collection: ", result);

                                 client.close();
                             });
                         });
                     });
             });
     });

 . . .
 ```
 - `$ npm start` -> Start the server and see the result.

 ### 8. Callback Hell and Promises
 - Heavily	nested	callback	code (callback hell):
  – Results	from	our	tendency	to	write	code	top	to bottom
  – Pyramid	of	doom
 - Promise	is	a	mechanism	that	supports	asynchronous	computation

 ### 9. Exercise (Video): Callback Hell and Promises
 - Update `operations.js` as follows:

 ```
 const assert = require('assert');

 exports.insertDocument = (db, document, collection, callback) => {
     const coll = db.collection(collection);
     return coll.insert(document);
 };

 exports.findDocuments = (db, collection, callback) => {
     const coll = db.collection(collection);
     return coll.find({}).toArray();
 };

 exports.removeDocument = (db, document, collection, callback) => {
     const coll = db.collection(collection);
     return coll.deleteOne(document);
 };

 exports.updateDocument = (db, document, update, collection, callback) => {
     const coll = db.collection(collection);
     return coll.updateOne(document, { $set: update }, null);
 };
 ```
 - Next open `index.js` and update it as follows:

 ```
 . . .

 MongoClient.connect(url).then((client) => {

     console.log('Connected correctly to server');
     const db = client.db(dbname);

     dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
         "dishes")
         .then((result) => {
             console.log("Insert Document:\n", result.ops);

             return dboper.findDocuments(db, "dishes");
         })
         .then((docs) => {
             console.log("Found Documents:\n", docs);

             return dboper.updateDocument(db, { name: "Vadonut" },
                     { description: "Updated Test" }, "dishes");

         })
         .then((result) => {
             console.log("Updated Document:\n", result.result);

             return dboper.findDocuments(db, "dishes");
         })
         .then((docs) => {
             console.log("Found Updated Documents:\n", docs);

             return db.dropCollection("dishes");
         })
         .then((result) => {
             console.log("Dropped Collection: ", result);

             return client.close();
         })
         .catch((err) => console.log(err));

 })
 .catch((err) => console.log(err));
 ```

 ### Additional Resources
 <ul>
   <li>
    <a href="http://callbackhell.com/" target="_blank" rel="noopener nofollow">
       Callback Hell
     </a>
   </li>
   <li>
     <a href="http://bluebirdjs.com/docs/getting-started.html" target="_blank" rel="noopener nofollow" >
       Bluebird
     </a>
   </li>
   <li>
     <a href="https://alexperry.io/node/2015/03/25/promises-in-node.html" target="_blank" rel="noopener nofollow">
       Bluebird – Promises in NodeJS
     </a>
   </li>
   <li>
     <a href="https://strongloop.com/strongblog/node-js-callback-hell-promises-generators/" target="_blank" rel="noopener nofollow">
       Managing Node.js Callback Hell with Promises, Generators and Other
       Approaches
     </a>
   </li>
   <li>
     <a href="https://medium.com/@js_tut/the-great-escape-from-callback-hell-3006fa2c82e" target="_blank" rel="noopener nofollow" >
       The Great Escape from Callback Hell
     </a>
   </li>
 </ul>
  
 </details>
   
 <details>
 <summary>Mongoose ODM</summary>
 
 ### 10. Mongoose ODM
 - MongoDB driver: enables our node application to communicate with a MongoDB server.
 - Mongoose node module: enables us to define a schema and a structure for our documents that are stored in MongoDB database, and strictly enforces the structure.
 - MongoDB stores	data	in	the	form	of	documents.
 - MongoDB relies on the developer to enforce the structure on the documents, and gives the complete responsibility to the developer to make sure that documents of the correct structure are added and maintained in the various collections.
 - The Mongoose node module imposes a standardized structure for the documents that are stored in a particular collection.
 - Mongoose	(ODM)
  – Object	Data	Model	
  – Object	Document	Mapping
  – Object	relational	mapping	(ORM)
 - Mongoose automatically has a built-in mechanism that enables it to construct the *plurals* of standard English words. So, if you say dish, it will construct dishes.

 ### 11. Exercise (Video): Mongoose ODM Part 1
 - Create a folder named `node-mongoose` and move into the folder.
 - `$ npm init` -> initialize a `package.json` file in the `node-mongoose` folder.
 - `"start": "node index"` -> Add this line into scripts object in `package.json` file.
 - `$ npm install mongoose@5.1.7` -> Install Mongoose.
 - Create a sub-folder named `models` in the `node-mongoose` folder. Move to this folder.
 - Create a file named `dishes.js` and add the following code to create a Mongoose schema:

 ```
 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const dishSchema = new Schema({
     name: {
         type: String,
         required: true,
         unique: true
     },
     description: {
         type: String,
         required: true
     }
 },{
     timestamps: true
 });

 var Dishes = mongoose.model('Dish', dishSchema);

 module.exports = Dishes;
 ```
 
 - `timestamps: true` -> will automatically add the created at and updated at, two timestamps into each document that is stored in our application and it'll automatically update these values.
 - Move to the `node-mongoose` folder and create a file named `index.js` and add the following code:

 ```
 const mongoose = require('mongoose');

 const Dishes = require('./models/dishes');

 const url = 'mongodb://localhost:27017/conFusion';
 const connect = mongoose.connect(url);

 connect.then((db) => {

     console.log('Connected correctly to server');

     var newDish = Dishes({
         name: 'Uthappizza',
         description: 'test'
     });

     newDish.save()
         .then((dish) => {
             console.log(dish);

             return Dishes.find({});
         })
         .then((dishes) => {
             console.log(dishes);

             return Dishes.remove({});
         })
         .then(() => {
             return mongoose.connection.close();
         })
         .catch((err) => {
             console.log(err);
         });

 });
 ```
 
 - Make sure that your MongoDB server is up and running. 
 - `$ npm start` -> to start the server and see the result.
 - Create a `.gitignore` file with the contents "node_modules"

 ### 12. Exercise (Video): Mongoose ODM Part 2
 - Now, update index.js as follows:

 ```
 . . .

     Dishes.create({
         name: 'Uthapizza',
         description: 'Test'
     })
     .then((dish) => {
         console.log(dish);

         return Dishes.find({}).exec();
     })
     .then((dishes) => {
         console.log(dishes);

         return Dishes.remove({});
     })
     .then(() => {
         return mongoose.connection.close();
     })
     .catch((err) => {
         console.log(err);
     });

 . . .
 ```
 - Run the server and observe the result.
 - Update `dishes.js` in the models folder as follows:

 ```
 . . .

 var commentSchema = new Schema({
     rating:  {
         type: Number,
         min: 1,
         max: 5,
         required: true
     },
     comment:  {
         type: String,
         required: true
     },
     author:  {
         type: String,
         required: true
     }
 }, {
     timestamps: true
 });

 var dishSchema = new Schema({
     name: {
         type: String,
         required: true,
         unique: true
     },
     description: {
         type: String,
         required: true
     },
     comments:[commentSchema]
 }, {
     timestamps: true
 });

 . . .
 ```
 - Update `index.js` as follows:

 ```
 . . .

     Dishes.create({
         name: 'Uthappizza',
         description: 'test'
     })
     .then((dish) => {
         console.log(dish);

         return Dishes.findByIdAndUpdate(dish._id, {
             $set: { description: 'Updated test'}
         },{ 
             new: true 
         })
         .exec();
     })
     .then((dish) => {
         console.log(dish);

         dish.comments.push({
             rating: 5,
             comment: 'I\'m getting a sinking feeling!',
             author: 'Leonardo di Carpaccio'
         });

         return dish.save();
     })
     .then((dish) => {
         console.log(dish);

         return Dishes.remove({});
     })
     .then(() => {
         return mongoose.connection.close();
     })
     .catch((err) => {
         console.log(err);
     });

 . . .
 ```

 ### Additional Resources
 <ul>
   <li><a href="http://mongoosejs.com/" target="_blank" rel="noopener nofollow">Mongoose</a></li>
   <li><a href="http://mongoosejs.com/docs/guide.html" target="_blank" rel="noopener nofollow">Mongoose Documentation</a></li>
   <li><a href="http://mongoosejs.com/docs/guide.html" target="_blank" rel="noopener nofollow">Mongoose Schemas</a></li>
   <li><a href="http://mongoosejs.com/docs/models.html" target="_blank" rel="noopener nofollow">Mongoose Models</a></li>
   <li><a href="http://mongoosejs.com/docs/subdocs.html" target="_blank" rel="noopener nofollow">Mongoose Sub-documents</a></li>
   <li><a href="https://www.npmjs.com/package/mongoose-currency" target="_blank" rel="noopener nofollow">Mongoose-currency</a></li>
 </ul>

  
 </details>
 
 <details>
 <summary>REST API with Express, MongoDB and Mongoose</summary>
 
 ### 13. REST API with Express, MongoDB and Mongoose
 - Every	incoming	request	needs	to	be	decoded	to	decide	the	nature	of	the	request:
  – GET,	PUT,	POST,	DELETE
  – Resource	affected
  – Data	in	body	of	request
 - Translate	request	to	an	equivalent	database	operation

 ### 14. Exercise (Video): REST API with Express, MongoDB and Mongoose Part 1
 - Go to the conFusionServer folder where you had developed the REST API server using Express generator.
 - Copy the models folder from the node-mongoose folder to the conFusionServer folder.
 - `$ npm i mongoose mongoose-currency` ->  install bluebird, mongoose and mongoose-currency.
 - Open app.js file and add in the code to connect to the MongoDB server:

 ```
 . . .

 const mongoose = require('mongoose');

 const Dishes = require('./models/dishes');

 const url = 'mongodb://localhost:27017/conFusion';
 const connect = mongoose.connect(url);

 connect.then((db) => {
     console.log("Connected correctly to server");
 }, (err) => { console.log(err); });

 . . .
 ```
 
 - Next open dishes.js in the models folder and update it:

 ```
 . . .

 require('mongoose-currency').loadType(mongoose);
 const Currency = mongoose.Types.Currency;

 . . .

 const dishSchema = new Schema({
     name: {
         type: String,
         required: true,
         unique: true
     },
     description: {
         type: String,
         required: true
     },
     image: {
         type: String,
         required: true
     },
     category: {
         type: String,
         required: true
     },
     label: {
         type: String,
         default: ''
     },
     price: {
         type: Currency,
         required: true,
         min: 0
     },
     featured: {
         type: Boolean,
         default:false      
     },
     comments:[commentSchema]
 }, {
     timestamps: true
 });

 . . .
 ```
 
 - Now open dishRouter.js and update it:

 ```
 const express = require('express');
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');

 const Dishes = require('../models/dishes');

 const dishRouter = express.Router();

 dishRouter.use(bodyParser.json());

 dishRouter.route('/')
 .get((req,res,next) => {
     Dishes.find({})
     .then((dishes) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(dishes);
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .post((req, res, next) => {
     Dishes.create(req.body)
     .then((dish) => {
         console.log('Dish Created ', dish);
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(dish);
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .put((req, res, next) => {
     res.statusCode = 403;
     res.end('PUT operation not supported on /dishes');
 })
 .delete((req, res, next) => {
     Dishes.remove({})
     .then((resp) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(resp);
     }, (err) => next(err))
     .catch((err) => next(err));    
 });

 dishRouter.route('/:dishId')
 .get((req,res,next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(dish);
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .post((req, res, next) => {
     res.statusCode = 403;
     res.end('POST operation not supported on /dishes/'+ req.params.dishId);
 })
 .put((req, res, next) => {
     Dishes.findByIdAndUpdate(req.params.dishId, {
         $set: req.body
     }, { new: true })
     .then((dish) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(dish);
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .delete((req, res, next) => {
     Dishes.findByIdAndRemove(req.params.dishId)
     .then((resp) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(resp);
     }, (err) => next(err))
     .catch((err) => next(err));
 });

 module.exports = dishRouter;
 ```

 - when you call res.json and supply the value and then it will simply take the parameter that you give here and then send it back as a json response.

 ### 15. Exercise (Video): REST API with Express, MongoDB and Mongoose Part 2
 - Add the following code to dishRouter.js to handle comments:

 ```
 . . .

 dishRouter.route('/:dishId/comments')
 .get((req,res,next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null) {
             res.statusCode = 200;
             res.setHeader('Content-Type', 'application/json');
             res.json(dish.comments);
         }
         else {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .post((req, res, next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null) {
             dish.comments.push(req.body);
             dish.save()
             .then((dish) => {
                 res.statusCode = 200;
                 res.setHeader('Content-Type', 'application/json');
                 res.json(dish);                
             }, (err) => next(err));
         }
         else {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .put((req, res, next) => {
     res.statusCode = 403;
     res.end('PUT operation not supported on /dishes/'
         + req.params.dishId + '/comments');
 })
 .delete((req, res, next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null) {
             for (var i = (dish.comments.length -1); i >= 0; i--) {
                 dish.comments.id(dish.comments[i]._id).remove();
             }
             dish.save()
             .then((dish) => {
                 res.statusCode = 200;
                 res.setHeader('Content-Type', 'application/json');
                 res.json(dish);                
             }, (err) => next(err));
         }
         else {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
     }, (err) => next(err))
     .catch((err) => next(err));    
 });

 dishRouter.route('/:dishId/comments/:commentId')
 .get((req,res,next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null && dish.comments.id(req.params.commentId) != null) {
             res.statusCode = 200;
             res.setHeader('Content-Type', 'application/json');
             res.json(dish.comments.id(req.params.commentId));
         }
         else if (dish == null) {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
         else {
             err = new Error('Comment ' + req.params.commentId + ' not found');
             err.status = 404;
             return next(err);            
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .post((req, res, next) => {
     res.statusCode = 403;
     res.end('POST operation not supported on /dishes/'+ req.params.dishId
         + '/comments/' + req.params.commentId);
 })
 .put((req, res, next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null && dish.comments.id(req.params.commentId) != null) {
             if (req.body.rating) {
                 dish.comments.id(req.params.commentId).rating = req.body.rating;
             }
             if (req.body.comment) {
                 dish.comments.id(req.params.commentId).comment = req.body.comment;                
             }
             dish.save()
             .then((dish) => {
                 res.statusCode = 200;
                 res.setHeader('Content-Type', 'application/json');
                 res.json(dish);                
             }, (err) => next(err));
         }
         else if (dish == null) {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
         else {
             err = new Error('Comment ' + req.params.commentId + ' not found');
             err.status = 404;
             return next(err);            
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .delete((req, res, next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null && dish.comments.id(req.params.commentId) != null) {
             dish.comments.id(req.params.commentId).remove();
             dish.save()
             .then((dish) => {
                 res.statusCode = 200;
                 res.setHeader('Content-Type', 'application/json');
                 res.json(dish);                
             }, (err) => next(err));
         }
         else if (dish == null) {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
         else {
             err = new Error('Comment ' + req.params.commentId + ' not found');
             err.status = 404;
             return next(err);            
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 });

 . . .
 ```

 </details>
  
 <details>
 <summary>Assignment 2</summary>
 
 - In this assignment, you will continue your journey with MongoDB and Mongoose. You will then create two new schemas for promotions and leadership, and then extend the Express REST API server to support the /promotions and the /leaders REST API end points.
 
  
 </details>
 
 ### week 3:
 
 <details>
 <summary>Basic Authentication</summary>
 
 ### 1. Basic Authentication
 - Basic authentication in HTTP is a very simple mechanism, which will ask the user for a user name and password to be submitted with a request.

 ### 2. Exercise: Basic Authentication
 - Open the `app.js` file and update it: 
 
 ```
 . . .

 function auth (req, res, next) {
   console.log(req.headers);
   var authHeader = req.headers.authorization;
   if (!authHeader) {
       var err = new Error('You are not authenticated!');
       res.setHeader('WWW-Authenticate', 'Basic');
       err.status = 401;
       next(err);
       return;
   }

   var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
   var user = auth[0];
   var pass = auth[1];
   if (user == 'admin' && pass == 'password') {
       next(); // authorized
   } else {
       var err = new Error('You are not authenticated!');
       res.setHeader('WWW-Authenticate', 'Basic');      
       err.status = 401;
       next(err);
   }
 }

 app.use(auth);

 . . .
 ```

 ### Additional Resources
 - [Basic Access Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)


 </details>
 
 <details>
 <summary>Cookies, Tea and err ... Express Sessions</summary>
 
 ### 3. Cookies, Tea and err ... Express Sessions
 - In basic authentication the client will have to explicitly keep adding in the authorization field containing the username and password for every request that the client sends to the server side.
 - HTTP cookies are small piece of data that is sent from a web server and is stored on the client side. 

 ### 4. Exercise: Using Cookies
 - We're going to modify this authorization middleware to make use of cookies instead of the authorization header.
 - `$ npm install cookie-parser@1.4.3 ` -> The cookie-parser Express middleware is already included in the Express REST API application. If you need to add Cookie parser middleware then you can install the NPM module.
 - Update `app.js` :

 ```
 . . .

 app.use(cookieParser('12345-67890-09876-54321'));

 function auth (req, res, next) {

   if (!req.signedCookies.user) {
     var authHeader = req.headers.authorization;
     if (!authHeader) {
         var err = new Error('You are not authenticated!');
         res.setHeader('WWW-Authenticate', 'Basic');              
         err.status = 401;
         next(err);
         return;
     }
     var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
     var user = auth[0];
     var pass = auth[1];
     if (user == 'admin' && pass == 'password') {
         res.cookie('user','admin',{signed: true});
         next(); // authorized
     } else {
         var err = new Error('You are not authenticated!');
         res.setHeader('WWW-Authenticate', 'Basic');              
         err.status = 401;
         next(err);
     }
   }
   else {
       if (req.signedCookies.user === 'admin') {
           next();
       }
       else {
           var err = new Error('You are not authenticated!');
           err.status = 401;
           next(err);
       }
   }
 }

 . . .
 ```

 ### 5. Exercise : Express Sessions Part 1
 - `$ npm install express-session session-file-store` -> install express-session and session-file-store Node modules.
 - Update `app.js` as:

 ```
 . . .

 var session = require('express-session');
 var FileStore = require('session-file-store')(session);

 . . .

 app.use(session({
   name: 'session-id',
   secret: '12345-67890-09876-54321',
   saveUninitialized: false,
   resave: false,
   store: new FileStore()
 }));

 function auth (req, res, next) {
     console.log(req.session);

     if (!req.session.user) {
         var authHeader = req.headers.authorization;
         if (!authHeader) {
             var err = new Error('You are not authenticated!');
             res.setHeader('WWW-Authenticate', 'Basic');                        
             err.status = 401;
             next(err);
             return;
         }
         var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
         var user = auth[0];
         var pass = auth[1];
         if (user == 'admin' && pass == 'password') {
             req.session.user = 'admin';
             next(); // authorized
         } else {
             var err = new Error('You are not authenticated!');
             res.setHeader('WWW-Authenticate', 'Basic');
             err.status = 401;
             next(err);
         }
     }
     else {
         if (req.session.user === 'admin') {
             console.log('req.session: ',req.session);
             next();
         }
         else {
             var err = new Error('You are not authenticated!');
             err.status = 401;
             next(err);
         }
     }
 }

 . . .
 ```

 ### 6. Exercise : Express Sessions Part 2
 - Add a new Mongoose model for users in the file named `user.js` in the `models` folder:

 ```
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var User = new Schema({
     username: {
         type: String,
         required: true,
         unique: true
     },
     password:  {
         type: String,
         required: true
     },
     admin:   {
         type: Boolean,
         default: false
     }
 });

 module.exports = mongoose.model('User', User);
 ```
 - Update `users.js` in the `routes` folder to support user registration, login and logout:

 ```
 . . .

 const bodyParser = require('body-parser');
 var User = require('../models/user');

 router.use(bodyParser.json());

 . . .

 router.post('/signup', (req, res, next) => {
   User.findOne({username: req.body.username})
   .then((user) => {
     if(user != null) {
       var err = new Error('User ' + req.body.username + ' already exists!');
       err.status = 403;
       next(err);
     }
     else {
       return User.create({
         username: req.body.username,
         password: req.body.password});
     }
   })
   .then((user) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'application/json');
     res.json({status: 'Registration Successful!', user: user});
   }, (err) => next(err))
   .catch((err) => next(err));
 });

 router.post('/login', (req, res, next) => {

   if(!req.session.user) {
     var authHeader = req.headers.authorization;

     if (!authHeader) {
       var err = new Error('You are not authenticated!');
       res.setHeader('WWW-Authenticate', 'Basic');
       err.status = 401;
       return next(err);
     }

     var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
     var username = auth[0];
     var password = auth[1];

     User.findOne({username: username})
     .then((user) => {
       if (user === null) {
         var err = new Error('User ' + username + ' does not exist!');
         err.status = 403;
         return next(err);
       }
       else if (user.password !== password) {
         var err = new Error('Your password is incorrect!');
         err.status = 403;
         return next(err);
       }
       else if (user.username === username && user.password === password) {
         req.session.user = 'authenticated';
         res.statusCode = 200;
         res.setHeader('Content-Type', 'text/plain');
         res.end('You are authenticated!')
       }
     })
     .catch((err) => next(err));
   }
   else {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('You are already authenticated!');
   }
 })

 router.get('/logout', (req, res) => {
   if (req.session) {
     req.session.destroy();
     res.clearCookie('session-id');
     res.redirect('/');
   }
   else {
     var err = new Error('You are not logged in!');
     err.status = 403;
     next(err);
   }
 });

 . . .
 ```
 - Next, update `app.js` as follows to use the user authentication support:

 ```
 . . .

 app.use('/', indexRouter);
 app.use('/users', usersRouter);

 function auth (req, res, next) {
     console.log(req.session);

   if(!req.session.user) {
       var err = new Error('You are not authenticated!');
       err.status = 403;
       return next(err);
   }
   else {
     if (req.session.user === 'authenticated') {
       next();
     }
     else {
       var err = new Error('You are not authenticated!');
       err.status = 403;
       return next(err);
     }
   }
 }

 . . .
 ```

 ### Additional Resources
 - [express-session](https://github.com/expressjs/session)
 - [session-file-store](https://www.npmjs.com/package/session-file-store)
  
 </details>
 
 <details>
 <summary>User Authentication with Passport</summary>
 
 ### 7. Passport
 - Passport: Authentication	middleware	for	Node.js.
 - Passport-Local: Passport	strategy	for	authenticating	a	user	with	a	username	and	password.
 - Passport-Local-Mongoose: Mongoose	plugin	to	simplify	building	username	and	password	login.
 - In cryptography, the salt is a random string that is used for performing the hashing operation on the password for storing. 

 ### 8. Exercise : User Authentication with Passport
 - `$ npm install passport passport-local passport-local-mongoose` -> Install the Passport and related Node modules.
 - In the `models` folder, update `user.js` :

 ```
 . . .

 var passportLocalMongoose = require('passport-local-mongoose');

 var User = new Schema({
     admin:   {
         type: Boolean,
         default: false
     }
 });

 User.plugin(passportLocalMongoose);

 . . .
 ```
 - Add a new file named `authenticate.js` to the project folder:

 ```
 var passport = require('passport');
 var LocalStrategy = require('passport-local').Strategy;
 var User = require('./models/user');

 passport.use(new LocalStrategy(User.authenticate()));
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());
 ```
 - Open `users.js` file in the `routes` folder:

 ```
 . . .

 var passport = require('passport');

 . . .


 router.post('/signup', (req, res, next) => {
   User.register(new User({username: req.body.username}), 
     req.body.password, (err, user) => {
     if(err) {
       res.statusCode = 500;
       res.setHeader('Content-Type', 'application/json');
       res.json({err: err});
     }
     else {
       passport.authenticate('local')(req, res, () => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json({success: true, status: 'Registration Successful!'});
       });
     }
   });
 });

 router.post('/login', passport.authenticate('local'), (req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   res.json({success: true, status: 'You are successfully logged in!'});
 });

 . . .
 ```
 - Finally, update `app.js` :

 ```
 . . .

 var passport = require('passport');
 var authenticate = require('./authenticate');

 . . .

 app.use(passport.initialize());
 app.use(passport.session());

 . . .

 function auth (req, res, next) {
     console.log(req.user);

     if (!req.user) {
       var err = new Error('You are not authenticated!');
       err.status = 403;
       next(err);
     }
     else {
           next();
     }
 }

 . . .
 ```

 ### 9. Token Based Authentication
 - Cookies	set	on	the	client	side	by	the	server.
 - Session	authentication	becomes	a	problem	when	we	need	stateless	servers	and	scalability.
 - JSON Web Token, is a very simple way of encoding information in a token then pass it to the client site.

 ### 10. Exercise: User Authentication with Passport and JSON Web Token
 - `$ npm install passport-jwt jsonwebtoken` -> Install the passport-jwt and the jsonwebtoken modules.
 - Create a new file named `config.js` :

 ```
 module.exports = {
     'secretKey': '12345-67890-09876-54321',
     'mongoUrl' : 'mongodb://localhost:27017/conFusion'
 }
 ```
 - Update `authenticate.js` :

 ```
 . . .

 var JwtStrategy = require('passport-jwt').Strategy;
 var ExtractJwt = require('passport-jwt').ExtractJwt;
 var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

 var config = require('./config.js');

 . . .


 exports.getToken = function(user) {
     return jwt.sign(user, config.secretKey,
         {expiresIn: 3600});
 };

 var opts = {};
 opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
 opts.secretOrKey = config.secretKey;

 exports.jwtPassport = passport.use(new JwtStrategy(opts,
     (jwt_payload, done) => {
         console.log("JWT payload: ", jwt_payload);
         User.findOne({_id: jwt_payload._id}, (err, user) => {
             if (err) {
                 return done(err, false);
             }
             else if (user) {
                 return done(null, user);
             }
             else {
                 return done(null, false);
             }
         });
     }));

 exports.verifyUser = passport.authenticate('jwt', {session: false});
 ```
 - Open users.js file in the routes folder and update the code:

 ```
 . . .

 var authenticate = require('../authenticate');

 . . .

 router.post('/login', passport.authenticate('local'), (req, res) => {

   var token = authenticate.getToken({_id: req.user._id});
   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   res.json({success: true, token: token, status: 'You are successfully logged in!'});
 });

 . . .
 ```
 - Update app.js to remove the auth function and the app.use(auth), and update as follows:

 ```
 . . .

 var config = require('./config');


 . . .

 const url = config.mongoUrl;

 . . .
 ```
 - Open dishRouter.js and updated the code for the '/' route:

 ```
 . . .

 var authenticate = require('../authenticate');

 . . .


 dishRouter.route('/')


 .post(authenticate.verifyUser, (req, res, next) => {

    . . .

 })

 .put(authenticate.verifyUser, (req, res, next) => {

    . . .

 })

 .delete(authenticate.verifyUser, (req, res, next) => {

    . . .

 });


 dishRouter.route('/:dishId')


 .post(authenticate.verifyUser, (req, res, next) => {

    . . .

 })

 .put(authenticate.verifyUser, (req, res, next) => {

    . . .

 })

 .delete(authenticate.verifyUser, (req, res, next) => {

    . . .

 });


 dishRouter.route('/:dishId/comments')


 .post(authenticate.verifyUser, (req, res, next) => {

    . . .

 })

 .put(authenticate.verifyUser, (req, res, next) => {

    . . .

 })

 .delete(authenticate.verifyUser, (req, res, next) => {

    . . .

 });


 dishRouter.route('/:dishId/comments/:commentId')


 .post(authenticate.verifyUser, (req, res, next) => {

    . . .

 })

 .put(authenticate.verifyUser, (req, res, next) => {

    . . .

 })

 .delete(authenticate.verifyUser, (req, res, next) => {

    . . .

 });


 . . .
 ```
 
 ### Additional Resources
 - [User Authentication With Passport and Express 4](https://mherman.org/blog/local-authentication-with-passport-and-express-4/)
 - [Authenticate a Node ES6 API with JSON Web Tokens](https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens)
 - [Token Based Authentication for Single Page Apps (SPAs)](https://stormpath.com/blog/token-auth-spa)
 - [The Ins and Outs of Token Based Authentication](https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication)
 - [Express, Passport and JSON Web Token (jwt) Authentication for Beginners](https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/)
  
 </details>
 
 <details>
 <summary>Mongoose Population</summary>
 
 ### 11. Mongoose Population
 - Population	is	the	process	of	automatically	replacing	specified	paths	within	a	document	with	documents	from	another	collection.

 ### 12. Exercise : Mongoose Population
 - Open user.js and update the code:

 ```
 . . .

 var User = new Schema({
     firstname: {
       type: String,
         default: ''
     },
     lastname: {
       type: String,
         default: ''
     },
     admin:   {
         type: Boolean,
         default: false
     }
 });

 . . .
 ```
 - Open dishes.js and update the comment schema as follows:

 ```
 . . .

 var commentSchema = new Schema({
     rating:  {
         type: Number,
         min: 1,
         max: 5,
         required: true
     },
     comment:  {
         type: String,
         required: true
     },
     author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
     }
 }, {
     timestamps: true
 });

 . . .
 ```
 - Open dishRouter.js and update the routers and the methods as shown below:

 ```
 . . .

 dishRouter.route('/')
 .get((req,res,next) => {
     Dishes.find({})
     .populate('comments.author')
     .then((dishes) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(dishes);
     }, (err) => next(err))
     .catch((err) => next(err));
 })

 . . .

 dishRouter.route('/:dishId')
 .get((req,res,next) => {
     Dishes.findById(req.params.dishId)
     .populate('comments.author')
     .then((dish) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(dish);
     }, (err) => next(err))
     .catch((err) => next(err));
 })

 . . .

 dishRouter.route('/:dishId/comments')
 .get((req,res,next) => {
     Dishes.findById(req.params.dishId)
     .populate('comments.author')
     .then((dish) => {
         if (dish != null) {
             res.statusCode = 200;
             res.setHeader('Content-Type', 'application/json');
             res.json(dish.comments);
         }
         else {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .post(authenticate.verifyUser, (req, res, next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null) {
             req.body.author = req.user._id;
             dish.comments.push(req.body);
             dish.save()
             .then((dish) => {
                 Dishes.findById(dish._id)
                 .populate('comments.author')
                 .then((dish) => {
                     res.statusCode = 200;
                     res.setHeader('Content-Type', 'application/json');
                     res.json(dish);
                 })            
             }, (err) => next(err));
         }
         else {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })

 . . .

 dishRouter.route('/:dishId/comments/:commentId')
 .get((req,res,next) => {
     Dishes.findById(req.params.dishId)
     .populate('comments.author')    
     .then((dish) => {
         if (dish != null && dish.comments.id(req.params.commentId) != null) {
             res.statusCode = 200;
             res.setHeader('Content-Type', 'application/json');
             res.json(dish.comments.id(req.params.commentId));
         }
         else if (dish == null) {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
         else {
             err = new Error('Comment ' + req.params.commentId + ' not found');
             err.status = 404;
             return next(err);            
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })

 . . .

 .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null && dish.comments.id(req.params.commentId) != null) {
             if (req.body.rating) {
                 dish.comments.id(req.params.commentId).rating = req.body.rating;
             }
             if (req.body.comment) {
                 dish.comments.id(req.params.commentId).comment = req.body.comment;                
             }
             dish.save()
             .then((dish) => {
                 Dishes.findById(dish._id)
                 .populate('comments.author')
                 .then((dish) => {
                     res.statusCode = 200;
                     res.setHeader('Content-Type', 'application/json');
                     res.json(dish);  
                 })              
             }, (err) => next(err));
         }
         else if (dish == null) {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
         else {
             err = new Error('Comment ' + req.params.commentId + ' not found');
             err.status = 404;
             return next(err);            
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
     Dishes.findById(req.params.dishId)
     .then((dish) => {
         if (dish != null && dish.comments.id(req.params.commentId) != null) {

             dish.comments.id(req.params.commentId).remove();
             dish.save()
             .then((dish) => {
                 Dishes.findById(dish._id)
                 .populate('comments.author')
                 .then((dish) => {
                     res.statusCode = 200;
                     res.setHeader('Content-Type', 'application/json');
                     res.json(dish);  
                 })               
             }, (err) => next(err));
         }
         else if (dish == null) {
             err = new Error('Dish ' + req.params.dishId + ' not found');
             err.status = 404;
             return next(err);
         }
         else {
             err = new Error('Comment ' + req.params.commentId + ' not found');
             err.status = 404;
             return next(err);            
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 });

 . . .
 ```
 - Open users.js and update the register function as follows:

```
. . .

router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
});

. . .
```

 ### Additional Resources
 - [Mongoose Population](https://mongoosejs.com/docs/populate.html).
 - [mongoose: Referencing schema in properties or arrays](https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/)

  
 </details>
 
 <details>
 <summary>Assignment 3</summary>
 
 In this assignment you will continue the exploration of user authentication. We have already set up the REST API server to validate an ordinary user. Now, you will extend this to verify an Admin and grant appropriate privileges to an Admin. In addition you will allow only a registered user to update and delete his/her submitted comments. Neither another user, nor an Admin can edit these comments
  
 </details>
 
  
 ### week 4:
 
 <details>
 <summary>HTTPS and Secure Communication</summary>
 
 ### 1. HTTPS and Secure Communication
 - Symmetric Encryption: Shared secret key between the two parties
 - Asymmetric Encryption:
  - Public key that can be widely distributed
  - Private key that is only known to the receiver
 

 ### 2. Exercise : HTTPS and Secure Communication
 - Go to the `bin` folder and then create the private key and certificate by typing the following at the prompt:

 ```
 openssl genrsa 1024 > private.key
 openssl req -new -key private.key -out cert.csr
 openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
 ```
 
 - Open the `www` file in the `bin` directory and update its contents as follows:

 ```
 . . .

 var https = require('https');
 var fs = require('fs');

 . . .

 app.set('secPort',port+443);

 . . .

 /**
  * Create HTTPS server.
  */ 

 var options = {
   key: fs.readFileSync(__dirname+'/private.key'),
   cert: fs.readFileSync(__dirname+'/certificate.pem')
 };

 var secureServer = https.createServer(options,app);

 /**
  * Listen on provided port, on all network interfaces.
  */

 secureServer.listen(app.get('secPort'), () => {
    console.log('Server listening on port ',app.get('secPort'));
 });
 secureServer.on('error', onError);
 secureServer.on('listening', onListening);

 . . .
 ```
 - Open `app.js` and add the following code to the file:

 ```
 . . .

 // Secure traffic only
 app.all('*', (req, res, next) => {
   if (req.secure) {
     return next();
   }
   else {
     res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
   }
 });

 . . .
 ```

 ### Additional Resources
 - HTTPS:
  - [HTTPS (Wikipedia)](https://en.wikipedia.org/wiki/HTTPS).
  - [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography).
  - [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security).
 - Node's HTTPS Server:
  - [Node HTTPS Server](https://nodejs.org/api/https.html).
 - Other:
  - [How to Use SSL/TLS with Node.js](https://www.sitepoint.com/how-to-use-ssltls-with-node-js/)
  - [How does HTTPS actually work?](https://robertheaton.com/2014/03/27/how-does-https-actually-work/)
  
 </details>
 
 <details>
 <summary>Uploading Files</summary>
 
 ### 3. Uploading Files
 - File	uploading	is	typically	supported	through	form	`input` tag.
 - File	upload	is	more	efficient	with	multipart/form-data.
 - The	multipart/form-data	when	included	will	have	a	request	header	as: `'content-type': 'multipart/form-data; boundary=----703214596543452114973547’`
 - Boundary	separates	the	multipart	request	body

 ### 4. Exercise : Uploading Files
 - `npm install multer` ->  install Multer.
 - Add a new Express router named `uploadRouter.js` in the routes folder and add the following code to it:

 ```
 const express = require('express');
 const bodyParser = require('body-parser');
 const authenticate = require('../authenticate');
 const multer = require('multer');

 const storage = multer.diskStorage({
     destination: (req, file, cb) => {
         cb(null, 'public/images');
     },

     filename: (req, file, cb) => {
         cb(null, file.originalname)
     }
 });

 const imageFileFilter = (req, file, cb) => {
     if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
         return cb(new Error('You can upload only image files!'), false);
     }
     cb(null, true);
 };

 const upload = multer({ storage: storage, fileFilter: imageFileFilter});

 const uploadRouter = express.Router();

 uploadRouter.use(bodyParser.json());

 uploadRouter.route('/')
 .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
     res.statusCode = 403;
     res.end('GET operation not supported on /imageUpload');
 })
 .post(authenticate.verifyUser, authenticate.verifyAdmin, upload.single('imageFile'), (req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'application/json');
     res.json(req.file);
 })
 .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
     res.statusCode = 403;
     res.end('PUT operation not supported on /imageUpload');
 })
 .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
     res.statusCode = 403;
     res.end('DELETE operation not supported on /imageUpload');
 });

 module.exports = uploadRouter;
 ```
 - Then update `app.js` to import the uploadRouter and configure the new route as follows:

 ```
 . . .

 const uploadRouter = require('./routes/uploadRouter');


 . . .

 app.use('/imageUpload',uploadRouter);

 . . .
 ```

 ### Additional Resources
 - [Multer](https://github.com/expressjs/multer).
 - [Form-based File Upload in HTML (IETF RFC 1867)](https://tools.ietf.org/html/rfc1867).
 - [Node multipart/form-data Explained](https://www.derpturkey.com/node-multipart-form-data-explained/)
  
 </details>
 
 <details>
 <summary>Cross-Origin Resource Sharing</summary>
 
 ### 5. Cross-Origin Resource Sharing
 - Same-Origin	Policy: Web	app	security	model	that	restricts	how	a	document	or	script	loaded	from	one	origin	can	interact	with	a	resource	from	another	origin.
 - Cross-Origin	Resource	Sharing	(CORS): Mechanism	to	give	web	servers	cross-domain	access	controls.

 ### 6. Exercise : Cross-Origin Resource Sharing
 - `npm install cors` -> install the cors module.
 - In the `routes` folder, add a new file named `cors.js` and add the following code to it:

 ```
 const express = require('express');
 const cors = require('cors');
 const app = express();

 const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
 var corsOptionsDelegate = (req, callback) => {
     var corsOptions;
     console.log(req.header('Origin'));
     if(whitelist.indexOf(req.header('Origin')) !== -1) {
         corsOptions = { origin: true };
     }
     else {
         corsOptions = { origin: false };
     }
     callback(null, corsOptions);
 };

 exports.cors = cors();
 exports.corsWithOptions = cors(corsOptionsDelegate);
 ```
 
 - Then, open `dishRouter.js` and update it as follows:
 ```
 . . .

 const cors = require('./cors');

 . . .

 dishRouter.route('/')
 .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
 .get(cors.cors, (req,res,next) => {

 . . .

 .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {

 . . .

 .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {


 . . .

 .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {


 . . .

 dishRouter.route('/:dishId')
 .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
 .get(cors.cors, (req,res,next) => {

 . . .

 .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {

 . . .

 .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {


 . . .

 .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {


 . . .

 dishRouter.route('/:dishId/comments')
 .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
 .get(cors.cors, (req,res,next) => {

 . . .

 .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {

 . . .

 .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {


 . . .

 .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {


 . . .

 dishRouter.route('/:dishId/comments/:commentId')
 .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
 .get(cors.cors, (req,res,next) => {

 . . .

 .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {

 . . .

 .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {


 . . .

 .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {


 . . .
 ```
 - Do similar updates to promoRouter.js, leaderRouter.js, uploadRouter.js and users.js.

 ### Additional Resources
 - [CORS NPM module](https://www.npmjs.com/package/cors).
 - [Cross-Origin Resource Sharing (CORS)](https://web.dev/cross-origin-resource-sharing/).
  
 </details>
 
 <details>
 <summary>OAuth and User Authentication</summary>
 
 ### 7. OAuth and User Authentication
 - OAuth 1	and	OAuth 2: Authorization	framework	based	on	open	standards	for	Internet	users	to	log	into	third	party	websites/apps	using	their	Social	Network	accounts.
 - Access	token:	allows	access	to	user	data	by	the	client	application.

 ### 8. Exercise : Using OAuth with Passport and Facebook
 - Go to [developers.facebook.com](https://developers.facebook.com/apps/) and register your app by following the instructions there and obtain your App ID and App Secret.
 - `npm install passport-facebook-token` -> install passport-facebook-token module.
 - Update `config.js` with the App ID and App Secret that you obtained earlier as follows:

 ```
 module.exports = {
     'secretKey': '12345-67890-09876-54321',
     'mongoUrl': 'mongodb://localhost:27017/conFusion',
     'facebook': {
         clientId: 'Your Client App ID',
         clientSecret: 'Your Client App Secret'
     }
 }
 ```
 
 - Open `user.js` from the models folder and update the User schema as follows:

 ```
 var User = new Schema({
   . . .

     facebookId: String,

   . . .
 });
 ```
 
 - Open `authenticate.js` and add in the following line to add Facebook strategy:

 ```
 . . .

 var FacebookTokenStrategy = require('passport-facebook-token');

 . . .

 exports.facebookPassport = passport.use(new FacebookTokenStrategy({
         clientID: config.facebook.clientId,
         clientSecret: config.facebook.clientSecret
     }, (accessToken, refreshToken, profile, done) => {
         User.findOne({facebookId: profile.id}, (err, user) => {
             if (err) {
                 return done(err, false);
             }
             if (!err && user !== null) {
                 return done(null, user);
             }
             else {
                 user = new User({ username: profile.displayName });
                 user.facebookId = profile.id;
                 user.firstname = profile.name.givenName;
                 user.lastname = profile.name.familyName;
                 user.save((err, user) => {
                     if (err)
                         return done(err, false);
                     else
                         return done(null, user);
                 })
             }
         });
     }
 ));
 ```
 
 - Open `users.js` and add the following code to it:

 ```
 . . .

 router.get('/facebook/token', passport.authenticate('facebook-token'), (req, res) => {
   if (req.user) {
     var token = authenticate.getToken({_id: req.user._id});
     res.statusCode = 200;
     res.setHeader('Content-Type', 'application/json');
     res.json({success: true, token: token, status: 'You are successfully logged in!'});
   }
 });

 . . .
 ```
 - Start your server and test your application. 
 - In a browser, open https://localhost:3443/index.html to open the index.html file. Then click on the Facebook Login button to log into Facebook. At the end of the login process, open your browser's JavaScript console and then obtain the Access Token from there.
 - Then you can use the access token to contact the server at https://localhost:3443/users/facebook/token and pass in the token using the Authorization header with the value as Bearer <Access Token> to obtain the JWT token from the server.

 ### Additional Resources
 - [Social Authentication with Passport.js](https://mherman.org/blog/social-authentication-with-passport-dot-js/)

  
 </details>
 
 <details>
 <summary>Assignment 4</summary>
 
 In this assignment, you will be extending the router to support the ability to save and retrieve a list of favorite dishes by each of the registered users. All registered users in the system should have the ability to save any dish as their favorite dish, retrieve all their favorite dishes and remove one or all their favorite dishes.
  
 </details>
 
 
