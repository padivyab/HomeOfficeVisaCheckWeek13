package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class DurationOfStaypage extends Utility {


    @CacheLookup
    @FindBy(xpath = "//input[@id='response-1']")
    WebElement morethansix;

    public void SelectMoreThanSixMonth()
    {
        clickOnElement(morethansix);

    }
}
