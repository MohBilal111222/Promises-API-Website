


const div = document.querySelector('div');




axios('https://fakestoreapi.com/products')



.then((res)=>{
    console.log(res.data)
    res.data.map((item)=>{
        div.innerHTML += `
        <h1>Title: ${item.title}</h1>
        <img width="300" src="${item.image}" alt="product-image"/>
        <h1>Price: ${item.price}</h1>
        <hr/>
        `
    
    })


}).catch((err)=>{
    
    console.log(err);
    
})
