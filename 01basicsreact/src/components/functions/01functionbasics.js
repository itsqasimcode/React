//--- Use Cases of Array Functions --- 

// 1- write code to get array of names from given array of users  (for loop , forEach, Map Function)
// 2- Get back only active users from given array of users      (if condition is used)
// 3- Sort users by age descending order                        (sort function)


const users = [

    {
        id: 1,
        name: "Qasim",
        age: 25,
        isActive: true
    },

     {
        id: 2,
        name: "Ali",
        age: 20,
        isActive: true
    },

     {
        id: 3,
        name: "Ahmed",
        age: 30,
        isActive: false
    },

     {
        id: 4,
        name: "Zain",
        age: 23,
        isActive: true
    }
];

// 1- write code to get array of names from given array of users

// solution 1: using for loop

const names = [];                                       // to get only names which are active we use if condition inside
for( let i = 0; i < users.length; i++)                   // for (let i = 0; i < users.length; i++) {
                                                         //   if(users[i].isActive) {                            //     names.push(users[i].name);
{
    names.push (users[i].name);
}
console.log(names);

// solution 2: using forEach loop  
                                   // forEach loop doesnt return anything.
  users.forEach(user => {             // if in forEach loop we want to get only active users 
    names.push(user.name)    // users.forEach(user =>{ if{users.isActive} names.push(user.                          
                              // name)              
  });                                 
   console.log(names);    
   
// solution 3: using map function

 const names2 = users.filter(user => user.isActive).map(user => user.name);
    console.log(names2);

// sort users by age descending order




