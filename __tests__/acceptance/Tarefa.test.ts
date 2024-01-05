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

        let nome = await driver.findElement(By.id('Testar a aplicação'));
        let descricao = await driver.findElement(By.id('Rodar os testes durante a aula'));
        let importancia= await driver.findElement(By.id('Testar a aplicação3'))

        expect(await nome.getText()).toEqual('Testar a aplicação');
        expect(await descricao.getText()).toEqual('Rodar os testes durante a aula');
        expect(await importancia.getText()).toEqual('3');
    });

    it('deve permitir a alteração de tarefas', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('http://localhost:3000/tarefa/listar');  
        
        await driver.findElement(By.id('alterar1')).click();
        
        await driver.findElement(By.id('nom2')).clear()
        await driver.findElement(By.id('nom2')).sendKeys('Comprar bolo');
        await driver.findElement(By.id('descricao2')).clear()
        await driver.findElement(By.id('descricao2')).sendKeys('comprar bolo na padaria nosso pão');
        await driver.findElement(By.id('impotancia2')).clear()
        await driver.findElement(By.id('impotancia2')).sendKeys('2');
        await driver.findElement(By.id('email2')).sendKeys('maria@gmail.com');

        await driver.findElement(By.id('atualizar')).click();    

        let nome = await driver.findElement(By.id('Comprar bolo'));
        let descricao = await driver.findElement(By.id('comprar bolo na padaria nosso pão'));
        let importancia= await driver.findElement(By.id('Comprar bolo1'))
        let email= await driver.findElement(By.id('maria@gmail.com1'))

        expect(await nome.getText()).toEqual('Comprar bolo');
        expect(await descricao.getText()).toEqual('comprar bolo na padaria nosso pão');
        expect(await importancia.getText()).toEqual('2');
        expect(await email.getText()).toEqual('maria@gmail.com');
    });
    
});
