$(function(){
    var input = $('form [name=inputName1]');
    var button = $('button [name=buttonName1]');
    input.on('keypress', function(e){
         if(e.keyCode === "undefined" || e.keyCode === 13){
             e.preventDefault();
             button.trigger('click');
         }
         return false;
    });
    button.on('click', function(){
        console.log(input.val());
    });

})