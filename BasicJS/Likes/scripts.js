console.log('JS is present');
let totalLikes = 0;
console.log (totalLikes);

function myFunction(element) {
    console.log('Button engaged!');
    totalLikes++;
    if (totalLikes === 1) {
        document.querySelector('#likeCount').innerText=('1 like');
    } else {
        document.querySelector('#likeCount').innerText=(totalLikes + ' likes');
    }

}

