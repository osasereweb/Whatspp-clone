

window.addEventListener('resize', function() {
    const icons_box = this.document.querySelector(".t-icons")
    const t_title = this.document.querySelector(".t-title")
    const icon = this.document.querySelector(".t-icon")

    // this.console.log(icons_box.clientWidth)
    // this.console.log(t_title.clientWidth)

    if (this.window.innerWidth <= (icons_box.clientWidth + t_title.clientWidth)) {

        icons_box.removeChild(icon)

    } 
})

