const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default str => {
    const d = new Date(str);
    let dayOfWeek = weekday[d.getDay()].slice(0, 3);
    let date = d.getDate();
    let month = d.getMonth() + 1;
    return [dayOfWeek, date, month];
}





