function simpleState<T>(intial:T):[T,T,number]{
    return [intial,intial, 1];
}

function simpleState2<T>(intial:T):[()=>T, (v:T)=>void]{
    let val : T =intial;
    return [
        ()=>val,
        (v:T)=> { val =v;}
    ];
}

simpleState2(10);
const [getter,setter] =simpleState2<string | number>(1);///overrides original
setter('x');


function ranker<RankItem>(items:RankItem[], rank:(v:RankItem)=>number):RankItem[]{
    const ranks = items.map(item => ({item, rank:rank(item)}));
    ranks.sort((a,b)=>a.rank-b.rank);
    return ranks.map((rank)=>rank.item);
}

function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key:KeyType
    ):DataType[KeyType][]{
    return  items.map(item=>item[key]);
}