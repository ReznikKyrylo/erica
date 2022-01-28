//obstejennya
const obstejennya = document.querySelector('.obstejennya')
const obstejennya_pricelist = document.querySelector('.obstejennya_pricelist')
const card_text = document.querySelectorAll('.card_text')
const services_card = document.querySelector('.services_card')

var styleElem = document.head.appendChild(document.createElement("style"));

obstejennya.addEventListener('click',function(e){
    disabled_c2()
    disabled_c3()
    disabled_c4()
    disabled_c5()
    disabled_c6()
    disabled_c7()
    disabled_c8()
    disabled_c9()
    obstejennya_pricelist.classList.toggle('_activeM')    
    card_text[0].classList.toggle('_active_zgornytu')
    if(!obstejennya_pricelist.classList.contains('_activeM')){
        card_text[0].innerHTML = 'Обстеження'
        styleElem.innerHTML = ".services_box_wrapper .card_1::after {transform: rotate(0deg);}"
    } else {card_text[0].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_1::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})


//vidbiluvanya
const vidbiluvanya = document.querySelector('.vidbiluvanya')
const vidbiluvanya_pricelist = document.querySelector('.vidbiluvanya_pricelist')

// const services_card = document.querySelector('.services_card')
// var styleElem = document.head.appendChild(document.createElement("style"));

vidbiluvanya.addEventListener('click',function(e){
    disabled_c1()
    disabled_c3()
    disabled_c4()
    disabled_c5()
    disabled_c6()
    disabled_c7()
    disabled_c8()
    disabled_c9()
    vidbiluvanya_pricelist.classList.toggle('_activeM')    
    card_text[1].classList.toggle('_active_zgornytu')
    if(!vidbiluvanya_pricelist.classList.contains('_activeM')){
        card_text[1].innerHTML = 'Відбілювання'
        styleElem.innerHTML = ".services_box_wrapper .card_2::after {transform: rotate(0deg);}"
    } else {card_text[1].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_2::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})


//ortodont
const ortodont = document.querySelector('.ortodont')
const ortodont_pricelist = document.querySelector('.ortodont_pricelist')

// const services_card = document.querySelector('.services_card')
// var styleElem = document.head.appendChild(document.createElement("style"));

ortodont.addEventListener('click',function(e){
    disabled_c1()
    disabled_c2()
    disabled_c4()
    disabled_c5()
    disabled_c6()
    disabled_c7()
    disabled_c8()
    disabled_c9()
    ortodont_pricelist.classList.toggle('_activeM')    
    card_text[2].classList.toggle('_active_zgornytu')
    if(!ortodont_pricelist.classList.contains('_activeM')){
        card_text[2].innerHTML = 'Ортодонтія'
        styleElem.innerHTML = ".services_box_wrapper .card_3::after {transform: rotate(0deg);}"
    } else {card_text[2].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_3::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})

//impl
const implant = document.querySelector('.implant')
const implant_pricelist = document.querySelector('.implant_pricelist')

// const services_card = document.querySelector('.services_card')
// var styleElem = document.head.appendChild(document.createElement("style"));

implant.addEventListener('click',function(e){
    disabled_c1()
    disabled_c2()
    disabled_c3()
    disabled_c5()
    disabled_c6()
    disabled_c7()
    disabled_c8()
    disabled_c9()
    implant_pricelist.classList.toggle('_activeM')    
    card_text[3].classList.toggle('_active_zgornytu')
    if(!implant_pricelist.classList.contains('_activeM')){
        card_text[3].innerHTML = 'імплантація'
        styleElem.innerHTML = ".services_box_wrapper .card_4::after {transform: rotate(0deg);}"
    } else {card_text[3].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_4::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})


//prof_gigiena
const prof_gigiena = document.querySelector('.prof_gigiena')
const prof_gigiena_pricelist = document.querySelector('.prof_gigiena_pricelist')

// const services_card = document.querySelector('.services_card')
// var styleElem = document.head.appendChild(document.createElement("style"));

prof_gigiena.addEventListener('click',function(e){
    disabled_c1()
    disabled_c2()
    disabled_c3()
    disabled_c4()
    disabled_c6()
    disabled_c7()
    disabled_c8()
    disabled_c9()
    prof_gigiena_pricelist.classList.toggle('_activeM')    
    card_text[4].classList.toggle('_active_zgornytu')
    if(!prof_gigiena_pricelist.classList.contains('_activeM')){
        card_text[4].innerHTML = 'професійна<br>гігієна'
        styleElem.innerHTML = ".services_box_wrapper .card_5::after {transform: rotate(0deg);}"
    } else {card_text[4].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_5::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})


//hirurgiya
const hirurgiya = document.querySelector('.hirurgiya')
const hirurgiya_pricelist = document.querySelector('.hirurgiya_pricelist')

// const services_card = document.querySelector('.services_card')
// var styleElem = document.head.appendChild(document.createElement("style"));

hirurgiya.addEventListener('click',function(e){
    disabled_c1()
    disabled_c2()
    disabled_c3()
    disabled_c4()
    disabled_c5()
    disabled_c7()
    disabled_c8()
    disabled_c9()
    hirurgiya_pricelist.classList.toggle('_activeM')    
    card_text[5].classList.toggle('_active_zgornytu')
    if(!hirurgiya_pricelist.classList.contains('_activeM')){
        card_text[5].innerHTML = 'хірургія'
        styleElem.innerHTML = ".services_box_wrapper .card_6::after {transform: rotate(0deg);}"
    } else {card_text[5].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_6::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})


//endodontiya
const endodontiya = document.querySelector('.endodontiya')
const endodontiya_pricelist = document.querySelector('.endodontiya_pricelist')

// const services_card = document.querySelector('.services_card')
// var styleElem = document.head.appendChild(document.createElement("style"));

endodontiya.addEventListener('click',function(e){
    disabled_c1()
    disabled_c2()
    disabled_c3()
    disabled_c4()
    disabled_c5()
    disabled_c6()
    disabled_c8()
    disabled_c9()
    endodontiya_pricelist.classList.toggle('_activeM')    
    card_text[6].classList.toggle('_active_zgornytu')
    if(!endodontiya_pricelist.classList.contains('_activeM')){
        card_text[6].innerHTML = 'ендодонтія'
        styleElem.innerHTML = ".services_box_wrapper .card_7::after {transform: rotate(0deg);}"
    } else {card_text[6].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_7::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})

//restovratsiya
const restovratsiya = document.querySelector('.restovratsiya')
const restovratsiya_pricelist = document.querySelector('.restovratsiya_pricelist')

// const services_card = document.querySelector('.services_card')
// var styleElem = document.head.appendChild(document.createElement("style"));

restovratsiya.addEventListener('click',function(e){
    disabled_c1()
    disabled_c2()
    disabled_c3()
    disabled_c4()
    disabled_c5()
    disabled_c6()
    disabled_c7()
    disabled_c9()
    restovratsiya_pricelist.classList.toggle('_activeM')    
    card_text[7].classList.toggle('_active_zgornytu')
    if(!restovratsiya_pricelist.classList.contains('_activeM')){
        card_text[7].innerHTML = 'реставрація'
        styleElem.innerHTML = ".services_box_wrapper .card_8::after {transform: rotate(0deg);}"
    } else {card_text[7].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_8::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})

//ortopediya
const ortopediya = document.querySelector('.ortopediya')
const ortopediya_pricelist = document.querySelector('.ortopediya_pricelist')

// const services_card = document.querySelector('.services_card')
// var styleElem = document.head.appendChild(document.createElement("style"));

ortopediya.addEventListener('click',function(e){
    disabled_c1()
    disabled_c2()
    disabled_c3()
    disabled_c4()
    disabled_c5()
    disabled_c6()
    disabled_c7()
    disabled_c8()
    ortopediya_pricelist.classList.toggle('_activeM')    
    card_text[8].classList.toggle('_active_zgornytu')
    if(!ortopediya_pricelist.classList.contains('_activeM')){
        card_text[8].innerHTML = 'ортопедія'
        styleElem.innerHTML = ".services_box_wrapper .card_9::after {transform: rotate(0deg);}"
    } else {card_text[8].innerHTML = 'Згорнути'
            
            styleElem.innerHTML = ".services_box_wrapper .card_9::after{transform: rotate(45deg) translate(-4px, 5px);}"           
}


})

const disabled_c9 = function(){
    ortopediya_pricelist.classList.remove('_activeM')    
    card_text[8].classList.remove('_active_zgornytu')
    card_text[8].innerHTML = 'ортопедія'
}

const disabled_c8 = function(){
    restovratsiya_pricelist.classList.remove('_activeM')    
    card_text[7].classList.remove('_active_zgornytu')
    card_text[7].innerHTML = 'реставрація'
}

const disabled_c7 = function(){
    endodontiya_pricelist.classList.remove('_activeM')    
    card_text[6].classList.remove('_active_zgornytu')
    card_text[6].innerHTML = 'ендодонтія'
}
const disabled_c6 = function(){
    hirurgiya_pricelist.classList.remove('_activeM')    
    card_text[5].classList.remove('_active_zgornytu')
    card_text[5].innerHTML = 'хірургія'
}

const disabled_c5 = function(){
    prof_gigiena_pricelist.classList.remove('_activeM')    
    card_text[4].classList.remove('_active_zgornytu')
    card_text[4].innerHTML = 'професійна<br>гігієна'
}

const disabled_c4 = function(){
    implant_pricelist.classList.remove('_activeM')    
    card_text[3].classList.remove('_active_zgornytu')
    card_text[3].innerHTML = 'імплантація'
}

const disabled_c2 = function(){
    vidbiluvanya_pricelist.classList.remove('_activeM')    
    card_text[1].classList.remove('_active_zgornytu')
    card_text[1].innerHTML = 'Відбілювання'
}
const disabled_c1 = function(){
    obstejennya_pricelist.classList.remove('_activeM')    
    card_text[0].classList.remove('_active_zgornytu')
    card_text[0].innerHTML = 'Обстеження'
}
const disabled_c3 = function(){
    ortodont_pricelist.classList.remove('_activeM')    
    card_text[2].classList.remove('_active_zgornytu')
    card_text[2].innerHTML = 'Ортодонтія'
}




$(window).resize(function() {
    
    var x = document.documentElement.clientWidth;
        if (x <= 830) {
          $('.obstejennya_pricelist').appendTo('#obs');
          $('.vidbiluvanya_pricelist').appendTo('#vid');
          $('.ortodont_pricelist').appendTo('#ort');
          $('.implant_pricelist').appendTo('#imp');
          $('.prof_gigiena_pricelist').appendTo('#prof_gig');
          $('.hirurgiya_pricelist').appendTo('#hir');
          $('.endodontiya_pricelist').appendTo('#endo');
          $('.restovratsiya_pricelist').appendTo('#rest');
          $('.ortopediya_pricelist').appendTo('#ortp');          
        } 

        if(x<=567){
            $('#obs').appendTo('#obs_m');
            $('#vid').appendTo('#vid_m');
            $('#ort').appendTo('#ort_m');
            $('#imp').appendTo('#imp_m');
            $('#prof_gig').appendTo('#prof_gig_m');
            $('#hir').appendTo('#hir_m');
            $('#endo').appendTo('#endo_m');
            $('#rest').appendTo('#rest_m');
            $('#ortp').appendTo('#ortp_m');   
        }


        
    res()
        });




        

 let res = function(){
    var x = document.documentElement.clientWidth;

        if (x <= 830) {
            $('.obstejennya_pricelist').appendTo('#obs');
            $('.vidbiluvanya_pricelist').appendTo('#vid');
            $('.ortodont_pricelist').appendTo('#ort');
            $('.implant_pricelist').appendTo('#imp');
            $('.prof_gigiena_pricelist').appendTo('#prof_gig');
            $('.hirurgiya_pricelist').appendTo('#hir');
            $('.endodontiya_pricelist').appendTo('#endo');
            $('.restovratsiya_pricelist').appendTo('#rest');
            $('.ortopediya_pricelist').appendTo('#ortp'); 
        } 

        if(x<=583){
            $('#obs').appendTo('#obs_m');
            $('#vid').appendTo('#vid_m');
            $('#ort').appendTo('#ort_m');
            $('#imp').appendTo('#imp_m');
            $('#prof_gig').appendTo('#prof_gig_m');
            $('#hir').appendTo('#hir_m');
            $('#endo').appendTo('#endo_m');
            $('#rest').appendTo('#rest_m');
            $('#ortp').appendTo('#ortp_m');   
        }



 }
 res()



