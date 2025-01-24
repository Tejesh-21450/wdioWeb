class ReviewPage {
  public get prices() {
    return $$("td:nth-child(4) strong");
  }

  public get totalElement() {
    return $("h3 strong");
  }

  public async sumOfElements() {
    const priceElements = this.prices;
    const sumOfElements = (
      await Promise.all(
        await priceElements.map(async (priceElement) =>
          parseInt((await priceElement.getText()).split(".")[1].trim())
        )
      )
    ).reduce((acc, price) => acc + price, 0);
    return sumOfElements;
  }

  public async totalPrice() {
    const totalElement = this.totalElement;
    const totalPrice = parseInt(
      (await totalElement.getText()).split(".")[1].trim()
    );
    return totalPrice;
  }
}

export default new ReviewPage();
