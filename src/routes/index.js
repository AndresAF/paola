const express = require("express");
const { append } = require("express/lib/response");
const pool = require("../database");
const router = express.Router();
const database = require("../database")
// INVENTARIO
router.post("/productoNuevo", async  (req,res) => {
    const {producto, precioPorUnidad, precioDeCompra, tipoDeProducto, descripcion} = req.body;
    const data = {
        producto, 
        precioPorUnidad, 
        precioDeCompra,
        tipoDeProducto,
        cantidad: "0",
        descripcion

    };

    

await pool.query("insert into inventario set ?", [data], )
res.redirect("/inventario")




})
router.get("/productoNuevo", (req,res) => {
    res.render("main/inventario/productoNuevo")
})
router.get("/inventario", async (req,res) => {
    
    const inventario = await pool.query("SELECT * FROM inventario");
    res.render("main/inventario/inventario", {inventario: inventario})

}) 
router.get("/inventario/delete/:id", async (req,res) => {
    const id = req.params.id
    await pool.query("delete from inventario where id = ?", [id])
    res.redirect("/inventario")
  
   
 })
 

//VENTAS
router.get("/",async (req,res) => {
  
    const inventario  =  await pool.query("SELECT * FROM inventario");
    res.render("main/ventas", {inventario:inventario})
    
})


router.get("/compra", (req,res) => {
    res.render("main/compras")
})

router.get("/caja", async (req,res) => {
   const caja = await pool.query("select * from caja");
    res.render("main/caja/caja", {caja: caja[0]})
})

router.get("/agregarDinero", (req,res)=> {
    res.render("main/caja/agregarDinero")
})

router.post("/agregarDinero", async (req,res) => {
    pool.query("ALTER TABLE caja column cantidad")
})
module.exports = router;
