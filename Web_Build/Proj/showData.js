


async function getData() {
    let drawdata = await fetch(`https://static.pipezero.com/covid/data.json`);
    let data = await drawdata.json();
    console.log(data);
    renderFullData(data.locations);
  }
  getData();


let renderFullData = (data)=>{
    let dom = document.querySelector(".show_data_container")
    dom.innerHTML = ""
  
    for(let i=0; i< data.length; i++){
      let html = `<div class="card">
      <h2>${data[i].name}</h2>
      <p><i class="fas fa-skull-cow"></i> Death: 16552</p>
      <p><i class="fas fa-skull-cow"></i> Death: 16552</p>
      <p><i class="fas fa-skull-cow"></i> Death: 16552</p>
      <p><i class="fas fa-skull-cow"></i> Death: 16552</p>
      <p><i class="fas fa-skull-cow"></i> Death: 16552</p>
      <button>Detail</button>
    </div>`
    dom.innerHTML+=html
    }
  }