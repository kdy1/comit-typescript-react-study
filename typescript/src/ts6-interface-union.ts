interface Cat {
  readonly type: "cat";
}

interface Dog {
  readonly type: "cat";
}

type Animal = Cat | Dog;

declare var animal: Animal;
declare var defaultCat: Cat;

const cat: Cat = animal.type === "cat" ? animal : defaultCat;
