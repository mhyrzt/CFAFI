var n1_ans = [
    'Greetings, My name is __NAME__ I am a student from Iran and want to learn __COURSE_NAME__. I think it will be beneficial for my work. But I’ve no job of my own to carry the expenses to pay for the certificate of this course. I live only for my scholarship, it is very much difficult for me to gather such amount of money for the certificate. Financial Aid will help me take this course without any adverse impact on my monthly essential needs. So I’m badly in need of this financial aid. I want to take this course as I want to learn. This course will boost my job prospects after graduation from my institute. It will help perform better in understanding and learning this technology and give me an edge over my competitors. A verified certificate will attach credibility to the certificate I receive from this course. I plan to complete all assignments on or before time as I have done in previous Courses. Also, I intend to participate in Discussion Forums, which I have found to supplement my learning immensely in the other online courses I have taken on Coursera. I also plan to grade assignments that are to peer-reviewed which I believe will an invaluable learning opportunity.'
];

var n2_ans = [
    'My main career goal is to learn every day. I really want to learn and to progress in my career. In Computer Science , it requires constant learning and improving. Taking this course will help me to learn and study this __COURSE_NAME__ and also to implement it. It can help me advance in my knowledge. This course will help me in defining __COURSE_NAME__, understanding how __COURSE_NAME__ could potentially impact our business and industry, to write a thought leadership piece regarding use cases and industry potential of __COURSE_NAME__, explain __COURSE_NAME__ to clients, friends, joining a community of economists, business leaders, entrepreneurs, and technologists that are shaping this technology as we speak. Identifying which aspects of __COURSE_NAME__ seem most important and relevant to us, Walking away with a strong foundation in where __COURSE_NAME__ is going, what it does, and how to prepare for it. __COURSE_NAME__ course will help me achieve it to learn. Courses on Coursera helped me to greatly increase my  knowledge about  the various fields of  technology.'
];

var n3_ans = [
    "As I have answered before, having no permanent source of income, I really don't see any way of advancing and paying for my course."
];

function makeRand(n){
    return Math.floor(Math.random() * n);
}

function n1Answer(name, course){
    let answers = n1_ans; 
    let index   = makeRand(answers.length);
    let answer  = answers[index];
    answer = answer.replaceAll('__NAME__', name);
    answer = answer.replaceAll('__COURSE_NAME__', course);
    $("#n1 p").html(answer);
}

function n2Answer(course){
    let answers = n2_ans; 
    let index   = makeRand(answers.length);
    let answer  = answers[index];
    answer = answer.replaceAll('__COURSE_NAME__', course);
    $("#n2 p").html(answer);
}

function n3Answer() {
    let answers = n3_ans; 
    let index   = makeRand(answers.length);
    let answer  = answers[index];
    $("#n3 p").html(answer);
}

function showAnswers(){
    $("#answers").show();
    let name    = $("#name").val();
    let course  = $("#course").val();
    n1Answer(name, course);
    n2Answer(course);
    n3Answer(course);
}

$(document).ready(function() {
    $("#answers").hide();
    $("#submit").click(showAnswers);
});