const dayRu = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const dayRus = ['Вск', 'Пнд', 'Втр', 'Сре', 'Чтв', 'Птн', 'Суб'];
const dayRussian = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const dayEn = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const dayEng = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function DataFunction(){
    let date = new Date();
    let a = String(date).split(" ");
    let day;
    let dayRu;
    let dayRuMin;
    let dayRuMin2;
    let dayEng;
    let dayEngMin;
    let dayEngMin2;
    let month;
    let monthRu;
    let monthRuMin;
    let monthEng;
    let monthEngMin;
    // day
    switch (a[0]) {
        case "Mon":
            day=1;
            dayRu="Понедельник";
            dayRuMin="Пнд";
            dayRuMin2="Пн";
            dayEng="Monday";
            dayEngMin="Mon";
            dayEngMin2="Mo";
            break
        case "Tue":
            day=2;
            dayRu="Вторник";
            dayRuMin="Втр";
            dayRuMin2="Вт";
            dayEng="Tuesday";
            dayEngMin="Tue";
            dayEngMin2="Tu";
            break
        case "Wed":
            day=3;
            dayRu="Среда";
            dayRuMin="Сре";
            dayRuMin2="Ср";
            dayEng="Wednesday";
            dayEngMin="Wed";
            dayEngMin2="We";
            break
        case "Thu":
            day=4;
            dayRu="Четверг";
            dayRuMin="Чтв";
            dayRuMin2="Чт";
            dayEng="Thursday";
            dayEngMin="Thu";
            dayEngMin2="Th";
            break
        case "Fri":
            day=5;
            dayRu="Пятница";
            dayRuMin="Птн";
            dayRuMin2="Пт";
            dayEng="Friday";
            dayEngMin="Fri";
            dayEngMin2="Fr";
            break
        case "Sat":
            day=6;
            dayRu="Суббота";
            dayRuMin="Суб";
            dayRuMin2="Сб";
            dayEng="Saturday";
            dayEngMin="Sat";
            dayEngMin2="Sa";
            break
        case "Sun":
            day=7;
            dayRu="Воскресенье";
            dayRuMin="Вск";
            dayRuMin2="Вс";
            dayEng="Sunday";
            dayEngMin="Sun";
            dayEngMin2="Su";
            break
    }
    // month
    switch (a[1]) {
        case "Jan":
            month=1;
            monthRu="Январь";
            monthRuMin="Янв";
            monthEng="January";
            monthEngMin="Jan";
            break
        case "Feb":
            month=2;
            monthRu="Февраль";
            monthRuMin="Фев";
            monthEng="February";
            monthEngMin="Feb";
            break
        case "Mar":
            month=3;
            monthRu="Март";
            monthRuMin="Мар";
            monthEng="March";
            monthEngMin="Mar";
            break
        case "Apr":
            month=4;
            monthRu="Апрель";
            monthRuMin="Апр";
            monthEng="April";
            monthEngMin="Apr";
            break
        case "May":
            month=5;
            monthRu="Май";
            monthRuMin="Май";
            monthEng="May";
            monthEngMin="May";
            break
        case "June":
            month=6;
            monthRu="Июнь";
            monthRuMin="Июн";
            monthEng="June";
            monthEngMin="June";
            break
        case "July":
            month=7;
            monthRu="Июль";
            monthRuMin="Июл";
            monthEng="July";
            monthEngMin="July";
            break
        case "Aug":
            month=8;
            monthRu="Август";
            monthRuMin="Авг";
            monthEng="August";
            monthEngMin="Aug";
            break
        case "Sept":
            month=9;
            monthRu="Сентябрь";
            monthRuMin="Сен";
            monthEng="September";
            monthEngMin="Sept";
            break
        case "Oct":
            month=10;
            monthRu="Октябрь";
            monthRuMin="Окт";
            monthEng="October";
            monthEngMin="Oct";
            break
        case "Nov":
            month=11;
            monthRu="Ноябрь";
            monthRuMin="Ноя";
            monthEng="November";
            monthEngMin="Nov";
            break
        case "Dec":
            month=12;
            monthRu="Декабрь";
            monthRuMin="Дек";
            monthEng="December";
            monthEngMin="Dec";
            break
    }
};
DataFunction()