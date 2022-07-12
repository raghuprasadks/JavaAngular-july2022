console.log("functions")
function add(n1,n2){
    result = n1+n2
    console.log(result)    
}
add(10,20)
function muliply(n1,n2){
    return n1*n2
}
result = muliply(10,20)
console.log("multiply ",result)
subtract =function (n1,n2){
    return n1-n2
}
result = subtract(200,100)
console.log("subtract ",result)

// Arrow function
/**
function muliply(n1,n2){
    return n1*n2
}
 */
multiarrow = (n1,n2)=>n1*n2
res=multiarrow(10,15)
console.log("arrow function ",res)


