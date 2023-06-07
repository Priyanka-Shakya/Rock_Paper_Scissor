
const RuleBtn = document.querySelector('.rules_button').firstElementChild;
const rule_box = document.querySelector('.rule_box');
const facescontainer = document.querySelector('.faces-container');
const Cross_close = document.querySelector('.rule-head img');
const start_btn = document.querySelector('.start-btn');
const active_state_container = document.querySelector('.active_states');
const lock_choice_button = document.querySelector('.press_ok');
const winner_show_Container = document.querySelector('.winner_show_Container h4');
const winner_decider = document.querySelector('.winner_decider');
let player_face_Source = document.querySelector('.player_face');
const cp_face_Source = document.querySelector('.cp_face');



const Show_me_rules = () => {
    facescontainer.style.display = 'none';
    active_state_container.style.display = 'none';
    rule_box.style.display = 'block';
};

const Close_Rule_box = () => {
    rule_box.style.display = 'none';
    facescontainer.style.display = 'block';
    start_btn.style.height = '5vh';
}

const show_me_active_states = () => {
    facescontainer.style.display = 'none';
    RuleBtn.style.display = 'none';
    active_state_container.style.display = 'block';
    active_state_container.style.display = 'flex';
}

const result_Show_Handler = (userinput,cp_choice) => {
    console.log(userinput);
    console.log(cp_choice);
    let result;

    if(userinput=='ROCK'  &&  cp_choice=='SCISSOR'){
        result = 'You won';
        player_face_Source.src='images/icon-rock.svg';
        cp_face_Source.src='images/icon-scissors.svg';
    }
    else if(userinput=='PAPER'&& cp_choice=='ROCK'){
        result = 'You won';
        player_face_Source.src='images/icon-paper.svg';
        cp_face_Source.src='images/icon-rock.svg';
    }
    else if(userinput=='SCISSOR'&& cp_choice=='PAPER'){
        result = 'You won';
        player_face_Source.src='images/icon-scissors.svg';
        cp_face_Source.src='images/icon-paper.svg';
    }
    else if(userinput=== cp_choice){
        result = 'You draw';
    }
    else{
        result = 'You loose';
    }
    const winner_show_Container = document.querySelector('.winner_show_Container');
    winner_decider.style.display = 'block';
    winner_show_Container.style.display='block';
    winner_show_Container.innerHTML = result;
}

const calculate_result = () => {
    let userinput = document.querySelector('#usrInput').value;
    let x = Math.random();
    let cp_choice;
    if(x<0.4){
     cp_choice='ROCK';
    }
    else if(x<0.6){
        cp_choice='PAPER';
    }else{
        cp_choice='SCISSOR';
    }
    result_Show_Handler(userinput,cp_choice);
    // result_Show_Handler('PAPER','ROCK');
}

RuleBtn.addEventListener('click', Show_me_rules);
Cross_close.addEventListener('click', Close_Rule_box);
start_btn.addEventListener('click', show_me_active_states);
lock_choice_button.addEventListener('click', calculate_result);