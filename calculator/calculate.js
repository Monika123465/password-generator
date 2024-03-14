const operator=prompt('enter operator to perform the operation(either +,-,*,/ );')
const a=Number(prompt('enter a number:'))
const b=Number(prompt('enter a number:'))

let result;
if(operator== '+'){
result=a+b
}else if(operator=='-'){
    result=a-b
}else if(operator=="*"){
    result=a*b
}else{
    result=a/b
}
window.alert(result)


