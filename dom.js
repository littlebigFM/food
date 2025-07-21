let main = document.querySelector(".main");

// left-section
let leftSection = document.createElement("div");
leftSection.className = "left-section";

// left-section 1
let leftText1 = document.createElement("div");
leftText1.className = "left-text1";
leftText1.innerText = "GoMeal.";

leftSection.appendChild(leftText1);

// /////////

// left-section 2

let items = [
  { icon: "images/logo1.png", name: "Dashboard" },
  { icon: "images/logo2.png", name: "Food Order" },
  { icon: "images/logo3.png", name: "Favorite" },
  { icon: "images/logo4.png", name: "Message" },
  { icon: "images/logo5.png", name: "Order History" },
  { icon: "images/logo6.png", name: "Bills" },
  { icon: "images/logo7.png", name: "Settings" },
];

let itemsHTML = '<ul class="lists">';

items.forEach((item) => {
  let itemId = item.name.toLowerCase().replace(/\s+/g, "-");

  itemsHTML += `
  <li class="items" id="${itemId}">
  <img src="${item.icon}" alt="img" id="img">
  <p id="${itemId}">${item.name}</p>
  </li>
  `;
});

itemsHTML += "</ul>";

let leftText2 = document.createElement("div");
leftText2.className = "left-text2";
leftText2.innerHTML = itemsHTML;
leftSection.appendChild(leftText2);

/////////////

let leftText3 = document.createElement("div");
leftText3.className = "left-text3";

leftSection.appendChild(leftText3);
// ====================================

// left-section 2

let ls3Html = `<div class="ls3">`;

ls3Html += `
<p id="ls3-1">Upgrade your
Account to Get Free Voucher</p>
<p id="ls3-2">Upgrade</p>
`;

ls3Html += `</div>`;

let leftSection3 = document.createElement("div");
leftSection3.className = "left-section3";
leftSection3.innerHTML = ls3Html;

leftSection.appendChild(leftSection3);
main.appendChild(leftSection);

// end of left-section

// =========================================

// middle-section
let middleSection = document.createElement("div");
middleSection.className = "middle-section";

// middle section 1

let msOne = document.createElement("div");
msOne.className = "middle-section-1";

let msOneText1 = document.createElement("div");
msOneText1.className = "mstext1";
msOneText1.innerText = "Hello, Patricia";

let msOneText2 = document.createElement("div");
msOneText2.className = "mstext2";
msOneText2.innerHTML = `<img src="images/logo8.png" alt="">
<input type="text" placeholder="What do you want to eat today..." id="id-text1">
`;

msOne.appendChild(msOneText1);
msOne.appendChild(msOneText2);
middleSection.appendChild(msOne);
// end of middle section 1

// middle section 2

let msTwo = document.createElement("div");
msTwo.className = "middle-section-2";
msTwo.innerHTML = `  <div class="ms2-text">
    <p id="ms2-t1">Get Discount Voucher Up To 20%</p>
    <p id="ms2-t2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
  </div>
  <div class="ms2-img">
    <img src="images/logo9.png" alt="">
  </div>`;

middleSection.appendChild(msTwo);
// end of middle section 2

// middle section 3

let msThree = document.createElement("div");
msThree.className = "middle-section-3";

let ms3One = document.createElement("div");
ms3One.innerHTML = `<div class="ms3-1">
  <p id="ms3-id1">Category</p>
  <div class="m-tt">
    <a href=""id="ms3-id2">View all</a>
    <img src="images/logo10.png" alt="" id="id-img">
  </div>
</div>`;

// = = = = = = = = = = = = = = = = = = =

let foods = [
  { icon: "images/logo11.png", name: "Bakery" },
  { icon: "images/logo12.png", name: "Burger" },
  { icon: "images/logo13.png", name: "Beverage" },
  { icon: "images/logo14.png", name: "Chicken" },
  { icon: "images/logo15.png", name: "Pizza" },
  { icon: "images/logo16.png", name: "Seafood" },
];

