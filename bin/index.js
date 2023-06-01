#! /usr/bin/env node
import { arch, cpuUsage,exit} from 'node:process';
import os from "os";
import { rename, readdir, statSync, writeFile, copyFile, unlink} from "fs"
import { log } from 'node:console';

// const userName = os.userInfo().username;

// process.on("message", console.log);
// process.emit("message", (`Wellcome ${userName}!`))

console.log(process.argv);

switch (process.argv[2]) {
    case "ls":
        readdir( process.cwd(), (err, files) => {
            const folders = []
            const newFiles = []
           files.forEach( (file) => {
            if (statSync(file).isDirectory()){
                folders.push({
                    fileName: file,
                    fileType: "directory"
                })
            } else {
                newFiles.push({
                    fileName: file,
                    fileType: "file" 
                })
            }
            files = folders.concat(newFiles)
        })  
            files.forEach((file, i) => {
                file = {i: i, ...file};
                console.log(Object.values(file));
            })
        })  
        break;
    case "add":
        writeFile(process.argv[3], "", (err) => {
                if (err) throw err;
              });
        break;
    case "rn":
        rename(process.argv[3], process.argv[4], (err) => {
                if (err) throw err;
              });
        break;
    case "cp":
        copyFile(process.argv[3], process.argv[4], (err) => {
            if (err) throw err;
          });
        break;
    case "mv":
        rename(process.argv[3], process.argv[4], (err) => {
            if (err) throw err;
          });
        break;
    case "rm":
        unlink(process.argv[3],(err) => {
            if (err) throw err;
          });
        break;
    default:
        break;
}
// rename(process.argv[2], process.argv[3], (err) => {
//     if (err) throw err;
//     console.log('The name has been changed!');
// })

// const myPath = process.cwd()


