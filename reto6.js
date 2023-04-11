//Creando adornos navideños

function createCube(size) {
    let cube = '';
    for (let i = 1; i <= size; i++) {
      let line =
        ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n';
      cube = cube.concat(line);
    }
    for (let i = size; i >= 1; i--) {
      let lineR =
        ' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size) + '\n';
      cube = cube.concat(lineR);
    }
    let complete = cube.slice(0, -1);
    return complete;
  }
  