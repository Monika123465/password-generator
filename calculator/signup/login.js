let arrdata=JSON.parse(localStorage.getItem('signup'))||[]
console.log(arrdata)
document.querySelector('.form').addEventListener('submit',(e)=>{
    e.preventDefault()
    
    
    let loginemail=document.querySelector('.email').value
    let loginpassword=document.querySelector('.password').value
//console.log(arrdata)
    let val=false
    for(let i=0;i<=arrdata.length;i++){
        let logincred=arrdata[0]
        console.log( 'signup',logincred.email,'password',logincred.password)
        console.log('login',loginemail,'passwordlogin',loginpassword)
        if(logincred.email==loginemail &&logincred.password==loginpassword){
            
            val=true
        }
    
        }
        if(val==false){
            alert('wrong credential login again')
        }else{
          let  user={
                email:loginemail,
                password:loginpassword
            }
            alert("login successfull")
            
            localStorage.setItem('login',JSON.stringify(user))
        }
       // window.location='./signup.html'
    })


