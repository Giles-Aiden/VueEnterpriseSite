# API Reference
---
This is an in progress API documentation. Text will remain module agnostic. Included code will be functions for axios.

---
## Users

### Search
_Admin Required_*

_URI:_ `/api/users`

_Method:_ GET

_Body:_
```javascript
{
  // Include at least one of the following
  uid: "userId",
  email: "userEmail",
  // Non-unique user data may also be included
  // Non-required
  uname: "username"
}
```
_Responses:_
Status __200:__ 
  > Successfully found user
  > Returned user info
Status __404:__
  > Couldn't find user with supplied data
_Code:_
```javascript
axios.get('/api/users', {
    //include body here
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    // Returned info
    console.log(response.data);
    // Response status code
    console.log(response.status);
    // Returned message
    console.log(response.statusText);
  });
```

### Login
_Method:_ POST

_URI:_ `/api/users/login`

_Body:_
```javascript
{
  email: "unique@email.com"
  pass: "super secure password"
}
```
_Responses:_
Status __200:__
  > Successfully logged in and authorized
  > Returned UserID
Status __401:__
  > Unauthorized. Found user but couldn't log in
  > Status __500:__
  > Server did a thing. I'm as clueless as you. Report and try again.
_Code:_
```javascript
axios.get('/api/users/login', {
    //include body here
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    // Returned info
    console.log(response.data);
    // Response status code
    console.log(response.status);
    // Returned message
    console.log(response.statusText);
  });
```

### Register
_Method:_ POST

_URI:_ `/api/users/register`

_Body:_
```javascript
{
  email: "unique@email.com",
  pass: "super secure password"
}
```
_Responses:_
Status __201:__
  > Successfully created new user
  > Returning UserID
Status __406:__
  > Couldn't save user. Possibly due to invalid request body
Status __500:__
  > Server did a thing. I'm as clueless as you. Report and try again.
_Code:_
```javascript
axios.post('/api/users/register', {
    //include body here
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    // Returned info
    console.log(response.data);
    // Response status code
    console.log(response.status);
    // Returned message
    console.log(response.statusText);
  });
```

### Update Self
_Login Required_*

_Method:_ PUT

_URI:_ `/api/users/update`

_Body:_
Any included valid user information will update the currently logged-in user
```javascript
{
  name: "Client Name",
  uname: "Client Username",
  email: "unique@email.com",
  pass: "super secure password"
}
```
_Responses:_
Status __202:__
  > Successfully Updated Self
Status __404:__
  > Couldn't find user. Re-login?
Status __500:__
  > Server did a thing. I'm as clueless as you. Report and try again.
_Code:_
```javascript
axios.put('/api/users/update', {
    //include body here
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    // Returned info
    console.log(response.data);
    // Response status code
    console.log(response.status);
    // Returned message
    console.log(response.statusText);
  });
```


### Admin Update
_Admin Required_*

_Method:_ PUT

_URI:_ `/api/users/aupdate`

_Body:_
```javascript
{
  // Required. Designated user to edid.
  uid: "UserId",
  /*
   * All update self options apply here
   * Aditional isAdmin option to create Administrators
   * Removes admin if false, adds admin if true
   */
  isAdmin: true
}
```
_Responses:_
Status __202:__
  > Successfully updated user
Status __400:__
  > Couldn't find user. Bad uid?
Status __500:__
  > Server did a thing. I'm as clueless as you. Report and try again.
_Code:_
```javascript
axios.put('/api/users/audate', {
    //include body here
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    // Returned info
    console.log(response.data);
    // Response status code
    console.log(response.status);
    // Returned message
    console.log(response.statusText);
  });
```

### Delete User
_Admin Required_*

_Method:_ DELETE

_URI:_ `/api/users`

_Body:_
```javascript
{
  // UserID to delete
  uid: "UserID"
}
```
_Responses:_
Status __200:__
  > Successfully deleted user
  > Returning Deleted user
Status __400:__
  > Couldn't find user. Bad uid?
Status __500:__
  > Server did a thing. I'm as clueless as you. Report and try again.
_Code:_
```javascript
axios.delete('/api/users', {
    //include body here
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    // Returned info
    console.log(response.data);
    // Response status code
    console.log(response.status);
    // Returned message
    console.log(response.statusText);
  });
```
