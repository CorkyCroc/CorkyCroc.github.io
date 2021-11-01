


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
      <p><i class="fad fa-lungs-virus"></i>Cases: ${data[i].cases}</p>
      <p><i class="fas fa-ambulance"></i>Cases Today: ${data[i].casesToday}</p>
      <p><i class="fas fa-skull"></i>Death: ${data[i].death}</p>
      <p><i class="fad fa-procedures"></i>Treating: ${data[i].treating}</p>
      <p><i class="fad fa-syringe"></i>Recovered: ${data[i].recovered}</p>
    </div>`
    dom.innerHTML+=html
    }
  }