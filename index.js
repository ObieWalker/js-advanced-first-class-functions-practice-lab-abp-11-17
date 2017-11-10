// Code your solution in this file!
const logDriverNames = function(driver){
  driver.forEach(function(log){
    console.log(log.name)
  });
}
const logDriversByHometown = function(driver, location){
  driver.forEach(function(e){
    if(e.hometown === 'location'){
      console.log(e.name)
    }
  });
}
