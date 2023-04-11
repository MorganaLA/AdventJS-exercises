//¿Cuántas cajas de regalos puede llevar Papá Noel?
 
function distributeGifts(packOfGifts, reindeers) {
    let giftW = packOfGifts.map(gift => gift.length)
    let reindeersC = reindeers.map(reindeer => reindeer.length * 2)
    let giftWT = giftW.reduce((a, b) => a + b, 0);
    let reindeersCT = reindeersC.reduce((a, b) => a + b, 0);
    let totalW = parseInt(reindeersCT / giftWT)
    return totalW;
  }