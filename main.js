

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
















