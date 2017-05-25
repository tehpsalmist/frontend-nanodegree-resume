'use strict';

var bio = {
    "name": "Ben Steward",
    "role": "Web Developer",
    "contacts": {
        "mobile": "267-347-2395",
        "email": "ronyfan102@gmail.com",
        "twitter": "@tehpsalmist",
        "github": "@tehpsalmist",
        "location": "Sellersville, PA"
        },
    "biopic": "images/Profilepic1.jpg",
    "welcomeMessage": "Welcome to my interactive resume. I hope your experience is enjoyable and informative.",
    "skills": ["MS Office Suite and many other common computer functions",
        "Keyboard Shortcut Ninja",
        "HTML, CSS, and Javascript",
        "Experience with email marketing",
        "Management and leadership experience",
        "Learning quickly, staying organized, and communicating clearly"
        ],
    "display": function() {
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location) + HTMLmobile.replace("%data%", bio.contacts.mobile) + HTMLemail.replace("%data%", bio.contacts.email) + HTMLtwitter.replace("%data%", bio.contacts.twitter) + HTMLgithub.replace("%data%", bio.contacts.github));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic) + HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        for (var x = 0; x < bio.skills.length; x++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[x]));
            }
        }
};

var education = {
    "schools": [
        {
            "school": "Upper Bucks Christian School",
            "dates": "2005-2007",
            "degree": "Diploma",
            "location": "Sellersville, PA",
            "majors": ["General Education"],
            "url": "https://www.upperbucks.org"
        },
        {
            "school": "Northland International University",
            "dates": "2007-2011",
            "degree": "Bachelor of Arts",
            "location": "Dunbar, WI",
            "majors": ["Biblical Studies"],
            "url": "https://en.wikipedia.org/wiki/Northland_International_University"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "dates": "April 2017-June 2017",
            "school": "Udacity",
            "urlShort": "udacity.com",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "display": function() {
        for (var e = 0; e < education.schools.length; e++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[e].school).replace("#", education.schools[e].url) + HTMLschoolDegree.replace("%data%", education.schools[e].degree) + HTMLschoolDates.replace("%data%", education.schools[e].dates) + HTMLschoolLocation.replace("%data%", education.schools[e].location) + HTMLschoolMajor.replace("%data%", education.schools[e].majors));
        }
        $("#education").append(HTMLonlineClasses);
        for (var e = 0; e < education.onlineCourses.length; e++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[e].title).replace("#", education.onlineCourses[e].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[e].school) + HTMLonlineDates.replace("%data%", education.onlineCourses[e].dates) + HTMLonlineURL.replace("%data%", education.onlineCourses[e].urlShort).replace("#", education.onlineCourses[e].url));
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Faith Christian Academy",
            "title": "Office Manager",
            "dates": "August 2012-current",
            "location": "Sellersville, PA",
            "description": "I oversaw or executed all tasks related to classroom operations, internal and external communications, supplies, admissions, and management of the student information system (RenWeb).",
            "url": "http://my-fca.com"
        },
        {
            "employer": "XL Sports World",
            "title": "Manager",
            "dates": "December 2016-current",
            "location": "Hatfield, PA",
            "description": "I am responsible for the security of the building and the money, and I supervise and aid the flex staff in receiving guests at the front desk, preparing surfaces and rooms for each event, cooking and serving food, and cleaning the building.",
            "url": "http://xlhatfield.com"
        },
        {
            "employer": "Chick-fil-A",
            "title": "Manager/Kitchen Crew",
            "dates": "July 2015-December 2016",
            "location": "Quakertown, PA",
            "description": "My duties in the kitchen involved cooking, assembling, and serving food and cleaning the building. My duties as manager involved organizing the shift, solving more difficult problems for customers, handling the money, and closing all of the operations at night.",
            "url": "http://cfaquakertown.com"
        },
        {
            "employer": "The Intelligencer",
            "title": "Courier",
            "dates": "January 2013-July 2013",
            "location": "Doylestown, PA",
            "description": "I delivered the morning newspaper by car to about 300 clients 6 days per week.",
            "url": "http://phillyburbs.com/"
        },
        {
            "employer": "McDonald's",
            "title": "Manager",
            "dates": "November 2011-August 2012",
            "location": "New Britain, PA",
            "description": "I supervised the crew in maintaining food safety, serving delcious food quickly, and making each customer feel important and satisfied.",
            "url": "http://mcdonalds.com"
        }
    ],
    "display": function displayWork() {
        var j = 0;
        for (j = 0; j < work.jobs.length; j++) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[j].employer).replace("#", work.jobs[j].url) + HTMLworkTitle.replace("%data%", work.jobs[j].title) + HTMLworkDates.replace("%data%", work.jobs[j].dates) + HTMLworkLocation.replace("%data%", work.jobs[j].location) + HTMLworkDescription.replace("%data%", work.jobs[j].description));
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "FORWARD Conference 2017 Landing Page",
            "dates": "April/May 2017",
            "description": "After completing Udacity's courses on HTML and CSS, I decided to put my month-old knowledge to the test and create a landing page for a conference I was putting together for FCA. I wrote all of the code for the website using Bootstrap 3.3.7.",
            "images": ["images/forward-site.png"],
            "url": "http://forwardconference.cf"
        },
        {
            "title": "Report Card Templates",
            "dates": "October 2014",
            "description": "I was dissatisfied with the default templates in our SIS, so I used their customization kit to create new templates using a little bit of HTML and an excel table. It was a great learning experience, and gave me a taste for more serious computer coding. I am currently working on updating the transcript template too, so stay tuned!",
            "images": ["images/report-card.png"],
            "url": "http://github.com/tehpsalmist/TemplateShowcase"
        }
    ],
    "display": function() {
        var p = 0;
        for (p = 0; p < projects.projects.length; p++) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[p].title).replace("#", projects.projects[p].url) + HTMLprojectDates.replace("%data%", projects.projects[p].dates) + HTMLprojectDescription.replace("%data%", projects.projects[p].description) + HTMLprojectImage.replace("%data%", projects.projects[p].images));
        }
    }
};

bio.display();
work.display();
education.display();
projects.display();
$('#mapDiv').append(googleMap);