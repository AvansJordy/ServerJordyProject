/**
 * Created by Jordy Frijters on 14-12-2017.
 */
const assert = require('assert');
const Game = require('../model/game.model');

describe('Read game out of the database', () => {
    let game;

    it('find all the games with the made up name', (done) => {
        const game = new Game({ title: 'TestCreateTitle', imagePath:'TestCreateImageURL', genre: 'Sport', description: 'TestCreateDescription', developer: 'TestCreateDeveloper', publisher: 'TestCreatePublisher' });
        console.log(game);
        Game.find({ name: 'TestGameTitle' })
            .then((games) => {console.log(games).
                assert(games[0]._id.toString() === game._id.toString());
            });
        done();
    });

    it('find a game with a certain id', (done) => {
        const game = new Game({ title: 'TestCreateTitle', imagePath:'TestCreateImageURL', genre: 'Sport', description: 'TestCreateDescription', developer: 'TestCreateDeveloper', publisher: 'TestCreatePublisher' });
        Game.findOne({ _id: game.id })
            .then((game) => {
                assert(game.title === 'TestGameTitle');
            });
        done();
    });
});