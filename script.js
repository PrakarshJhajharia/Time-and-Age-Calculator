
var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;
var mont = 31;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('current_time');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
var newDate = new Date();
var yeartoday = newDate.getFullYear();
var monthtoday = newDate.getMonth();
var datetoday = newDate.getDate();
var years = document.getElementById("year");
var months = document.getElementById("month");
var date = document.getElementById("date");
years.value = yeartoday
months.value = (monthtoday+1).toString();
date.value = datetoday.toString();




if (years.value == yeartoday){
  var newDate = new Date();
  var lol = newDate.getMonth() + 1;
  for(var i = lol+1; i<13;i++){
    var ll = i.toString();
    document.getElementById(ll).setAttribute("disabled","disabled");
  }

}
else{
  var newDate = new Date();
  var lol = newDate.getMonth() + 1;
  for(var i = lol+1; i<13;i++){
    var ll = i.toString();
    document.getElementById(ll).removeAttribute("disabled");
  }

}
var newDate = new Date();
var monthsa = newDate.getMonth()
var yeartoday = newDate.getFullYear();
var lola = newDate.getDate()
if (years.value == yeartoday && months.value==monthsa+1){
  for(var i = lola+1; i<29;i++){
    var ij = i+100
    var ll = ij.toString();
    document.getElementById(ll).setAttribute("disabled","disabled");
  }
  if(lola<29){
    document.getElementById("29").setAttribute("disabled","disabled");
  }
  if(lola<30){
    document.getElementById("30").setAttribute("disabled","disabled");
  }
  if(lola<31){
    document.getElementById("31").setAttribute("disabled","disabled");
  }


}
else{
  for(var i = lola+1; i<29;i++){
    var ij = i+100
    var ll = ij.toString();
    document.getElementById(ll).removeAttribute("disabled");
  }


}
date.onchange = function(){
  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  if (years.value == yeartoday){
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }

  }
  else{
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }

  }
  var monthsa = newDate.getMonth()
  var lola = newDate.getDate()
  if (years.value == yeartoday && months.value==monthsa+1){
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }
    if(lola<29){
      document.getElementById("29").setAttribute("disabled","disabled");
    }
    if(lola<30){
      document.getElementById("30").setAttribute("disabled","disabled");
    }
    if(lola<31){
      document.getElementById("31").setAttribute("disabled","disabled");
    }


  }
  else{
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }


  }


  var month = months.value;
  if(month == "1"){
    var month_value = 31;
    var totalMonth = 31;
  }
  if(month == "2"){
    var month_value = 28;

  }
  if(month == "3"){
    var month_value = 31;
  }
  if(month == "4"){
    var month_value = 30;
  }
  if(month == "5"){
    var month_value = 31;
  }
  if(month == "6"){
    var month_value = 30;
  }
  if(month == "7"){
    var month_value = 31;
  }
  if(month == "8"){
    var month_value = 31;
  }
  if(month == "9"){
    var month_value = 30;
  }
  if(month == "10"){
    var month_value = 31;
  }
  if(month == "11"){
    var month_value = 30;
  }
  if(month == "12"){
    var month_value = 31;
  }
  if (year%4 == 0 && month == "2"){
    var month_value = 29;
  }
  /*var hi = new Date();
  var datetoday = hi.getDate();
  var day = datetoday - date.value;
  console.log(day)
  var age = ((2021 - year)*365)

  age = age + Number(day)
  age = age + mot
  var output = document.getElementById("output");
  output. = "You are "+age+" days old or "+(2021-year)+" year "+month+" months "+ day +" days old"
  console.log(age)*/
  var newDate = new Date();
  var datetoday = newDate.getDate();
  var yeartoday = newDate.getFullYear();
  var monthtoday = newDate.getMonth() + 1;

  var yeargiven = years.value;
  var dategiven = Number(date.value)
  var monthgiven = Number(months.value)
  var month_ans = 0;
  var year_answer = 0;
  var days_ans = datetoday - dategiven;

  if (days_ans < 0){
    days_ans = month_value + days_ans;
    month_ans = month_ans - 1;
  }
  month_ans = month_ans + (monthtoday - monthgiven);
  if (month_ans < 0){
    month_ans = 12 + month_ans;
    year_answer = year_answer - 1;
  }
  year_answer = year_answer + (yeartoday-yeargiven)
  var mo = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334,
    365
  ]
  var totaldays = ((yeartoday*365)+datetoday+mo[monthtoday-1])-((yeargiven)*365 + dategiven + mo[monthgiven-1])+Math.round((yeartoday-yeargiven)/4)
  output.innerText = "You are "+totaldays+" days old or "+year_answer+" years "+month_ans+" months "+ days_ans +" days old"

}


