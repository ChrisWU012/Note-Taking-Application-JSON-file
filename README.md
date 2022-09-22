# Note Taking Application with Database

This application allows you to add notes.
<br/>
This app used: handlebars to render pages, JSON file as the local storage, AuthBasic to verify login users.

<br/>
What this app can't do: register new user, hash password, save data in Database

### How To Start This APP

- run: `cd Note-Taking-Application-JSON-file`
- run: `npm install express express-handlebars express-basic-auth`

### How To Run This APP

- run: `cd Note-Taking-Application-JSON-file`
- run: `node app.js`
- open Google Chrome: http://localhost:3001/

### Test Users

```javascript
"users": [
    {
      "username": "sam",
      "password": "123"
    },
    {
      "username": "lesley",
      "password": "123"
    }
  ]
```
