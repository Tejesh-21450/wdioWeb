class CheckOutPage {
  public get checkoutBtn() {
    return $(".btn-success");
  }

  public get purchaseBtn() {
    return $("input[type$='submit']");
  }

  public get countryInput() {
    return $("#country");
  }

  public get successMsg() {
    return $(".alert-success strong");
  }

  async clickCheckOutBtn() {
    await this.checkoutBtn.waitForExist();
    await this.checkoutBtn.click();
  }

  async enterCountry(countryKeyWord: string) {
    await this.countryInput.setValue(countryKeyWord);
    const countryOption = $("=India");
    await countryOption.waitForDisplayed({ timeout: 50000 });
    await countryOption.click();
  }

  async clickPurchaseBtn() {
    await this.purchaseBtn.waitForExist();
    await this.purchaseBtn.click();
  }
}

export default new CheckOutPage();
