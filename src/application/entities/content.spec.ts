import { Content } from './content';

it('should able to creta a notification content', ()=>
{
 const content = new Content('Você recebeu uma solicitação de amizade');
 expect(content).toBeTruthy()
});

it('should not be able to creta a notification content with less 5 characters', ()=>
{
 expect(() => new Content('asd')).toThrow();
})
it('should not be able to creta a notification content with more than 240 characters', ()=>
{
 expect(() => new Content('a'.repeat(241))).toThrow();
})