let notes=[];
const createnote=()=>{
    let title=document.getElementById("title");
    let description=document.getElementById("dscription");
    const note={
        title:title.value,
        description:description.value,
        date:new Date()
    }
    notes.push(note);
    console.log(notes)
    RenderNotes();

}
const RenderNotes=() =>{
    const notelist=document.getElementById("creatednotes");
    notelist.innerHTML='';
    notes.forEach((note,index)=>{
        const li=document.createElement('li');
        li.textContent=note.title;
        const btn=document.createElement('button');
        btn.innerHTML='delete';
        li.append(btn)
        notelist.append(li);
    })
}