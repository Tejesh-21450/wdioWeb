class DashboardPage {
  public get checkOutBtn() {
    return $("*=Checkout");
  }

  public get cards() {
    return $$("app-card");
  }


  async clickCheckOutBtn() {
    await this.checkOutBtn.waitForExist();
    await this.checkOutBtn.click();
  }

  async addProductsToCart(products: string[]) {
    for (let i = 0; i < (await this.cards.length); i++) {
      const cardElement = this.cards[i];
      const cardElementTitle = cardElement.$("h4 a");
      const cardElementTitleText = await cardElementTitle.getText();
      if (products.includes(cardElementTitleText)) {
        const addToCardBtn = cardElement.$("button");
        await addToCardBtn.click();
      }
    }
  }
}

export default new DashboardPage();
