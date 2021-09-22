import { readlinkSync } from "fs";

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
st1setter(62);
console.log(st1getter());

const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map(item => {
    console.log("item : ", item);
    console.log("rank : ", rank(item));

    return {
      item,
      rank: rank(item),
    };
  });
  console.log(ranks);

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map(rank => rank.item);
}

interface Pokemon {
  name: number;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: 99,
    hp: 20,
  },
  {
    name: 88,
    hp: 5,
  },
  {
    name: 77,
    hp: 13,
  },
];
const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
