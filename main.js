
/*eslint prefer-const: "error"*/
/*eslint-env es6*/
/*global , document*/
/*eslint-disable no-console*/

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const close = document.getElementById('close');

openPopUp.addEventListener('click', function(e){
                    e.preventDefault();  
                    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
                    popUp.classList.remove('active');
})     

close.addEventListener('click', () => {
                    popUp.classList.remove('active');
})   