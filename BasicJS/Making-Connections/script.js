
let recentCount = 12;
let requestCount = 3;

document.querySelector("#recentCountBadge").innerText=recentCount;
document.querySelector("#requestCountBadge").innerText=requestCount;

function changeName(element) {
    document.querySelector("#profileName").innerText='Wally Henderson';
};

function acceptRequest(element){
    recentCount++;
    requestCount--;
    document.querySelector("#recentCountBadge").innerText=recentCount;
    document.querySelector("#requestCountBadge").innerText=requestCount;
    element.parentNode.parentNode.remove();

};

function denyRequest(element){
    requestCount--;
    document.querySelector("#requestCountBadge").innerText=requestCount;
    element.parentNode.parentNode.remove();
};
