// Use Cases

// Check if user with such name Exists 
// Adding element to the array
// Remove Duplicate elements from the array
// Concatenating the Array


// Check if user with such name Exists 

// Approach 1

const isNameExist = (name, users) => {

    let exist = false;
    for (let i =0; i < users.length; i++)
         {
    
            if(users[i].name === name){
                exist = true;
            }
        
    }
    return exist;
}

// Approach 2

const isNameExist2 = (name, users) => {

    users.find((user) => user.name === name);

    return Boolean(user);
}

// Approach 3

const isNameExist3 = (name, users) => {

    const index = users.findIndex((user) => user.name === name);

    return index>=0;
}

// Approach 4
const isNameExist4 = (name, users) => {

  const users = users.some((user) => user.name === name);

    return users;
}

// Adding element to the array

