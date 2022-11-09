const getReBtn = document.querySelector("#reBtn");

const resClick = () => {
    axios
      .get("https://swapi.dev/api/planets/2")
      .then((res) => {
        const residents = res.data.residents;
        for (i = 0; i < residents.length; i++) {
          axios.get(`${residents[i]}`).then((res) => {
            const bodyElm = document.body;
            const h2 = document.createElement("h2");
            let text = document.createTextNode(`${res.data.name}`);
            h2.appendChild(text);
            bodyElm.appendChild(h2);
          });
        }
    })
} 

getReBtn.addEventListener('click', resClick);