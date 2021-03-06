/*
*
*  *****************************************************************************************************
*   Copyright 2020 Korea University 
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
*   *****************************************************************************************************
*   Developed by Kwanhoon Lee, Jaemin Im, Stella team, Operating Systems Lab of Korea University
*   *****************************************************************************************************
*
*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pSchema = new Schema({
	name: {type: String},
	birthDate: {type: String},
	infection: {type: String},
	date: {type:String},
	travelRoute: {type: String},
	note: {type: String},
	tid: {type: String},
	pid: {type: String},
	cid: {type: String},
	timestamp: {type: String}
});

module.exports = mongoose.model('Patients', pSchema);
