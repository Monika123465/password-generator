let form=document.querySelector('.form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let form=document.querySelector('form')
    let name=document.querySelector('.name').value
    let email=document.querySelector('.email').value
    let password=document.querySelector('.password').value
    // if(email!=='@'){
    // return alert('add @ within email')
    // }
    let emails=email.includes('@')
    console.log("Emails is ", emails)
    if(emails===false){
  return alert('includes @ to your email')
    }

    let passowrdschar=['@','%','&','*',123456789]
    let passwordstring=passowrdschar.some(char=>password.includes(char))
    console.log('password',passwordstring) 
    if(!passwordstring){
        return alert('should be enter special character')
        
    }
    
    
    // if (password[0]!==password[0].toUpperCase()){
    //   return alert('first letter of password should be capital')
    // }
    
    
    let data=new dataadded(name,email,password)
    let dataarr=JSON.parse(localStorage.getItem('signup'))||[]
    dataarr.push(data)
    localStorage.setItem('signup',JSON.stringify(dataarr))

})


function dataadded(n,e,p){
    this.name=n
    this.email=e
    this.password=p
}

