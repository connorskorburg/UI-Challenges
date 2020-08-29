document.querySelector('input').addEventListener('click', function(){
    if(document.querySelector('input').checked == true){
        document.getElementById('price-1').textContent = '19.99'
        document.getElementById('price-2').textContent = '24.99'
        document.getElementById('price-3').textContent = '39.99'
    }
    if(document.querySelector('input').checked == false){
        document.getElementById('price-1').textContent = '199.99'
        document.getElementById('price-2').textContent = '249.99'
        document.getElementById('price-3').textContent = '399.99'
    }
})
