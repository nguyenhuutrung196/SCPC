var modalBtns = document.querySelectorAll(".modal-open")

modalBtns.forEach(function(btn) {
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modals = btn.closest(".modal").style.display = 'none';
    }
})

const btnToTop = document.querySelector("#toTop");

btnToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});