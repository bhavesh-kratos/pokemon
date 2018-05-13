import _ from 'lodash';

export const maxValue = (objArray, propName) => {
    const max = _.maxBy(objArray, function (o) { return parseInt(o[propName]); });
    console.log('max', max);
    return max[propName];
}

export const minValue = (objArray, propName) => {
    const min = _.minBy(objArray, function (o) { return parseInt(o[propName]); });
    return min[propName];
}

// rating in range 1-5
export const calcRating = (value, maxOld, minOld) => {
    let oldRange = (maxOld - minOld);
    return _.round((((value - minOld) * 4) / oldRange) + 1);
}

export const randomNum = (min, max) => _.random(min, max);

export const sumBy = (objArray, propName) => _.sumBy(objArray, function (o) { return parseInt(o[propName]); });

export const calcTotalPower = (objArray) => {
    const maxObj = _.maxBy(objArray, addPokeSkills);
    const minObj = _.minBy(objArray, addPokeSkills);
    return { max: addPokeSkills(maxObj), min: addPokeSkills(minObj) };
}

export const addPokeSkills = (obj) => parseInt(obj['BaseStamina']) + parseInt(obj['BaseDefense']) + parseInt(obj['BaseAttack']);

export const winnerFormula = (me, opponent) => {
    const meTotal = addPokeSkills(me);
    const opponentTotal = addPokeSkills(opponent);
    if (meTotal > opponentTotal) {
        return me['PkMn'];
    }
    else if (meTotal < opponentTotal) {
        return opponent['PkMn'];
    }
    return null;
};