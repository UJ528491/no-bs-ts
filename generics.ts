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
  const ranks: Rank<RankItem>[] = items.map(item => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map(rank => rank.item);
}

interface Pokemon {
  name: string;
  hp: NumberConstructor;
}

const pokemon: Pokemon[] = [
  {
    name: "Pikachu",
    hp: 20,
  },
  {
    name: "Megaasaur",
    hp: 5,
  },
];
