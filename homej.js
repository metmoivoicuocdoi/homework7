const checkToken = setInterval (() => {
    window.location.replace("./index.html")
    var d = Date(Date.now());
    a = d.toString()				
    document.write("The current date is: " + a)
    localStorage.setItem("a")
},200)