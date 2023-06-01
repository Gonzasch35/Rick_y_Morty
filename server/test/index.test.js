const app = require('../src/app');
const session = require('supertest');

const agent = session(app);

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const response = await agent.get('/rickandmorty/character/1').expect(200)
            const {body} = response
            console.log(body);
            expect(body).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image")
        })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/1000').expect(500)
        })
    })
    describe("GET /rickandmorty/login", () => {
        it('El usuario es correcto', async () => {
            await agent.get('/rickandmorty/login?email=correo@correo.com&&password=pass123').expect({access: true})
        })
        it('La info es incorrecta', async () => {
            await agent.get('/rickandmorty/login?email=corre@correo.com&&password=pass123').expect({access: false})
        })
    })
})

