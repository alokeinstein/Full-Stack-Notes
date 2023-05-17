// $("h1").css("color","red");
// $("h1.first").css("color","green");//when class is given
// $("#heading").css("color","purple");//when id is given
$('button').css('margin-left','10px')

//Adding classes
$('h1').addClass('bigBoy')
//$('h1').removeClass('bigBoy')

//text manipulation
// $("button").text("don't fucking click me")

//Attribute manipulation
console.log($('a').attr('href'))//can also be used to find classes for an element
$('a').attr('href','https://www.yahoo.com')

//Adding event listeners
$('h1').click(function(){
    $('h1').css('color','purple')
})



/* let changeColor = document.querySelectorAll('button').length
for(let i=0; i<changeColor; i++){
    document.querySelectorAll('button')[i].addEventListener("click",function(){
        document.querySelector('h1').style.color = "cyan"
    })
}
 */

//Same code using jQuery
// $('button').click(function(){
//    $('h1').css('color','yellow')
// })

//Adding event listener by keypress
$('body').keypress(function(event){
    $('h1').text(event.key)
})



//SIMPLE WAY TO DO CLICK OR KEYPRESS OR ANY OTHER EVENT lISTENER
$('h1').on('mouseover',function(){
    $('h1').css('color','green')
})


/* Prepend/append/after/before */
// $('h1').after('<button>New</button>')
// $('h1').before('<button>New</button>')
// $('h1').prepend('<button>New</button>')
// $('h1').append('<button>New</button>')

/* Animations */
$('.btn').on('click',function(){
    // $('h1').hide()
    // $('h1').show()
    //  $('h1').toggle()

    //  $('h1').fadeIn()
    //  $('h1').fadeOut()
    //  $('h1').fadeToggle()
    
    //  $('h1').slideUp()
    //  $('h1').slideDown()
    //$('h1').slideToggle()

    // $('h1').animate({opacity: .5})//can olny add those css values which have numeric values
    // $('h1').animate({margin: 100})

    //we can also use these methods together for better animations
    $('h1').slideUp().slideDown().animate({opacity: .5})

})