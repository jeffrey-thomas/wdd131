let reviewCount = Number(localStorage.getItem('review-count')) || 0;
reviewCount++;
localStorage.setItem('review-count',reviewCount);

const counter = document.querySelector('#counter');

if(reviewCount>1)
    counter.innerHTML = `You have now completed ${reviewCount} reviews.`
else
    counter.innerHTML = 'This was your first review.'