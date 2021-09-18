async function getData(country) {
    let drawdata = await fetch(
        `https://static.pipezero.com/covid/data.json`
    )   ;
    let data = await drawdata.json;
    console.log(data);
}
getData()