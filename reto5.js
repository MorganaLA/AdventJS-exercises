//Optimizando viajes de Santa

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let totalC = giftsCities.reduce(
      (acc, gifts) => acc.concat(acc.map(gif => [gifts].concat(gif))),
      [[]]
    );
    let optimizedG = totalC.filter(g => g.length <= maxCities);
    let totalGs = optimizedG.map(opt =>
      opt.reduce((a, b) => {
        return a + b;
      }, 0)
    );
    let realGs = totalGs.filter(gifts => gifts <= maxGifts);
    let total = Math.max(...realGs);
    return total;
  }