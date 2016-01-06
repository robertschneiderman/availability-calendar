app.factory('timeService', function(){

	//9am - 5pm

	// var startTime: moment().hour(0).minutes(0);



	// var interval = moment().startOf('day').recur().every(30).minutes();
	// console.log(date2);
	
	return {
		// times: this.timesArray
		timesArray: [],
		getTimes: function(momentRef) {
			var self = this;			
			// console.log(day);
			// console.log(day.year + ', ' + day.month + ', ' + day.date);
			// var temp = new Date(day.year + '-' + day.month + '-' + day.date);

			// var momentRef = moment;

			var earliestTime = moment(momentRef).hour(9).unix();
			var latestTime = moment(momentRef).hour(17).unix();

			// console.log(earliestTime);
			// console.log(latestTime);

			for (loopTime = earliestTime; loopTime < latestTime; loopTime += 1800) {

				// console.log(loopTime);

				var dateString = moment.unix(loopTime).format("MM/DD/YYYY H:m");

				self.timesArray.push({
					isActive: false,
					time: moment(dateString)
				});

				// console.log(self.timesArray);

			}

			// return self.timesArray;

			// console.log(this.timesArray);


			// console.log(temp);
			// var interval = 0;
			// var time = moment + interval;
		}		
	}
});