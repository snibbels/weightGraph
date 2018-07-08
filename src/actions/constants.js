function my_enum(...args) {
    return args.reduce(function (obj, arg, index) {
        obj[arg] = arg;
        return obj;
    }, {});
}

const C = my_enum(
    "ADD_WEIGHT",
    "ADD_EXERCISE",
    "CHANGE_WRAPS",
    "CHANGE_SETS",
    "ADD_WEEKDAY"
);

export default C;