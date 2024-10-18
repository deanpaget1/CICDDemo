//Initialising title number for output data
const defaultScreen = 0;
const flowScreen = 1;
const jiraFlowScreen = 2;

//get access to html divs
const dataDiv = document.getElementById('data-div');
const flowDiv = document.getElementById('flow-div');
const jiraFlowDiv = document.getElementById('jira-flow-div');

//Change the content shown on the page depending on the button that is pressed.
function changeContent(currentData){
    if(currentData == defaultScreen){
        flowDiv.style.display = "none";
        dataDiv.style.display = "block";
        jiraFlowDiv.style.display = "none";
    }else if(currentData == flowScreen){
        dataDiv.style.display = "none";
        flowDiv.style.display = "block";
        jiraFlowDiv.style.display = "none";
    } else if(currentData == jiraFlowScreen){
        dataDiv.style.display = "none";
        flowDiv.style.display = "none";
        jiraFlowDiv.style.display = "block";
    }
}
