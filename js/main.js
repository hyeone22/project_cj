/* main.js */
// 고객센터
// toggle()
// title="고객센터 열기" -> title="고객센터 닫기"

const uls = document.querySelectorAll("dl.topMenu>dd")
console.log(uls);

uls[4].addEventListener("click",e=>{
  e.preventDefault();
  uls[4].classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.children[0].setAttribute("title","고객센터 닫기");  
  }else{
    e.currentTarget.children[0].setAttribute("title","고객센터 열기");
  }
})

// 주메뉴
// nav.gnb>ul>li>ul
// .header_wrap.on
// nav.gnb>ul>li
const lis = document.querySelectorAll("nav.gnb>ul>li");
console.log(lis);
const wraps = document.querySelector(".header_wrap");
console.log(wraps)
const ulss = document.querySelectorAll("nav.gnb>ul>li>ul");
console.log(ulss)

// for(let i=0;i<lis.length;i++){
//   lis[i].addEventListener("mouseover",e=>{
//     wraps.classList.add("on");
//     for(let i=0;i<ulss.length;i++){
//       ulss[i].classList.add("on");
//     }
    
//   })
//   lis[i].addEventListener("mouseout",e=>{
//     wraps.classList.remove("on");
//     for(let i=0;i<ulss.length;i++){
//       ulss[i].classList.remove("on");
//     }
//   })
// }

for(let i=0;i<lis.length;i++){
  lis[i].addEventListener("mouseover",()=>{

    // 고객센터에 on이 붙어 있으면 고객센터의 on을 지운다
    if(uls[4].classList.contains("on")){
      uls[4].classList.remove("on");
    }
    // 검색박스에 on이 붙어 있으면 검색박스의 on을 지운다
    if(formsrch.classList.contains("on")){
      formsrch.classList.remove("on")
    }

    wraps.classList.add("on");
    ulss.forEach(item =>{
      item.classList.add("on");
    })
  }); //mouseover
  
  lis[i].addEventListener("mouseout",()=>{
    wraps.classList.remove("on");
    ulss.forEach(item =>{
      item.classList.remove("on");
    })
  }); //mouseout

  lis[i].children[0].addEventListener("focus",()=>{
    wraps.classList.add("on");
    ulss.forEach(item =>{
      item.classList.add("on")
    })
  }); //focus

  lis[i].children[0].addEventListener("blur",e=>{
    wraps.classList.remove("on");
    ulss.forEach(item =>{
      item.classList.remove("on");
    })
  }); //blur        
}

/* 검색열기닫기 */

const srchbox = document.querySelector("span.srch_open");
console.log(srchbox);
const formsrch = document.querySelector("form.srch")
srchbox.addEventListener("click",e=>{
  e.preventDefault();
  formsrch.classList.toggle("on");
  srchbox.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    srchbox.children[0].setAttribute("title","검색입력서식 닫기");
  }else{
    srchbox.children[0].setAttribute("title","검색입력서식 열기");
  }
})

/* 로그인 이미지 */
// a.appear 안에 img 00000.png ~ 00056.png
// a.loop 안에 img 00000 ~ 00081.png



let appearimgs = ''

for(let i=0;i<57;i++){
  if(i<10){
    appearimgs += `<img src="images/appear/appear_0000${i}.png" alt="${i}" />`
  }else{
    appearimgs += `<img src="images/appear/appear_000${i}.png" alt="${i}" />`
  }
}
document.querySelector("a.appear").innerHTML = appearimgs

let loopimgs = ''

for(let i=0;i<82;i++){
  if(i<10){
    loopimgs += `<img src="images/loop/loop_0000${i}.png" alt="${i}" />`
  }else{
    loopimgs += `<img src="images/loop/loop_000${i}.png" alt="${i}" />`
  }
}
document.querySelector("a.loop").innerHTML = loopimgs

/* 로그인 애니메이션 */
// appear 0~56 이미지 각각에 animation 속성 적용
// animation: ani 2.85s linear 0s 1 ;
// animation: ani 2.85s linear 0.05s 1 ;
// animation: ani 2.85s linear 0.10s 1 ;
// animation: ani 2.85s linear 2.80s 1 ;

