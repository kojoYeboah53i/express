const btn = document.querySelector('.submit');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    
   let url = '/home?username=isaac';
   let url2 = 'http://localhost:4004/home?username=isaac';
   console.log(url)
   window.location.href = url;
   

});
