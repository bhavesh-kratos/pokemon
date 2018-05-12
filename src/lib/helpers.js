import _ from 'lodash';

export const maxValue = (objArray, propName) => {
    const max = _.maxBy(objArray, function (o) { return parseInt(o[propName]); });
    console.log('max',max)
    return max[propName];
}

export const minValue = (objArray, propName) => {
    const min = _.minBy(objArray, function (o) { return parseInt(o[propName]); });
    return min[propName];
}

// rating in range 1-5
export const calcRating = (value, maxOld, minOld) => {
    let oldRange = (maxOld - minOld);
    return _.round((((value - minOld) * 4) / oldRange) + 1) ;
}

export const randomNum = (min,max) => _.random(min, max);


