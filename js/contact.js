// código linkeado al HTML de de contact

const emails = [];
class Email{
    constructor(emisor,receptor, mensaje){
        this.id       = emails.length;
        this.emisor   = emisor;
        this.receptor = receptor;
        this.mensaje  = mensaje;
    }
}
function enviarHTML(){
    return `<form id='enviarEmail'>
                <input type="text">
                <input type="text">
                <textarea></textarea>
                <input type="submit">
            </form>`
}
function enviarEvents(){
    $("#enviarEmail").submit(function (e) { 
        e.preventDefault();
        const inputs = e.target.children;
        $.post( "https://jsonplaceholder.typicode.com/posts",
                {emisor: inputs[0].value ,receptor:inputs[1].value, detalle:inputs[2].value}, 
                (data,status)=>{
                    if(status === "success"){
                        let mail  = new Email(data.emisor, data.receptor, data.detalle) 
                        emails.push(mail);
                        console.log(emails);
                        $('#app').prepend(`<h4> EMAIL ENVIADO ${mail.id} A ${mail.receptor}</h4>`);
                        //enviadosRender('body');
                    }
                });
    });
}
function enviarRender(selector){
    $(selector).html(enviarHTML());
    enviarEvents();
}