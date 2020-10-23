// var a=10;
// console.log(a);
// var b=5;


// (a>b)?console.log(a):console.log(b);

// for(var i=1;i<=5;i++)
// console.log(i);

 //var array=[1,2.6,'Nik'];

// for(var i=0;i<array.length;i++)
// console.log(array[i]);

var score = [0,1];

console.log(score);
var turn=0;
var team1= {
    name:"Real Madrid",
    goals:[],
    score:0
};
console.log(team1);
var team2= {
    name:"Huesca",
    goals:[],
    score:0
};
console.log(team2);
var team3= {
    name:"Bayern Munich",
    goals:[],
    score:0
};
var team4= {
    name:"Chelsea",
    goals:[],
    score:0
};

window.onload= ()=>{
    SelectTurn();//Toss turn
    updateButtonText();//update team name 
    updateScore(); //
    updateName();
    handleShootButtonClick();
}

function SelectTurn()
{
    console.log("Select turn function initiated");
    turn = Math.round(Math.random())+1;
    console.log(turn);
}

updateButtonText =()=>{
    var button =document.getElementById('btnShootA');
    console.log(button);
    var result=document.getElementById('result');
    console.log(result);
    result.style.visibility="";
    console.log(result);
 
    button.textContent=`${turn===1?team1.name:team2.name} Shot` ;

    var button =document.getElementById('btnShootC');
    console.log(button);
    button.textContent=`${turn===1?team3.name:team4.name} Shot` ;

    

    if(team1.goals.length== 5 && team2.goals.length == 5 )
    {
        button.remove();
        result.textContent=team1.score===team2.score?`Match Draw`:`$team1.score>team1.score?team1.name:team2.name wins`
    }
    
}

updateScore=()=>{
    document.getElementById('team-1-goals').textContent=team1.score;
    document.getElementById('team-2-goals').textContent=team2.score;
    updateRuns();
}

function updateName()
{
    document.getElementById('team-1-name').textContent=team1.name;
    document.getElementById('team-2-name').textContent=team2.name;
}

var handleShootButtonClick =()=>{

    console.log("Checking Button click");
    var goal=score[Math.floor(Math.random()*score.length)];
    console.log(goal);
    goal= goal === 0 ? 'F':goal;
    console.log(goal);
    if(turn==1)
    {
        team1.goals.push(goal);
        team1.score =calculateScore(team1.goals);
    }
    else
    {
        team2.goals.push(goal);
        team2.score =calculateScore(team2.goals);
    }
    updateButtonText();//update team name 
    updateScore();
}

var calculateScore =(goal)=>{
    return goal.map(goal =>{
        return goal == 'F'?0:goal;
    }).reduce((total,goal)=>total+goal);
}

updateRuns = ()=>
{
    var TeamOneGoalsElement = document.getElementById("team-1-round-shots").children;
    var TeamTwoGoalsElement = document.getElementById("team-2-round-shots").children;
    team1.goals.forEach((goal,index) => {
        TeamOneGoalsElement[index].textContent=goal;
        
    });
    team2.goals.forEach((goal,index) => {
        TeamTwoGoalsElement[index].textContent=goal;
        
    });
}