// loop 0~81 이미지 각각에 animation 속성 적용
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.95s infinite;


const aimgs = document.querySelectorAll("a.appear>img")
console.log(aimgs);
const limgs = document.querySelectorAll("a.loop>img")
console.log(limgs);
const delay = 0.05;
for(let k=0;k<aimgs.length;k++){
  aimgs[k].style.animation = `ani 2.85s linear ${k*delay}s 1`;
}

for(let j=0;j<limgs.length;j++){
  limgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}



/* content1 - 퀵메뉴 이미지 */
// for()문 이용해서 <img> 를 quick01_00000.png~quick01_00019.png 생성
// span 안에 넣기

// content1
// li에 마우스 올렸을 때 이미지에 애니메이션 적용
// 마우스 out 할 때 이미지에 애니메이션 삭제

// let quickimgs1 = ''
// let quickimgs2 = ''
// let quickimgs3 = ''
// let quickimgs4 = ''

// for(let i=0;i<20;i++){
//   if(i<10){
//     quickimgs1 += `<img src="images/quick01/quick01_0000${i}.png" alt="${i}" />`
//   }else{
//     quickimgs1 += `<img src="images/quick01/quick01_000${i}.png" alt="${i}" />`
//   }
// }
// document.querySelector("span.quick1").innerHTML = quickimgs1

// for(let i=0;i<20;i++){
//   if(i<10){
//     quickimgs2 += `<img src="images/quick02/quick02_0000${i}.png" alt="${i}" />`
//   }else{
//     quickimgs2 += `<img src="images/quick02/quick02_000${i}.png" alt="${i}" />`
//   }
// }
// document.querySelector("span.quick2").innerHTML = quickimgs2

// for(let i=0;i<20;i++){
//   if(i<10){
//     quickimgs3 += `<img src="images/quick03/quick03_0000${i}.png" alt="${i}" />`
//   }else{
//     quickimgs3 += `<img src="images/quick03/quick03_000${i}.png" alt="${i}" />`
//   }
// }
// document.querySelector("span.quick3").innerHTML = quickimgs3

// for(let i=0;i<20;i++){
//   if(i<10){
//     quickimgs4 += `<img src="images/quick04/quick04_0000${i}.png" alt="${i}" />`
//   }else{
//     quickimgs4 += `<img src="images/quick04/quick04_000${i}.png" alt="${i}" />`
//   }
// }
// document.querySelector("span.quick4").innerHTML = quickimgs4

const quickSpan = document.querySelectorAll(".content1>ul>li>a>span");
console.log(quickSpan)
for(let k=0;k<quickSpan.length;k++){
  let images= ''
  for(let i=0;i<20;i++){
    if(i<10){
      images += `<img src="images/quick0${k+1}/quick0${k+1}_0000${i}.png" alt="${i}" />`
    }else{
      images += `<img src="images/quick0${k+1}/quick0${k+1}_000${i}.png" alt="${i}" />`
    }
  }
  quickSpan[k].innerHTML = images;
}


// const quick1 = document.querySelectorAll("span.quick1>img");
// const quick2 = document.querySelectorAll("span.quick2>img");
// const quick3 = document.querySelectorAll("span.quick3>img");
// const quick4 = document.querySelectorAll("span.quick4>img");
const quicklis = document.querySelectorAll(".content1 ul li");
console.log(quicklis)

