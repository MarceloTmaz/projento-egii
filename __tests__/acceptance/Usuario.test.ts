import {Builder, By, Key} from 'selenium-webdriver';
describe('Dashboard', ()=>{
    it('deve permitir a atualização dos dados e mostrar o resultado da alteração', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('http://localhost:3000/usuario');  
        
        await driver.findElement(By.id('atualizar')).click();
        
        await driver.findElement(By.id('nome')).sendKeys('Maria');
        await driver.findElement(By.id('email')).sendKeys('maria@gmail.com');
        await driver.findElement(By.id('nick')).sendKeys('mary');
        await driver.findElement(By.id('enviar')).click();    

        let nomenome = await driver.findElement(By.id('nomeusuario'));
        let novoemail = await driver.findElement(By.id('emailusuario'));
        let novonick = await driver.findElement(By.id('nickUsuario'))

        expect(await nomenome.getText()).toEqual('Maria');
        expect(await novoemail.getText()).toEqual('maria@gmail.com');
        expect(await novonick.getText()).toEqual('mary');
    });
});

