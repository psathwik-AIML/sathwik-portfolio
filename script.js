let tablinks=document.querySelectorAll(".tab-links")
let tabcontents=document.querySelectorAll(".tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

}

// side menu code 
let sidemenu=document.getElementById('sidemenu')

function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}

let message=document.getElementById('msg')