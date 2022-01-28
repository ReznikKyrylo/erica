"use strict"
$(document).ready(function(){

    $('.slider').slick(
        {
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        speed:300,
        easing:'easeInOutQuart'
    });


    $('.doctor_slider').slick(
        {
        arrows: true,
        speed:400,
        easing:'easeInOutQuart',
        slidesToShow : 3,
        responsive: [{
            breakpoint: 706,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            //   centerPadding: '10px',
            }
          }]

    });

    // $('.history_slider').slick(
    //     {
    //     arrows: true,
    //     dots: true,
    //     speed:500,
    //     easing:'easeInOutQuart',
        

    // });

    $('.comment_slider').slick(
        {
        arrows: false,
        dots: true,
        speed:500,
        easing:'easeInOutQuart',
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnfocus: false,
        pauseOnHover: false,
        
    });

    $('.certificats_slider').slick(
        {
        arrows: false,
        dots: true,
        speed:500,
        easing:'easeInOutQuart',
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnfocus: true,
        pauseOnHover: true,
        variableWidth: true,
        centerMode: true,
        
        // infinite: false,
        
        centerPadding: '60px',
        // slidesToShow: 3,
        responsive: [{
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            //   centerPadding: '10px',
            }
          }]
    });

})




document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)

    async function formSend(e){
        e.preventDefault(e)

        let error = formValidate(form)

        let formData = new FormData(form)



        // if(error===0){
        //     form.classList.add('_sending')
        //     let response = await fetch('sendmail.php',{
        //         method : 'POST',
        //         body: formData,
        //     })
        //     if(response.ok){
        //     let result = await response.json()

        //     alert(result.messege)
            
        //     form.reset()
                    
        // }else {
        //     alert('Ошибка')
        //         }

        // } else{alert('Введите данные в поля')}

    }
        
    function formValidate(form){
        let error = 0 
        let formReq = document.querySelectorAll('._req')

        for(let index=0 ;index<formReq.length;index++)
        {
                const input = formReq[index]
                formRemoveError(input)
                if(input.value===''){
                    formAddError(input)
                    error++
                }
        }
        return error
    }

    function formAddError(input){
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }
    function emailTest(input)
    {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }

})



