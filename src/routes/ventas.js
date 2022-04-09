const express = require("express")
const router = express.Router();
const pool = require("../database");


router.post("/venta", (req,res ) => {
    console.log(req)
   
    // res.redirect("/")
    //recibir cantidad total de venta y objetos vendidos por request body
  
    //insertar cantidad total de la venta en tabla de ventas
    //obtener id de insert 
    //for each objeto de la venta hacer un insert con el id de la venta y el id del objeto vendido
    //hacer update de la cantidad que hay en caja mas lo que se vendio

})

 module.exports = router
// $.ajax({
//     type: 'POST',
//     data: data,
//     contentType: "application/json",
//     dataType:'json',
//     url: '/venta',                      
//     success: function(data) {
//         console.log('success');
//         console.log(data);                               
//     },
//     error: function(error) {
//         console.log("some error in fetching the notifications");
//      }
// });


