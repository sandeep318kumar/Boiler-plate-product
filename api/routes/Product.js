'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { ProductController } from '../controllers'

console.log(ProductController);

const ProductRouter = new Express.Router()
const { updateById, create, deleteById, listN, findById } = ProductController;

// // consoling some things for better understading
// console.log("here are imported things\n");

// console.log(listN);
// console.log(findById);
// console.log(updateById);
// console.log(create);


const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

ProductRouter.use(extractHeaders)

// Routes
ProductRouter.get('/', routeSanity, function(req, res){
    return res.redirect(req.baseUrl + "list");
    // console.log("I am hit by home route\n");
    // return res.send("Hello bro\n");
});

ProductRouter.get("/list", routeSanity, asyncWrapper(listN));

ProductRouter.get("/:id", routeSanity, asyncWrapper(findById));

ProductRouter.post("/create", routeSanity, asyncWrapper(create));

ProductRouter.put("/:id/update", routeSanity, asyncWrapper(updateById));

ProductRouter.delete("/:id/delete", routeSanity, asyncWrapper(deleteById));

ProductRouter.use(setHeaders);

export default ProductRouter;
