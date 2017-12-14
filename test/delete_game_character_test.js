/**
 * Created by Jordy Frijters on 14-12-2017.
 */
const assert = require('assert');
const Game = require('../model/game.model');

describe('Delete a made up test game', () => {

    const game = new Game({ title: 'TestDelTitle', imagePath:'TestDelImageURL', genre: 'Sport', description: 'TestDelDescription', developer: 'TestDelDeveloper', publisher: 'TestDelPublisher' });
    it(' Find test game by id and remove the made up gameGame (findByIdAndRemove)', (done) => {
        Game.findByIdAndRemove(game._id)
            .then(() => Game.findOne({ name: 'Test' }))
            .then((game) => {
                assert(game === null);

            });
        done();
    });
});