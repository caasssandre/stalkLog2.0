# loggingApp

## Welcome
This project was born to solve a problem that has personal and ideological significance to us. Chris Deak, my colleague in this endeavour, is a resarcher in psychology, specializing in gender inequalities. She is herself a victim of stalking. In her research, Chris found that stalking behaviours were often under reported and that the quality of the data reported by victims lacked precision. These gaps in the reported information make it difficult for the police to effectively combat stalking.

This is how this project was born. We wanted to offer a platform for victims to effectively and effortlessly track stalking behaviours. We also want the platform to offer information and help to slaking victims. We hope that with the help of this platform, stalking awareness will grow and 



## The Tech
* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
---

## User Stories

### MVP
* [] I want to be able to use the app on my phone 
* [] I want my information to be safe
* [x] I want to be able to log in
* [] I want to have access to my logs in chronological order
* [] I do not want to be able to modify the logs
* [] I want to be able to log the location of stalking events on a map
* [] I want to see help pages with advice based on recognised literature
* [] I want to have my own profile
* [] I want to see information related to how to fill in the logs

---

### Stretch
* [] I want to be able to add photos to the logs
* [] I want to give a rating of how sure I am of the event's reality
* [] I want to have access to my map
* [] I want the app to have a log in for the police to be able to see my logs
* [] I want to be able to talk to the police via a chat inside the app
* [] I want my friends and family to be able to log their observations on my profile
* [] I want to be able to print my logs

---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | new log | Allow user to enter a new event |
  
  ---

## Reducers (Client Side)
  | name | purpose |
  | --- | --- |
  | x | Stores info about x |
  
  ---

 ## API (Client - Server)
| Method | Endpoint | Usage | Response |
| --- | --- | --- | --- | 
| Post | /api/v1/log | Create and save a new log | 200 |

---

## DB (Server Side)
### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
 
 ---
