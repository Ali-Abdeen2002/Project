import prompt from 'prompt-sync';
const input=prompt();

export function insert(data,max)
{
    let name=input("enter the name ");
    let year=input("enter the year ");
    let country=input("enter the country ");
    let rating=input("enter the rating ");
    let genre=input("enter the genre ");
    let director=input("enter the director ");
    let cols={
        "id":max,
        "name":name,
        "year":year,
        "country":country,
        "rating":rating,
        "genre":genre,
        "director":director,
    }
    data.push(cols);

    return data;
}

export function Select(data)
{
        for(let i=0;i<data.length;i++)
        {
            print(data,i);
        }
}

export function Update(data,id)
{
    for(let i=0;i<data.length;i++)
    {
        if(data[i].id==id)
        {
            print(data,i);
            
    let name=input("enter the name ");
    let year=input("enter the year ");
    let country=input("enter the country ");
    let rating=input("enter the rating ");
    let genre=input("enter the genre ");
    let director=input("enter the director ");

    data[i].name=name;
    data[i].year=year;
    data[i].country=country;
    data[i].rating=rating;
    data[i].genre=genre;
    data[i].director=director;
    return data;
        }
    }
    console.log("THERE IS NO ID LIKE THAT");

    return data;
    
    
}

export function Delete(data,id)
{

   for(let i=0;i<data.length;i++)
   {
    if(data[i].id==id)
    {
        data.splice(i,1);
        return data;
    }

   }

   console.log("THERE IS NO ID LIKE THAT");
   return data;

    
}

function print(data,i)
{
            console.log("***************")
            console.log("the id of the movie "+data[i].id)
            console.log("the name of the movie "+data[i].name)
            console.log("the year of the movie "+data[i].year)
            console.log("the country of the movie "+data[i].country)
            console.log("the genre of the movie "+data[i].genre)
            console.log("the director of the movie "+data[i].director)
            console.log("***************")
}

export function SelectBysearch(data,Search,value)
{       
        for(let i=0;i<data.length;i++)
        {
            if(Search==1)
            {
                if(data[i].name==value)
                {
                    print(data,i);
                }
            }
           else if(Search==2)
            {
                if(data[i].director==value)
                {
                    print(data,i)
                }
            }
           else if(Search==3)
           {
            if(data[i].title==value)
            {
                print(data,i)
            }
           }
           else if(Search==4)
           {
            if(data[i].year==value)
            {
                print(data,i)
            }
           }
           else if(Search==5)
           {

                
                let arr=new Array()
                arr=data[i].genre.split("|");
                if(arr.includes(value))
                {
                    print(data,i);
                }
                else if(data[i].genre==value)
                {
                    print(data,i);
                }
            


           }
        }
}