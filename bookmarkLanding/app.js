
for(let i = 1; i < 5; i++){
    document.querySelector(`#question-${i}`).addEventListener('click', function(){
        let img = document.querySelector(`#question-${i} img`);
        console.log(img.src);
        let p = document.getElementById(`p-${i}`);
        console.log(p);
        console.log(p.style.display);
        let span = document.querySelector(`#question-${i} span`);
        if(p.style.display == '' || p.style.display == 'none'){
            span.style.color = '#e75153';
            img.src = './bookmark-landing-page-master/images/icon-arrow-red.svg';
            img.style.transform = 'scaleY(-1)';
            img.style.transition = 'all 250ms ease-in-out';
            p.style.display = 'block';
        } else if (p.style.display == 'block'){
            span.style.color = '#000';
            img.src = './bookmark-landing-page-master/images/icon-arrow.svg';
            img.style.transform = 'scaleY(1)';
            img.style.transition = 'all 250ms ease-in-out';
            p.style.display = 'none';
        }

    })
}

document.getElementById('hambuger').addEventListener('click', function() {
    
});