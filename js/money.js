function euroConverter(){
document.converter.dollar.value = document.converter.euro.value * 1.13
document.converter.pound.value = document.converter.euro.value * 0.86
document.converter.yen.value = document.converter.euro.value * 124.18
}
function dollarConverter(){
document.converter.euro.value = document.converter.dollar.value * 0.89
document.converter.pound.value = document.converter.dollar.value * 0.76
document.converter.yen.value = document.converter.dollar.value * 110.33
}
function poundConverter(){
document.converter.dollar.value = document.converter.pound.value * 1.31
document.converter.euro.value = document.converter.pound.value * 1.17
document.converter.yen.value = document.converter.pound.value * 144.91
}
function yenConverter(){
document.converter.dollar.value = document.converter.yen.value * 0.0091
document.converter.pound.value = document.converter.yen.value * 0.0069
document.converter.euro.value = document.converter.yen.value * 0.0081
}


