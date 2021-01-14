function handleClick() {

    let listAnswers1 = document.getElementsByName("itemsAnswer1");
    let listAnswers2 = document.getElementsByName("itemsAnswer2");
    let listAnswers3 = document.getElementsByName("itemsAnswer3");
    let listAnswers4 = document.getElementsByName("itemsAnswer4");
    let listAnswers5 = document.getElementsByName("itemsAnswer5");
  
    const quiz = {
      questions: [
        '¿En qué año se estrenó la primera película de la saga?',
        '¿Cuál es la frase más famosa del personaje de Darth Vader?',"¿Cómo se llama el planeta de origen del maestro Yoda?",
       " Uno de estos robots no pertenece a la saga de Stars Wars. ¿Cuál?","¿Quiénes son los Sith?"
      ],
      validAnswers: ["1977", "perturbadora","Dagobah","C-3P0","villanos"],
      userAnswers: [],
      points: 0,
      validateAnswers: function () {
        this.userAnswers.forEach((xanswers, i) => {
          if (xanswers === this.validAnswers[i]) {
            this.points = this.points + 3;
          }
        });
      },
  
      resetQuiz: function () {
        this.points = 0;
        this.userAnswers = [];
      },
    };
  
  
    for (let v of listAnswers1) {
      const addText1 = document.querySelector('#resultAnswer1');
      if (v.checked === true) {
        quiz.userAnswers.push(v.value);
        addText1.innerText = "correcta";
      } else {
        addText1.innerText = "falsa";
      }
    }
    for (let va of listAnswers2) {
      const addText2 = document.querySelector('#resultAnswer2');
      if (va.checked === true) {
        quiz.userAnswers.push(va.value);
        addText2.innerText = "correcta";
      } else {
        addText2.innerText = "falsa";
      }
    }
    for (let v of listAnswers3){
        const addText3 = document.querySelector("#resultAnswer3")
        if(v.checked === true) {
            quiz.userAnswers.push(v.value);
            addText3.innerText= "correcta";
        } else {
            addText3.innerText = "falsa";
        }
    }
    for(let v of listAnswers4){
        const addText4 = document.querySelector("#resultAnswer4")
        if(v.checked === true){
            quiz.userAnswers.push(v.value);
            addText4.innerText = "correcta";
        } else {
            addText4.innerText = "falsa";
        }
    }
    for ( let va of listAnswers5){
        const addText5 = document.querySelector("#resultAnswer5")
        if(va.checked === true){
            quiz.userAnswers.push(va.value);
            addText5.innerText = "correcta";
        }else {
            addText5.innerText = "falsa";
        }
    }
  
    quiz.validateAnswers();
    const addPoints = document.querySelector('#addPoints');
    const addPointsValue = Number(addPoints.innerText)
    addPoints.innerText = quiz.points;
  
  }
  
  const checkAllQuiz = document.querySelector('#checkQuiz');
  checkAllQuiz.addEventListener('click', handleClick);

 const fullReset = document.getElementById('fullReset');

    fullReset.addEventListener('click', function(e) {
      location.reload();
    }, false);