import moment from 'moment'

export function formatTime(array) {
    const now = moment().format("MMMM D YYYY, H:mm:ss");
    const result = array.map((item, ) => moment(now).isBetween(formatTimestamp(item.from), formatTimestamp(item.to)));

    return !!result.includes(true)
}

function formatTimestamp(stamp) {
    return moment(stamp).format("MMMM D YYYY, H:mm:ss a")
}