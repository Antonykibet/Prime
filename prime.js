let primeFront=document.getElementById("primeBottle");
let primeBack=document.getElementById("primeBottleBack");
let flavourTitle=document.getElementById("flavourTitle");
let information=document.getElementById("information");

let tropical=document.getElementById("tropical");
let strawberry=document.getElementById("strawberry");
let blue=document.getElementById("blue");
let meta=document.getElementById("meta");
let orange=document.getElementById("orange");
let lemon=document.getElementById("lemon");
let grape=document.getElementById("grape");

let tropicalTab=document.getElementById("tropicalTab");
let strawberryTab=document.getElementById("strawberryTab");
let blueTab=document.getElementById("blueTab");
let metaTab=document.getElementById("metaTab");
let orangeTab=document.getElementById("orangeTab");
let lemonTab=document.getElementById("lemonTab");
let grapeTab=document.getElementById("grapeTab");


tropical.onclick=()=>{
    document.body.classList.add('zoom');
    setTimeout(function() {
        document.body.classList.remove('zoom');
    }, 200);

    tropicalTab.style.background="whitesmoke";
    strawberryTab.style.background="transparent";
    blueTab.style.background="transparent";
    metaTab.style.background="transparent";
    orangeTab.style.background="transparent";
    lemonTab.style.background="transparent";
    grapeTab.style.background="transparent";

    document.body.style.background='rgb(190, 37, 41)';
    primeFront.src="bottle folder/frontPics/tropical_punch_prime-transformed.png";
    primeBack.src="bottle folder/frontPics/backPics/tropical punch backside.webp";
    flavourTitle.innerText="Tropical Punch";
    information.innerText=`Transport yourself to a tropical paradise with Tropical Punch! This delightful mix of juicy pineapple, 
        tangy orange, and sweet mango flavors will have your taste buds singing with delight.
        It's a refreshing and delicious way to stay hydrated and keep your energy levels up.`
}
strawberry.onclick=()=>{
    document.body.classList.add('zoom');
    setTimeout(function() {
        document.body.classList.remove('zoom');
    }, 200);

    strawberryTab.style.background="whitesmoke";
    tropicalTab.style.background="transparent";
    blueTab.style.background="transparent";
    metaTab.style.background="transparent";
    orangeTab.style.background="transparent";
    lemonTab.style.background="transparent";
    grapeTab.style.background="transparent";

    document.body.style.background='rgb(188, 56, 111)';
    primeFront.src="../bottle folder/frontPics/strawberry watermelon.webp";
    primeBack.src="bottle folder/frontPics/backPics/strawberry backside.webp";
    flavourTitle.innerText="Strawberry Watermelon";
    information.innerText=`This flavor of Prime hydration drink is a classic combination of sweet and juicy strawberries and
        crisp and refreshing watermelon
        . It's a perfect drink for those hot summer days or after a workout when you need to rehydrate and replenish your electrolytes.`
}
blue.onclick=()=>{

    document.body.classList.add('zoom');
    setTimeout(function() {
        document.body.classList.remove('zoom');
    }, 200);

    blueTab.style.background="whitesmoke";
    strawberryTab.style.background="transparent";
    tropicalTab.style.background="transparent";
    metaTab.style.background="transparent";
    orangeTab.style.background="transparent";
    lemonTab.style.background="transparent";
    grapeTab.style.background="transparent";

    document.body.style.background='rgb(10, 142, 175)';
    primeFront.src="bottle folder/frontPics/blue raspberry.webp";
    primeBack.src="bottle folder/frontPics/backPics/blue backside.webp";
    flavourTitle.innerText="Blue Raspberry";
    information.innerText=`The blue raspberry flavor of Prime hydration drink is a fun and fruity drink that's perfect for 
        anyone who loves the taste of raspberry. 
        The natural fruit flavors and no added sugars make it a healthier option than traditional sports drinks.`
}
meta.onclick=()=>{

    document.body.classList.add('zoom');
    setTimeout(function() {
        document.body.classList.remove('zoom');
    }, 200);

    metaTab.style.background="whitesmoke";
    strawberryTab.style.background="transparent";
    tropicalTab.style.background="transparent";
    blueTab.style.background="transparent";
    orangeTab.style.background="transparent";
    lemonTab.style.background="transparent";
    grapeTab.style.background="transparent";

    document.body.style.background='rgb(48, 50, 51)';
    primeFront.src="bottle folder/frontPics/meta moon.webp";
    primeBack.src="bottle folder/frontPics/backPics/meta-moon back side.png"; 
    flavourTitle.innerText="Meta Moon";
    information.innerText=` Meta Moon is a unique and refreshing flavor of Prime hydration drink that combines 
        the sweet and tart taste of berries with a hint of mint. 
        The result is a drink that's both refreshing and energizing, perfect for those who need a little pick-me-up.`
}
orange.onclick=()=>{

    document.body.classList.add('zoom');
    setTimeout(function() {
        document.body.classList.remove('zoom');
    }, 200);

    orangeTab.style.background="whitesmoke";
    strawberryTab.style.background="transparent";
    tropicalTab.style.background="transparent";
    blueTab.style.background="transparent";
    metaTab.style.background="transparent";
    lemonTab.style.background="transparent";
    grapeTab.style.background="transparent";

    document.body.style.background='rgb(255, 115, 15)';
    primeFront.src="bottle folder/frontPics/orange-t7_CJl0L0-transformed.png";
    primeBack.src="bottle folder/frontPics/backPics/orange backside.webp";
    flavourTitle.innerText="Orange";
    information.innerText=`The orange flavor of Prime hydration drink is a refreshing and zesty drink that's perfect for any time of day. 
        It's a great alternative to traditional orange juice, with no added sugars and natural orange flavor. 
        With electrolytes to help you rehydrate after a workout.`;
}
lemon.onclick=()=>{

    document.body.classList.add('zoom');
    setTimeout(function() {
        document.body.classList.remove('zoom');
    }, 200);

    lemonTab.style.background="whitesmoke";
    strawberryTab.style.background="transparent";
    tropicalTab.style.background="transparent";
    blueTab.style.background="transparent";
    metaTab.style.background="transparent";
    orangeTab.style.background="transparent";
    grapeTab.style.background="transparent";

    document.body.style.background='rgb(107, 183, 0)';
    primeFront.src="bottle folder/frontPics/lemon lime new.jpg";
    primeBack.src="bottle folder/frontPics/backPics/lemon lime backside.webp";
    flavourTitle.innerText="Lime Lemon";
    information.innerText=`This flavor of Prime hydration drink is a crisp and refreshing combination of tangy lime and zesty lemon. 
        It's a perfect drink for those who want to quench their thirst and stay hydrated with a little zing.`
}
grape.onclick=()=>{

    document.body.classList.add('zoom');
    setTimeout(function() {
        document.body.classList.remove('zoom');
    }, 200);

    grapeTab.style.background="whitesmoke";
    strawberryTab.style.background="transparent";
    tropicalTab.style.background="transparent";
    blueTab.style.background="transparent";
    metaTab.style.background="transparent";
    orangeTab.style.background="transparent";
    lemonTab.style.background="transparent";

    document.body.style.background='rgb(123, 69, 204)';
    primeFront.src="../bottle folder/frontPics/grape.webp";
    primeBack.src="bottle folder/frontPics/backPics/grape backside.webp";
    flavourTitle.innerText="Grape";
    information.innerText=`The grape flavor of Prime hydration drink is a classic, fruity flavor that's sure to satisfy your thirst. 
        It's a perfect drink for anyone who loves the taste of grape soda but wants a healthier alternative.`
}