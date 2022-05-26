// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

// Cenários Negativos - Caso de teste 4
describe("valores-invalidos", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("valores-invalidos", async function () {
    await driver.get("http://automationpractice.com/index.php");
    await driver.manage().window().setRect({ width: 1864, height: 911 });
    await driver.findElement(By.linkText("Sign in")).click();
    await driver.findElement(By.id("email_create")).click();
    await driver
      .findElement(By.id("email_create"))
      .sendKeys("leonardo.santana@aln.senaicimatec.edu.br");
    await driver.findElement(By.css("#SubmitCreate > span")).click();

    await driver.wait(until.elementLocated(By.id("customer_firstname")), 30000);

    await driver
      .findElement(
        By.css(".account_creation:nth-child(1) > .required:nth-child(3)")
      )
      .click();
    await driver
      .findElement(
        By.css(".account_creation:nth-child(1) > .required:nth-child(3)")
      )
      .click();
    {
      const element = await driver.findElement(
        By.css(".account_creation:nth-child(1) > .required:nth-child(3)")
      );
      await driver.actions({ bridge: true }).doubleClick(element).perform();
    }
    await driver.findElement(By.id("customer_firstname")).click();
    await driver
      .findElement(By.id("customer_firstname"))
      .sendKeys("77777777777777");
    await driver.findElement(By.css(".required:nth-child(4)")).click();
    await driver.findElement(By.id("customer_lastname")).click();
    await driver
      .findElement(By.id("customer_lastname"))
      .sendKeys("777777777777777");
    await driver
      .findElement(
        By.css(".account_creation:nth-child(1) > .required:nth-child(5)")
      )
      .click();
    await driver.findElement(By.id("company")).click();
    await driver.findElement(By.id("address1")).click();
    await driver.findElement(By.id("address1")).sendKeys("77777777777");
    await driver.findElement(By.id("city")).click();
    await driver.findElement(By.id("city")).sendKeys("77777777");
    await driver.findElement(By.css(".id_state")).click();
    await driver.findElement(By.css(".account_creation:nth-child(2)")).click();
    await driver.findElement(By.id("postcode")).click();
    await driver.findElement(By.id("postcode")).sendKeys("AAAAAAAAAAAAAAAA");
    await driver.findElement(By.css(".account_creation:nth-child(2)")).click();
    await driver.findElement(By.id("phone_mobile")).click();
    await driver.findElement(By.id("phone_mobile")).sendKeys("AAAAAAAAAAAA");
    await driver.findElement(By.id("phone")).click();
    await driver.findElement(By.id("phone")).sendKeys("AAAAAAAAAAAA");
    await driver.findElement(By.css("#submitAccount > span")).click();

    await driver.wait(
      until.elementLocated(By.className("alert-danger")),
      20000
    );
    await driver.findElement(By.className("alert-danger"));
  });
});