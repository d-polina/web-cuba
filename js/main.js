$(document).ready(function(){   
    var $element = $('.skills');
    let counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop() + $(window).height();
  var offset = $element.offset().top
 
  if (scroll > offset && counter == 0) {
    circliful.newCircle({
        percent: 90,
        id: 'circle',
        type: 'simple',
        text: '',
        strokeLinecap: "butt",
        noPercentageSign: false,
        backgroundCircleWidth: 15,
        foregroundCircleWidth: 15,
    });
    circliful.newCircle({
        percent: 75,
        id: 'circle2',
        type: 'simple',
        text: '',
        strokeLinecap: "butt",
        noPercentageSign: false,
        backgroundCircleWidth: 15,
        foregroundCircleWidth: 15,
    });
    circliful.newCircle({
        percent: 70,
        id: 'circle3',
        type: 'simple',
        text: '',
        strokeLinecap: "butt",
        noPercentageSign: false,
        backgroundCircleWidth: 15,
        foregroundCircleWidth: 15,
    });
    circliful.newCircle({
        percent: 85,
        id: 'circle4',
        type: 'simple',
        text: '',
        strokeLinecap: "butt",
        noPercentageSign: false,
        backgroundCircleWidth: 15,
        foregroundCircleWidth: 15,
    });
    counter = 1;
    }
    });
});



let form = document.querySelectorAll('.contact-form-input');
let hold = document.querySelectorAll('.placeholder');

for(let i = 0; i <= form.length; i++){
    form[i].addEventListener('input', function(){
    hold[i].style.display = ( this.value == "" ) ? 'inline' : 'none';
  });
}
