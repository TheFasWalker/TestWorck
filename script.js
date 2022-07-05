let courses = [
	{ name: "Courses in England", prices: [0, 100] },
	{ name: "Courses in Germany", prices: [500, null] },
	{ name: "Courses in Italy", prices: [100, 300] },
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },

];
console.log(courses)

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let sortCourses = [];

function sort(requiredRange, courses) {
	let minPrice = requiredRange[0];
	let maxPrice = requiredRange[1];


	courses.forEach(course => {
		if(minPrice == null && maxPrice == null){
			sortCourses.push(course.name);
		}
		else if (minPrice == null && maxPrice != null){
			if(course.prices[0] <= maxPrice ){
				sortCourses.push(course.name);
			}
		}
		else if(minPrice !=null && maxPrice == null){
			if(course.prices[1] >= minPrice || course.prices[1] <= minPrice){
				sortCourses.push(course.name);
			}
		}
		else {
			if((minPrice >= course.prices[0]) && (maxPrice >= course.prices[1])){
				sortCourses.push(course.name);
			}
			else if ((minPrice < course.prices[0]) && (maxPrice < course.prices[1])){
				sortCourses.push(course.name);
			}
			else if(course.prices[0] == null && course.prices[1] >= minPrice){
				sortCourses.push(course.name);
			}
			else if (course.prices[1] == null && course.prices[0] <= maxPrice){
				sortCourses.push(course.name);
			}

		}
	});



	console.log(sortCourses)
}
sort(requiredRange2, courses)



