'use strict'

import { ResponseBody } from '../helpers'
import { ProductModel } from '../models'


function listN(request, response, next){
    const data =  ProductModel.find({});
    const responseBody = new ResponseBody(200, "Here are all products list", data);
    response.body = responseBody;
    process.nextTick(next);
}

function findById(request, response, next){
    const idVal = request.params.id;
    const data =  ProductModel.findById(idVal);
    let responseBody;
    if(data){
        responseBody = new responseBody(200, 'Product found is: ', data);
    } else{
        responseBody = new responseBody(404, "Product not found");    
    }
    response.body = responseBody;
    process.nextTick(next);
}

function updateById(request, response, next){
    const idVal = request.params.id;
    const data = request.body;

     ProductModel.findByIdAndUpdate(idVal, data, function(err, p){
        if(err){
            return console.log("504 error in updation");
        } else{
            console.log("Successfully updated");
        }
    });

    let responseBody;
    if(data){
        responseBody = new responseBody(200, 'Product updated ', data);
    } else{
        responseBody = new responseBody(404, "Product update not found");    
    }
    response.body = responseBody;
    process.nextTick(next);
}

function create(request, response, next){
    const data = request.body;
    console.log("DAta is: " + data);

    const newProduct = new ProductModel(data);
     newProduct.save(function(err, prod){
        if(err){
            return console.log(err);
        } else{
            // print the new product
            console.log("New product "+ prod.name + " with id " + prod.id + " successfully saved")
        }
    });

    const responseBody = new responseBody(200, "Product saved successful", data);
    response.body = responseBody;
    process.nextTick(next);
}

function deleteById(request, response, next){
    const idVal = request.params.id;
    const data =  ProductModel.findByIdAndRemove(idVal, function(err, res){
        if(err){
            return console.log(err);
        } else{
            console.log("success in deletion");
        }
    });
    const responseBody = new responseBody(200, "Product saved successful", idVal);
    response.body = responseBody;
    process.nextTick(next);
}

const ProductController = {
    listN,
    findById,
    updateById,
    create, 
    deleteById
}

export default ProductController;
