var read = require('readline-sync')


var actions = ['find key', 'open door', 'put hand in hole']
     var i = read.keyInSelect(actions, 'press y to start :\n\n')
     


if (read.keyInYN('press y to put your hand in a hole')) {
    actions.i === 0 ;
  // 'Y' key was pressed.
  console.log('Installing now...');
  // Do something...
} else {
  // Another key was pressed.
  console.log('Searching another...');
  // Do something...
}