let foodHtml = '<div class="ms3-2">';

foods.forEach((food) => {
  let foodId = food.name.toLowerCase();
  foodHtml += `
  <div class="mstext-icon">
  <img src="${food.icon}" alt="" id="ms3-2img">
<p id="${foodId}">${food.name}</p>
  </div>

`;
});

foodHtml += "</div>";

let ms3Two = document.createElement("div");

ms3Two.innerHTML = foodHtml;
msThree.appendChild(ms3One);
msThree.appendChild(ms3Two);
middleSection.appendChild(msThree);
// end of middle section 3

// middle section 4

let msFour = document.createElement("div");
msFour.innerHTML = `<div class="ms3-1">
  <p id="ms3-id1">Popular Dishes</p>
  <div class="m-tt">
    <a href=""id="ms3-id2">View all</a>
    <img src="images/logo10.png" alt="" id="id-img">
  </div>
</div>`;

middleSection.appendChild(msFour);

// end of middle section 4

// middle section 5

let menu = [
  {
    text: "15% Off",
    img: "images/logo23.png",
    rating: "images/logo26.png",
    name: "Fish Burger",
    amount: 5.59,
  },
  {
    text: "15% Off",
    img: "images/logo24.png",
    rating: "images/logo26.png",
    name: "Beef Burger",
    amount: 5.59,
  },
  {
    text: "15% Off",
    img: "images/logo25.png",
    rating: "images/logo26.png",
    name: "Cheese Burger",
    amount: 5.59,
  },
];

let menuHtml = `<div class="menu">`;

menu.forEach((menu) => {
  menuHtml += `
     <div class="me-nu">
     <p id="discount">${menu.text}</p>
    <div class="m-img"><img src="${menu.img}" alt=""></div>
    <div class="menu-t">
      <div class="menu-tt">
        <img src="${menu.rating}" alt="">
        <p id="menu-t1">${menu.name}</p>
        <p id="menu-t2"><span id="mnt3">$</span>${menu.amount}</p>
      </div>
      <button 
      class="button"
      data-img="${menu.img}"
      data-name="${menu.name}"
      data-amount="${menu.amount}"
      >+</button>
       </div>
      </div>
  `;
});

menuHtml += "</div>";

let msFive = document.createElement("div");
msFive.innerHTML = menuHtml;

let container = [];
let rightSection5 = document.createElement("div");
rightSection5.className = "rs5";

let button = msFive.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("click", () => {
    // alert("Food added! Glutton!");
    let img = button.dataset.img;
    let name = button.dataset.name;
    let amount = parseFloat(button.dataset.amount);

    let existBefore = container.filter((item) => item.name === name);
    if (existBefore.length > 0) {
      existBefore[0].quantity += 1;
    } else {
      container.push({
        img,
        name,
        amount,
        quantity: 1,
      });
    }

    display();
  });
});

function display() {
  let total = 0;
  let rightSection5html = `<div class="rs5">`;

  container.forEach((item) => {
    let itemTotal = item.amount * item.quantity;
    total += itemTotal;

    rightSection5html += `
  <div class="rs5-1">
   <div class="rs5-2">
    <img src="${item.img}" alt="" id="rs5-img">
    <p id="rs5-text1">${item.name}</p>
  </div>
  <p id="rs5-text2">+<span id="t-span">$</span>${item.amount}</p>
  </div>
    `;
    total = total + item.amount;
  });

  rightSection5html += `<div class="total">
  <p id="t1">Total</p>
  <p id="t2">+<span id="t-span">$</span>${total.toFixed(2)}</p>
  </div>`;
  rightSection5html += `</div>`;
  rightSection5.innerHTML = rightSection5html;
}

middleSection.appendChild(msFive);

// end of middle section 5

// middle section 6
let msSix = document.createElement("div");
msSix.innerHTML = `<div class="ms3-1">
  <p id="ms3-id1">Recent Order</p>
  <div class="m-tt">
    <a href=""id="ms3-id2">View all</a>
    <img src="images/logo10.png" alt="" id="id-img">
  </div>
</div>`;

