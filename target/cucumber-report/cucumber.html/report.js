$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/visaconfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "VisaConfirmation",
  "description": "\r\nAs user I want apply for Visa",
  "id": "visaconfirmation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10957900000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "An Australian Come in To UK For Tourism",
  "description": "",
  "id": "visaconfirmation;an-australian-come-in-to-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select a Nationality \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select reason Tourisum \"Tourism or visiting family and friends\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify result \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmation.iAmOnHomePage()"
});
formatter.result({
  "duration": 391822100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnStartButton()"
});
formatter.result({
  "duration": 1357733600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 24
    }
  ],
  "location": "VisaConfirmation.iSelectANationality(String)"
});
formatter.result({
  "duration": 351796500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 556214100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism or visiting family and friends",
      "offset": 26
    }
  ],
  "location": "VisaConfirmation.iSelectReasonTourisum(String)"
});
formatter.result({
  "duration": 165937100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 611051600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 17
    }
  ],
  "location": "VisaConfirmation.iVerifyResult(String)"
});
formatter.result({
  "duration": 107850100,
  "status": "passed"
});
formatter.after({
  "duration": 230600,
  "status": "passed"
});
formatter.before({
  "duration": 5450932000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "aChileanComingToTheUKForWorkAndPlansOnStayingForLongerThanSixMonths",
  "description": "",
  "id": "visaconfirmation;achileancomingtotheukforworkandplansonstayingforlongerthansixmonths",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on Start button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select a Nationality \"Chile\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select reason work \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select intendent to stay for \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select have planning to work for \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify resultfirst \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmation.iAmOnHomePage()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnStartButton()"
});
formatter.result({
  "duration": 842575800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 24
    }
  ],
  "location": "VisaConfirmation.iSelectANationality(String)"
});
formatter.result({
  "duration": 232306700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 606658100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 22
    }
  ],
  "location": "VisaConfirmation.iSelectReasonWork(String)"
});
formatter.result({
  "duration": 186034400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 618797900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 30
    }
  ],
  "location": "VisaConfirmation.selectIntendentToStayFor(String)"
});
formatter.result({
  "duration": 233015900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 590447300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 36
    }
  ],
  "location": "VisaConfirmation.iSelectHavePlanningToWorkFor(String)"
});
formatter.result({
  "duration": 174594600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 583322400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 22
    }
  ],
  "location": "VisaConfirmation.iVerifyResultfirst(String)"
});
formatter.result({
  "duration": 126741400,
  "status": "passed"
});
formatter.after({
  "duration": 69700,
  "status": "passed"
});
formatter.before({
  "duration": 5161446500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "aColumbianNationalComingToTheUKToJoinAPartnerForALongStayTheyDoHaveAnArti cle10Or20Card",
  "description": "",
  "id": "visaconfirmation;acolumbiannationalcomingtotheuktojoinapartnerforalongstaytheydohaveanarti-cle10or20card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on Start button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I select a Nationality \"Colombia\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select reason join \"Join partner or family for a long stay\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select state My partner of family member have uk immigration status \"yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify resultsec \"You’ll need a visa to join your family or partner in the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmation.iAmOnHomePage()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnStartButton()"
});
formatter.result({
  "duration": 880546800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 24
    }
  ],
  "location": "VisaConfirmation.iSelectANationality(String)"
});
formatter.result({
  "duration": 279216300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 569785500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 22
    }
  ],
  "location": "VisaConfirmation.iSelectReasonJoin(String)"
});
formatter.result({
  "duration": 359359700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 614432700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 71
    }
  ],
  "location": "VisaConfirmation.iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatus(String)"
});
formatter.result({
  "duration": 155139800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmation.iClickOnContinueButton()"
});
formatter.result({
  "duration": 1153870300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 20
    }
  ],
  "location": "VisaConfirmation.iVerifyResultsec(String)"
});
formatter.result({
  "duration": 128532900,
  "status": "passed"
});
formatter.after({
  "duration": 142600,
  "status": "passed"
});
});