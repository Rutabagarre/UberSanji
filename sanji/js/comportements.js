document.addEventListener('DOMContentLoaded', principale) ;

function principale() {
    console.log("Je suis le programme principal !");
    let mobileNav = document.querySelector('.mobileNav');

    //Afficher le menu
    document.querySelector(".navBouton").addEventListener('click', afficherMenu);
    function afficherMenu() {
        mobileNav.style.display='flex';
    }
    //Close
    document.getElementById('close').addEventListener('click', fermerMenu)
    document.querySelector("main").addEventListener('click', fermerMenu)
    function fermerMenu() {
        mobileNav.style.display='none';
    }
    //Droitier-Gaucher
    document.getElementById('cote').addEventListener('click', changerCote);
    function changerCote() {
        if (mobileNav.style.right===''){
            mobileNav.style.right='0'
            mobileNav.style.left=''
            document.querySelector('.droitier-gaucher').textContent=' Gaucher'
        }
        else {
            mobileNav.style.left='0'
            mobileNav.style.right=''
            document.querySelector('.droitier-gaucher').textContent=' Droitier'
        }
    }
}