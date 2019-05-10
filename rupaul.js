function fetchParticipantes(url){fetch (url)
.then (res=>res.json) //interprete los datos como json
.then (data=> {
    const ul=document.querySelector('ul#listado-participantes');
    let lis=''
    for (let i = 0; index < data.length; i++) {
    <li>
       < img src="${data[i].image_url}" />
       <p>${data[i].name}</p> 
       <p>${data[i].winner ? 'si': 'no'}</p>
    </li>
        
       
    }
    ul.innerHTML=lis;
});
}
 /* function winners() {fetch ('http://www.nokeynoshade.party/api/queens/winners')
.then (res=>res.json) //interprete los datos como json
.then (data=> {
    const ul=document.querySelector('ul#listado-participantes');
    let lis=''
    for (let i = 0; index < data.length; i++) {
    <li>
       < img src="${data[i].image_url}" />
       <p>${data[i].name}</p> 
       <p>${data[i].winner ? 'si': 'no'}</p>
    </li>
        
       
    } 
    ul.innerHTML=lis;
});
} */
    document.getElementById('all').onclick=function () {
        fetchParticipantes('http://www.nokeynoshade.party/api/queens/all')
        
    }
    document.getElementById('winners').onclick=function () {
        fetchParticipantes('http://www.nokeynoshade.party/api/queens/winners')}

    fetchParticipantes('http://www.nokeynoshade.party/api/queens/all')