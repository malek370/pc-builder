let current_width=0;
let selected_values={graphics_card:"",motherboard:"",processor:"",ram:"",casepc:"",storage:"",alimentation:""};

function updateBar(i){
    let x=document.getElementsByClassName("progress-bar");
    i==="up"? current_width+=100/7:current_width-=100/7;
    x[0].style.width=current_width+"%"; 
    checkProgress();
   
    
}

function updateBarUp(){return updateBar("up");}
function updateBarDown(){return updateBar("down");}

function checkExistance(x){
    let el=document.getElementById(x);
    return typeof(el) != 'undefined' && el != null
}
//graphics
function graphics(){
    let el=document.getElementsByClassName("graphics-card")[0];
    let x=el.value;
    if(selected_values.graphics_card==="" && x!=""){updateBarUp();}
    else if(selected_values.graphics_card!="" && x===""){updateBarDown();}
    x===""?makeAlertGraphics(x,1):makeAlertGraphics(x,0);
    selected_values.graphics_card=x;
}
function makeAlertGraphics(x,choice){
    if(checkExistance("graphic-card-alert")){
        let el=document.getElementById("graphic-card-alert");
        el.remove();
    }
    if(choice==0){
        let txt="graphic card selected! "+x;
        let al="<div class=\"alert alert-primary\" id=\"graphic-card-alert\"role=\"alert\">"+txt+"</div>";
        let prog=document.getElementsByClassName("space")[0];
        prog.insertAdjacentHTML("afterend",al);
    }
}
//motherboard
function motherboard(){
    let el=document.getElementsByClassName("motherboard")[0];
    let x=el.value;
    if(selected_values.motherboard==="" && x!=""){updateBarUp();}
    else if(selected_values.motherboard!="" && x===""){updateBarDown();}
    x===""?makeAlertMotherboard(x,1):makeAlertMotherboard(x,0);
    selected_values.motherboard=x;
}
function makeAlertMotherboard(x,choice){
    if(checkExistance("motherboard-alert")){
        let el=document.getElementById("motherboard-alert");
        el.remove();
    }
    if(choice==0){
        let txt="motherboard selected! "+x;
        let al="<div class=\"alert alert-primary\" id=\"motherboard-alert\"role=\"alert\">"+txt+"</div>";
        let prog=document.getElementsByClassName("space")[0];
        prog.insertAdjacentHTML("afterend",al);
    }
}
//processor
function processor(){
    let el=document.getElementsByClassName("processor")[0];
      let x=el.value;
      if(selected_values.processor==="" && x!=""){updateBarUp();}
      else if(selected_values.processor!="" && x===""){updateBarDown();}
      x===""?makeAlertprocessor(x,1):makeAlertprocessor(x,0);
      selected_values.processor=x;
  }
  function makeAlertprocessor(x,choice){
      if(checkExistance("processor-alert")){
          let el=document.getElementById("processor-alert");
          el.remove();
      }
      if(choice==0){
          let txt="processor selected! "+x;
          let al="<div class=\"alert alert-primary\" id=\"processor-alert\"role=\"alert\">"+txt+"</div>";
          let prog=document.getElementsByClassName("space")[0];
          prog.insertAdjacentHTML("afterend",al);
      }
  }
//storage
function storage(){
    let el=document.getElementsByClassName("storage")[0];
      let x=el.value;
      if(selected_values.storage==="" && x!=""){updateBarUp();}
      else if(selected_values.storage!="" && x===""){updateBarDown();}
      x===""?makeAlertstorage(x,1):makeAlertstorage(x,0);
      selected_values.storage=x;
  }
  function makeAlertstorage(x,choice){
      if(checkExistance("storage-alert")){
          let el=document.getElementById("storage-alert");
          el.remove();
      }
      if(choice==0){
          let txt="storage selected! "+x;
          let al="<div class=\"alert alert-primary\" id=\"storage-alert\"role=\"alert\">"+txt+"</div>";
          let prog=document.getElementsByClassName("space")[0];
          prog.insertAdjacentHTML("afterend",al);
      }
  }
//alimentation
function alimentation(){
    let el=document.getElementsByClassName("alimentation")[0];
      let x=el.value;
      if(selected_values.alimentation==="" && x!=""){updateBarUp();}
      else if(selected_values.alimentation!="" && x===""){updateBarDown();}
      x===""?makeAlertalimentation(x,1):makeAlertalimentation(x,0);
      selected_values.alimentation=x;
  }
  function makeAlertalimentation(x,choice){
      if(checkExistance("alimentation-alert")){
          let el=document.getElementById("alimentation-alert");
          el.remove();
      }
      if(choice==0){
          let txt="alimentation selected! "+x;
          let al="<div class=\"alert alert-primary\" id=\"alimentation-alert\"role=\"alert\">"+txt+"</div>";
          let prog=document.getElementsByClassName("space")[0];
          prog.insertAdjacentHTML("afterend",al);
      }
  }
//casepc
function casepc(){
    let el=document.getElementsByClassName("casepc")[0];
      let x=el.value;
      if(selected_values.casepc==="" && x!=""){updateBarUp();}
      else if(selected_values.casepc!="" && x===""){updateBarDown();}
      x===""?makeAlertcasepc(x,1):makeAlertcasepc(x,0);
      selected_values.casepc=x;
  }
  function makeAlertcasepc(x,choice){
      if(checkExistance("casepc-alert")){
          let el=document.getElementById("casepc-alert");
          el.remove();
      }
      if(choice==0){
          let txt="casepc selected! "+x;
          let al="<div class=\"alert alert-primary\" id=\"casepc-alert\"role=\"alert\">"+txt+"</div>";
          let prog=document.getElementsByClassName("space")[0];
          prog.insertAdjacentHTML("afterend",al);
      }
  }
//ram
function ram(){
    let el=document.getElementsByClassName("ram")[0];
      let x=el.value;
      if(selected_values.ram==="" && x!=""){updateBarUp();}
      else if(selected_values.ram!="" && x===""){updateBarDown();}
      x===""?makeAlertram(x,1):makeAlertram(x,0);
      selected_values.ram=x;
  }
  function makeAlertram(x,choice){
      if(checkExistance("ram-alert")){
          let el=document.getElementById("ram-alert");
          el.remove();
      }
      if(choice==0){
          let slots=document.getElementById("slots").value;
          let txt="ram selected! "+x+" * "+slots+" slot";
          let al="<div class=\"alert alert-primary\" id=\"ram-alert\"role=\"alert\">"+txt+"</div>";
          let prog=document.getElementsByClassName("space")[0];
          prog.insertAdjacentHTML("afterend",al);
      }
  }
  //end of building
 function checkProgress(){
    let bar=document.getElementById("bar");
    let btn=document.getElementById("save");
    if(current_width>98){
        btn.style.display="inline-block";
        bar.style.visibility="hiden"
    }
    else{
        bar.style.visibility="visible"
        btn.style.display="none";
    }
 }
    
  