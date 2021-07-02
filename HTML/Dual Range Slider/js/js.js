$(document).on("input", "#lowRange", function() {
    // Values
    this.value = Math.min(this.value, this.parentNode.childNodes[5].value - 1);
    var value = (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.value) 
              - (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.min);
    console.log("Low Value = " + value);

    // Update
    var children = this.parentNode.childNodes[1].childNodes;
    children[1].style.width = value + '%';
    children[5].style.left = value + '%';
    children[7].style.left = value + '%';
});

$(document).on("input", "#highRange", function() {
    // Values
    this.value = Math.max(this.value, this.parentNode.childNodes[3].value - (-1));
    var value = (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.value) 
              - (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.min);
    console.log("High Value = " + value);

    // Update
    var children = this.parentNode.childNodes[1].childNodes;
    children[3].style.width = (100 - value) + '%';
    children[5].style.right = (100 - value) + '%';
    children[9].style.left = value + '%';
});