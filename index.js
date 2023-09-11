function myEach(collection, alert){
    Object.values(collection).forEach((element) => alert(element))
    return collection
}

function myMap(collection, callback) {
    const newArray =  Object.values(collection).map((element) => callback(element))
    return newArray
}


function myReduce(collection, callback, acc) {
      if (acc === undefined) {
        acc = Object.values(collection)[0];
        collection = Object.values(collection).slice(1);
      }
      return collection.reduce((acc, currentValue) => callback(acc, currentValue, collection), acc);
    }



function myFind(collection, predicate) {
    const result = Object.values(collection).find((element => predicate(element, collection)))
    return result
}

function myFilter(collection, predicate) {
    const result = Object.values(collection).filter((element => predicate(element, collection)))
    return result
}

function mySize(collection) {
    return Object.values(collection).length
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0]
    }    
    return array.slice(0, n)
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length-1]
    }
    return array.slice(-n)
}

function myKeys(obj) {
    return Object.keys(obj)
}

function myValues(obj) {
    return Object.values(obj)
}