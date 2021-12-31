"use strict";
function simpleState(intial) {
    return [intial, intial, 1];
}
function simpleState2(intial) {
    let val = intial;
    return [
        () => val,
        (v) => { val = v; }
    ];
}
simpleState2(10);
const [getter, setter] = simpleState2(1); ///overrides original
setter('x');
function ranker(items, rank) {
    const ranks = items.map(item => ({ item, rank: rank(item) }));
    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map((rank) => rank.item);
}
function pluck(items, key) {
    return items.map(item => item[key]);
}
