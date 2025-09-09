const duplicate = (array) => {
  return array.map( item => {
    if (typeof item === 'number') return item * 2;
    else if (typeof item === 'string') return item + item;
    else return null;
  });
}

const getItemTypes = (array) => {
  return array.reduce( (acc, val) => {
    if (typeof val === 'number') {
      acc.numberCnt = acc.numberCnt ? acc.numberCnt + 1 : 1;
    }
    else if (typeof val === 'string') {
      acc.strCnt = acc.strCnt ? acc.strCnt + 1 : 1;
    }
    else if (Array.isArray(val)) {
      acc.arrayCnt = acc.arrayCnt ? acc.arrayCnt + 1 : 1;
    }
    else acc.otherCnt = acc.otherCnt ? acc.otherCnt + 1 : 1;
    return acc;
  }, {});
}

const chooseCallback = (firstCallback, secondCallback, rule) => {
  if (rule === 'first') {
    firstCallback();
  }
  else {
    secondCallback();
  }
}

const customForEach = (array, callback) => {
  if (Array.isArray(array)) {
    array.forEach(callback);
    return 'Success';
  }
  else return 'Cannot iterate over non-array instance'
}

export { duplicate, getItemTypes, chooseCallback, customForEach };