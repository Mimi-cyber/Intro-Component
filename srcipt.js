function errorFunction (selectedID) {
    console.log(this.value)
    if(this.value = " ") {
        document.querySelector("#" + selectedID + " + .icon-error").style.display = 'initial';
        document.querySelector("#" + selectedID + " + .icon-error + .error-notice").style.display = 'initial';
    } else if(this.value != undefined) {
        document.querySelector("#" + selectedID + " + .icon-error").style.display = 'none';
        document.querySelector("#" + selectedID + " + .icon-error + .error-notice").style.display = 'none';
    }
}