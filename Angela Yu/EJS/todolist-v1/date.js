//Exporting our module 
//Binding the export to the function inside the modoule, we are now able to export it into our app.js file
//we will not call our function inside our module( module.export = getDate() ) because we want to give access to calling function to app.js
module.exports.getDate = getDate;

function getDate(){
    
const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  
  let day  = today.toLocaleDateString("en-US", options);
  return day

}


//With this method we can export many function from a single module
//Refacotered way to write a function , in this case we have to name our function only one time and initialize it
module.exports.getDay = function (){
  
  const today = new Date();
  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
}