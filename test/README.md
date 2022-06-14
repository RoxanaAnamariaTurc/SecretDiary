# Secret Diary

## 1. Generate User Stories based on requirements

### Requirement 1

Initially the `SecretDiary` class is locked, meaning `addEntry(str)` and `getEntries()` should *throw an error*.

```
As a user
I want to see an error message if the diary is locked and I'm trying work with entries (get entries and add entry)
So that a locked diary cannot be accessed
```

### Requirement 2

When the user calls `unlock()`, `addEntry()` and `getEntries()` should work as desired.

```
As a user
I want to be unlock the diary
So that I can get all of the entries

As a user
I want to be able to unlock the diary
So that I can add an entry to it
```

### Requirement 3

When the user calls `lock()` again `addEntry()` and `getEntries()` throw errors.

```
As a user
I want to be lock the diary
So that I stop access to getting entries

As a user
I want to be able to lock the diary
So that I can't add any entries to it
```

---

## 2. Identify nouns and verbs from user stories

### User Story 1

```
As a user
I want to see an error message if the diary is locked and I'm trying work with entries (get entries and add entry)
So that a locked diary cannot be accessed
```

| noun  | verb        |
| ----- | ----------- |
| Error | display     |
| Diary | locked      |
|       | get entries |
|       | add entry   |

---

## 3. Domain Model (Objects, Properties, Messages, Outputs)

### User Story 1

```
As a user
I want to see an error message if the diary is locked and I'm trying work with entries (get entries and add entry)
So that a locked diary cannot be accessed
```

| Objects | Properties      | Messages         | Output   |
| ------- | --------------- | ---------------- | -------- |
| Error   | message @String |                  | @String  |
| Diary   | locked @Boolean | isLocked()       | @Boolean |
|         |                 | getEntries()     | @Error   |
|         |                 | addEntry(@Entry) | @Error   |

---

# 4. TDD each user story in order

Failing test - but what for?

**ErrorMessage**    - use in-built `Error` object - no need to test this!<br>
**Diary**           - test function `isLocked` to make sure it returns the `locked` status of the `Diary`<br>
                    - status of `locked` when `Diary` object is created - expect `true` as default<br>
**Diary**           - test function `getEntries` to make sure it only returns the `entries` when `isLocked` is `false`<br>
**Diary**           - test that *getters* (i.e. `getEntries`)/*setters* (i.e. `addEntry`) work when required<br>

### User Story 1

```
As a user
I want to see an error message if the diary is locked and I'm trying work with entries (get entries and add entry)
So that a locked diary cannot be accessed
```

#### Tests

1. Test that a newly created `Diary` object is initially ***locked***
2. Test that `addEntry` throws an *error* when the `Diary` is ***locked***
3. Test that `getEntries` throws an *error* when the `Diary` is ***locked***