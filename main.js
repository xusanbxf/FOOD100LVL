const products = {
    plainBurger: {
        name: 'Gamburger',
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Gamburger Fresh',
        price: 20500,
        kcall: 700,
        amount: 0,

        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'Fresh Combo',
        price: 31900,
        kcall: 1100,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
}
const productBtn = document.querySelector('.main__product-number'),
productItem = document.querySelectorAll('.main__product'),
allMain = document.querySelector('.main'),
plus = document.querySelectorAll('.plus'),
minus = document.querySelectorAll('.minus'),
calories = document.querySelector('.main__product-kcall'),
priceBtn = document.querySelector('.addCart'),
productNum = document.querySelectorAll('.main__product-num'),
print = document.querySelector('.receipt '),
chekList = document.querySelector('.receipt__window'),
play = document.querySelector('.receipt__window-btn'),
chekInfo = document.querySelector('.receipt__window-out')
productPrice = document.querySelector('.main__product-price');

plus.forEach(btn =>{
    btn.addEventListener('click', function () {
    pilus(this)
  
}) 
})

 function pilus(el){
let parent = el.closest('.main__product'),
parentId = parent.getAttribute('id')
products[parentId].amount++
basket()
sum()
kcal()
}
minus.forEach(btnMinus =>{
    btnMinus.addEventListener('click', function () {
    mnus(this)
  
}) 
})

   function mnus(ell){
        let parent = ell.closest('.main__product'),
        parentId = parent.getAttribute('id')
        products[parentId].amount--
        kcal()
        sum()
        basket()
}
function basket() {
    const productsArray = [] ;
    for (const key in products) {
    const po = products[key],
    productsCard = document.querySelector(`#${key}`),
    parentIndecator = productsCard.querySelector('.main__product-num');
    if (po.amount > 0){
        productsArray.push(po)
        parentIndecator.innerHTML = po.amount
    }else if (po.amount < 1) {
        productsArray.push(po)
        parentIndecator.innerHTML = po.amount
    }
    for (let i = 0; i < productsArray.length; i++) {
        const el = productsArray[i];

        
    }
}
}
function sum() {
    const productsArray = [] ;
    for (const key in products) {
    const po = products[key],
    productsCard = document.querySelector(`#${key}`),
    parentIndecator = productsCard.querySelector('.main__product-price>span');
    if (po.Summ > 0){
        productsArray.push(po)
        parentIndecator.innerHTML =+ po.Summ
    }else if (po.Summ < 1) {
        productsArray.push(po)
        parentIndecator.innerHTML  = po.Summ 

    }
    for (let i = 0; i < productsArray.length; i++) {
        const el = productsArray[i];

        
    }
}
}
function kcal() {
    const productsArray = [] ;
    for (const key in products) {
    const po = products[key],
    productsCard = document.querySelector(`#${key}`),
    parentIndecator = productsCard.querySelector('.main__product-kcall>span');
    if (po.Kcall > 0){
        productsArray.push(po)
        parentIndecator.innerHTML = po.Kcall
    }else if (po.Kcall < 1) {
        productsArray.push(po)
        parentIndecator.innerHTML = po.Kcall
    }
    for (let i = 0; i < productsArray.length; i++) {
        const el = productsArray[i];

        
    }
}
}

priceBtn.addEventListener('click', function () {
    chekInfo.innerHTML = ''
    for (const key in products) {
    const {name, Summ, amount, Kcall} = products [key]
    chekInfo.innerHTML += `  
    <div class="print__item"> 
    <p class="print__name">
    <span>${name}:</span>
    <span>${amount} dona</span>
    </p>
    <span class="span__k">${Kcall} caloria</span>
    <p class="print_summ">${Summ} sum</p>
    </div> `
    }
})
play.addEventListener('click', function(){
    window.print()

})
priceBtn.addEventListener('click', function () {
    print.style.display = 'flex'
    print.style.opacity = '1'
    chekList.style.top = '50%'
    
})

play.addEventListener('click', function () {
    print.style.display = 'none'
    print.style.opacity = '0'
    chekList.style.top = '-100%'
    
})


timer = document.querySelector('.header__timer-extra');
function number() {
  timer.innerHTML++;
  if (timer.innerHTML < 10) {
    setTimeout(() => {
      number();
    }, 100);
  } else if (timer.innerHTML < 20) {
    setTimeout(() => {
      number();
    }, 90);
  }else if (timer.innerHTML < 30) {
    setTimeout(() => {
        number();
      }, 80);
  }
  else if (timer.innerHTML < 40) {
    setTimeout(() => {
        number();
      }, 70);
  }
  else if (timer.innerHTML < 50) {
    setTimeout(() => {
        number();
      }, 60);
  }else if (timer.innerHTML < 60) {
    setTimeout(() => {
        number();
      }, 50);
  }else if (timer.innerHTML < 70) {
    setTimeout(() => {
        number();
      }, 40);
  }else if (timer.innerHTML < 80) {
    setTimeout(() => {
        number();
      }, 30);
  }else if (timer.innerHTML < 90) {
    setTimeout(() => {
        number();
      }, 20);
  }else if (timer.innerHTML < 100) {
    setTimeout(() => {
        number();
      }, 10);
  }
}
number();
const image = document.querySelectorAll('.main__product-info'),
viewClose = document.querySelector('.view__close'),
  view = document.querySelector('.view'),
  viewImg = document.querySelector('.view img');
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('dblclick', function() {
    view.classList.add('active')
imageAdd(this);
});
}
viewClose.onclick = () => view.classList.remove('active')

