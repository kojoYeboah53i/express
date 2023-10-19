// let usr = URLSearchParams.get('username');

// if(!usr){
//     window.location.href = '/login';
// }

const Orderbtns = document.querySelectorAll('div.main_content > div > div.meals > div > div > button');
Orderbtns.forEach(btn => {
btn.addEventListener('click', (e) => {
    e.preventDefault();

    // let meal_id = e.target.getAttribute('data-id')
    let meal_id = e.target.id;
    if(!meal_id){
        return;
    }

    fetch('/api/v1/createOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({meal_id, username: usr})
    }).then(res => res.json())
      .then(data => {
          console.log(data);
      })
      .catch(err => console.log(err));
    });
        });


    fetch('http://localhost:4004/api/v1/createOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({meal_id: 11, username: 'isaac'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

// } )();