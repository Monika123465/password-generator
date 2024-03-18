let arrdata=JSON.parse(localStorage.getItem('signup'))||[]
let arr=JSON.parse(localStorage.getItem('login'))

//console.log(arr,'login')

document.querySelector('.form').addEventListener('submit',(e,index)=>{
    e.preventDefault()
    
    
    let loginemail=document.querySelector('.email').value
    let loginpassword=document.querySelector('.password').value
//console.log(arrdata)
    let val=false
    for(let i=0;i<arrdata.length;i++){
        let logincred=arrdata[i]
        console.log( 'signup',logincred.email,'password',logincred.password)
        console.log('login',loginemail,'passwordlogin',loginpassword)
        if(logincred.email==loginemail &&logincred.password==loginpassword){
            
            val=true
        }
    
        }
        if(val===false){
            alert('wrong credential login again')
        }else{
          let  user={
                email:loginemail,
                password:loginpassword
            }
            alert("login successfull")
       
                 
            localStorage.setItem('login',JSON.stringify(user))
        }

        // bolo kya dikkat ahai logout

       
          
    })
    document.querySelector('.logout').addEventListener('click',(e)=>{
        // console.log(arr)
        // arr.splice(index,1)
        // kya hua m
        // localStorage.setItem('login',JSON.stringify(arr))
        console.log('llggin out')
        localStorage.removeItem('login')
        window.location.reload()
      })

