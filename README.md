# Professor Deutsch&English
 Language school website

## Project description  
Site was ordered by the language school "Professor Deutsch & English". The task was to present the school in general and each of it`s department separately (German and english). The owners and main teachers here are a married couple that shares the same ideas and approaches to the learning process so it was decided to use the same design and main page structure for both and mix common content (main school ideas, history, description) with a specific to each separate department (students, awards, teachers..)  
## Task realization 

### Main idea
It was important to present separate teachers, students and their awards for each independent school department. The owner also wanted to have ability to change the site`s content in the future by himself, so it was decided to combine the static content (common for both schools) with dynamically generated one. According to that idea i made a project structure that looks like this  
  
### Project structure
+ Intro (static) - user can choose the school [(dist/index.html)](https://github.com/TonnyHawk/Professor-Deutsch-English/tree/main/dist)
+ Main page (static / dynamic) - main school and selected department info [(dist/school/index.html)](https://github.com/TonnyHawk/Professor-Deutsch-English/tree/main/dist/school)
+ Gallery (dynamic) - shows all media content like school gallery, student portfolios, awards and certificates [(dist/gall/index.html)](https://github.com/TonnyHawk/Professor-Deutsch-English/tree/main/dist/gall)  

### How it works
The Main and gallery page make fetch requests to the server and react generates some sections. Server requests are based on props that page gets from browser`s query string so such url as <http://repetitor.rv.ua/school/?prof=Deutsch> will direct us to the main page of the german learning school and the link <http://repetitor.rv.ua/school/?prof=English> to the english learning school. If some props of a query string contan type errors or are incorrect user redirects to the intro page. Errors in props on the gallery page redirects to the 404 page.
