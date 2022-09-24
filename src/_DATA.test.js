import { _saveQuestion, _saveQuestionAnswer } from "./utils/_DATA";

describe('_saveQuestion', () => {

    it('_saveQuestion will save question and return true when correct data is passed', async() => {
        const res = await _saveQuestion({author: 'sarahedo', optionOneText: 'i am option one', optionTwoText: 'i am option two' });
        expect(res.author).toBe('sarahedo');
    });


    it('_saveQuestion will return error if incorrect data is passed', async () => {
        await expect(_saveQuestion(1, 2)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
})

describe('_saveQuestionAnswer', () => {

    it('_saveQuestionAnswer will return true if correct data is passed', async() => {
        await expect(_saveQuestionAnswer({authedUser: 'sarahedo', qid: '15tikchyvgcos16odwtslm', answer: 'optionOne' })).toBeTruthy();
    });


    it('_saveQuestionAnswer will return error if incorrect data is passed', async () => {
        await expect(_saveQuestionAnswer(1, 2)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });
})