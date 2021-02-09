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
  - The final step is to use the Grunt modules watch and browser-sync to spin up a web server and keep a watch on the files and automatically reload the browser when any of the watched files are updated :
  ```
  $ npm install grunt-contrib-watch@1.0.0 --save-dev
  $ npm install grunt-browser-sync@2.2.0 --save-dev
  ```
  - The final step is to use the Grunt modules watch and browser-sync to spin up a web server and keep a watch on the files and automatically reload the browser when any of the watched files are updated. To do this, install the following grunt modules:
  ```
  $ npm install grunt-contrib-watch@1.0.0 --save-dev
  $ npm install grunt-browser-sync@2.2.0 --save-dev
  ```
  
  
  
 </details>
  
 <details>
 <summary>Conclusions</summary>
 
  ### Second
  
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
