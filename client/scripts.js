let button = document.getElementById("save")

button.addEventListener("click", saveData);

async function saveData() {
    let name = document.getElementById("song").value;
    let artist = document.getElementById("artist").value;
    let url = document.getElementById("url").value;
    let body = JSON.stringify({name,artist,url_video:url})
    try{
        let response = await fetch('http://localhost:3000/music',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: body
        })
        if(response.status==201){
            let song = await response.body.JSON;
            console.log(song)
        }
    }
    catch(error){
        console.error(error);
    }
    alert("BODY:"+body+"");
}