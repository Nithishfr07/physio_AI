let form=document.querySelector('#form')
let text=document.querySelector('#email')
let pass=document.querySelector("#pass")
let error1=document.getElementById('error1')
let error2=document.getElementById('error2')
let e1=document.getElementById("e")
let p=document.getElementById("p")
let but=document.getElementById("but")
let page=document.getElementById("page")
let page1=document.getElementById("page1")
let page2=document.getElementById("page2")
let page3=document.getElementById("page3")
let page4=document.getElementById("page4")
let page5=document.getElementById("page5")
let page6=document.getElementById("page6")
let whole=document.getElementById('whole')
let page7=document.getElementById('page7')
let z=" "
form.addEventListener('submit',(e)=>
{   
    if(!Validate())
    {
        e.preventDefault()
    }
    else
    {   
        e.preventDefault()
        let c=text.value.split('.')

        but.classList.add('success')
        page1.classList.add('success')
        whole.classList.add('success')
        page7.classList.add('success')
        p.innerHTML=""
        e1.innerHTML=""
        but.innerHTML="Successfully Signed In"
        page.innerHTML="Membership Details"
        page1.innerHTML=`Name ${z}${z}${z}: ${c[0]}`
        page2.innerHTML=`IETE ID : ${text.value}`
        page3.innerHTML=`Password : ${pass.value}`
        page4.innerHTML=`Membership Status : Student`
        page5.innerHTML=`Membership fee : Yes`
        page6.innerHTML="Go to Home Page"
    }
}
)
function Validate()
{
    let a=text.value
    let b=pass.value
    let success=true
    if(a==='')
    {   
        success=false
        error1.innerHTML="* Please enter your ID"
        e1.classList.add('error')
    }
    else if(!a.includes("iete"))
    {
        success=false
        error1.innerHTML="* Please check whether 'iete' is included"
        e1.classList.add('error')
    }
    else
    {
        success=true
        error1.innerHTML=""
        e1.classList.add('success')
    }
    if(b==='')
    {   
        success=false
        error2.innerText="* Please enter the Password"
        p.classList.add('error')
    }
    else if(b.length<8)
    {   
        success=false
        error2.innerHTML="* Password must contain atleast 8 charcters"
        p.classList.add('error')
    }
    else
    {   
        error2.innerHTML=""
        p.classList.add('success')
    }
    return success
}
