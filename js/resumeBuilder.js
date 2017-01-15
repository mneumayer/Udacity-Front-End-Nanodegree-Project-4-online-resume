var bio = {
    "name": "Matthew Neumayer",
    "role": "Web Developer",
    "contacts": {
        "mobile": "224-392-8666",
        "email": "matthew.neumayer@gmail.com",
        "github": "https://github.com/mneumayer/",
        "twitter": "@MatthewNeumayer",
        "location": "Glenview Il"
    },
    "welcomeMessage": "Welcome To My Resume!",
    "skills": ["HTML", "CSS", "JavaScript", "Java", "C++", "VBA", "Arduino", "Linux", "AutoCAD"],
    "biopic": "images/me.jpg"
};



var education = {
    "schools": [{
        "name": "DeVry University",
        "location": "Chicago, Il",
        "degree": "B.S.",
        "majors": ["Electronics and Computer Technology", "Technical Management"],
        "dates": "2011",
        "url": "http://www.devry.edu/"
    }],
    "onlineCourses": [{
        "title": "Java",
        "school": "Oakton Community College",
        "dates": "2014",
        "url": "https://www.oakton.edu/"
    }, {
        "title": "C++",
        "school": "Oakton Community College",
        "dates": "2014",
        "url": "https://www.oakton.edu/"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }, ]
};


var work = {
    "jobs": [{
        "employer": "CTL Group",
        "title": "Project Manager / Technician III",
        "location": "Skokie, Il",
        "dates": "January 2005 - present",
        "description": "Asphalt Strain Gage Project Manager. Implemented various types of data acquisition systems as well as reduced and analyzed acquired data. Manage a calibration database and designed VBA macro to sort items. The macro gave devices urgency codes that were then tallied and then sent in an email monthly along with the spreadsheet. Managed a team to fabricate pavement sensors that are used by various universities, DOT&#39s, and private research firms around the world to develop new types of asphalt mixees. Dynamic testing of train bolsters, side frames, couplers, fasteners and bridge stay cables with closed loop servo hydraulic systems using MTS 407 / Flex Test controllers. Designed and implemented a wireless temperature / humidity logging system to regulate laboratory test environments. Managed a Linux based MySQL database that stored data for 800 sensors that monitored a bridge&#39s structure while a super structure was being built around it. Designated a File Maker database where mortar mix setting times were entering which auto generated schedules testing for specimens. The database was designed to be used with IPad which replaced the old system of logging data in books. advised engineers on selecting data acquisition and instrumentation."
    }, {
        "employer": "AYK Creative",
        "title": "Consultant",
        "location": "Sussex,  Wi",
        "dates": "November 2015 - April 2016",
        "description": "Designed a USB force sensing floor mat. The mat is used by customer to get information about products and navigate the restaurant menu.  Designed and fabricated the circuit. Designed and wrote the microcontroller software. Designed enclosure in Autodesk 123D Design then built a Kossel mini delta 3D printer to print the enclosure."

    }]
};

var projects = {
    "projects": [{
        "title": "Resume Project",
        "dates": "July 2016",
        "description": " The resume project is my online resume that displays my projects from my Front End Developer Class. It utilize a template that is poulated by using JavaScript.",
        "images": ["images/me.jpg", "images/me.jpg"]
    }]
};




bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPhoneNumber = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").prepend(formattedLocation);
    $("#topContacts").prepend(formattedgithub);
    $("#topContacts").prepend(formattedtwitter);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedPhoneNumber);

    $("#topContacts").after(formattedImage);
    $("#topContacts").after(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);

    $("#footerContacts").append(formattedPhoneNumber);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedgithub);
    $("#footerContacts").append(formattedLocation);


    for (var skill = 0; skill < bio.skills.length; skill++) {

        formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);

    }
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var fromattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(fromattedworkDescription);
    }
};




projects.display = function() {


    for (var project = 0; project < projects.projects.length; project++) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);




        for (var image = 0; image < projects.projects[project].images.length; image++) {
            var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImages);


        }

    }

};

education.display = function() {

    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        //$(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);


        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajors);



        var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(formattedUrl);

    }

    $("#education").append(HTMLonlineClasses);


    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        //$(".education-entry:last").append(formattedonlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedonlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedOnlineURL);




    }
};




bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
