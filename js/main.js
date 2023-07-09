$(function(){

    // $('.m_menu').click(function(){
    //     $('.m_gnb').animate({'left':0},500)
    //     $('.cover').fadeIn();
    // })
    // $('.m_close').click(function(){
    //     $('.cover').fadeOut();
    //     $('.m_gnb').animate({'left':-274},500)
    // })

    // $('.m_menu').click(function(){
    //     $('.m_menu').toggleClass('on');
    // })



    // 스위치 기법

    let sw = true
    $('.m_menu').click(function(){
        if(sw == true){
            $('.m_gnb').animate({'left':0})
            $('.cover').fadeIn();
            $('.wrap').animate({'left':274})
            $('.m_menu').addClass('on')
            sw = false

        }else{
            $('.m_menu').removeClass('on')
            $('.m_gnb').animate({'left':-274})
            $('.cover').fadeOut();
            $('.wrap').animate({'left':0})
            
            sw = true

        }


        
    })
  



})