import $ from 'jquery';

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

export function customSelect(){
    $('.custom-select').selectpicker();
}

export function selectList(lang = ''){

    if(lang == "fr"){
        return [{title:"Mustardee",value:"Mustardee"},{title:"Ketchuptomate",value:"Ketchuptomate"},{title:"Churras",value:"Churras"}]
    }else{
        return [{title:"Mustard",value:"Mustard"},{title:"Ketchup",value:"Ketchup"},{title:"Barbecue",value:"Barbecue"}]
    }
}

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
