export const getDataForMuscleGroup = (
    history = [], exercises = [], musclegroup = ""
) =>
    history.filter(
        h => exercises
            .filter(e => e.muscles.indexOf(musclegroup) > -1)
            .map(e => e.id)
            .indexOf(h.exerciseId) > -1
    );

export const getAverage = (array) => array.reduce(
    (pv, cv) => pv ? (pv + cv) / 2 : cv, 0
);