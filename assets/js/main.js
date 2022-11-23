$(function() {
  $(window).resize(function() {
    setFullpage()
    setMainHeight()
  })

  //스크롤포함 넓이 $(window).outerWidth()
  if ($(window).outerWidth() < 1280) {
    setFullpage()
    setMainHeight()
  }

  function setMainHeight () {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  function setFullpage () {
    if($(window).outerWidth() >= 1280) {
      location.reload()
    }else {
      $('.full').removeAttr('id')
    }
  }

  $('#fullpage').fullpage({
    // 옵션
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['HOME', 'PROCESS', 'Feature 01', 'Feature 02', 'AFFILIATE', 'FAQ', 'CONTACT US', ''],
    showActiveTooltip: true,
    responsiveWidth: 1279,
    paddingTop: 78,
    onLeave: function(anchorLink, index){
      if(index === 1){
        document.querySelector('.js-main-video').play();
      }
      if(index === 2){
        document.querySelector('.js-process-video').play();
      }
      if (index === 7) {
        $('#fp-nav ul li:nth-last-child(2), #fp-nav ul li:nth-last-child(2) a').addClass('active')
      }
    },
    afterLoad: function(anchorLink, index) {
      $('.contact-section.section, .main-section.section').removeClass('show')
      if (index === 1) {
        $('.main-section.section').addClass('show')
      }
      if (index === 7) {
        $('.contact-section.section').addClass('show')
      }
      if (index === 8) {
        $('.contact-section.section').addClass('show')
        $('#fp-nav ul li:nth-last-child(2), #fp-nav ul li:nth-last-child(2) a').addClass('active')
      }
    }
  });


  $('.js-faq-list-item').on('click', function () {
    const answer = $(this).find('.js-faq-answer')
    // console.log(answer[0], answer[0].offsetHeight)
    if($(this).hasClass('open')) {
      // $('.faq-list').css('pointer-events', 'auto');
      $(this).find('.js-faq-answer-area').animate({'height' : 0, 'margin-bottom': 0}, 300)
    } else {
      if ($(window).width() >= 1280) {
        if ($(this).hasClass('first')) {
          $(this).animate({ 'margin-bottom': '24px' }, 300)
        }
      }
      $(this).find('.js-faq-answer-area').animate({'height' : answer[0].offsetHeight + 'px' }, 300)

      // if(!$('.js-faq-list-item').hasClass('open')) {
      //   $('.faq-list').css('pointer-events', 'none');
      // }
    }

    $(this).toggleClass('open')
  })


  AOS.init({
    duration: 1000
  });
})
