
const deepFreeze = require('deep-freeze');
import { deepStrictEqual } from 'assert';

//import {counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { typeSourceSpan } from '@angular/compiler';
import * as types from './counter.actions'
import * as fromCounterReducer from './counter.reducer'
import * as fromCounterAction from './counter.actions'


describe('counter reducer', () =>{



    it('should test the initial state', ()=>{
       
        const  state    = fromCounterReducer.initialState;

        const action = {type: "",};
        const result = fromCounterReducer.counterReducer(undefined, action);

        expect(result).toBe(state)
    
    });

});