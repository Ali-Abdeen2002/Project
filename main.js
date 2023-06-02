// let fs=require('text');
// function hello()
// {
//  let p=Promise=new Promise((resolve,reject) => {
//         setTimeout(function()
//         {
//             resolve("Hello World");
//         },1000)
//     }
//     )
//     return p;
// }

// async function middle () 
// {
//     console.log("start");
//     let data=await hello();
//     console.log(data);
    
//     console.log("end")
// }



// middle();


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//const fs = require('fs');

import fs, { writeFile } from 'fs'
import {sayHello} from './TEST.js';
import prompt from 'prompt-sync';
const input=prompt();
 function ReadFile()
{
    let p=Promise=new Promise((resolve,reject) => {
        if(fs.existsSync('JsonMovie.json'))
        {
           
            fs.readFile('JsonMovie.json','utf-8',(err,data)=>{
                if(err)
                {
                    console.log("something wrong");
                    console.log(err.message)
                    reject("some thing wrong");
                }
                else
                {
                    
                    resolve(JSON.parse(data.toString()))   
                }
            })
        }
        else
        {
            fetch('https://download1486.mediafire.com/3spctzf2mdcgBwXAvk2FbQue_s2-C97N7U_qgFIhaHtn3toyuXNGekUVVCW7kxCqxEBp-2vbx_f-83Zg77UG4I9fQiRvDciv7Mnpo7eKqo51Bol4qcrVHRQvy5CHP-MxpgtLWBn_Yr1gOuT9st-j4CYQT9u2NL1XrRLGzV2FmF2x-YM/12z29xffio1rwji/MOCK_DATA.json',{metho:'GET'})
      .then(response => response.json())
      .then(json => {
        console.log(json);
        console.log("/////////////////");
        
        
        }).catch(error=>{
        console.log(error)
        console.log("Failed to Get the Data from the api")
      })
        }
    }
    )
    return p;
}


function WriteFile(data)
{
    
    data=JSON.stringify(data);
    fs.writeFile('JsonMovie.json',data,'utf-8',(err)=>{
        if(err)
        {
            console.log("something wrong");
            console.log(err.message);
        }
    })

    
}
 
(async ()=>{
    console.log("*****************")
    console.log(sayHello())
    console.log("*****************")
    let alldata=await ReadFile();
    console.log(alldata)
    WriteFile(alldata)
    fs.writeFile('aaaaaaa.txt',"hello",'utf-8',(err=>{

    }));
    let i=0;
    while(i!=4)
    {
        
    }
})()

















// // let fs=require('text');
// // function hello()
// // {
// //  let p=Promise=new Promise((resolve,reject) => {
// //         setTimeout(function()
// //         {
// //             resolve("Hello World");
// //         },1000)
// //     }
// //     )
// //     return p;
// // }

// // async function middle () 
// // {
// //     console.log("start");
// //     let data=await hello();
// //     console.log(data);
    
// //     console.log("end")
// // }



// // middle();


// // const http = require('http');

// // const hostname = '127.0.0.1';
// // const port = 3000;

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World');
// // });

// // server.listen(port, hostname, () => {
// //   console.log(`Server running at http://${hostname}:${port}/`);
// // });

// import fs from 'fs';

// import {sayHello} from './TEST.js';


//  function ReadFile()
// {
//     let p=Promise=new Promise((resolve,reject) => {
//         if(fs.existsSync('JsonMovie.json'))
//         {
           
//             fs.readFile('JsonMovie.json','utf-8',(err,data)=>{
//                 if(err)
//                 {
//                     console.log("something wrong");
//                     console.log(err.message)
//                     reject("some thing wrong");
//                 }
//                 else
//                 {
                    
//                     resolve(JSON.parse(data.toString()))   
//                 }
//             })
//         }
//         else
//         {
//       /*      fetch('https://jsonplaceholder.typicode.com/posts',{metho:'GET'})
//       .then( response => response.json())
//       .then(json => console.log(json)).catch(error=>{
//         console.log(error)
//         console.log("Failed to Get the Data from the api")
//       })*/
//         }
//     }
//     )
//     return p;
// }


// function WriteFile(data)
// {
//   data=JSON.stringify(data);
//     fs.writeFile('https://jsonplaceholder.typicode.com/posts',data,'utf-8',(err)=>{
//         if(err)
//         {
//             console.log("something wrong");
//             console.log(err.message);
//         }
//     })
// }
 
// (async ()=>{
//     fs.writeFile("aaa.txt",'utf-8',"aaaa",err=>{

//     });
//     console.log(sayHello())
//     let alldata=await ReadFile();
    
//     WriteFile(alldata)
// })()



