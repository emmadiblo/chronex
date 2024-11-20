/*
Chronex.js V 1.0
npm package: https://www.npmjs.com/package/chronex
jsdelivr script: <script src="https://cdn.jsdelivr.net/gh/emmadiblo/chronex@main/chronex.js"></script>
#Timer Javascript framwork

Developped by Emmadiblo

https://github.com/emmadiblo/chronex


 .d88b.  db   db d8888b.  .d88b.  d8b   db d88888b db    db 
.8P      88   88 88  `8D .8P  Y8. 888o  88 88'     `8b  d8' 
88       88ooo88 88oobY' 88    88 88V8o 88 88ooooo  `8bd8'  
88       88~~~88 88`8b   88    88 88 V8o88 88~~~~~  .dPYb.  
`8b      88   88 88 `88. `8b  d8' 88  V888 88.     .8P  Y8. 
 `Y88P'  YP   YP 88   YD  `Y88P'  VP   V8P Y88888P YP    YP

 */


 class Chronex {
    constructor(date, language = 'en', autoUpdate = false, updateInterval = 1000) {
        this.date = new Date(date);
        this.language = language;
        this.autoUpdate = autoUpdate;
        this.updateInterval = updateInterval;
        this.languages = {
            'en': {
                'second': 'second', 'seconds': 'seconds',
                'minute': 'minute', 'minutes': 'minutes',
                'hour': 'hour', 'hours': 'hours',
                'day': 'day', 'days': 'days',
                'week': 'week', 'weeks': 'weeks',
                'month': 'month', 'months': 'months',
                'year': 'year', 'years': 'years'
            },
            'es': {
                'second': 'segundo', 'seconds': 'segundos',
                'minute': 'minuto', 'minutes': 'minutos',
                'hour': 'hora', 'hours': 'horas',
                'day': 'día', 'days': 'días',
                'week': 'semana', 'weeks': 'semanas',
                'month': 'mes', 'months': 'meses',
                'year': 'año', 'years': 'años'
            },
            'fr': {
                'second': 'seconde', 'seconds': 'secondes',
                'minute': 'minute', 'minutes': 'minutes',
                'hour': 'heure', 'hours': 'heures',
                'day': 'jour', 'days': 'jours',
                'week': 'semaine', 'weeks': 'semaines',
                'month': 'mois', 'months': 'mois',
                'year': 'an', 'years': 'ans'
            },
            'de': {
                'second': 'Sekunde', 'seconds': 'Sekunden',
                'minute': 'Minute', 'minutes': 'Minuten',
                'hour': 'Stunde', 'hours': 'Stunden',
                'day': 'Tag', 'days': 'Tage',
                'week': 'Woche', 'weeks': 'Wochen',
                'month': 'Monat', 'months': 'Monate',
                'year': 'Jahr', 'years': 'Jahre'
            },
            'it': {
                'second': 'secondo', 'seconds': 'secondi',
                'minute': 'minuto', 'minutes': 'minuti',
                'hour': 'ora', 'hours': 'ore',
                'day': 'giorno', 'days': 'giorni',
                'week': 'settimana', 'weeks': 'settimane',
                'month': 'mese', 'months': 'mesi',
                'year': 'anno', 'years': 'anni'
            },
            'nl': {
                'second': 'seconde', 'seconds': 'seconden',
                'minute': 'minuut', 'minutes': 'minuten',
                'hour': 'uur', 'hours': 'uren',
                'day': 'dag', 'days': 'dagen',
                'week': 'week', 'weeks': 'weken',
                'month': 'maand', 'months': 'maanden',
                'year': 'jaar', 'years': 'jaren'
            },
            'pt': {
                'second': 'segundo', 'seconds': 'segundos',
                'minute': 'minuto', 'minutes': 'minutos',
                'hour': 'hora', 'hours': 'horas',
                'day': 'dia', 'days': 'dias',
                'week': 'semana', 'weeks': 'semanas',
                'month': 'mês', 'months': 'meses',
                'year': 'ano', 'years': 'anos'
            },
            'ru': {
                'second': 'секунда', 'seconds': 'секунды',
                'minute': 'минута', 'minutes': 'минуты',
                'hour': 'час', 'hours': 'часа',
                'day': 'день', 'days': 'дни',
                'week': 'неделя', 'weeks': 'недели',
                'month': 'месяц', 'months': 'месяцы',
                'year': 'год', 'years': 'года'
            },
            'zh': {
                'second': '秒', 'seconds': '秒',
                'minute': '分钟', 'minutes': '分钟',
                'hour': '小时', 'hours': '小时',
                'day': '天', 'days': '天',
                'week': '星期', 'weeks': '星期',
                'month': '月', 'months': '月',
                'year': '年', 'years': '年'
            },
            'ar': {
                'second': 'ثانية', 'seconds': 'ثواني',
                'minute': 'دقيقة', 'minutes': 'دقائق',
                'hour': 'ساعة', 'hours': 'ساعات',
                'day': 'يوم', 'days': 'أيام',
                'week': 'أسبوع', 'weeks': 'أسابيع',
                'month': 'شهر', 'months': 'شهور',
                'year': 'سنة', 'years': 'سنوات'
            }
        };

        this.timeAgoElement = document.getElementById('time-ago');
        this.init();
    }

    init() {
        this.updateTimeAgo();
        if (this.autoUpdate) {
            setInterval(() => this.updateTimeAgo(), this.updateInterval);
        }
    }

updateTimeAgo() {
    const now = Date.now();
    const timeDiff = Math.floor((now - this.date.getTime()) / 1000);
    let timeString = '';

    if (timeDiff < 60) {
        timeString = timeDiff + " " + (timeDiff === 1 ? this.languages[this.language]['second'] : this.languages[this.language]['seconds']);
    } else if (timeDiff < 3600) {
        const minutes = Math.floor(timeDiff / 60);
        timeString = minutes + " " + (minutes === 1 ? this.languages[this.language]['minute'] : this.languages[this.language]['minutes']);
    } else if (timeDiff < 86400) {
        const hours = Math.floor(timeDiff / 3600);
        timeString = hours + " " + (hours === 1 ? this.languages[this.language]['hour'] : this.languages[this.language]['hours']);
    } else if (timeDiff < 604800) {
        const days = Math.floor(timeDiff / 86400);
        timeString = days + " " + (days === 1 ? this.languages[this.language]['day'] : this.languages[this.language]['days']);
    } else if (timeDiff < 2629746) {
        const weeks = Math.floor(timeDiff / 604800);
        const remainingDays = Math.floor((timeDiff % 604800) / 86400);
        timeString = weeks + " " + (weeks === 1 ? this.languages[this.language]['week'] : this.languages[this.language]['weeks']) + (remainingDays > 0 ? ` ${remainingDays} ${this.languages[this.language]['day']}` : '');
    } else if (timeDiff < 31556952) {
        const months = Math.floor(timeDiff / 2629746);
        const remainingWeeks = Math.floor((timeDiff % 2629746) / 604800);
        timeString = months + " " + (months === 1 ? this.languages[this.language]['month'] : this.languages[this.language]['months']) + (remainingWeeks > 0 ? ` ${remainingWeeks} ${this.languages[this.language]['week']}` : '');
    } else {
        const years = Math.floor(timeDiff / 31556952);
        const remainingMonths = Math.floor((timeDiff % 31556952) / 2629746);
        timeString = years + " " + (years === 1 ? this.languages[this.language]['year'] : this.languages[this.language]['years']) + (remainingMonths > 0 ? ` ${remainingMonths} ${this.languages[this.language]['month']}` : '');
    }

    this.timeAgoElement.innerText = timeString;
}
}
