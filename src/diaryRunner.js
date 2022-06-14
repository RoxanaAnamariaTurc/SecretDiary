const SecretDiary = require("./secretDiary")

const mySecretDiary = new SecretDiary();
console.log(mySecretDiary.isLocked());

try
{
    const get = mySecretDiary.getEntries();
    if (get instanceof Error) throw get
}
catch (error)
{
    console.log(error.message);
}

try
{
    const add = mySecretDiary.addEntry(`new entry`);
    if (add instanceof Error) throw add;
}
catch (error)
{
    console.log(error.message);
}