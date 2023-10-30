//get the varibles by id
let text=document.getElementById('li')
let add=document.getElementById('add')
let def=document.getElementById('defence')

let artodo=[]
//The onload is used for loading page 
window.onload=()=>{
artodo=JSON.parse(localStorage.getItem('artodo')) || []
artodo.forEach(t=>addtodo(t))
}
//When the button will click it will add item after typing the text
add.addEventListener('click',()=>{
       artodo.push(text.value)
       addtodo(text.value)
       text.value=''
       
})

//create the addtodo function for create the para and close 
function addtodo(t)
{
      let para=document.createElement('p')
      let close=document.createElement('button')
     
      para.innerText=t
      close.innerText='X'
      def.appendChild(para)
      def.appendChild(close)
      localStorage.setItem('artodo',JSON.stringify(artodo))
      para.addEventListener('click',()=>
      {
       para.style.textDecoration='line-through'
       remove(t)
      })
      close.addEventListener('click',()=>
      {
        def.removeChild(para)

        def.removeChild(close)
        remove(t)
      })
}
//The remove function is used for if it is index greaterthan -1 then it will be remove used splice
function remove(t)
{
    let index=artodo.indexOf(t)
    if(index>-1)
    {
        artodo.splice(index,1)
    }
    localStorage.setItem('artodo',JSON.stringify(artodo))
}
