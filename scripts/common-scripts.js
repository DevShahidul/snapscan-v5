
;(function($){
	$(function(){

        // Begin input common focus and blur for value.
        var input= $('input:text,input[type="email"],input[type="search"],input[type="tel"],input[type="number"],input:password,textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = '';
                $(this).parent().addClass('active')
            }
        })
        .blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
                 $(this).parent().removeClass('active');
            }
        })
        
        $(input).focus(function () {
            $(this).parent().addClass('focus');
        }).blur(function () {
            $(this).parent().removeClass('focus');
        });
        
        // Ends input common focus and blur for value.
		
        // Phone nav click function 
        $('#phone-nav').click(function(){
            $(".nav-wrap").slideToggle();
        });
        
        if($("select.styled-select").length){
            $('select.styled-select').selectric();
        }
        
        
        $(".navbar-toggler").click(function(){
            $("body").toggleClass("shown")
        })
       
		
	})// End ready function.

})(jQuery)
