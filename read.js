import {argv} from "node:process"

"This is the message!"

rename(process.argv[2], process.argv[3], (err) => {
    if (err) throw err;
    console.log('The name has been changed!');
})