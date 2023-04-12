//El salto del trineo de Papá Noel

function checkJump(heights) {
    const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
    const cLeft = left.slice(1).every((l, i) => l >= left[i])
    const cRight = heights.slice(1).every((h, i) => h <= heights[i])
   
    return cLeft && cRight && !!left.length && heights.length > 1
   }