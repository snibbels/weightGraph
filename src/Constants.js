function my_enum(...args) {
    return args.reduce(function (obj, arg, index) {
        obj[arg] = index;
        return obj;
    }, {});
}

const C = my_enum(
    "MY_ACTION"
);

export default C;