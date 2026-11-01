//1:Echo Function with Generics
function echo<T>(input: T): T {
    return input;
}

const string = echo('Hamuuda');
const number = echo(10);
const array = echo([10,20,20]);
const object = echo({
    name: 'Dugsiiye', 
    teacher: 'Tood', 
    id: '10' });

console.log(string, number, array, object)

//2: Generic Interface
interface ApiResult<T> {
    status: string
    data: T
}

const StringResult: ApiResult<string> = {
    status: 'pending',
    data: 'course'
}
const userResult: ApiResult<{ id: number; name: string}> = {
    status: 'completed',
    data: {
        id: 321,
        name: 'Hasan'
    }
}

console.log(userResult, StringResult)

// 3: First Element Function
function first<T>(items: T[]): T {
    return items[0];
}

const firstNumber = first([80,90,10]);
const firstString = first(['Amina', 'Hodan', 'Hani']);
const firstObject = first([
    {id: 10, name: 'Farah', success: false},
    {id: 20, name: 'Xalimo', success: true}
])

console.log(firstNumber, firstString, firstObject)