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


import {menu,ReadFile,WriteFile,getLastId,menuSearch} from './functions.js';
import prompt from 'prompt-sync';
import { insert,Select,Update,Delete,SelectBysearch} from './curd.js';
const input=prompt();

 
(async ()=>{
    // console.log("*****************")
    // console.log(sayHello())
    // console.log("*****************")
    let alldata=await ReadFile();
    console.log(alldata)
   /* console.log("!!!!!!!!!!!!!!!")
    console.log(await WriteFile(alldata));
    console.log("!!!!!!!!!!!!!!!")*/
    let Max=getLastId(alldata);
    console.log(Max);
    let choice=0;

    while(choice!=6)
    {
        
       await WriteFile(alldata);
        menu();
        choice=input("Enter choice: ");
        if(choice==1)
        {
            Select(alldata);
        }
       else if(choice==2)
        {
           alldata=insert(alldata,++Max);
        }
        else if(choice==3)
        {
            let ID=input("enter the id of the movie you want to update ")
            ID=Update(alldata,ID);
        }
        else if(choice==4)
        {
            let ID=input("enter the id of the movie you want to Delete ")
            ID=Delete(alldata,ID);
        }
        else if(choice==5)
        {
               menuSearch();
               let Select=input("Enter the number ");
               if(Select==1)
               {
                let val=input("enter the movie name ");
                SelectBysearch(alldata,1,val)
               }
               else if(Select==2)
               {
                let val=input("enter the movie director ");
                SelectBysearch(alldata,2,val)
               }
               else if(Select==3)
               {
                let val=input("enter the movie genre ");
                SelectBysearch(alldata,3,val)
               }
               else if(Select==4)
               {
                let val=input("enter the movie year ");
                SelectBysearch(alldata,4,val)
               }
               else if(Select==5)
               {
                let val=input("enter the movie genre ");
                SelectBysearch(alldata,5,val)
               }

        }
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



