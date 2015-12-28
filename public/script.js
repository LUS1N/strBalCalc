var dlWeight;
var selectedLift;
var benchToDeadliftRatio = 1.79;
var backSquatToDeadliftRatio = 1.4;
var frontSquatToDeadliftRatio = 2;
var dumbellCurlToDeadliftRatio = 3.33;

var ratiosToDeadlift =
{
    "dl": 1,
    "bs": .714,
    "bp": .556,
    "fs": .5,
    "hangClean": .45,
    "dbbench": .43,
    "ppress": .4,
    "dbohp": .325,
    "hammerCurl": .315,
    "dbc": .33,
    "bulgarianSq": .275,
    "lunge": .25,
    "ezbSC": .24,
    "dbSkullCrush": .22,
    "calfRaise": .2,
    "slrdl": .13
}


function getDeadliftWeight(lift, numericalWeight)
{
    switch (lift)
    {
        case "dl":
            dlWeight = numericalWeight;
            break;
        case "bs":
            dlWeight = numericalWeight * backSquatToDeadliftRatio;
            break;
        case "bp":
            dlWeight = numericalWeight * benchToDeadliftRatio;
            break;
        case "fs":
            dlWeight = numericalWeight * frontSquatToDeadliftRatio;
            break;
        case "dbc":
            dlWeight = numericalWeight * dumbellCurlToDeadliftRatio;
            break;
        default:
            dlWeight = 0;
            break;
    }

}
function calculateWeights(lift, weight)
{
    selectedLift = lift;
    var numericalWeight = parseFloat(weight);
    getDeadliftWeight(lift, numericalWeight);

    fillFields();
}

function fillFields()
{
    for (var key in ratiosToDeadlift)
    {
        if (key != selectedLift)
        {

            var weight = (dlWeight * ratiosToDeadlift[key]).toFixed(2);
            if (isNaN(weight))
            {
                weight = "";
            }
            var item = $("#" + key);
            if (item.is("label"))
            {
                item.text(weight);
            }
            else
            {
                item.val(weight);
            }
        }
    }
}


