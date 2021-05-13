
class checkYuGiOh {
    constructor(n){
        this.n=n;
        const arr=[];
        for(let i=1;i <= n; i++){
        i % 2 == 0 && i % 3 == 0 && i % 5 == 0 ?
        arr.push("yu - gi-oh")
        :i % 2 == 0 && i % 3 == 0 ?
        arr.push("yu -gi")
        :i % 3 == 0 && i % 5 == 0 ?
        arr.push("gi-oh")
        :i % 2 ==0 && i % 5 == 0 ?
        arr.push("yu-oh") 
        :i % 2== 0 ?
        arr.push("yu")
        :i % 3 == 0 ?
        arr.push("gi")
        :i % 5 == 0 ?
        arr.push("oh")
        : arr.push(i)
        }
        return arr;
    }
    
    
    
}
const run = new checkYuGiOh(10);
console.log(run)
    

    

    
 