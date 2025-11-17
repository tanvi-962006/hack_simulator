async function hack(){
return new Promise((resolve,reject)=>{
    let timeout =1+5*Math.random()
    setTimeout(()=>{
        resolve("Hacking Complete")},timeout*1000
    )
})
}

let arr=["Initializing Hacking","Reading your files","Password files Detected", "Sending all passwords and personal files to server","Cleaning up"]
async function startHack(){
    for (let msg of arr) {
     await hack();
  let box = document.createElement("div");
  box.className = "box";
   box.innerHTML=msg
    document.querySelector(".container").appendChild(box); 
    let v = setInterval (()=>{
        let a = document.querySelector(".container").lastElementChild
        if(a.innerHTML.endsWith("...")){
             a.innerHTML = a.innerHTML.slice(0, a.innerHTML.length-3)
        }
        else{
            a.innerHTML=a.innerHTML+"."}}, 100)
            await hack()
            clearInterval(v)
  }
  
}
startHack();

