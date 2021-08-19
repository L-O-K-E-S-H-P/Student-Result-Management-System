const data = [
    {
        name: "Lokesh",
        Maths:"100",
        Physics:"99",
        Chemistry : "100",
        Percentage : "99.6 %"
    },
    {
        name: "Sai",
        Maths:"98",
        Physics:"97",
        Chemistry : "96",
        Percentage : "95.5 %"
    },
    {
        name: "Lucky",
        Maths:"90",
        Physics:"91",
        Chemistry : "92",
        Percentage : "92.4 %"
    },
    {
        name: "Charan",
        Maths:"99",
        Physics:"99",
        Chemistry : "99",
        Percentage : "99 %"
    },
    {
        name: "Ram",
        Maths:"97",
        Physics:"100",
        Chemistry : "100",
        Percentage : "97 %"
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "Maths : " + data[i].Maths +"</h3>" + "<h3>" + "Physics : "
            + data[i].Physics +"</h3>" +"<h3>" + "Chemistry : " + data[i].Chemistry +"</h3>"+
            "Percentage : " + data[i].Percentage +"</h3>"

            return;
        }
    }
    results.innerHTML = "<h2>" + "The information about the student is not available !!" + "</h2>"
})
