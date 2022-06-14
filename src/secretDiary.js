class SecretDiary
{
    #locked = true;
    #entries = [];

    isLocked()
    {
        return this.#locked;
    }
    addEntry(string)
    {
        if (this.isLocked())
        {
            return new Error(`Diary not accessible when locked`);
        } else
        {
            //code to add new entries when the diary is not locked
            this.#entries.push(string)
        }
    }
    getEntries()
    {
        if (this.isLocked())
        {
            return new Error(`Diary not accessible when locked `);
        } else
        {
            //code to get the entries when the diary is not locked

            return this.#entries;
        }

    }

    set lock(lock)
    {

        this.#locked = lock;
    }
}

module.exports = SecretDiary;