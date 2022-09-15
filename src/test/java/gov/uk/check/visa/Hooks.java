package gov.uk.check.visa;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import gov.uk.check.visa.propertyreader.PropertyReader;
import gov.uk.check.visa.utility.Utility;

import java.io.IOException;


/**
 * Created by bhavesh patel
 */
public class Hooks extends Utility {

    @Before
    public void setUp() {

        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        new Utility().acceptCookiesAndSwitchToIframe();
        //new Utility().clickpage();
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        //closeBrowser();
    }
}
