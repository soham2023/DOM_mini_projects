let ine = document.getElementById("ine");
let de = document.getElementById("de");
let re = document.getElementById("re");
let val = document.getElementById("val");

ine.addEventListener("click", () => 
{
    const num = Number(val.innerText);
    if (num >= 10) {
        alert("More than 10 values are not allowed!");
    }
    else {
        val.innerText = num + 1;

    }

});

de.addEventListener("click", () => 
{
    const num = Number(val.innerText);
    
        if (num > 0) {
            val.innerText = num - 1;
        }
        else {
            alert("Negative number is not allowed! ");
        }
    
});

re.addEventListener("click", () => 
{
    val.innerText = 0;
});