function output()
{
    let str = document.querySelector('#str').value;
    let count = 0;
    for(let a = 0; a < str.length; a++)
    {
        if(str[a] === " ")
        {
            count++;
        }
    }

    document.querySelector('#answer').innerHTML = count
    ;
    return false;
}