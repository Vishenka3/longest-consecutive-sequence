module.exports = function longestConsecutiveLength(array) {
  // your solution here
    let length = 0;
    let count = 0;
    array.sort();
    if(array.length<2) return array.length;
    array.forEach(function (item, i) {
        if(item === array[i+1]-1){
            count ++;
        }else{
            count=0;
        }
        if(length<count) length = count;
    });
    return length+1;
};
