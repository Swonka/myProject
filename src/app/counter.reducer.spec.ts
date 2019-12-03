const deepFreeze = require('deep-freeze');
import { deepStrictEqual } from 'assert';

import {counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { typeSourceSpan } from '@angular/compiler';
import * as types from './counter.actions'


describe('counter reducer', () =>{



    it('should test the initial state', ()=>{
        
        const expectedOutput = {count:0};

        const result = counterReducer(undefined, {});
        expect(result).toEqual(expectedOutput);

    });

    it('increment counter with one',() =>{

        const inputState = {count: 0};
        const actionObject = {type: types.increment}; 
        const expectedOutput = {count: 1};

        deepFreeze(inputState)
        //act
        const result = counterReducer(inputState, actionObject); // preform test
        //assert
        expect(result).toEqual(expectedOutput); // if true test pass

    });

});