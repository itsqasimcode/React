# Background changer
we use classname in css because its a reserved keyword.

# Another Method is by declaring a function (onclick need a function to work) same as we used in counter

  const newcolor = (newcolor) =>{                  
    
   console.log("clicked ", newcolor)  
   
    setColor(newcolor)

   }

    onClick={()=>newcolor("green")}   

    //   its a callback function