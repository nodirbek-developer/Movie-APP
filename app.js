const loader=document.querySelector(".loader");
setTimeout(()=>{
    loader.classList.add("d-none")
},1000);

const searchInput=document.querySelector(".searchInput");
const searchBtn=document.querySelector(".searchBtn");
const main=document.querySelector(".main");

searchInput.addEventListener("change",(e)=>{
    main.innerHTML="";
    getData(e.target.value)
});
async function getData(value){
    const response=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=84d5e5c4&s=${value}`);
    const result=await response.json();
    const data=result.Search;
    data.map(item=>{
        //div
        const div=document.createElement('div');
        main.appendChild(div)
        div.classList.add("MovieCard");
        //img
        const img=document.createElement("img");
        img.src=item.Poster
        div.appendChild(img);
        img.classList.add("img")
        //h3
        const h3=document.createElement("h3");
        h3.innerHTML=item.Title;
        div.appendChild(h3);
        //p
        const p=document.createElement("p");
        p.innerHTML=item.Year;
        div.appendChild(p);

    })
}
