// Code your solution in this file!
const logDriverNames = function(driver){
  driver.forEach(function(log){
    console.log(log.name)
  });
}
const logDriversByHometown = function(driver, location){
  driver.forEach(function(e){
    if(e.hometown === location){
      console.log(e.name)
    }
  });
}

const driversByRevenue = function(drivers){
  drivers.forEach(function(driver){
    let newDrivers []=driver.revenue
  newDrivers.sort(function(a,b){
    return a - b
  });
  return newDrivers
}
