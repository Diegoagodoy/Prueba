/* FECHA ACTUAL*/
var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth()+1;
var ano = fecha.getFullYear();
$fecha = document.getElementById("fecha")

$fecha.innerHTML= dia +"/"+mes+"/"+ano

/* SELECCION DE INTERFERENCIAS */

function verificarRI(){
    
    if(document.getElementById("radiointerferencia").checked){
        document.getElementById("texinterferencia").style.display = 'contents';
    } else {
        document.getElementById("texinterferencia").style.display = 'none';
    };
};


/* SELECCION DE OBRAS */
obra = ["obra1","obra2","obra3","obra4","obra5","obra6","obra7","obra8","obra9","obra10","obra11"];
listaObra = ["listaObra1","listaObra2","listaObra3","listaObra4","listaObra5","listaObra6","listaObra7","listaObra8","listaObra9","listaObra10","listaObra11"]
function verificarRB(){
    for(i=0;i<obra.length;i++){
        if(document.getElementById(obra[i]).checked){
            document.getElementById(listaObra[i]).style.display = 'block';
        } else {
            document.getElementById(listaObra[i]).style.display = 'none';
        };
    };
};

/* SELECCION DE AREA OBSERVACIONES */
textObra = ["otro1","otro2","otro3","otro4","otro5","otro6","otro7","otro8","otro9","otro10"]
textTarea = ["texareaobra1","texareaobra2","texareaobra3","texareaobra4","texareaobra5","texareaobra6","texareaobra7","texareaobra8","texareaobra9","texareaobra10"]
function texAreaObra(){
    for(i=0;i<textObra.length;i++){
        if(document.getElementById(textObra[i]).checked){
            document.getElementById(textTarea[i]).style.display = 'contents';
        } else {
            document.getElementById(textTarea[i]).style.display = 'none';
        };
    };
};



/* IMPRESION EN PDF */
document.addEventListener("DOMContentLoaded",()=>{
    const $boton = document.getElementById("PDF");
    $boton.addEventListener("click",()=>{
        const $elementoParaConvertir = document.getElementById("conteiner");
        html2pdf()
        .set({
            margin:1,
            filename:"Solicitud Obra Civiles.pdf",
            image:{
                type: "jpeg",
                quality: 0.98
            },
            html2canvas:{
                scale: 6,
                letterRendering: true,
            },
            jsPDF:{
                unit:"in",
                format: "a3",
                orientation:"portrait"
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err=> console.log(err))
        .finally()
        .then(()=>{
            alert("Solicitud Creada, desde ya gracias!\n    EOC - Equipo de Obras Civiles")
        })
    });
});



/*var formulario = document.getElementById("formulario");
var x = formulario.getElementsByTagName("botonreq");

for(i=0 ; i<x.length ; i++){

    if((x[i].required == true) && (x[i].value =="")){
        alert("Ingrese campo requerido");
        x[i].focus();
        return 0;
        
    } else {
        alert("Formulario Enviado")
    };
};*/