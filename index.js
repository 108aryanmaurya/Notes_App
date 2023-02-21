const btn2=document.querySelector(".btn2")
const notes=JSON.parse(localStorage.getItem('notes'));
btn2.addEventListener('click',()=>{
addNewnote();
})
if(notes){
    notes.forEach(text=>{
        addNewnote(text)
    })
}

function addNewnote(text=""){
    let sec=document.querySelector(".flex")
    const note=document.createElement("div")
    
    note.classList.add("note")

    note.innerHTML=`
       
        <div class="head">
            <div class="flex t-icons">
                <i class="fa fa-pencil-square-o" aria-hidden="true" id="button"></i>pencil
                <i class="fa fa-trash" aria-hidden="true"></i>delete
            </div>
        </div>
        <div class="t-area ${text ? "":"hidden"}" id="main"></div>
        <textarea class="${text? "hidden":""}"></textarea>
    
    `
    // let box=document.querySelector('#box')
    
    
    let btn=note.querySelector('#button')
    console.log(sec)
    let t_area=note.querySelector(".t-area")
    let textarea=note.querySelector("textarea")
   const dlt=note.querySelector(".fa-trash")
    textarea.value=text;
    t_area.innerHTML=text;
    btn.addEventListener('click',()=>{
          
            // console.log("hi i work")
            // d_block.style.display="block";
            t_area.classList.toggle("hidden")
            textarea.classList.toggle("hidden");
        //    console.log("hi i work too")
        })
dlt.addEventListener('click',()=>{
    note.remove();
})
        textarea.addEventListener("input",(e)=>{
            const  {value} =e.target;
            t_area.innerHTML=value
            updateLs();
        });
    
        document.body.appendChild(note);
}

function updateLs(){
    const notesText=document.querySelectorAll("textarea")
    const notes=[];
    
    notesText.forEach(text=>{
        notes.push(text.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes))
console.log("i work")
}

let s="fwkfkewfn"




