var pages = ['home', 'projects', 'about', 'contact'];
function switchTab(obj){
    for(var i = 0; i < pages.length; i++){
        if(obj != pages[i]){
            document.getElementById(pages[i]).style.display = "none";
        }
    }
    obj = '#' + obj;
    $(obj).fadeIn();
}