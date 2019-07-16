import { createSelector } from 'reselect'
import moment from "moment";

const getFilterRange = (store) => store.indiceFilter;
const getIndices = (store) => store.indices.all;
const getCbDate = (store) => store.cestaBasicaFilter;
const getValoresCestaBasica = (store) => store.cestaBasica;

export const getValorCbByDate = createSelector([getValoresCestaBasica, getCbDate], (valoresCestaBasica, date) => {
    return valoresCestaBasica.all.filter(x => moment(x.data).utc(false).isSame(date.value, 'month'))[0];
});

export const getIndicesByRange = createSelector(
    [getFilterRange, getIndices],
    (filterRange, indices) => {

        var filteredDate = {
            de: moment(filterRange.de).utc(false),
            ate: moment(filterRange.ate).utc(false)
        };

        var selectedIndices = indices.filter(indice => moment(indice.data).utc(false).isSameOrAfter(filteredDate.de, 'month')
            && moment(indice.data).utc(false).isSameOrBefore(filteredDate.ate, 'month'));

        if (moment(filterRange.de).utc(false).isSame(filterRange.ate, 'month')) {
            return selectedIndices;
        } else {
            var groups = selectedIndices.reduce((result, item) => ({
                ...result,
                [item.titulo]: [
                    ...(result[item.titulo] || []),
                    item,
                ]
            }), {});

            var counter = 0;
            var finalData = [];

            for (var group in groups) {
                var groupIndices = groups[group];
                var indiceFinal = groupIndices[groupIndices.length-1];
                // eslint-disable-next-line no-loop-func
                var indiceBase = indices.filter(indice => moment(indice.data).utc(false).isSame(moment(filteredDate.de).subtract(1, 'month'), 'month') &&
                                                            indice.titulo === group);

                if (indiceBase.length === 1) {
                    finalData.push({
                        id: ++counter,
                        titulo: group,
                        percentual: indiceFinal.numeroIndice - indiceBase[0].numeroIndice,
                    });
                }
            }
        }

        return finalData;
    }
);
