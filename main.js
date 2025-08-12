function welccome(){
    let name = document.getElementById("username").value;
    alert("Welcome "+ name);
}
// function backgroundChange(){
//     document.body.style.backgroundColor = "lightblue";
// }

// let values = document.getElementById("submitButton");
// values.addEventListener("click", backgroundChange);

document.getElementById("submitButton").addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
});

function mouseoverFunction(){
    box.style.backgroundColor = "yellow";
    box.innerText = "Mouse over Event";
}

function mouseOutFunction(){
    box.style.backgroundColor = "lightblue";
    box.innerText = "Mouse out event";
}

let box = document.getElementById("box");
box.addEventListener("mouseover", mouseoverFunction);
box.addEventListener("mouseout", mouseOutFunction);

document.getElementById("course").addEventListener("change", function(){
    let course = this.value;
    document.getElementById("uservalue").innerText = `Your course is: ${course}`; // "Your course is: " + course
})