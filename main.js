let serviceBox = document.getElementById("serviceBox")
let serviceBoxLb = document.getElementById("serviceBoxLb")
let secondBox = document.getElementById("secondBox")
let secondBoxLb = document.getElementById("secondBoxLb")
let thirdBox = document.getElementById("thirdBox")
let thirdBoxLb = document.getElementById("thirdBoxLb")
let fourthBox = document.getElementById("fourthBox")
let fourthBoxLb = document.getElementById("fourthBoxLb")
let fifthBox = document.getElementById("fifthBox")
let fifthBoxLb = document.getElementById("fifthBoxLb")
let response = document.getElementById("response")
let btn = document.getElementById("btn")
let serviceBoxError = document.getElementById("serviceBoxError")
let secondBoxError = document.getElementById("secondBoxError")
let thirdBoxError = document.getElementById("thirdBoxError")
let fourthBoxError = document.getElementById("fourthBoxError")
let fifthBoxError = document.getElementById("fifthBoxError")
let serviceBoxValue, secondBoxValue, thirdBoxValue, fourthBoxValue, fifthBoxValue

btn.addEventListener("click", function () {
    validData()
})

function validData() {
    if (serviceBox.value == "") {
        serviceBoxError.innerHTML = "*Service is required"
    } else { serviceBoxError.innerHTML = "" }

    if (secondBox.value == "") {
        secondBoxError.innerHTML = "*Service option is required"
    } else { secondBoxError.innerHTML = "" }

    if (thirdBox.value == "") {
        thirdBoxError.innerHTML = "*This field is required"
    } else { thirdBoxError.innerHTML = "" }

    if (fourthBox.value == "") {
        fourthBoxError.innerHTML = "*Amount is required"
    } else { fourthBoxError.innerHTML = "" }

    if (fifthBox.value !== "0000") {
        fifthBoxError.innerHTML = "*Input correct pin"
    } else { fifthBoxError.innerHTML = "" }

    if (serviceBox.value != "" && secondBox.value != "" && thirdBox.value != "" && fourthBox.value != "" && fifthBox.value != "") {
        acceptValues()
    }
}

function acceptValues() {
    serviceBoxValue = serviceBox.value
    secondBoxValue = secondBox.value
    thirdBoxValue = thirdBox.value
    fourthBoxValue = fourthBox.value
    fifthBoxValue = fifthBox.value

    result()
}

function result() {
    if (serviceBoxValue === "Transfer" && fifthBoxValue === "0000" && secondBoxValue != "" && thirdBoxValue != "" && fourthBoxValue != "" ) {
        alert("Your transfer of NGN"+fourthBoxValue+" to "+thirdBoxValue+" is Successfull\nTHANK YOU!")
        exitApp()
    } else if (serviceBoxValue === "Data" && fifthBoxValue === "0000" && secondBoxValue != "" && thirdBoxValue != "" && fourthBoxValue != "" ) {
        alert("Your Airtime purchase of NGN"+fourthBoxValue+" "+thirdBoxValue+" is Successfull\nTHANK YOU!")
        exitApp()
    } else if (serviceBoxValue === "Airtime" && fifthBoxValue === "0000"  && secondBoxValue != "" && thirdBoxValue != "" && fourthBoxValue != "") {
        alert("Your Data purchase of NGN"+fourthBoxValue+" "+thirdBoxValue+" is Successfull\nTHANK YOU!")
        exitApp()
    }
    else if (serviceBoxValue === "Bill" && fifthBoxValue === "0000"  && secondBoxValue != "" && thirdBoxValue != "" && fourthBoxValue != "") {
        alert("Your NGN"+fourthBoxValue+" Bill Payment for "+thirdBoxValue+" Service is Successfull\nTHANK YOU!")
        exitApp()
    }
}

function exitApp() {
    serviceBox.value = ""
    secondBox.value = ""
    thirdBox.value = ""
    fourthBox.value = ""
    fifthBox.value = ""
}

serviceBox.addEventListener("mouseover", function(){
    acceptValuess()
})

    function acceptValuess(){
    serviceBoxValue=serviceBox.value
    secondBoxValue=secondBox.value
    thirdBoxValue=thirdBox.value
    fourthBoxValue=fourthBox.value
    fifthBoxValue=fifthBox.value

    processTransaction() 
}

function processTransaction(){
        if(serviceBoxValue==="Transfer"){
            thirdBoxLb.innerHTML="Input Beneficiary's Bank Name"
            fourthBoxLb.innerHTML="Input Amount"
            fifthBoxLb.innerHTML="Input pin"
        }else if (serviceBoxValue==="Airtime"){
            thirdBoxLb.innerHTML="Input the Network"
            fourthBoxLb.innerHTML="Input Amount"
            fifthBoxLb.innerHTML="Input pin"
        }else if (serviceBoxValue==="Data"){
            thirdBoxLb.innerHTML="Input the Network"
            fourthBoxLb.innerHTML="Input Amount"
            fifthBoxLb.innerHTML="Input pin"
        }else if (serviceBoxValue==="Bill"){
            thirdBoxLb.innerHTML="Input Company's Name"
            fourthBoxLb.innerHTML="Input Amount"
            fifthBoxLb.innerHTML="Input pin"
}

}
