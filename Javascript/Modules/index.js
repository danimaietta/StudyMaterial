const { sayHelloWorld } = require('../../Modules/module')
/* imports go always on top */
var utils = require('./utils') // es5
import User from './user' // es6

// es5
utils.default.y()

//es6
const user = new User('Dani', 25)
user.sayHi()
