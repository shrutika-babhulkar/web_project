// bconst openshopping = document.querySelector(".openshopping");
// const closeshopping = document.querySelector(".closeshopping");
// const list = document.querySelector(".list");
// const listcard =document.querySelector(".listcard");
// const total = document.querySelector(".total");
// const body = document.querySelector("body");
// const quantity = document.querySelector(".quantity");


// openshopping.addEventListener("click", ()=>{
//     body.classList.add("active")
// })

// closeshopping.addEventListener("click", ()=>{
//     body.classList.remove("active")
// })

// let products =[
//     {
//         id: 1,
//         name: "PRODUCT 1",
//         images:"b1.jpg",
//     }
// ]


// let listcards =[];
 
// const initApp = () => {
//     products.forEach((value,key)=>{
//         let newdiv = document.createElement("div");
//         newdiv.classList.add("item");
//         newdiv.innerHTML = `
//         <img src = "img/${value.images}">
//         <div class="title">${value.name}</div>
//         <button onclick ="addtocard(${key})"Add To Cart</button>
//         `
//         list.appendChild(newdiv)

//     })
// }


// initApp()

// const addtocard = (key) => {
//     if(listcards[key]== null){
//         listcards[key = JSON.parse(JSON.stringify(products[key]))];
//         listcards[key].quantity=1
//     }

//     reloadCard();
// }

// const reloadCard = () => {
//     listcard.innerHTML = "";
//     let count = 0;
    

//     listcards.forEach((value, key)=>{
//         count =count+value.quantity;

//         if(value != null){
//             let newdiv = document.createElement("li");
//             newdiv.innerHTML = 
//             `
//             <div> <img src ="img/${value.image}"></div>
//             <div class ="cardtitle"> ${value.name}</div>


//             <div >
//             <button style="background-color: #560bad"
//             class="cardbutton" onclick="changequantity(${key}) value="${value.quantity -1}">-</button>
//             </div>

//             <div >
//             <button style="background-color: #560bad"
//             class="cardbutton" onclick="changequantity(${key}) value="${value.quantity +1}">+</button>
//             </div>
         
//             `

//             listcard.appendChild(newdiv)
//         }

//         total.innerText = totalPrice.toLocalString();
//         quantity.innerText=count;
//     })
// }