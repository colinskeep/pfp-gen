# pfp-gen  
## A profile picture generator  

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")  

Given a background image and a letter, generate a generic profile picture for a user.  pfp-gen will crop a random 200x200 portion of a background image and overlay a letter to provide a unique profile picture for the user.

## Installation  

#### npm install
````javascript
npm install pfp-gen  --save
````

## Usage  

pfp-gen requires 2 parameters:  
* path to background image  
* users first initial  

````javascript
const pfp = require('pfp-gen');

pfp('background.jpg', 'c');
````
