import {format, parseJSON } from "date-fns";

export default function Date({ dateString }){
    const date = parseJSON(dateString);
    return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>
}