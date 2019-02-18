# pfp-gen  
## A profile picture generator  

![alt text](https://github.com/colinskeep/pfp-gen/blob/master/background.jpg?raw=true)  

Given a background image and a letter, generate a generic profile picture for a user.  pfp-gen will crop a random 200x200 portion of a background image and overlay a letter to provide a unique profile picture for the user.

## Installation  


````javascript
npm install pfp-gen  --save
````

## Usage  

pfp-gen requires 2 parameters:  
* path to background image  
* users first initial  

````javascript
const pfp = require('pfp-gen');

pfp.gen('background.jpg', 'A');
````
returns: pfp_200x200.jpg  
![alt text](https://github.com/colinskeep/pfp-gen/blob/master/pfp_200x200.jpg?raw=true)  

## Contributing  
Have an idea for pfp-gen?  Don't hesitate.

## Special Thanks  
* [@bkawk](https://github.com/bkawk) - William Hill
