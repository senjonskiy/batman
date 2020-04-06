$(document).ready(function () {
    let tabsItem =$('.tabs-item'); 
    //console.log(tabsItem); //теперь табы можно отсдедить в инспекторе
    tabsItem.on('click touchstart', function(event){ //при кдике срабатывает анонимная функция, внутри которой принимается параметр event
        event.preventDefault(); //отменяет действие браузера по умолчанию в момент срабатывания события
        //console.log('Клик по табу'); //иначе бы в свою очередь при клике срабатывало поведение тега <а>, то есть ссылки
        let activeContent = $(this).attr('href');//название аттрибута Href из текущего элемента при событии
        //console.log(activeContent);//вывести название аттрибута Href при клике на элемент класса tabs-item
        $('.visible').toggleClass('visible');// переключить класс у всех элементов с включённым классом visible
        $(activeContent).toggleClass('visible');//переключить класс у нажатого текущего элемента в момент события.
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    });

    $(window).scroll(function() {
       var top = $(document).scrollTop();
       if (top < 20) {
          $(".header").removeClass('header-fixed '); //animated  fadeIn — TBD
          $(".body").removeClass('header-magrin-patch');
       }
        else {
          $(".header").addClass('header-fixed');  //animated  fadeIn — TBD
          $(".body").addClass('header-magrin-patch');  
       }
    });
});