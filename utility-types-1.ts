interface MyUser {
  name: string;
  id: number;
  email?: string;
}
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: 1,
      email: "uj@gmail.com",
    },
    {
      email: "us@gmail.com",
    }
  )
);

type RequiredMyUser = Required<MyUser>;
type PickMyUser = Pick<MyUser, "email" | "id">;
type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...rest } = v;
    return {
      ...a,
      [id]: rest,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr.foo",
    },
    {
      id: 2,
      name: "Mrs.baz",
    },
  ])
);
