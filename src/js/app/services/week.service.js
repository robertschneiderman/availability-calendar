app.service('weekService', function() {
	// console.log(moment());

		// console.log(startDate);

	// this.selectedDay = '',

	this.weekArray = function() {
		// new_date.startOf('week');
		var firstWeekArray = [],
			secondWeekArray = [],		
			currentDate = moment().startOf('day'),
			finalDate = moment().endOf('day').add(6, 'days'),
			range = moment().range(currentDate, finalDate);		


		for (i = 0; i < 7; i++) {

			var firstWeekStart = moment().startOf('week'),
				firstWeekEnd = moment().endOf('week'),
				loopDate = moment(firstWeekStart, "DD-MM-YYYY").add(i, 'days');

			firstWeekArray.push({
				// day: loopDate.day(),
				// date: loopDate.date(),
				isActive: range.contains(loopDate),
				// month: loopDate.month(),
				// year: loopDate.year()
				moment: loopDate
			});

		}

		for (i = 0; i < 7; i++) {

			var secondWeekStart = moment().endOf('day').add(6, 'days').startOf('week'),
				secondWeekEnd = moment().endOf('day').add(6, 'days').endOf('week'),
				loopDate = moment(secondWeekStart, "DD-MM-YYYY").add(i, 'days');

			secondWeekArray.push({
				// day: loopDate.day(),
				// date: loopDate.date(),
				isActive: range.contains(loopDate),
				// month: loopDate.month(),
				// year: loopDate.year() 
				moment: loopDate

			});				
		}

		// console.log(firstWeekArray);
		// console.log('-------------------------');
		// console.log(secondWeekArray);

		return [firstWeekArray, secondWeekArray];
	},


	// console.log(this.weekArray());

	// console.log(new_date.startOf('week'));	

	// return {
		this.weeks = this.weekArray()
	// }
});