months.onchange = function(){
  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  var monthsa = newDate.getMonth()
  var lola = newDate.getDate()
  if (years.value == yeartoday && months.value==monthsa+1){
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }
    if(lola<29){
      document.getElementById("29").setAttribute("disabled","disabled");
    }
    if(lola<30){
      document.getElementById("30").setAttribute("disabled","disabled");
    }
    if(lola<31){
      document.getElementById("31").setAttribute("disabled","disabled");
    }


  }
  else{
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }


  }
  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  if (years.value == yeartoday){
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }

  }
  else{
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }

  }


  var thirtyone = document.getElementById("31");
  var thirty = document.getElementById("30");
  var twentynine = document.getElementById("29");
  var year = years.value;
  var month = months.value;
  if(year%4 != 0 && month == "2"){
    thirtyone.setAttribute("disabled", "disabled");
    thirty.setAttribute("disabled", "disabled");
    twentynine.setAttribute("disabled", "disabled");
  }
  else if(year%4 === 0 && month == "2"){
    thirtyone.setAttribute("disabled", "disabled");
    thirty.setAttribute("disabled", "disabled");
    twentynine.removeAttribute("disabled");
  }
  else if (month == "4" || month == "6" || month == "9" || month == "11"){
    thirtyone.setAttribute("disabled", "disabled");
    thirty.removeAttribute("disabled");
    twentynine.removeAttribute("disabled");

  }
  else{
    thirty.removeAttribute("disabled");
    thirtyone.removeAttribute("disabled");
    twentynine.removeAttribute("disabled");

  }

  if(month == "1"){
    var month_value = 31;
    var totalMonth = 31;
  }
  if(month == "2"){
    var month_value = 28;

  }
  if(month == "3"){
    var month_value = 31;
  }
  if(month == "4"){
    var month_value = 30;
  }
  if(month == "5"){
    var month_value = 31;
  }
  if(month == "6"){
    var month_value = 30;
  }
  if(month == "7"){
    var month_value = 31;
  }
  if(month == "8"){
    var month_value = 31;
  }
  if(month == "9"){
    var month_value = 30;
  }
  if(month == "10"){
    var month_value = 31;
  }
  if(month == "11"){
    var month_value = 30;
  }
  if(month == "12"){
    var month_value = 31;
  }

  /*var hi = new Date();
  var datetoday = hi.getDate();
  var day = datetoday - date.value;
  console.log(day)
  var age = ((2021 - year)*365)

  age = age + Number(day)
  age = age + mot
  var output = document.getElementById("output");
  output. = "You are "+age+" days old or "+(2021-year)+" year "+month+" months "+ day +" days old"
  console.log(age)*/
  var newDate = new Date();
  var datetoday = newDate.getDate();
  var yeartoday = newDate.getFullYear();
  var monthtoday = newDate.getMonth() + 1;

  var yeargiven = years.value;
  var dategiven = Number(date.value)
  var monthgiven = Number(months.value)
  var month_ans = 0;
  var year_answer = 0;
  var days_ans = datetoday - dategiven;
  if (days_ans < 0){
    days_ans = month_value + days_ans;
    month_ans = month_ans - 1;
  }
  month_ans = month_ans + (monthtoday - monthgiven);
  if (month_ans < 0){
    month_ans = 12 + month_ans;
    year_answer = year_answer - 1;
  }
  year_answer = year_answer + (yeartoday-yeargiven)
  var mo = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334,
    365
  ]
  var totaldays = ((yeartoday*365)+datetoday+mo[monthtoday-1])-((yeargiven)*365 + dategiven + mo[monthgiven-1]) +Math.round((yeartoday-yeargiven)/4)

  output.innerText = "You are "+totaldays+" days old or "+year_answer+" years "+month_ans+" months "+ days_ans +" days old"

  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  var monthsa = newDate.getMonth()
  var lola = newDate.getDate()
  if (years.value == yeartoday && months.value==monthsa+1){
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }
    if(lola<29){
      document.getElementById("29").setAttribute("disabled","disabled");
    }
    if(lola<30){
      document.getElementById("30").setAttribute("disabled","disabled");
    }
    if(lola<31){
      document.getElementById("31").setAttribute("disabled","disabled");
    }


  }
  else{
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }


  }
  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  if (years.value == yeartoday){
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }

  }
  else{
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }

  }


}

