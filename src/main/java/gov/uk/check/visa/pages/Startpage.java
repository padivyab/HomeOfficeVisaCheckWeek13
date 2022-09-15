package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import javax.annotation.CheckForNull;

public class Startpage extends Utility {

    private static final Logger log = LogManager.getLogger(Startpage.class.getName());

    public Startpage() {
        PageFactory.initElements(driver, this);

    }

    @CacheLookup
    @FindBy(xpath = "//a[@class='gem-c-button govuk-button govuk-button--start']")
    WebElement start;


    // @CacheLookup
    // @FindBy(xpath = "//input[@id='response-0']")
    // WebElement selectradio;

    @CacheLookup
    @FindBy(xpath = "//input[@id='response-1']")
    WebElement selectRadio;

    public void clickonStartNow() {
        clickOnElement(start);

    }

    /*public void selectRadioButton()
    {
        clickOnElement(selectradio);

    }*/
    public void selectRadioChile() {

        clickOnElement(selectRadio);
    }

}