function myFunction() {
    let input = document.getElementById('mySearch');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("myList");
    let li = ul.getElementsByClassName('listItem');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByClassName("itemText")[0];
        let txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}