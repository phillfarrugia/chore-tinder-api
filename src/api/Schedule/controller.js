import mongoose from '../../services/mongoose'

 export function remove({params}, res, next) {
  	Schedule.find({}, function(err, docs) {
  		if (docs.length <= 0) {
  			console.log("No Schedule found, not deleting");
  			res.status(200).json({ "success": true });
  		} else {
  			console.log("Schedule found, deleting");
  			docs[0].delete();
  			res.status(200).json({ "success": true });
  		}
  	});
  }

const Schedule = mongoose.model('Schedule', { weeksOfYear: [{
	monday: String,
	tuesday: String,
	wednesday: String,
	thursday: String,
	friday: String
	}]});

  export function show(req, res, next) {
  	Schedule.find({}, function(err, docs) {
  		if (docs.length <= 0) {
			console.log("*** No Schedule found ***");
  			generateEmptySchedule();
  			res.status(200).json({});
  		} else {
  			console.log("Schedule found");
  			var weekOfYear = docs[0].weeksOfYear[req.params.weekOfYear];
  			res.status(200).json(weekOfYear);
  		}
  	});
  }

  export function update(req, res, next) {
  	Schedule.find({}, function(err, docs) {
  		if (docs.length <= 0) {
  			console.log("*** No Schedule found ***");
  			res.status(500).json({
  				"errorMessage": "No Schedule Found", 
  				"success": false
  			});
  		} else {
  			console.log("Schedule found");
  			var weekOfYear = docs[0].weeksOfYear[req.params.weekOfYear];
  			updateWeekOfYear(weekOfYear, req.body);
  			docs[0].save();
  			res.status(200).json(weekOfYear);
  		}
  	});
  }

  function generateEmptySchedule() {
  	var schedule = new Schedule({ weeksOfYear: [] });
  	for (var i=1; i<=50; i++) {
  		schedule.weeksOfYear.push({
  			monday: null,
  			tuesday: null,
  			wednesday: null,
  			thursday: null,
  			friday: null
  		})
  	}
  	schedule.save();
  }

  function updateWeekOfYear(weekOfYear, json) {
  	weekOfYear.monday = json["monday"];
  	weekOfYear.tuesday = json["tuesday"];
  	weekOfYear.wednesday = json["wednesday"];
  	weekOfYear.thursday = json["thursday"];
  	weekOfYear.friday = json["friday"];
  }

