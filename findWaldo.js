// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
    /*for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name === "Waldo") {
        found(i);   // execute callback
      }
    }
  }**/

  names.forEach(function(element){
    if (element === "Waldo"){
        found(names.indexOf(element))
    }
  })
}
   
  
  const actionWhenFound = function(index) {
    console.log(`Found Waldo at ${index}!`);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);