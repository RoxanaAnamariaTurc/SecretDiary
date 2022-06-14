const { assertTrue, assertFalse, assertEquals } = require("./test-framework")
const SecretDiary = require("../src/secretDiary")


let testName, testDiary, expectedResult, actualResult, result;

console.log(`====Diary Test 1====`);
//Arrange

testName = `Test that a new created diary is locked`;

//Act
testDiary = new SecretDiary();
actualResult = testDiary.isLocked();

//Assert
result = assertTrue(actualResult);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

console.log(`====Diary Test 2====`);
//Arrange

testName = `Test addEntry throws an error when Diary is locked`;
const testEntry = `Test entry`;

//Act
testDiary = new SecretDiary();
actualResult = testDiary.addEntry(testEntry);

//Assert
result = assertTrue(actualResult instanceof Error);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

console.log(`====Diary Test 3====`);
//Arrange

testName = `Test getEntries throws an error when Diary is locked`;

//Act
testDiary = new SecretDiary();
actualResult = testDiary.getEntries();

//Assert
result = assertTrue(actualResult?.message === `Diary not accessible when locked`);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

console.log(`====Diary Test 4====`);
//Arrange

testName = `Test when diary is unlock`;

//Act
testDiary = new SecretDiary();
// open diary
testDiary.lock = false;
actualResult = testDiary.isLocked();

//Assert
result = assertFalse(actualResult);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

console.log(`====Diary Test 5====`);
//Arrange

testName = `Test to add an entry`;

//Act
testDiary = new SecretDiary();
// open diary
testDiary.lock = false;
testDiary.addEntry(`new entry`);
expectedResult = [`new entry`];
actualResult = testDiary.getEntries();
console.log(expectedResult);
console.log(actualResult);
result = assertEquals(expectedResult.length, actualResult.length);
if (!result)
{
    console.log(`Fail`);
}
else
{
    for (let i = 0; i < actualResult.length; i++)
    {
        result = assertEquals(expectedResult[i], actualResult[i]);
        if (!result)
        {
            console.log(`Fail`);
            break;
        }
    }
    console.log(`PASS`);
}
//Assert
// result = assertEquals(expectedResult[0], actualResult[0]);

// //Report

// console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);