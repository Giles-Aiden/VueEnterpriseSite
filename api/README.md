# API Reference
---
This is an in progress API documentation. Text will remain module agnostic. Included code will be functions including axios.

---
## Users

### Search
_Admin Required_*
_Method:_ GET
_Body:_
```javascript
{
  // Include at least one of the following
  "uid": "userId",
  "email": "userEmail",
  // Non-unique user data may also be included
  // Non-required
  "uname": "username"
}
```
_Responses:_
Status __200:__ 
  Sucessfully found user
  Returned user info
Status __404:__
  Couldn't find user with supplied data

### Login
_Method:_ POST
_Body:_
```javascript
{
  "email": "unique@email.com"
  "pass": "super secure password"
}
```
_Responses:_
Status __200:__
  Sucessfully logged in and authorized
  Returned UserID
Status __401:__
  Unauthorized. Found user but couldn't login
Status __500:__
  Server did a thing. Im as clueless as you. Report and try again.

### Register
_Method:_ POST
_Body:_
```javascript
{
  "email": "unique@email.com",
  "pass": "super secure password"
}
```
_Responses:_
Status __201:__
  Sucessfully created new user
  Returning UserID
Status __406:__
  Couldn't save user. Possibly due to invalid request body
Status __500:__
  Server did a thing. Im as clueless as you. Report and try again.

### Update Self
_Login Required_*
_Method:_ PUT
_Body:_
Any included valid user information will update the currently logged in user
```javascript
{
  "name": "Client Name",
  "uname": "Client Username",
  "email": "unique@email.com",
  "pass": "super secure password"
}
```
_Responses:_
Status __202:__
  Sucessfully Updated Self
Status __404:__
  Couldn't find user. Relogin?
Status __500:__
  Server did a thing. Im as clueless as you. Report and try again.


### Admin Update
_Admin Required_*
_Method:_ PUT
_Body:_
```javascript
{
  // Required. Designated user to edid.
  "uid": "UserId",
  /*
   * All update self options apply here
   * Aditional isAdmin option to create Administrators
   * Removes admin if false, adds admin if true
   */
  "isAdmin": true
}
```
_Responses:_
Status __202:__
  Sucessfully updated user
Status __400:__
  Couldn't find user. Bad uid?
Status __500:__
  Server did a thing. Im as clueless as you. Report and try again.

### Delete User
_Admin Requied_*
_Method:_ DELETE
_Body:_
```javascript
{
  // UserID to delete
  "uid": ""
}
```
_Responses:_
Status __200:__
  Sucessfully deleted user
  Returning Deleted user
Status __400:__
  Couldn't find user. Bad uid?
Status __500:__
  Server did a thing. Im as clueless as you. Report and try again.
# API Reference
---
This is an in progress API documentation. Text will remain module agnostic. Included code will be functions including axios.

---
## Users

### Search
_Admin Required_*

_Method:_ GET

_Body:_
```javascript
{
  // Include at least one of the following
  uid: userId,
  email: userEmail,
  // Non-unique user data may also be included
  // Non-required
  uname: username
}
```
_Responses:_
Status __200:__ 
  Successfully found user
  Returned user info
Status __404:__
  Couldn't find user with supplied data

### Login
_Method:_ POST
_Body:_
```javascript
{
  email: unique@email.com
  pass: super secure password
}
```
_Responses:_
Status __200:__
  Successfully logged in and authorized
  Returned UserID
Status __401:__
  Unauthorized. Found user but couldn't log in
Status __500:__
  Server did a thing. I'm as clueless as you. Report and try again.

### Register
_Method:_ POST
_Body:_
```javascript
{
  email: unique@email.com,
  pass: super secure password
}
```
_Responses:_
Status __201:__
  Successfully created new user
  Returning UserID
Status __406:__
  Couldn't save user. Possibly due to invalid request body
Status __500:__
  Server did a thing. I'm as clueless as you. Report and try again.

### Update Self
_Login Required_*
_Method:_ PUT
_Body:_
Any included valid user information will update the currently logged-in user
```javascript
{
  name: Client Name,
  uname: Client Username,
  email: unique@email.com,
  pass: super secure password
}
```
_Responses:_
Status __202:__
  Successfully Updated Self
Status __404:__
  Couldn't find user. Re-login?
Status __500:__
  Server did a thing. I'm as clueless as you. Report and try again.


### Admin Update
_Admin Required_*
_Method:_ PUT
_Body:_
```javascript
{
  // Required. Designated user to edid.
  uid: UserId,
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
  Successfully updated user
Status __400:__
  Couldn't find user. Bad uid?
Status __500:__
  Server did a thing. I'm as clueless as you. Report and try again.

### Delete User
_Admin Requied_*
_Method:_ DELETE
_Body:_
```javascript
{
  // UserID to delete
  uid: 
}
```
_Responses:_
Status __200:__
  Successfully deleted user
  Returning Deleted user
Status __400:__
  Couldn't find user. Bad uid?
Status __500:__
  Server did a thing. I'm as clueless as you. Report and try again.

