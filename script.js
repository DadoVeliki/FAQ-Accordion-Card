//let klik=false;
let brojac=0;
let prosli='';
function rotiraj(element){
    let aha=element.firstElementChild;
    console.log("element: "+element);
        console.log(aha);
    /*if(brojac%2==0){
        //aha.style='float:right; padding-right:20px;transform: rotate(180deg);';
        aha.style.cssText+='margin-right:20px;transform: rotate(180deg);';
        
    }
    else{
        aha.removeAttribute("style");
    }*/
    brojac++;
    //klik=true;
    if(prosli==='' || prosli==='gore'){
        prosli='dole';
        aha.style.cssText+='margin-right:20px;transform: rotate(180deg);';
        element.style="font-weight:bold;";
    }
    else{
        prosli='gore';
        aha.removeAttribute("style");
        element.style="";
    }
}