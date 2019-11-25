import $ from 'jquery';


// labels efects
export function magicLabels(){
    $('.input_element').on('keyup', function(){
        if($(this).val().length > 0){
            $(this).closest('.form-group').find('.labelholder').addClass('apear-top');
            $(this).closest('.form-textarea').find('.labelholder').addClass('textarea-apear-top');
        }else{
            $(this).closest('.form-group').find('.labelholder').removeClass('apear-top');
            $(this).closest('.form-textarea').find('.labelholder').removeClass('textarea-apear-top');
        }
    });
}

// custom dropdown styling
export function customSelect(){
    $('.custom-select').selectpicker();
}


// dopdown multilanguage
export function selectList(lang = ''){

    if(lang == "fr"){
        return [{title:"Mustardee",value:"Mustardee"},{title:"Ketchuptomate",value:"Ketchuptomate"},{title:"Churras",value:"Churras"}]
    }else{
        return [{title:"Mustard",value:"Mustard"},{title:"Ketchup",value:"Ketchup"},{title:"Barbecue",value:"Barbecue"}]
    }
}

// language Menu display
export function menuLang(){
    let currentLang = localStorage.getItem('lang');

    if(currentLang == "fr"){
      $('#enlang').removeClass('d-none');
      $('#frlang').addClass('d-none');
    }else{
      $('#frlang').removeClass('d-none');
      $('#enlang').addClass('d-none');
    }
}


// mask for fields
export function maskPhone(){
    $(".phonemask").on({
        keyup: function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    });
}

// date of birth mask
export function maskDate(){
    $("input[name='date']").on("keyup", function(){
        let v = this.value;
        if (v.match(/^\d{4}$/) !== null) {
            this.value = v + '/';
        } else if (v.match(/^\d{4}\/\d{2}$/) !== null) {
            this.value = v + '/';
        }
    })
}

// currency mask
export function numberMask(){
    $(".currency").on({
      keyup: function() {
        formatCurrency($(this));
      }
    });
  
    function formatNumber(n) {
      return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    function formatCurrency(input, blur) {
  
      var input_val = input.val();
  
      if (input_val === "") { return; }
      var original_len = input_val.length;
      var caret_pos = input.prop("selectionStart");
      
      if (input_val.indexOf("-") >= 0) {
  
        var decimal_pos = input_val.indexOf(",");
  
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);
        left_side = formatNumber(left_side);
        right_side = formatNumber(right_side);
        
        if (blur === "blur") {
          //right_side += "";
        }
  
        right_side = right_side.substring(0, 2);
        input_val = "$" + left_side + "." + right_side;
  
      } else {
        input_val = formatNumber(input_val);
        input_val = "$ " + input_val;
        if (blur === "blur") {
          //input_val += ".00";
        }
      }
      input.val(input_val);
    //   console.log(input_val);
      var updated_len = input_val.length;
      caret_pos = updated_len - original_len + caret_pos;
      //input[0].setSelectionRange(caret_pos, caret_pos);
    }
  }

// form Behaviors
export function typeSelecBehavior(){

    $('input[name="postalcode"]').on('keyup', function(){
      $(this).val($(this).val().toUpperCase());
    });

    $('input').on('keyup', function(){
        $('#error-container').addClass('d-none');
    })
    
  }

// validation form
export function validateForm(){

    // Phone number
    let hasPhoneNumber = false;
    if( document.form.phonenumber.value == "") {
        document.form.phonenumber.classList.add("error-msg"); 
    }else{
        hasPhoneNumber = true;
        document.form.phonenumber.classList.remove("error-msg"); 
    }
    if( (document.form.phonenumber.value).replace(/\D/g,'').length < 10) {
        hasPhoneNumber = false;
        document.form.phonenumber.classList.add("error-msg"); 
    }else{
        hasPhoneNumber = true;
        document.form.phonenumber.classList.remove("error-msg"); 
    }

    // Postal code
    var postalcodeValid = false;

    if( document.form.postalcode.value == "" ) {
        postalcodeValid = false;
        document.form.postalcode.classList.add("error-msg"); 
    }else{
        postalcodeValid = true;
        document.form.postalcode.classList.remove("error-msg"); 
    }

    var regEx = /^\s*[a-ceghj-npr-tvxy]\d[a-ceghj-npr-tv-z](\s)?\d[a-ceghj-npr-tv-z]\d\s*$/i;
    if(regEx.test(document.form.postalcode.value)){
        document.form.postalcode.value = document.form.postalcode.value.toUpperCase();
        postalcodeValid = true;
        document.form.postalcode.classList.remove("error-msg"); 
    }else{
        postalcodeValid = false;
        document.form.postalcode.classList.add("error-msg");  
    }

   
    // email
    var emailValid = false;
    if( document.form.email.value == "") {
        document.form.email.classList.add("error-msg"); 
    }else{
        emailValid = true;
        document.form.email.classList.remove("error-msg"); 
    }

    function validateEmail(email) {
        //var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
        return re.test(email);
    }
      
    if(validateEmail(document.form.email.value)){
        emailValid = true;

        function checkProvider(thisEmail){ 
            var ezise = thisEmail.length; 
            var checkedemail = thisEmail.substr((ezise-4),4);
            return checkedemail.includes('.');
        }

        if(checkProvider(document.form.email.value)){
            emailValid = true;
            document.form.email.classList.remove("error-msg"); 
        }else{
            emailValid = false;
            document.form.email.classList.add("error-msg"); 
        }
    
    }else{
        emailValid = false;
        document.form.email.classList.add("error-msg"); 
    }

         

    if(!hasPhoneNumber || !postalcodeValid || !emailValid){
        $('#error-container').removeClass('d-none');
        return false;
        
    }else{
        return true;
    }
}
