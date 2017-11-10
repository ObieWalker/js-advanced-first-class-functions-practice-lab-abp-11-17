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
let newDrivers = [...drivers]
  newDrivers.sort(function(a,b){
   return a.revenue - b.revenue
  });
  return newDrivers
}
const driversByName = function(drivers){
  let newDrivers = [...drivers]
    newDrivers.sort(function(a,b){
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if(nameA< nameB){
        return -1
      }
      if (nameA> nameB){
        return 1
      }
      return 0
    });
    return newDrivers
}
const totalRevenue = function(drivers){
  let totalPay = 0
  drivers.forEach(function(sum){
    totalPay +=  sum.revenue
  })
  return totalPay
}

const averageRevenue = function(drivers){
  let average = 0
  drivers.forEach(function(average){
    average += average.revenue
  })
  return average/drivers.length
}