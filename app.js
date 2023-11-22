const op=document.querySelector("#op");
const result=document.querySelector("#result");
const clear=document.querySelector("#clear");
const deletebtn=document.querySelector("#delete");
const nobtns=document.querySelectorAll(".nobuttons");
const opbtns=document.querySelectorAll(".opbuttons");
let operations="";
let partoperations="";
let number1="";
let fresult="";
let operator="";
let finalresult="";
let c=0;

for(const btn of nobtns){
    btn.addEventListener("click", ()=>{
        let number=btn.getAttribute("id");
        operations=operations+number;
        partoperations=partoperations+number;
        number1=Number(partoperations);
        if(c==0){
        fresult=number1;
        }
        if(operator=="+"){
            finalresult=fresult+number1;
        }
        else if(operator=="-"){
            finalresult=fresult-number1;
        }
        else if(operator=="x"){
            finalresult=fresult*number1;
        }
        else if(operator=="/"){
            finalresult=fresult/number1;
        }
        op.innerText=`${operations}`;
    })
}

for(const btn of opbtns){
    btn.addEventListener("click", ()=>{
        operator=btn.getAttribute("id");
        if(operations=="" || operations[operations.length-1]=="+" || operations[operations.length-1]=="-" || operations[operations.length-1]=="x" || operations[operations.length-1]=="/"){
        result.innerText="ERROR, refreshing in 3 seconds";
        setTimeout(()=>{
        operations="";
        partoperations="";
        number1="";
        fresult="";
        operator="";
        finalresult="";
        c=0;
        operator="";
        op.innerText="";
        result.innerText="";},3000);
        }
        else if(operator==="="){
            op.innerText=`${finalresult}`;
            result.innerText=`${finalresult}`
            fresult=finalresult;
            partoperations="";
            operations=String(finalresult);
            operator="";
        }
        else{
            c=1;
            operations=operations+operator;
            op.innerText=`${operations}`;
            partoperations="";
        }
    })
};

clear.addEventListener("click", ()=>{
    operations="";
    partoperations="";
    number1="";
    fresult="";
    operator="";
    finalresult="";
    c=0;
    operator="";
    op.innerText="";
    result.innerText="";
});

deletebtn.addEventListener("click", ()=>{
    let last=operations[operations.length-1];
    operations=operations.slice(0, operations.length-1);
    op.innerText=`${operations}`;
    if(last=="+" || last=="-" || last=="*" || last=="/"){
        operator="";
        c=0;
    }
    else{
        partoperations=partoperations.slice(0, partoperations.length-1);
    }
});