years.onchange = function(){
  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  var monthsa = newDate.getMonth()
  var lola = newDate.getDate()
  if (years.value == yeartoday && months.value==monthsa+1){
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }
    if(lola<29){
      document.getElementById("29").setAttribute("disabled","disabled");
    }
    if(lola<30){
      document.getElementById("30").setAttribute("disabled","disabled");
    }
    if(lola<31){
      document.getElementById("31").setAttribute("disabled","disabled");
    }


  }
  else{
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }


  }
  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  if (years.value == yeartoday){
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }

  }
  else{
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }

  }


  var thirtyone = document.getElementById("31");
  var thirty = document.getElementById("30");
  var twentynine = document.getElementById("29");
  var year = years.value;
  var month = months.value;
  var day = date.value;

  if (year > 2021){
    year = 2021;
    years.value = 2021;

  }
  if (year < 0){
    year = 0;
    years.value = 0;

  }

  if(year%4 != 0 && month == "2"){
    thirtyone.setAttribute("disabled", "disabled");
    thirty.setAttribute("disabled", "disabled");
    twentynine.setAttribute("disabled", "disabled");
    mont = 28;
  }
  else if(year%4 === 0 && month == "2"){
    thirtyone.setAttribute("disabled", "disabled");
    thirty.setAttribute("disabled", "disabled");
    twentynine.removeAttribute("disabled");
    mont = 29
  }
  else if (month == "4" || month == "6" || month == "9" || month == "11"){
    thirtyone.setAttribute("disabled", "disabled");
    thirty.removeAttribute("disabled");
    twentynine.removeAttribute("disabled");
    mont = 30
  }
  else{
    thirty.removeAttribute("disabled");
    thirtyone.removeAttribute("disabled");
    twentynine.removeAttribute("disabled");
    mont = 31
  }
  if(month == "1"){
    var month_value = 31;
    var totalMonth = 31;
  }
  if(month == "2"){
    var month_value = 28;

  }
  if(month == "3"){
    var month_value = 31;
  }
  if(month == "4"){
    var month_value = 30;
  }
  if(month == "5"){
    var month_value = 31;
  }
  if(month == "6"){
    var month_value = 30;
  }
  if(month == "7"){
    var month_value = 31;
  }
  if(month == "8"){
    var month_value = 31;
  }
  if(month == "9"){
    var month_value = 30;
  }
  if(month == "10"){
    var month_value = 31;
  }
  if(month == "11"){
    var month_value = 30;
  }
  if(month == "12"){
    var month_value = 31;
  }

  /*var hi = new Date();
  var datetoday = hi.getDate();
  var day = datetoday - date.value;
  console.log(day)
  var age = ((2021 - year)*365)

  age = age + Number(day)
  age = age + mot
  var output = document.getElementById("output");
  output. = "You are "+age+" days old or "+(2021-year)+" year "+month+" months "+ day +" days old"
  console.log(age)*/
  var newDate = new Date();
  var datetoday = newDate.getDate();
  var yeartoday = newDate.getFullYear();
  var monthtoday = newDate.getMonth() + 1;

  var yeargiven = years.value;
  var dategiven = Number(date.value)
  var monthgiven = Number(months.value)
  var month_ans = 0;
  var year_answer = 0;
  var days_ans = datetoday - dategiven;
  if (days_ans < 0){
    days_ans = month_value + days_ans;
    month_ans = month_ans - 1;
  }
  month_ans = month_ans + (monthtoday - monthgiven);
  if (month_ans < 0){
    month_ans = 12 + month_ans;
    year_answer = year_answer - 1;
  }
  year_answer = year_answer + (yeartoday-yeargiven)
  var mo = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334,
    365
  ]
  var totaldays = ((yeartoday*365)+datetoday+mo[monthtoday-1])-((yeargiven)*365 + dategiven + mo[monthgiven-1]) +Math.round((yeartoday-yeargiven)/4)
  output.innerText = "You are "+totaldays+" days old or "+year_answer+" years "+month_ans+" months "+ days_ans +" days old"
  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  var monthsa = newDate.getMonth()
  var lola = newDate.getDate()
  if (years.value == yeartoday && months.value==monthsa+1){
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }
    if(lola<29){
      document.getElementById("29").setAttribute("disabled","disabled");
    }
    if(lola<30){
      document.getElementById("30").setAttribute("disabled","disabled");
    }
    if(lola<31){
      document.getElementById("31").setAttribute("disabled","disabled");
    }


  }
  else{
    for(var i = lola+1; i<29;i++){
      var ij = i+100
      var ll = ij.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }


  }
  var newDate = new Date();
  var yeartoday = newDate.getFullYear();
  if (years.value == yeartoday){
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).setAttribute("disabled","disabled");
    }

  }
  else{
    var newDate = new Date();
    var lol = newDate.getMonth() + 1;
    for(var i = lol+1; i<13;i++){
      var ll = i.toString();
      document.getElementById(ll).removeAttribute("disabled");
    }

  }

}

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function()
{
  var time = new Date().getHours();

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Getting the Party Time Button To Work
