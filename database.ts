interface Database<T, K> {
  get(id: T): K
  set(id: T, value: K): void
}

interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

class InMemoryDatabase implements Database<T, K> {
  protected db: Record<T, string> = {}
  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string): void {
    this.db[id] = value
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const myDB = new PersistentMemoryDB()
myDB.set("foo", "bar")
// myDB.db["foo"] = "Baz";
console.log(myDB.get("foo"))
// console.log(myDB.saveToString());

const saved = myDB.saveToString()
myDB.set("foo", "db1 - bar")
console.log(myDB.get("foo"))

const myDB2 = new PersistentMemoryDB()
myDB2.restoreFromString(saved)
console.log(myDB2.get("foo"))

// interface Database<T, K> {
//   get(id: K): T;
//   set(id: K, value: T): void;
// }

// interface Persistable {
//   saveToString(): string;
//   restoreFromString(storedState: string): void;
// }

// type DBKeyType = string | number | symbol;

// class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
//   protected db: Record<K, T> = {} as Record<K, T>;
//   get(id: K): T {
//     return this.db[id];
//   }
//   set(id: K, value: T): void {
//     this.db[id] = value;
//   }
// }

// class PersistentMemoryDB<T, K extends DBKeyType>
//   extends InMemoryDatabase<T, K>
//   implements Persistable
// {
//   saveToString(): string {
//     return JSON.stringify(this.db);
//   }
//   restoreFromString(storedState: string): void {
//     this.db = JSON.parse(storedState);
//   }
// }

// const myDB = new PersistentMemoryDB<number, string>();
// myDB.set("foo", 22);
// // myDB.db["foo"] = "Baz";
// console.log(myDB.get("foo"));
// // console.log(myDB.saveToString());

// const saved = myDB.saveToString();
// myDB.set("foo", 23);
// console.log(myDB.get("foo"));

// const myDB2 = new PersistentMemoryDB<number, string>();
// myDB2.restoreFromString(saved);
// console.log(myDB2.get("foo"));
