import fs from 'fs'
export function menu()
{
    console.log("************************************");
    console.log("Insert 1 for Display Movie Catalog");
    console.log("Insert 2 Add a New Movie");
    console.log("Insert 3 Update a Movie Details");
    console.log("Insert 4 Delete a Movie");
    console.log("Insert 5 Search a Movie");
    console.log("Insert 6 to Exit");
    console.log("************************************");

}
export function ReadFile()
{
    let p=new Promise((resolve,reject) => {
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
            fetch('https://download850.mediafire.com/pkk828q692bgeEQ5xCSaY_mK-o62Zc4l_6y8gzwAVSVi3RMOBQGEcmN5wHh-dJ4pHqKZ-j5AnE0BLMaQzq8HR_JjGucpPSS1MOxbacEMrh_l5O9Rgnt9zPMcX7ykICyZY4gKm3BZaZzsiq96VlhhxbM2olXutVAy11x3Wmyct68xzxI/tve7t2z9xqpmewt/MOCK_DATA+%281%29.json',{metho:'GET'})
      .then(response => response.json())
      .then(json => {
        
       resolve(json);
        
        
        }).catch(error=>{
        console.log(error)
        console.log("Failed to Get the Data from the api")
      })
        }
    }
    )
    return p;
}


export function WriteFile(data) {
    let p = new Promise((resolve, reject) => {
      data = JSON.stringify(data);
      fs.writeFile('JsonMovie.json', data, 'utf-8', (err) => {
        if (err) {
          console.log("Something went wrong");
          console.log(err.message);
          reject("Failed");
        } else {
           
          resolve(data);
        }
      })
    })
  
    return p;
  }
  

export function getLastId(data1)
{
   
    let Max=0;
    for(let i=0;i<data1.length;i++)
    {
        
        if(data1[i].id>Max)
        {
            Max=data1[i].id;
        }
    }
    return Max;
}


export function menuSearch()
{
  console.log("*************************");
  console.log("insert 1 for search by movie title(name)")
  console.log("insert 2 for search by movie director")
  console.log("insert 3 for search by movie genre")
  console.log("insert 4 for search by movie year")
  console.log("insert 5 for search by movie genre")
  console.log("*************************");
}