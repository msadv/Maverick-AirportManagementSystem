// module.exports = {
//     convert : function(s)
//     {
//         // console.log("Entered here " + s);
//         var test1;
//         test1 = s.replace(/ /g,'');
//         var test2 = '';
//         test2 += test1.charAt(0).toUpperCase();
//         test2 += test1.charAt(1).toUpperCase();
//         test2 += ' ';
//         test2 += test1.substr(2);
//         // console.log(test2);
//         return test2;
//         // console.log(test2 + "hi11");
//     }
// }
function convert(s)
{
    var test1;
    test1 = s.replace(/ /g,'');
    var test2 = '';
    // test2 += test1.charAt(0);
    test2 += test1.charAt(0).toUpperCase();
    // test2 += test1.charAt(1);
    test2 += test1.charAt(1).toUpperCase();
    test2 += ' ';
    test2 += test1.substr(2);
    // console.log(test2);
    return test2;
    // console.log(test2 + "hi11");
}

module.exports.convert = convert;
