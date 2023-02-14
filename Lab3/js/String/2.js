function checkSpam(str) {
    let ans = str.toLowerCase();
    return ans.includes('viagra') || ans.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );