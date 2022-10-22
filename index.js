

// const scrollDemo = document.querySelector("#progress")


function scrollPage(){
    const totalHeigthWebPage = document.body.scrollHeight;

    const currentDistanceFromTop = document.documentElement.scrollTop;

    const windowHeight = document.documentElement.clientHeight;

    const scrollPercentage = (currentDistanceFromTop/(totalHeigthWebPage - windowHeight)) * 100


    let roundedValueIs = Math.round(scrollPercentage)


    console.log(roundedValueIs)


    if(roundedValueIs > 35){
        document.querySelector('.light').style.visibility = "visible";
    }

    if(roundedValueIs > 42){
        document.querySelector('.diya').style.visibility = "visible";
    }

    if(roundedValueIs > 49){
        document.querySelector('.diya4').style.visibility = "visible";
    }

    if(roundedValueIs > 56){
        document.querySelector('.diya3').style.visibility = "visible";
    }

    if(roundedValueIs > 63){
        document.querySelector('.diya2').style.visibility = "visible";
    }

    if(roundedValueIs > 70){
        document.querySelector('.diya1').style.visibility = "visible";
    }














    // scrollDemo.style.width = Math.round(scrollPercentage) + "%"
}



document.addEventListener("scroll" , scrollPage)