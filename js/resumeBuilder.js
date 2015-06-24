// bio JSON
var bio = {
	"name": "Aubrianna Zhu",
	"role": "Quality Engineer",
	"contacts": {
		"mobile": "916-420-6976",
		"email": "rubutter@gmail.com",
		"github": "https://github.com/amqzhu",
		"twitter": "@cooltwitteraccount",
		"location": "Ulaanbaatar, Mongolia"
	},
	"welcomeMessage": "Hi! Welcome to my site.",
	"skills": ["EEG","teaching","eat fried chicken"],
	"biopic": "images/lala.jpg",
	"display": function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	
	var formattedPicture = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	
	$("#header").prepend([formattedRole]);
	$("#header").prepend([formattedName]);
	
	$("#header").append(formattedMobile);
	$("#header").append(formattedEmail);
	$("#header").append(formattedTwitter);
	$("#header").append(formattedGithub);
	$("#header").append(formattedLocation);
	
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcome);
	
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}
};

// call function to display bio details
bio.display();


// work JSON
var work = {
	"jobs": [
	{
		"employer": "Equilar",
		"title": "Quality Engineer",
		"location": "Redwood City, CA",
		"dates": "August 2013 - present",
		"description": "Quality is very important!"
	},
	{
		"employer": "PowerScore",
		"title": "SAT Instructor",
		"location": "Walnut Creek, CA",
		"dates": "Feb 2013 - July 2014",
		"description": "Taught high school students"
	}
	],
	"display": function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}
};

// call function to display work details
work.display();


// projects JSON
var projects = {
	projects: [
		{"title": "how to eat everything",
		"dates": "Apr 1991 - present",
		"description": "eat everything, especially the noodles",
		"images": ["images/fry.jpg"]
		},
		{"title": "how to sleep everyday",
		"dates": "Apr 1991 - present",
		"description": "sleep on comfy mattress and foam pillow",
		"images": ["images/fry.jpg"]
		}
	],
	"display": function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
};

// call function to display project details
projects.display();

// education JSON
var education = {
	"schools": [
		{"name": "UC Berkeley",
		"location": "Berkeley, CA",
		"degree": "BS, BA",
		"majors": ["Genetics","Psychology"],
		"dates": 2013
		},
		{"name": "University of Cambridge",
		"location": "Cambridge, UK",
		"degree": "Bachelors",
		"majors": ["study abroad"],
		"dates": 2012
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Development",
			"school": "Udacity Nanodegree",
			"date": 2015,
			"url": "https://www.udacity.com/"
		}
	],
	"display": function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
	
		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}
	
	$(".education-entry:last").append(HTMLonlineClasses);
	
	for (onlineCourse in education.onlineCourses) {
		//$("#education").append(HTMLschoolStart);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
		
		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);
	}
}
};

// call function to display education info
education.display();

// add internationalize button to make last name all caps
$("#main").append(internationalizeButton);

function inName() {
	var newName = [];
	newName = bio.name.split(" ");
	newName[1] = newName[1].toUpperCase();
	newName[0] = newName[0].slice(0,1).toUpperCase() + newName[0].slice(1).toLowerCase();
	return newName[0]+ " " + newName[1];
}

//put Google maps on the page
$("#mapDiv").append(googleMap);