function TextuerChange(){
    let state = document.getElementById("button").name;
    if (state == 'on') {
            document.getElementById("button").name = 'off';
            document.getElementById("ContentsSpace").style.backgroundColor = '#000000';
            document.getElementById("ButtonBox").style.backgroundColor = '#e99494';
        }
        else if(state == 'off') {
            document.getElementById("button").name = 'on';
            document.getElementById("ContentsSpace").style.backgroundColor = '#ffffff';
            document.getElementById("ButtonBox").style.backgroundColor = '#ff0000';
        }
}