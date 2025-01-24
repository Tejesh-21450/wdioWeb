class LoginPage {
    public get username() { return $('#username'); }

    public get password() { return $('#password'); }

    public get signInBtn() { return $('#signInBtn'); }

    public get alertMessage() { return $(".alert-danger"); }

    public get credsTextElement() { return $('p[class="text-center text-white"]'); }

    public get radioButtons() { return $$(".customradio"); }

    public get userRadioButton() { return this.radioButtons[1].$('input'); }

    public get adminRadioButton() { return this.radioButtons[0].$('input'); }



    public async login(username: string, password: string) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.signInBtn.click();
    }
}

export default new LoginPage();