middleSection.appendChild(msSix);
// end of middle section 6

main.appendChild(middleSection);

// end of middle-section

// =========================================

//  right section

let rightSection = document.createElement("div");
rightSection.className = "right-section";

//  right section 1

let images = [{ icon: "images/logo17.png" }, { icon: "images/logo18.png" }];

let imgHtml = `<div class="rs1-images">`;

images.forEach((img) => {
  imgHtml += `
  <div class="rs1-img">
      <img src="${img.icon}" alt="" id="rs-img1">
  </div>

    `;
});

imgHtml += "</div>";

let rsText1 = document.createElement("p");
rsText1.className = "rs-text1";
rsText1.innerText = "Your Balance";

let rightSection1 = document.createElement("div");
rightSection1.className = "right-section1";
rightSection1.innerHTML = imgHtml;
rightSection1.appendChild(rsText1);

rightSection.appendChild(rightSection1);

// = = = = = = = = = = = = = = = = = = = = = = = =  =

//  right section 2

let rightSection2 = document.createElement("div");
rightSection2.className = "right-section2";

let rs2Text1 = document.createElement("div");
rs2Text1.className = "rs2-text1";
rs2Text1.innerHTML = `<p id="rs-tt1">Balance</p>
<p id="rs-tt2">$12.000</p>`;

rightSection2.appendChild(rs2Text1);
//= = = = = = = = = = = = = = = = = = = = = = =

let rsList1 = [
  { icon: "images/logo20.png", text: "Top Up" },
  { icon: "images/logo21.png", text: "Transfer" },
];

let rsList1Html = `<div class="rs2-text2">`;

rsList1.forEach((item) => {
  //   let itemId = item.text.toLowerCase().replace(/\s+/g, "-");
  rsList1Html += `
      <div class="list-text">
       <img src="${item.icon}" alt="">
         <p id="rs2-t1">${item.text}</p>
      </div>
  `;
});

rsList1Html += `</div>`;

let rs2Text2 = document.createElement("div");
rs2Text2.innerHTML = rsList1Html;
rightSection2.appendChild(rs2Text2);
rightSection.appendChild(rightSection2);

// = = = = = = = = = = = = = = = = = = = = = = = = = =

//  right section 3
let rightSection3 = document.createElement("div");
rightSection3.className = "right-section3";
rightSection3.innerHTML = ` <p id="rs3-text1">Your Address</p>
        <div class="rs3-text2">
          <div class="rs3-tt">
            <img src="images/logo22.png" alt="" id="rs3-img" />
            <p id="rst2-t">Elm Street, 23</p>
          </div>
          <p id="rst2-text">Change</p>
        </div>
        <p id="rs3-text3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div class="rs3-text4">
          <p id="rs3t4-t1">Add Details</p>
          <p id="rs3t4-t2">Add Note</p>
        </div>`;

rightSection.appendChild(rightSection3);
// = = = = = = = = = = = = = = = = = = = = = = = = = =

let rightSection4 = document.createElement("p");
rightSection4.className = "right-section4";
rightSection4.innerText = "Order Menu";

rightSection.appendChild(rightSection4);
// = = = = = = = = = = = = = = = = = = = =

rightSection.appendChild(rightSection5);
// = = = = = = = = = = = = = = = = =

let rs6Html = `<div class="rs6">`;

rs6Html += ` <div class="rs6-1">
      <img src="images/logo32.png" alt="" id="rs6-1-img1" />
      <p id="rs6-1-text">Have a coupon code?</p>
      <img src="images/logo31.png" alt="" id="rs6-1-img2" />
    </div>
    <div class="rs6-2">
      <p id="rs6-2-text">Checkout</p>
    </div>`;

rs6Html += `</div>`;

let rightSection6 = document.createElement("div");
rightSection6.className = "right-section6";
rightSection6.innerHTML = rs6Html;

rightSection.appendChild(rightSection6);
main.appendChild(rightSection);
