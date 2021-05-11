// 两数相加
let arr = [1,3,6,8];
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

// 

function all(primises) {
    // 1. 传入一个包含promise的数组判断类型是否是数组
    if (!Array.isArray(primises)) {
        return new TypeError("primises not Array");
    }
    let result = [];//存放执行结果的数组
    let count = 0;//对已完成的promise计数
    // 返回一个新的promise
    return new Promise((resolve,reject)=>{
        // 循环promises
        promises.forEach((promise,index) => {
            // promise实例执行状态
            promise.then(res=>{
                // promise实例成功状态
                result[i]=res;
                count++;
                // 如果count等于数组长度，则promises中的promise实例全变为成功状态
                // resolve(result)
                count===promises.length && resolve(result);
            },err=>{
                // 当存在一个promise实例状态变为rejected
                // 则改变all返回的promise的状态为rejected
                reject(err);
            })
        });
    })
}

function deepClone(target) {
    // 判断是否为引用数据类型
    let result;
    if (typeof target ==='object') {
        // Array
        if (Array.isArray(target)) {
            
        }
    }else{
        result = target;
    }
    return result;
}
