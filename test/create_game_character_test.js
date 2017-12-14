/**
 * Created by Jordy Frijters on 14-12-2017.
 */
const assert = require('assert');
const CharacterSchema = require('../model/characters');
const Game = require('../model/game.model');

describe('Create a new Game', () => {
    it('Save the made up game', (done) => {
        const game = new Game({ title: 'TestCreateTitle', imagePath:'TestCreateImageURL', genre: 'Sport', description: 'TestCreateDescription', developer: 'TestCreateDeveloper', publisher: 'TestCreatePublisher' });
        game.save()
            .then(() => {
                assert(!game.isNew);
            });
        done();
    });
});

describe('Create a new made up testcharacter and add it to the testgame', () => {
    it('Save the made up character', (done) => {
        const character = new CharacterSchema({ name: 'TestCreateCharacterName', imagePath:'TestCreateImageURL' });

        character.save()
            .then(() => {
                assert(!character.isNew);
            });
        done();
    });
});