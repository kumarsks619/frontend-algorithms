const seekAndDestroy = (arr, ...toDestroy) =>
    arr.filter((val) => !toDestroy.includes(val))

console.log(seekAndDestroy([9, 7, 11, 'VeNoM', 19, 'blck_tie'], 19, 'VeNoM'))
