var pages = ['home', 'projects', 'about', 'contact'];
function switchTab(obj){
    document.getElementById('cover').addClass = 'slide';
    for(var i = 0; i < pages.length; i++){
        if(obj != pages[i]){
            document.getElementById(pages[i]).style.display = "none";
        }
    }
    document.getElementById(obj).style.display = 'block';
    document.getElementById('cover').removeClass = 'slide';
}