for(let i=0;i<quicklis.length;i++){
  quicklis[i].addEventListener("mouseover",e=>{
    for(let k=0;k<20;k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`;
    }
  })
  quicklis[i].addEventListener("mouseout",e=>{
    for(let k=0;k<20;k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation = "none"
    }
  })  
}

// 배너
// next버튼 눌렀을때
// 배너번호 1증가
// 배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
// 배너프레임의 left값 변경해서 배너 움직이게

// prev버튼 눌렀을때

// 오토배너 작동 - setTimeout 사용, 재귀함수 사용, 5초 마다

// 재생/멈춤 버튼

/* 롤링 클릭 */

// section에 .white가 있으면 on 붙이기

const btn_prev = document.querySelector(".prev");
const btn_next = document.querySelector(".next")
const section = document.querySelectorAll(".banner_frame>section")

const play = document.querySelector(".play")

const frame = document.querySelector(".banner_frame");

const rollBtn = document.querySelectorAll(".rolling li a")

let bnnNum = 0;
let lastNum = document.querySelectorAll(".banner_frame>section").length-1;

let bnnW = document.querySelector("body>section").offsetWidth; // let bnnW = window.innerWidth
window.addEventListener("resize",()=>{
  bnnW = document.querySelector("body>section").offsetWidth;
})

// let bnnW = window.innerWidth
// window.onresize = function(event){
// bnnW = window.innerWidth
// }

// 버튼 누르기 > 오토배너 작동 setTimeout 5초마다 >


btn_prev.addEventListener("click",e=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum = lastNum;
  frame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum)
});

btn_next.addEventListener("click",e=>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum)bnnNum=0;
  frame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum)
});

let autoBanner = () =>{
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  frame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum)  
  autoBnn = setTimeout(autoBanner,5000);
  }
  let autoBnn = setTimeout(autoBanner,5000);

/* 재생 */
let flag=true;
play.addEventListener("click",e=>{
  e.preventDefault();
  if(flag){
    play.classList.add("pause")
    clearTimeout(autoBnn);
    flag=false;
  }else{
    play.classList.remove("pause")
    autoBnn = setTimeout(autoBanner,5000);
    flat=true;
  }
})

const bnnRolls = document.querySelectorAll(".rolling li")
bnnRolls.forEach((bnnRoll,i)=>{
  bnnRoll.addEventListener("click",e=>{
    e.preventDefault();
    clearTimeout(autoBnn);
    frame.style.left = `${i * -bnnW}px`;
    activation(rollBtn,i);
  })
})

function activation(list,i){
  for(let el of list){
    el.classList.remove("on");
  }
  list[i].classList.add("on")
}


// section에 .white가 있으면 각 요소에 .white 붙이기
const rollingA = document.querySelectorAll(".rolling a")
const arrowA = document.querySelectorAll(".banner_arrow > a")

let secWhite = bannerNumber => {
    if(section[bannerNumber].classList.contains("white")){
      arrowA.forEach(item=>{
        item.classList.add("white");
      })
      rollingA.forEach(item =>{
          item.classList.add("white");
      })
    }else{
      arrowA.forEach(item=>{
        item.classList.remove("white")
      })
      rollingA.forEach(item=>{
        item.classList.remove("white")
      })
    }  


  rollBtn.forEach(item =>{
      item.classList.remove("on")
  });
    rollBtn[bannerNumber].classList.add("on")
}

/* 스크롤 이벤트 */
window.addEventListener("scroll",e=>{
  let scroll = document.querySelector('html').scrollTop;

const doughnut_Left_L = document.querySelector(".doughnut_Left_L")
const doughnut_Left_s = document.querySelector(".doughnut_Left_s")
const combine_Left = document.querySelector(".combine_Left")

const doughnut_Center_L = document.querySelector(".doughnut_Center_L")
const doughnut_Center_s = document.querySelector(".doughnut_Center_s")

const doughnut_right_M = document.querySelector(".doughnut_right_M")
const doughnut_right_s = document.querySelector(".doughnut_right_s")
const doughnut_right = document.querySelector(".doughnut_right")

combine_Left.style.top = `${-750+(scroll*0.9)}px`
doughnut_Left_s.style.top = `${scroll*0.5}px`
doughnut_Left_L.style.top = `${1200-scroll*0.8}px`

doughnut_Center_L.style.top = `${scroll*0.4}px`
doughnut_Center_s.style.top = `${950-scroll*0.7}px`


doughnut_right_s.style.top = `${800-scroll*0.3}px`

doughnut_right.style.top = `${scroll*0.7}px`
if(scroll>900){
  doughnut_right_M.style.top = `${scroll*0.7}px`
}

})

// content3
// li 하나 하나에 마우스오버 하면 li에 .on 마우스아웃 하면 .on을 지우고 

const liss = document.querySelectorAll(".content3_inner>div>ul>li") //li 26개
console.log(liss)


for(let i=0;i<liss.length;i++){
liss[i].addEventListener("mouseover",()=>{
  liss[i].classList.add("on")
})

liss[i].addEventListener("mouseout",()=>{
  liss[i].classList.remove("on")
})
}

const group = document.querySelectorAll(".content3_inner>ul>li>a"); 

const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent")
console.log(ent)
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop")
const dinner = document.querySelectorAll(".content3_inner>div>ul>li.dinner")
const box = document.querySelectorAll(".content3_inner>div>ul>li.box")
// 대분류
// - 각 클래스이름에 해당되는 li만 따로 모아서 저장하고
// - 모든 li 화면에 안보이게 하고
// 대분류 li a 하나하나를 클릭했을때
// li a 하나하나를 클릭했을때
// class 속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서 
// 해당 클래스이름에 해당되는 li만 보이게 설정한다. - 각 클래스 이름에 해당되는 li만 또로 모아서 저장해놓고

for(let i=0;i<group.length;i++){
  group[i].addEventListener("click",e=>{
    e.preventDefault();
    group.forEach(item=>{
      item.classList.remove("on")
    });
    e.currentTarget.classList.add("on")

    liss.forEach(item=>{
      item.style.display = "none";
    });
    let className = e.currentTarget.parentElement.getAttribute("class");
    switch(className){
      case "all" :
            block(liss)
            break;
      case "ent" :
            block(ent)
            break;
      case "shop" :
            block(shop)
            break;
      case "dinner" :
            block(dinner)
            break;
      case "box" :
            block(box);
            break;
    }
    function block(className){
      className.forEach(item =>{
          item.style.display = "block"
      })
    }
  })
  // liss.forEach(item=>{
  //   item.style.display = "block";
  // })
}

const family = document.querySelector(".family_site")
const familya = document.querySelector(".family_site>a") 

familya.addEventListener("click",e=>{
  e.preventDefault();
  family.classList.toggle("on");
  familya.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    family.children[0].setAttribute("title","닫기")
  }else{
    family.children[0].setAttribute("title","열기")
  }
})

/* top */
const sctop = document.querySelector(".top");
sctop.addEventListener("click",e=>{
  e.preventDefault();
  window.scroll({
    top : 0,
    left : 0,
    behavior : 'smooth'
  });
})

window.addEventListener("scroll",()=>{
  let scroll = document.querySelector("html").scrollTop;
  if(scroll>100){
    sctop.classList.add("on")
    sctop.classList.remove("ab")
  }else if(scroll>=2400){
    sctop.classList.add("ab")
    sctop.classList.remove("on")
  }else{
    sctop.classList.remove("on")
    
  }
})

// window.addEventListener("scroll",e=>{
//   let scroll = document.querySelector("html").scrollTop;

 
// })
const body = document.querySelector("body")
const bg = document.querySelector("div.bg")
const mobBtn = document.querySelector(".mobBtn")
const mobBtn_close = document.querySelector(".mobBtn_close") 
const mob = document.querySelector(".mob")

// 햄버거 버튼 클릭

mobBtn.addEventListener("click",e=>{
  e.preventDefault();
  body.classList.add("on")
  bg.classList.add("on")
  mob.classList.add("on")
  mobBtn_close.classList.add("on")
})

mobBtn_close.addEventListener("click",e=>{
  e.preventDefault();
  body.classList.remove("on")
  bg.classList.remove("on")
  mob.classList.remove("on")
  mobBtn_close.classList.remove("on")
})
// 1.div.mob.on
// 2.div.on, div.bg.on
// 3.body.on,div.bg.on

// 모바일 닫기 클릭


const mobul = document.querySelector("div.mob dd:nth-of-type(5)");
console.log(mobul)

mobul.addEventListener("click",e=>{
  e.preventDefault();
  mobul.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.children[0].setAttribute("title","고객센터 닫기");  
  }else{
    e.currentTarget.children[0].setAttribute("title","고객센터 열기");
  }
})


const mobli = document.querySelectorAll(".mob_gnb>ul>li.click")
console.log(mobli)
const moblis = document.querySelectorAll(".mob_gnb>ul>li>ul")
console.log(moblis)

for(let i=0;i<mobli.length;i++){
  mobli[i].addEventListener("click",e=>{
    e.preventDefault();
    moblis[i].classList.toggle("on");
    mobli[i].classList.toggle("on")
  })
   
}






