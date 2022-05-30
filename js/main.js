let input = document.querySelectorAll('.contact-form-input');
let hold = document.querySelectorAll('.placeholder');

for(let i = 0; i <= input.length; i++){
    input[i].addEventListener('input', function(){
    hold[i].style.display = ( this.value == "" ) ? 'inline' : 'none';
  });
}