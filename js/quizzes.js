//$("#main").append(["Aubrianna"]);

var awesomeThoughts = "I am Aub and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);
//[string].replace([old],[new]);

var formattedName = HTMLheaderName.replace("%data%","Aubrianna");
var formattedRole = HTMLheaderRole.replace("%data%","QE");

$("#header").prepend([formattedName]);
$("#header").append([formattedRole]);



var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var s_obj = new String(s);
    var slice_text = s_obj.slice(1);
    var rep_text = slice_text.replace("u","U");
    return rep_text;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

var mySkills = ["EEG","teaching","research"];
$("#main").append([mySkills]);

var sampleArray = [0,0,7];
console.log(sampleArray[sampleArray.length-1]+1);

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var breakPoint = oldName.indexOf(' ');
	var firstName = oldName.slice(0,breakPoint);
	var lastName = oldName.slice(breakPoint+1);
	
	firstName = firstName.toLowerCase();
	var final_firstName = firstName[0].toUpperCase() + firstName.slice(1);
	var final_lastName = lastName.toUpperCase();

    finalName = final_firstName + ' ' + final_lastName;
    
    // Don't delete this line!
    return finalName;
};

function nameChanger1(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};




/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!
article2 = $(".featured");
article2.toggleClass("featured");

article3 = article2.next();
article3.toggleClass("featured");


$('#input').on('change',function()) {
	var val, h1;
	
	val = $('#input').val();
	
	h1 = $('.articles').children('h1');
	
	h1.text(val);
}


/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');

var ul = articleItems.children('ul');

ul.remove();






var family1, family2, bruce, madison, hunter;
family1 = $('#family1');
family2 = $('<div id = "#family2"><h1>Family 2</h1></div>');
bruce = $('<div id = "#bruce"><h2>Bruce</h2></div>');
madison = $('<div id = "#madison"><h3>Madison</h3></div>');
hunter = $('<div id = "#hunter"><h3>Hunter</h3></div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);





function numberAdder () {
	var text, number;
	text = $(this).text();
	number = text.length;
	$(this).text(text + " " + number);
}

$('p').each(numberAdder);