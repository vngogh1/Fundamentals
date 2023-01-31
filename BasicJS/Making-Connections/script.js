
let recentCount = 12;
let requestCount = 3;

document.getElementById("recentCountBadge").innerText=recentCount;
document.getElementById("requestCountBadge").innerText=requestCount;

function changeName(element) {
    document.getElementById("profileName").innerText='Wally Henerson';
};

function acceptRequest(element){
    recentCount++;
    requestCount--;
    document.getElementById("recentCountBadge").innerText=recentCount;
    document.getElementById("requestCountBadge").innerText=requestCount;
    element.parentNode.parentNode.remove();

};

function denyRequest(element){
    requestCount--;
    document.getElementById("requestCountBadge").innerText=requestCount;
    element.parentNode.parentNode.remove();
};
