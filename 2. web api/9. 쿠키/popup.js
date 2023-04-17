function createCookie (name){
    const date = new Date();
    date.setDate(date.getDate +1); // 수명은 하루
    let cookie ='';
    cookie += `${name} = true; `;
    cookie += 'expires=' + date.toUTCString();
    document.cookie = cookie;
}
function getCookie(name){
    const cookies = document.cookie.split(';');

    for(let c of cookies){
        if(c.search(name)!==-1){
            return true;            
        }
    }
    return false;
}