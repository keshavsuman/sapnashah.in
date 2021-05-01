let eventHTML = ()=>``;

$(document).ready(async ()=>{
    // let url = window.location.host+'/event/getAllEvents';
    let headers= {
        'Access-Control-Allow-Origin':'http://localhost:5000'
    };
    console.log('asfb');
    let url = 'http://localhost:5000/event/getAllEvents';
    let data = await fetch(url,{headers:headers});
    console.log(data);
});
