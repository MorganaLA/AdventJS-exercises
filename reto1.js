//¡Automatizando envolver regalos de navidad!

function wrapping(gifts) {
  let wrap = "*"
  return gifts.map(gift => wrap.repeat(gift.length + 2) + "\n" 
  + wrap + gift + wrap + "\n" + wrap.repeat(gift.length + 2))
  }