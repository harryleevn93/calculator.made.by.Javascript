function getHistory()
{
    return document.getElementById("history-value").innerText;
}

function printHistory(GET_NUM)
{
    document.getElementById("history-value").innerText=GET_NUM;
}

function getOutput()
{
    return document.getElementById("output-value").innerText;
}

function printOutput(GET_NUM)
{
    if (GET_NUM=="")
    {
        document.getElementById("output-value").innerText=GET_NUM;
    }
    else
    {
        document.getElementById("output-value").innerText=getFormattedNumber(GET_NUM);
    }
}

function getFormattedNumber(GET_NUM)
{
    if (GET_NUM=="-")
    {
        return "";
    }

    var n=Number(GET_NUM);
    var value=n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(GET_NUM)
{
    return Number(GET_NUM.replace(/,/g,''));
}

// START - All command in ClassName Operator

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++)
{
    operator[i].addEventListener('click', function()
    {
        if(this.id=="clear")
        {
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace")
        {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output)
            {
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }
            
        }
        else
        {
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!=="")
            {
                if(isNaN(history[history.length - 1]))
                {
                    history = history.substring(0,history.length -1);
                }
            }
            if (output!="" || history!="")
            {
                output = output ==""?output:reverseNumberFormat(output);
                history = history + output;
                
                if (this.id=="=")
                {
                    var result = eval(history);
                    printHistory(result);
                    // printHistory(""); //None Continuous Calculation after equals                  
                    console.log(result);
                }
                else
                {
                history = history + this.id;
                printHistory(history);
                printOutput("");
                }
            }
            
        }
    });
}
// END - All command in ClassName Operator

// START - All command in ClassName Number
var number = document.getElementsByClassName("number");
for (var i=0; i<number.length; i++)
{
    number[i].addEventListener('click', function()
    {
        var output=reverseNumberFormat(getOutput());
        if (output!=NaN)
        {
            output=output+this.id;
            printOutput(output);
        }
    });
}
// END - All command in ClassName Number