export default function Add(...rest) {
    return rest.reduce(function(total, num) {
        return total + num;
    })
}