document.getElementById("UpdateApperance").style.display =
  "none"; /*Hiding the Update btn*/

/*Receiver=Donator*/

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDesc = document.getElementById("productDesc");
var productCategory = document.getElementById("productCategory");

var productContainer = [];





function update(i) {
  /*Update btn appears instead of Add*/
  document.getElementById("DeleteAll").style.display = "none";
  document.getElementById("AddApperance").style.display = "none";
  document.getElementById("UpdateApperance").style.display = "block";

  /*Swap values From Table back to inputs*/
  productName.value = productContainer[i].name;
  productPrice.value = productContainer[i].price;
  productDesc.value = productContainer[i].desc;
  productCategory.value =productContainer[i].category;

  /*Clear the table content*/
  productContainer[i].name = "";
  productContainer[i].price = "";
  productContainer[i].desc = "";
  productContainer[i].category = "";

  
  displayProduct(),
    (document.querySelector("#UpdateApperance").onclick = function () {
      /*On clicking Update btn */
      /*Swap values From inputs back to the table one more time*/


      productContainer[i].name = productName.value;
      productContainer[i].price =productPrice.value;
      productContainer[i].desc = productDesc.value;
      productContainer[i].category =productCategory.value;

      displayProduct(),
        /*Clear the inputs content*/
        resetInp()

        /*Add btn appears instead of Update*/
      document.getElementById("AddApperance").style.display = "block";
      document.getElementById("DeleteAll").style.display = "block";
      document.getElementById("UpdateApperance").style.display = "none";
    });

  }



function addProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    desc: productDesc.value,
    category: productCategory.value,
  };

  productContainer.push(product);
  displayProduct();
  resetInp();
  // console.log(productContainer);
}

function displayProduct() {
  var productList = "";
  for (var i = 0; i < productContainer.length; i++) {
    productList += `<tr>
                        <td>${i + 1}</td> 
                        <td>${productContainer[i].name}</td>
                         <td>${productContainer[i].price}</td>
                         <td>${productContainer[i].desc}</td>
                         <td>${productContainer[i].category}</td>
                         <td><button onclick="update(${i})" class="btn btn-warning" id="tableupdate">Update</button></td>
                         <td><button onclick="deleteProduct(${i})" class="btn btn-danger" id="tabledelete" >Delete</button></td>
                         
                    </tr>`;
  }
  document.getElementById("tbody").innerHTML = productList;
}

// deleteAll
function deleteAll() {
  productContainer.splice(0);
  displayProduct();
}
///
function resetInp() {
  productName.value = "";
  productPrice.value = "";
  productDesc.value = "";
  productCategory.value = "";
}

// deleteProduct

function deleteProduct(i) {
  productContainer.splice(i, 1);
  displayProduct();
}
