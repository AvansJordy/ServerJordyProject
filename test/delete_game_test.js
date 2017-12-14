/**
 * Created by Jordy Frijters on 14-12-2017.
 */
const assert = require('assert');
const Game = require('../model/game.model');

describe('Updating records', () => {
    let game;

    function assertName(operation, done) {
        const game = new Game({ title: 'TestDelGameTitle', imagePath:'TestDelGameImageURL', genre: 'Sport', description: 'TestDelGameDescription', developer: 'TestDelGameDeveloper', publisher: 'TestDelGamePublisher' });
        operation
            .then(() => Game.find({}))
            .then((games) => {
                assert(games.length === 1);
                assert(games[0].title === 'TestTitleGame');
            });
        done();
    }


    it('Model Class find record with Id and update it', (done) => {
        const game = new Game({ title: 'TestDelGameTitle', imagePath:'TestDelGameImageURL', genre: 'Sport', description: 'TestDelGameDescription', developer: 'TestDelGameDeveloper', publisher: 'TestDelGamePublisher' });
        console.log();
        assertName(
            Game.findByIdAndUpdate(game._id, { title: 'TestTitleGame1' }),
            done
        );

    });
});

