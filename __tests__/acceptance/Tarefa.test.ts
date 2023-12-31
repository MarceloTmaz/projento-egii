import {Builder, By, Key} from 'selenium-webdriver';
describe('Tarefa', ()=>{
    it('deve permitir a criação de tarefas', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('http://localhost:3000/tarefa/criar');  
        
        //await driver.findElement(By.id('criar')).click();
        
        await driver.findElement(By.id('nom')).sendKeys('Testar a aplicação');
        await driver.findElement(By.id('descricao')).sendKeys('Rodar os testes durante a aula');
        await driver.findElement(By.id('impotancia')).sendKeys('3');

        await driver.findElement(By.id('criar')).click();    

        let nomenomeusuario = await driver.findElement(By.id('Testar a aplicação'));
        let novoemailusuario = await driver.findElement(By.id('Rodar os testes durante a aula'));
        let importancia= await driver.findElement(By.id('Testar a aplicação3'))


        console.log(importancia)

        expect(await nomenomeusuario.getText()).toEqual('Testar a aplicação');
        expect(await novoemailusuario.getText()).toEqual('Rodar os testes durante a aula');
        expect(await importancia.getText()).toEqual('3');
    });
    
});
