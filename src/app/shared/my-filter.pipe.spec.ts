
import { MyFilterPipe } from './my-filter.pipe';
import { User } from './user.model';

describe('MyFilterPipe', () => {
  
  
  it('Test with 0', () => {

    const filter = new MyFilterPipe();

    const data : User[] = [

      new User('Rip', 'rip@and.dk', "male",1, new Date(2019, 0, 1, 8, 0,0 ),15), 
      new User('Rap','Rap@and.dk', 'male',2,new Date(2019, 0, 1, 8, 0,0 ),15),
      new User('Rup', 'Rup@and.dk', 'male',3,new Date(2019, 0, 1, 8, 0,0 ),15),
  
    ];
    const search =0;
    const expectedResult = [];

    const result = filter.transform(data,search)

    expect(result).toEqual(expectedResult);

  });

  it('Test with 1', () => {

    const filter = new MyFilterPipe();

    const data : User[] = [

      new User('Rip', 'rip@and.dk', "male",1, new Date(2019, 0, 1, 8, 0,0 ),15), 
      new User('Rap','Rap@and.dk', 'male',2,new Date(2019, 0, 1, 8, 0,0 ),15),
      new User('Rup', 'Rup@and.dk', 'male',3,new Date(2019, 0, 1, 8, 0,0 ),15),
  
    ];
    const search =1;

    const expectedResult = data[0];

    const result = filter.transform(data,search)

    expect(result).toContain(expectedResult);

  });


});

