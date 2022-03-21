const ansidata = [
    ['$end','[0m'],
    ['$bold','[1m'],
    ['$ul','[4m'],
    ['$gray','[30m'],
    ['$red','[31m'],
    ['$green','[32m'],
    ['$orange','[33m'],
    ['$blue','[34m'],
    ['$pink','[35m'],
    ['$teal','[36m'],
    ['$white','[37m'],
    ['$bgdark','[40m'],
    ['$bgred','[41m'],
    ['$bgpurple','[45m'],
    ['$bgwhite','[47m'],
    ['$bgmuted0','[42m'],
    ['$bgmuted1','[43m'],
    ['$bgmuted2','[44m'],
    ['$bgmuted3','[46m'],
];

function ansistyle(arg, rm) {
    //ansistyle usage reference
    if (arg.length < 1) {
        var stringdoc = "```ansi\n";
        stringdoc += "[1m[34m.ansistyle[0m [1mmarkup reference:[0m\n";
        stringdoc += "[1m[30mfont styles: [0m";
        stringdoc += ansidata[1][1] + ansidata[1][0] + ansidata[0][1] + " " + ansidata[2][1] + ansidata[2][0] + ansidata[0][1] + "\n";
        stringdoc += "[1m[30mfont colours: [0m";
        for (let c=3;c<11;c++) {
            stringdoc += ansidata[c][1] + ansidata[c][0] + ansidata[0][1] + " ";
        }
        stringdoc += "\n";
        stringdoc += "[1m[30mbackground colours: [0m";
        for (let b=11;b<15;b++) {
            stringdoc += ansidata[b][1] + ansidata[b][0] + ansidata[0][1] + " ";
        }
        stringdoc += "\n";
        stringdoc += "[1m[30mbackground mutes: [0m";
        for (let m=15;m<19;m++) {
            stringdoc += ansidata[m][1] + ansidata[m][0] + ansidata[0][1] + " ";
        }
        stringdoc += "\n\n";
        stringdoc += "[1m[30mexample: [0m";
        stringdoc += ".ansistyle $bold $red this text is bold and red $end\n";
        stringdoc += "[1m[30moutput: [0m";
        stringdoc += "[1m[31mthis text is bold and red [0m";
        stringdoc += "```";
        rm.channel.send(stringdoc);
        return;
    }

    //ansistyle formatting
    var stringout = "```ansi\n";
    var stringpure = "```\n";
    var plain = true;
    for (let a=0;a<arg.length;a++) {
        plain = true;
        for (let s=0;s<ansidata.length;s++) {
            if (arg[a] == ansidata[s][0]) {
                stringout += ansidata[s][1];
                stringpure += ansidata[s][1];
                plain = false;
                break;
            }
        }
        if (plain) {
            stringout += arg[a] + " ";
            stringpure += arg[a] + " ";
        }
    }
    stringout += "```";
    stringpure += "```";
    rm.channel.send(stringout);
    rm.channel.send(stringpure);
}