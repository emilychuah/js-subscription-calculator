var subTypeElement = document.querySelector("#subscription"); // This selects the whole subscription element in HTML.
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic"; //These 2 lines of code are placed here to work as global variables so they can be applied to all the functions below.
var subDuration = 1; //Values "basic" and 1 are assigned to these variables so that these default values will apply to the functions below and form a correct sentence in the returned message when the user interacts with any of the drop-down lists. If these variables are not defined, the functions below will not be able to interpret subType and subDuration.
//for e.g. if user changes the duration only, the default value "basic" will still be populated in the returned message and vice versa.
subTypeElement.addEventListener("change", function (e) {
  //This event listener only works when the user makes a change to the drop-down list. So, if the user doesn't do so, the program will not run this section of the code and the value of subType will stay as the default value.
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5; //monthlyCost has to be defined as a variable and given a value to set a default value, as well as to let this variable be referred to for the monthlyCost codes below.
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
