document.querySelector("#btn").addEventListener("click", function(){
    var num = Math.random() * 100;
    var lovePercent = (Math.floor(num +1));

    var name1 = document.querySelector("#name1").value;
    var name2 = document.querySelector("#name2").value;

    document.querySelector("h1").innerHTML = name1 + " and " + name2 + " love each other " + lovePercent + "%"
})
