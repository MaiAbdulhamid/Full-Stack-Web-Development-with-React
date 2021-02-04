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
  
  ### week 2:
  
 <details>
 <summary>Navigation and Navigation Bar</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>User Input: Buttons and Forms</summary>
 
  ### Second
  
 </details>
 
 <details>
 <summary>Displaying Content: Tables and Cards</summary>
 
  ### Second
  
 </details>
  

## Course 2: Front-End Web UI Frameworks and Tools: Bootstrap 4

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
 
## Course 3: Front-End Web UI Frameworks and Tools: Bootstrap 4

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
 
 ## Course 2: Front-End Web UI Frameworks and Tools: Bootstrap 4

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
