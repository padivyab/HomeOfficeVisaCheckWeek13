package gov.uk.check.visa.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import gov.uk.check.visa.pages.*;
import org.apache.commons.compress.harmony.pack200.NewAttribute;
import org.testng.Assert;

public class VisaConfirmation {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
    }


    @And("^I select a Nationality \"([^\"]*)\"$")
    public void iSelectANationality(String nationality)  {

        new SelectNationalityPage().selectNationality(nationality);

    }

    @And("^I click on continue button$")
    public void iClickOnContinueButton() {
        new SelectNationalityPage().ClickOnContinue();


    }

    @Then("^I verify result \"([^\"]*)\"$")
    public void iVerifyResult(String result)  {

        Assert.assertEquals(result,new ResultPage().verifyMeassge());

    }

    @When("^I click on Start button$")
    public void iClickOnStartButton() {

        new Startpage().clickonStartNow();

    }


    /*@And("^I select reason Tourisum \"([^\"]*)\"$")
    public void iSelectReasonTourisum() throws InterruptedException {
        new ReasonForTravelPage().selectRadio();
        Thread.sleep(1000);
       // new ReasonForTravelPage().selectReason("Tourism or visiting family and friends");
        //Thread.sleep(5000);

    }*/

    @And("^I select reason \"([^\"]*)\"$")
    public void iSelectReason()
    {
        new Startpage().selectRadioChile();

    }

    @And("^Select intendent to stay for \"([^\"]*)\"$")
    public void selectIntendentToStayFor(String arg0)  {

        new DurationOfStaypage().SelectMoreThanSixMonth();

    }


    @Then("^I verify resultfirst \"([^\"]*)\"$")
    public void iVerifyResultfirst(String resultfirst)  {

        Assert.assertEquals(resultfirst,new ResultPage().verifyMessagese2());

    }

    @Then("^I verify resultsec \"([^\"]*)\"$")
    public void iVerifyResultsec(String resultsec)  {
        Assert.assertEquals(resultsec,new ResultPage().verifymessages3());

    }

    @And("^I select reason Tourisum \"([^\"]*)\"$")
    public void iSelectReasonTourisum(String arg0)  {
       new ReasonForTravelPage().selectRadio();
    }

    @And("^I select have planning to work for \"([^\"]*)\"$")
    public void iSelectHavePlanningToWorkFor(String arg0) {

        new ReasonForTravelPage().selectRadio();
    }

    @And("^I select reason work \"([^\"]*)\"$")
    public void iSelectReasonWork(String arg0)
    {
       new ReasonForTravelPage().selectRadio2();

    }

    @And("^I select reason join \"([^\"]*)\"$")
    public void iSelectReasonJoin(String arg0) {

        new ReasonForTravelPage().selectRadio3();

    }

    @And("^I select state My partner of family member have uk immigration status \"([^\"]*)\"$")
    public void iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatus(String arg0)  {

        new FamilyimmigrationstatusPage().immigrationStatus();

    }
}
