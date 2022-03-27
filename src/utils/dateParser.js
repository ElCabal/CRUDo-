export default function dateParser(date) {
    let splitDate = date.split("T").join(" ") + ":00";
    return splitDate;
}

export function dateParserInverse(date) {
    let splitDate = date.split(" ").join("T");
    return splitDate;
}
