const { Builder, By } = require("selenium-webdriver");
const {
  describe,
  it,
  afterEach,
  beforeEach,
  expect,
} = require("@jest/globals");
const fs = require("fs");

describe("TestCustomerForm", () => {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/customer/form.html");
  });

  afterEach(async () => {
    await driver.quit();
  });

  async function takeScreenshot(testName) {
    const screenshotPath = `./image/${testName}_screenshot.png`;
    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync(screenshotPath, data, "base64");
    });
  }

  it("test_case1", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("johnjohn");
    await lastNameInput.sendKeys("canonc");
    await ageInput.sendKeys("2");

    await submitButton.click();

    const result = await driver.findElement(By.id("firstname")).getText();
    expect(result).toBe("First Name: johnjohn");

    await takeScreenshot("test_case1");
  });

  it("test_case2", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("Johnj");
    await lastNameInput.sendKeys("canoncanoncano");
    await ageInput.sendKeys("149");

    await submitButton.click();

    const result = await driver.findElement(By.id("firstname")).getText();
    expect(result).toBe("First Name: Johnj");

    await takeScreenshot("test_case2");
  });

  it("test_case3", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("johnjo");
    await lastNameInput.sendKeys("canoncanoncanon");
    await ageInput.sendKeys("150");

    await submitButton.click();

    const result = await driver.findElement(By.id("firstname")).getText();
    expect(result).toBe("First Name: johnjo");

    await takeScreenshot("test_case3");
  });

  it("test_case4", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("johnjohnjohnjo");
    await lastNameInput.sendKeys("canoncan");
    await ageInput.sendKeys("75");

    await submitButton.click();

    const result = await driver.findElement(By.id("firstname")).getText();
    expect(result).toBe("First Name: johnjohnjohnjo");

    await takeScreenshot("test_case4");
  });

  it("test_case5", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("johnjohnjohnjoh");
    await lastNameInput.sendKeys("canoncan");
    await ageInput.sendKeys("75");

    await submitButton.click();

    const result = await driver.findElement(By.id("firstname")).getText();
    expect(result).toBe("First Name: johnjohnjohnjoh");

    await takeScreenshot("test_case5");
  });

  it("test_case6", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("John");
    await lastNameInput.sendKeys("cannoncan");
    await ageInput.sendKeys("75");

    await submitButton.click();

    const result = await driver.findElement(By.id("formname")).getText();
    expect(result).toBe("Customer Detail Form");

    await takeScreenshot("test_case6");
  });

  it("test_case8", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("johnjohn");
    await lastNameInput.sendKeys("cano");
    await ageInput.sendKeys("75");

    await submitButton.click();

    const result = await driver.findElement(By.id("formname")).getText();
    expect(result).toBe("Customer Detail Form");

    await takeScreenshot("test_case8");
  });

  it("test_case10", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("johnjohn");
    await lastNameInput.sendKeys("canoncan");
    await ageInput.sendKeys("0");

    await submitButton.click();

    const result = await driver.findElement(By.id("formname")).getText();
    expect(result).toBe("Customer Detail Form");

    await takeScreenshot("test_case10");
  });

  it("test_case11", async () => {
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const ageInput = await driver.findElement(By.id("age"));
    const submitButton = await driver.findElement(By.id("sub"));

    await firstNameInput.sendKeys("johnjohn");
    await lastNameInput.sendKeys("canoncan");
    await ageInput.sendKeys("151");

    await submitButton.click();

    const result = await driver.findElement(By.id("formname")).getText();
    expect(result).toBe("Customer Detail Form");

    await takeScreenshot("test_case11");
  });
});
