canvas = document.getElementById("canvas1")
ctx = canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle = "purple"
ctx.lineWidth = 10
ctx.arc(300, 300, 40, 0, 2 * Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
    color=document.getElementById("Colour").value
    mouse_x = e.clientX - canvas.offsetLeft
    mouse_y = e.clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 10
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI)
    ctx.stroke()
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}