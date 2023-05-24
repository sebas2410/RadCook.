alert ("BIENVENIDO A RADCOOK");
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);
const formulario__login = document.getElementById('formulario__login');
const inputs = document.querySelectorAll ('#formulariologin');
const formulario__register = document.getElementById('formulario__register');

var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");



function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{4,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,10}$/,
}

const validarFormulario =(e)=>{
    switch(e.target.name){
        case"correo":
        validarCampo(expresiones .correo, e.target, 'correo');

       break;

        case"password":
        validarCampo(expresiones .password, e.target, 'contraseña');
        
        break;

        case"name":
        validarCampo(expresiones .name, e.target, 'nombre');

        break;

        case"apellido":
        validarCampo(expresiones .name, e.target, 'apellido');

        break;

        case"usuario":
        validarCampo(expresiones .usuario, e.target, 'usuario');

        break;

        case"telefono":
        validarCampo(expresiones .telefono, e.target, 'numero');

        break;

        case"correo2":
        validarCampo(expresiones .correo, e.target, 'correo2');

        break;

        case"password2":
        validarCampo(expresiones .password, e.target, 'contraseña2');

        break;

        case "password3":
            validarPassword3();

            break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('form-error');
        document.getElementById(`grupo__${campo}`).classList.add('form-sucess');

    }
    else{
        document.getElementById(`grupo__${campo}`).classList.add('form-error');
        document.getElementById(`grupo__${campo}`).classList.remove('form-sucess');

}
}

const validarPassword3 =() =>{
    const inputPassword2 = document.getElementById('password2');
    const inputPassword3 = document.getElementById('password3');

    if(inputPassword2.value !== inputPassword3.value){
        document.getElementById(`grupo__contraseña3`).classList.add('form-error');
        document.getElementById(`grupo__contraseña3`).classList.remove('form-sucess');

    }
    else{
        document.getElementById(`grupo__contraseña3`).classList.remove('form-error');
        document.getElementById(`grupo__contraseña3`).classList.add('form-sucess');
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
        console.log('tecla levantada');
    });

    formulario__login.addEventListener('submit',(e)=>{
        e.preventDefault();
    });


	
