function addNum (arr,target){
    const map = new Map();
    for (let index = 0; index < arr.length; index++) {
        let tempNum = target - arr[index];
        if (map.has(tempNum)) {
            return [map.get(tempNum),i];
        }else{
            map.set(arr[index],index);
        }
    }
    return []
}
