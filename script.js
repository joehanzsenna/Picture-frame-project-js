
// range 
let borderRange = document.getElementById('border-range')
let paddingRange = document.getElementById('padding-range')
let contentRange = document.getElementById('content-range')

// colors
let borderColor = document.getElementById('border-color')
let paddingColor = document.getElementById('padding-color')
let contentColor = document.getElementById('content-color')

// BorderPaddingContent 
let border = document.querySelector('.border')
let padding = document.querySelector('.padding')
let content = document.querySelector('.content')

// range 
borderRange.addEventListener("change", function(){
    border.style.padding = borderRange.value + "px"
})

paddingRange.addEventListener("change", function(){
    padding.style.padding = paddingRange.value + "px"
})

contentRange.addEventListener("change", function(){
    content.style.padding = contentRange.value + "px"
})

// colors 
borderColor.addEventListener("change", function(){
    border.style.backgroundColor = borderColor.value
})

paddingColor.addEventListener("change", function(){
    padding.style.backgroundColor = paddingColor.value
})

contentColor.addEventListener("change", function(){
    content.style.backgroundColor = contentColor.value
})