function search(){
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const storeitems = document.getElementById('product-list');
    const product = document.querySelectorAll('.product');
    const productname = document.getElementsByTagName('h2');

    for(var i=0; i<productname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if(match) {
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }
    }
}