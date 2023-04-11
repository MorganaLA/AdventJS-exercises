//Haciendo inventario de regalos

function getGiftsToRefill(a1, a2, a3) {
    let stock = []
    let gifts = a1.concat(a2,a3);
    let allGifts = Array.from([...new Set(gifts)]); 
     allGifts.forEach(gift =>{ 
      let count=0
       if(a1.find(el => el == gift)){count++}
       if(a2.find(el => el == gift)){count++}
       if(a3.find(el => el == gift)){count++}   
       if(count==1){stock.push(gift)}
     })
      return stock
   }