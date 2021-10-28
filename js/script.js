function importDom(dom){
    const all = $("importDom",dom);
    for(let i = 0 ; i < all.length ; i++){
        let each = all[i];
        let src = $(each).attr("src");
        each.removeAttribute("src");
        fetch(src)
        .then(function(file){
            file.text().then(function(content){
                $(each).html(content);
            });
        },function(){});
    }
}
$(document).ready(function(){
    importDom(document);
})