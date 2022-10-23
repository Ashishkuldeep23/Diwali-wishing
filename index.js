

// const scrollDemo = document.querySelector("#progress")


function scrollPage(){
    const totalHeigthWebPage = document.body.scrollHeight;

    const currentDistanceFromTop = document.documentElement.scrollTop;

    const windowHeight = document.documentElement.clientHeight;

    const scrollPercentage = (currentDistanceFromTop/(totalHeigthWebPage - windowHeight)) * 100


    let roundedValueIs = Math.round(scrollPercentage)


    console.log(roundedValueIs)

    
    let check = 25


    if(roundedValueIs > check){
        document.querySelector('.light').style.visibility = "visible";
    }else{
        document.querySelector('.light').style.visibility = "hidden";
    }

    if(roundedValueIs > (check + 7)){
        document.querySelector('.diya').style.visibility = "visible";
    }else{
        document.querySelector('.diya').style.visibility = "hidden";
    }

    if(roundedValueIs > (check + 14)){
        document.querySelector('.diya4').style.visibility = "visible";
    }else{
        document.querySelector('.diya4').style.visibility = "hidden";
    }

    if(roundedValueIs > (check + 21)){
        document.querySelector('.diya3').style.visibility = "visible";
    }else{
        document.querySelector('.diya3').style.visibility = "hidden";
    }

    if(roundedValueIs > (check + 28)){
        document.querySelector('.diya2').style.visibility = "visible";
    }else{
        document.querySelector('.diya2').style.visibility = "hidden";
    }

    if(roundedValueIs > (check + 35)){
        document.querySelector('.diya1').style.visibility = "visible";
    }else{
        document.querySelector('.diya1').style.visibility = "hidden";
    }














    // scrollDemo.style.width = Math.round(scrollPercentage) + "%"
}



document.addEventListener("scroll" , scrollPage)