//icone

const  html =document.getElementById("html")
const  css =document.getElementById("css")
const  js =document.getElementById("js")
const  react =document.getElementById("react")
const  bts =document.getElementById("bts")


// title


const thtml=document.getElementById("thtml")
const tcss=document.getElementById("tcss")
const tjs=document.getElementById("tjs")
const treact=document.getElementById("treact")
const tbts=document.getElementById("tbts")



// addEventListener funtion 


html.addEventListener("click", function(){
    html.style.marginTop=`40px`
    thtml.style.opacity=`1`
})

css.addEventListener("click", function(){
    css.style.marginTop=`40px`
    tcss.style.opacity=`1`
    thtml.style.opacity=`0`
    html.style.marginTop=`0`
})

js.addEventListener("click",function(){
    js.style.marginTop=`40px`
    tjs.style.opacity=`1`
    css.style.marginTop=`0`
    tcss.style.opacity=`0`
})

react.addEventListener("click",function(){
    react.style.marginTop=`40px`
    treact.style.opacity=`1`
    js.style.marginTop=`0`
    tjs.style.opacity=`0`
})

bts.addEventListener("click",function(){
    bts.style.marginTop=`40px`
    tbts.style.opacity=`1`
    react.style.marginTop=`0`
    treact.style.opacity=`0`
})
