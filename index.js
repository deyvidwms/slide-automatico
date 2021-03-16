setInterval( () => {
    next();
}, 2000);
function next() {

    let primeiraImagem = $(".list-itens--item.ativo > img");
    
    let outrasImagens = $(".list-itens--item:not(.ativo) > img");
    
    let slide = $(".slide-patrocinadores--list-itens");
    
    let elementoPai = null;

    primeiraImagem.css({"animation":"firstPatrocinador 0.9s"});
    
    outrasImagens.css({"animation":"movePatrocinador 1s"});
    
    setTimeout( () => {

        primeiraImagem.removeAttr("style");
        
        primeiraImagem.css({"animation":"lastPatrocinador 0.9s"});
        
        outrasImagens.removeAttr("style");        
        
        elementoPai = primeiraImagem.closest("div.ativo");

        slide.append( elementoPai );

        elementoPai.removeClass("ativo");

        $( slide.children()[0] ).addClass("ativo");

    }, 800);

}