let jd = document.getElementById('input-box')
let kd = document.getElementById('screen')


jd.addEventListener('keypress', function(e){
    kd.innerText = "You press this => " + e.key
});
