// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

// Cenários Positivos - Caso de teste 5
describe("valida-pesquisa", function () {
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
  it("valida-pesquisa", async function () {
    await driver.get(
      "http://automationpractice.com/index.php?id_category=5&controller=category"
    );
    await driver.manage().window().setRect({ width: 1864, height: 911 });

    let shirtName = await driver
      .findElement(By.className("product-name"))
      .getText();
    await driver.findElement(By.id("search_query_top")).click();
    await driver
      .findElement(By.id("search_query_top"))
      .sendKeys("faded short sleeve t-shirts");
    await driver.findElement(By.name("submit_search")).click();

    await driver.wait(
      until.elementLocated(By.className("product-name")),
      30000
    );

    let shirtNameInSearch = await driver
      .findElement(By.className("product-name"))
      .getText();

    assert.equal(shirtName, shirtNameInSearch);
  });
});