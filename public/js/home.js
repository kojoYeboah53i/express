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

    fetch('http://localhost:4004/api/v1/createOrder', {
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


    let url = '';

    const deleteBtn = document.querySelectorAll('.right .item-list .container .item span')

    
    //display order list
    const showOrderList = async () => {
        const orderList = document.querySelector('.right .item-list .container')
        console.log(orderList)

        let result = await fetch('http://localhost:4004/api/v1/getOrders/isaac')

        if(result.status == 200){
            const results = await result.json();
            console.log(results)
            const { orders } = results;
            console.log(orders)
            console.log(typeof(orders))

        let outputHTML = '';
           orders.map(order => {
                outputHTML += `
                <div class="item">
                <h3 class="first">${order.name}</h3>
                <h3>1</h3>
                <h3>${order.price}</h3>
                <span class="material-symbols-outlined">delete</span>
                </div>
                `
                console.log(order.id)
            })

            orderList.innerHTML = outputHTML;

        }

    }

    showOrderList();
    
