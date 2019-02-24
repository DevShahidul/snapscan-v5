
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
        
        // Begin input common focus and blur for value.
        $('.form-group input, textarea, textarea.form-control').keyup(function(){
            $(this).addClass('value-added')
        })


        $('.form-group input, textarea, textarea.form-control').blur(function(){
            if(!this.value){this.value=this.defaultValue;}
            if(this.value==this.defaultValue){
                $(this).removeClass('value-added')
            }
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
        
        if($(".how-snapscan-work").length){
            $("body").addClass("snapscan-landing")
        }
       
        if($(".accordion-item-wrap").length){
            function toggleChevron(e) {
              $(e.target)
                .prev('.card-header')
                .find("a")
                .toggleClass('mdi-chevron-down mdi-chevron-up');
            }

            $('#accordion').on('hidden.bs.collapse', toggleChevron);
            $('#accordion').on('shown.bs.collapse', toggleChevron);
		}
	})// End ready function.

})(jQuery)
