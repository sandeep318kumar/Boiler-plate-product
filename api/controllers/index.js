'use strict'

// import HealthController from './Health'
// import VersionController from './Version'

import pro from "./Product";

import mongoose from 'mongoose';

// mongoose.connect("mongodb://localhost/productDatabase");
mongoose.connect('mongodb://localhost/my_database', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}, function(err, res){
	if(err){
		console.log("got error in mongo db");
	} else{
		console.log("!! connected to mongodb !!");
	}
});

export {
	pro
}
