
module.exports = {
  localISOString: function() {

    var d = new Date()
        , pad = function (n){return n<10 ? '0'+n : n;}
        , tz = d.getTimezoneOffset() // mins
        , tzs = (tz>0?"-":"+") + pad(parseInt(Math.abs(tz/60)));

    if (tz%60 != 0)
        tzs += pad(Math.abs(tz%60));

    if (tz === 0) // Zulu time == UTC
        tzs = 'Z';

     return d.getFullYear()+'-'
          + pad(d.getMonth()+1)+'-'
          + pad(d.getDate())+'T'
          + pad(d.getHours())+':'
          + pad(d.getMinutes())+':'
          + pad(d.getSeconds()) + tzs;
  }

};