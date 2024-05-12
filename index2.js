const axyPrepBloodGenomicDNAMiniprepKit = [
    {
        stepId:1,
        complete:false,
        stepName:`Cell Lysis`,
        content:`取200 μl全血放入1.5 ml microcentrifuge tube`,
        counter: false,
        timer: false,
        round:0,
        time:0,
        img: null,
        tool: ["全血","1.5 ml microcentrifuge tube"]
    },

    {
        stepId:2,
        complete:false,
        stepName:`Cell Lysis`,
        content:`加入500 μl的AP1 Buffer (RBC Lysis)，上下反轉混合均勻，vortex均勻`,
        counter: false,
        timer: false,
        round:0,
        time:0,
        img: null,
        tool: ["AP1 Buffer (RBC Lysis)","vortexer"]
    },

    {
        stepId:3,
        complete:false,
        stepName:`Cell Lysis`,
        content:`加入100 μl的AP2 Buffer (Cell Lysis)，vortex均勻，離心12000轉、5 min`,
        counter: false,
        timer: true,
        round: 0,
        time: 5*60,
        img: null,
        tool: ["AP2 Buffer (Cell Lysis)","vortexer"]
    },
    {
        stepId:4,
        complete:false,
        stepName:`DNA Binding and wash`,
        content:`將Miniprep Column放在2ml collection tube上，將步驟3的上清液放入Miniprep Column中，蓋上蓋子，離心12000轉、1 min。`,
        counter: false,
        timer: true,
        round: 0,
        time: 1*60,
        img: null,
        tool: ["Miniprep Column","collection tube","離心機"]
    },

    {
        stepId:5,
        complete:false,
        stepName:`wash`,
        content:`將步驟4的collection tube中的濾液倒掉，再將Miniprep Column放回collection tube 上`,
        counter: false,
        timer: false,
        round: 0,
        time: 0,
        img: null,
        tool: ["Miniprep Column","collection tube"]
    },

    {
        stepId:6,
        complete:false,
        stepName:`wash`,
        content:`取700 μl 的W1A Buffer加入Miniprep Column中，離心12000轉，1 min。`,
        counter: false,
        timer: true,
        round: 0,
        time: 1*60,
        img: null,
        tool: ["Miniprep Column","W1A Buffer","離心機"]
    },

    {
        stepId:7,
        complete:false,
        stepName:`wash`,
        content:`將collection tube中的濾液倒掉，再將Miniprep Column放回collection tube 上`,
        counter: false,
        timer: false,
        round: 0,
        time: 0,
        img: null,
        tool: ["Miniprep Column","collection tube"]
    },

    {
        stepId:8,
        complete:false,
        stepName:`wash`,
        content:`取800 μl 的W2 Buffer加入Miniprep Column中，離心12000轉，1 min。`,
        counter: false,
        timer: true,
        round: 0,
        time: 1*60,
        img: null,
        tool: ["Miniprep Column","W2 Buffer","離心機"]
    },
    
    {
        stepId:9,
        complete:false,
        stepName:`wash`,
        content:`將collection tube中的濾液倒掉，再將Miniprep Column放回collection tube 上`,
        counter: false,
        timer: false,
        round: 0,
        time: 0,
        img: null,
        tool: ["Miniprep Column","collection tube"]
    },

    {
        stepId:10,
        complete:false,
        stepName:`wash`,
        content:`取500 μl 的W2 Buffer加入Miniprep Column中，離心12000轉，1 min。`,
        counter: false,
        timer: true,
        round: 0,
        time: 1*60,
        img: null,
        tool: ["Miniprep Column","W2 Buffer","離心機"]
    },

    {
        stepId:11,
        complete:false,
        stepName:`wash`,
        content:`將collection tube中的濾液倒掉，再將Miniprep Column放回collection tube 上`,
        counter: false,
        timer: false,
        round: 0,
        time: 0,
        img: null,
        tool: ["Miniprep Column","collection tube"]
    },

    {
        stepId:12,
        complete:false,
        stepName:`wash`,
        content:`離心12000轉，1 min，把Miniprep Column matrix甩乾。`,
        counter: false,
        timer: true,
        round: 0,
        time: 1*60,
        img: null,
        tool: ["Miniprep Column","離心機"]
    },

    {
        stepId:13,
        complete:false,
        stepName:`DNA Elution`,
        content:`甩乾的Miniprep Column移至新的1.5 ml microcentrifuge tube`,
        counter: false,
        timer: false,
        round: 0,
        time: 0,
        img: null,
        tool: ["Miniprep Column","1.5 ml microcentrifuge tube"]
    },

    {
        stepId:14,
        complete:false,
        stepName:`DNA Elution`,
        content:`取200 μl Elution Buffer (需先預熱65度C)加入Column matrix中央，
        等待3 min讓Elution Buffer完全吸收後`,
        counter: false,
        timer: true,
        round: 0,
        time: 3*60,
        img: null,
        tool: ["Miniprep Column","1.5 ml microcentrifuge tube"]
    },

    {
        stepId:15,
        complete:false,
        stepName:`DNA Elution`,
        content:`離心12000轉，1 min，把純化的DNA沖出`,
        counter: false,
        timer: true,
        round: 0,
        time: 1*60,
        img: null,
        tool: ["Miniprep Column","1.5 ml microcentrifuge tube","離心機"]
    },
    
];


