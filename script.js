$(document).ready(() =>{
    $('.features').on('click', (e) => {
        e.preventDefault();
        $('.features-dropdown').slideToggle();
    });

    $('.company').on('click', (e) => {
        e.preventDefault();
        $('.company-dropdown').slideToggle();
    });

    $('.open').on('click', (e) => {
        e.preventDefault();
        $('.nav-items').fadeToggle();
        $('.open').hide();
        $('.close').show();
        $('.overlay').toggle();
    });

    $('.close').on('click', (e) => {
        e.preventDefault();
        $('.nav-items').fadeToggle();
        $('.close').hide();
        $('.open').show();
        $('.overlay').toggle();
    })
});