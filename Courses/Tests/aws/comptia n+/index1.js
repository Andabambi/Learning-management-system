function onsubmit(){
  var score=0;
  var q1 = []
  var q2 = []
  var q3 = []
  var q4 = []
  var numOfQUESTIONS  = 4;
  var pointsPossible = 6;
  var q1ansArr = ['a', 'd',]
  var q2ansArr = ['b', 'c', 'e',]
  var q3ansArr = ['b', ]
  for(var i = 0; i < 5; i++){
    if(document.fornms['quiz']['q1cb' + (i + 1)].checked){

      q1.push(document.forms['quiz']['q' + (i + 1)].value);
    }
  }

  for(var i = 0; i < 5; i++){
    if(document.fornms['quiz']['q2cb' + (i + 1)].checked){

      q2.push(document.forms['quiz']['q' + (i + 1)].value);
    }
  }
  var isCorrect, qscore;
  for(var i = 1; i <= numOfQuestions; i++){
    qscore=0;

    for(j = 0; j < eval('q' + i).length; j++){
      isCorrect = false;
    }
      for(var k = 0; k < eval('q' + i + 'ansArr').length; k++){
        if(eval('q' + i)[j] == eval('q' + i + 'ansArr')[k]){
          isCorrect = true;
          qscore++;
        }
        else(eval('q' + i + 'aansArr').length == k + 1 && !isCorrect);
      }
    }
    
    var results = document.getElementById('results');
    results.innerHTML = '<h3> You got ' + score + ' correct answer';
    alert('You got ' + scoore + ' correct answer');

  }