let arrary = axyPrepBloodGenomicDNAMiniprepKit;
let protocalName = "DNA萃取 Axy Prep Blood Genomic";
let currentStep = 3;
let reactionTime = 0;
//view
let object = {
    body: document.querySelector('body'),
    id : document.querySelector('#stepnum'),
    title: document.querySelector('#title'),
    content: document.querySelector('#content'),
    timer: document.querySelector('.timer'),
    time: document.querySelector('#timer'),
    btnPrev: document.querySelector('#prev'),
    btnActive: document.querySelector('#active'),
    btnNext: document.querySelector('#next'),
    card: document.querySelector(".currentCard")
};

//render 1
function render(id){
    object.id.innerHTML = arrary[id].stepId;
    object.title.innerHTML = arrary[id].stepName;
    object.content.innerHTML = arrary[id].content;
    reactionTime = arrary[id].time;

    if(!object.timer.classList.contains('hide')){
        object.timer.classList.add('hide');
    };

    if(object.card.classList.contains('done') ){
        object.card.classList.remove('done')
    };

    if(arrary[currentStep].complete){
        object.card.classList.add('done');
    };

    if(arrary[id].time === 0)return
    object.timer.classList.remove('hide');
    object.time.innerHTML = `${reactionTime} sec`;
};



function renderTime(reactionTime){
    object.time.innerHTML = `${reactionTime} sec`;
}

    

//倒計時
function timer(reactionTime){
        let cdtimer = setInterval(() =>{
            if(reactionTime <= 1) {
                arrary[currentStep].complete = !arrary[currentStep].complete;
                render(currentStep)
                clearInterval(cdtimer);
            };
            reactionTime -= 1;
            console.log(reactionTime);
            renderTime(reactionTime)
        },1000);
};

// //按鍵功能
object.btnPrev.addEventListener('click', event=>{
    if(currentStep === 0 ) return;
    currentStep -=1;
    console.log(currentStep);
    render(currentStep)
});
object.btnActive.addEventListener('click', event=>{
    arrary[currentStep].complete = !arrary[currentStep].complete;
    render(currentStep)
});

object.btnNext.addEventListener('click', event=>{
    if(currentStep >= axyPrepBloodGenomicDNAMiniprepKit.length -1 ) return;
    currentStep +=1;
    render(currentStep)
});

object.timer.addEventListener('click', event=>{
    console.log("gotclick");
    timer(reactionTime);
    render(currentStep)
});

document.querySelector('#protocalName').innerHTML = protocalName;
render(currentStep);


