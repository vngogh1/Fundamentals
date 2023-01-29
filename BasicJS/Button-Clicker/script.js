function logClick(element) {
    if (element.innerText === "Logout") {
        element.innerText = "Login"; 
    } else if (element.innerText === "Login") {
        element.innerText = "Logout"; 
    }
}

function remove(element) {
    element.remove();
}

function likeAlert(element) {
    alert("Ninja was liked")
}