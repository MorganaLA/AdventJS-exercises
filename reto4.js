// Una caja dentro de otra caja y otra caja

function fitsInOneBox(boxes) {
    boxes.sort((a, b) => a.l - b.l);
    for(let i = 0; i < boxes.length - 1; i++){
      let boxa = boxes[i]
      let boxb = boxes[i + 1]
      if (!(boxa.l < boxb.l && boxa.w < boxb.w && boxa.h < boxb.h)){
        return false;
      }} return true;
  }