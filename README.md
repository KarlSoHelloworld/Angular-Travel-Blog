# Angular-Travel-Blog -- For COMP-5321
A travel blog frontend which was developed by Semantic UI/ Bootstrap/ Angular
## 1 Tools
### 1.1 Semantic UI
Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.
### 1.2 Bootstrap
Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.
### 1.3 Fontawesome
Font Awesome is a font and icon toolkit based on CSS and LESS.
### 1.4 Angular
Angular is a TypeScript-based open-source front-end web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.


## 2 Application logic
By using Angular to develop the website, the website uses the route to indicate the flow. Please refer to Figure-2.1.
![Figure-2.1 Route Flow](https://github.com/KarlSoHelloworld/Angular-Travel-Blog/blob/master/READMD%20PICTURES/figure2.1.png)
#### Figure-2.1 Route Flow
The flow of user to visit the website is shown as below:
1.	Users visit the domain name or IP of website without path. Angular will redirect the route to default route – home.
2.	Users enter the home and browse the webpage. Users can click “Article” button in the menu bar or click “Detail” link in the header of “Blog Article” to enter route – articles.
3.	By clicking the picture/ title/ descriptions of article, users will enter route -- detail/:id for specific article webpage.
4.	User can directly use “domain name + Path” to visit the specific page. Please refer to Figure-2.2 to check the example.
![Figure-2.2 Specific Route Example](https://github.com/KarlSoHelloworld/Angular-Travel-Blog/blob/master/READMD%20PICTURES/figure2.2.png)
#### Figure-2.2 Specific Route Example
## 3 Project Structure
Project is consisted of components. Each component may be the member of other components. Therefore, all the components are re-useable, for example, the “News” component are re-used in different webpage for times. Please refer to Figure-3.1
![Figure-3.3 Project Structure Diagram](https://github.com/KarlSoHelloworld/Angular-Travel-Blog/blob/master/READMD%20PICTURES/figure3.1.png)
#### Figure-3.3 Project Structure Diagram

## 4 Installation Guide
## 4.1	Install Angular
### Step 1: Install the Node.js
Angular requires Node.js version 8.x or 10.x.
* To check your version, run node -v in a terminal/console window.
* To get Node.js, go to nodejs.org.
### Step 2: Install the Angular CLI
>npm install -g @angular/cli

## 4.2 New an Application
### Step 1: Create a workspace and initial application
> npm new Travle-Blog
### Step 2: Copy the source code into the folder
> copy the source code to replcae all the files in the folder just create.

## 4.3	Run the Application
### Step 1: Serve the application
> cd Travel-Blog
> ng serve –open
### Step 2: Viste the website
> Use the browser to visit “http:\\localhost:4200”. (default setting)
