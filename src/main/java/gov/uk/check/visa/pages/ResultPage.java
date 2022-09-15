package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage(){
        PageFactory.initElements(driver, this) ;}

    public String verifyMeassge()
    {
        WebElement result = driver.findElement(By.xpath("//h2[@class='gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6']"));
        return getTextFromElement(result);

    }
    public String verifyMessagese2()
    {
        WebElement result1 = driver.findElement(By.xpath("//h2[@class='gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6']"));
        return getTextFromElement(result1);

    }
    public String verifymessages3()
    {
        WebElement result2 = driver.findElement(By.xpath("//h2[@class='gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6']"));
        return getTextFromElement(result2);

    }

}
