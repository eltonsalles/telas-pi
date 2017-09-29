var lastScroll = 0;

$(document).ready(function(){
  Materialize.toast('Produto adicionado com sucesso!', 4000, 'orange');

  // Verifica o scroll da página para mostrar o botão voltar ao topo
  $(window).scroll(function() {
    var pos = $(this).scrollTop();

    if (pos > lastScroll) {
      $('.ocultar-navbar').slideUp(400);
    } else {
      $('.ocultar-navbar').slideDown(400);
    }

    lastScroll = pos;
  });
});