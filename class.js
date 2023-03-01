class Instructor{
    name;
    designation='web course ';
    team ='web team';
    location;
    constructor(name,location){
        this.name = name;
        this.location=location;
    }
    startSupportSession(time){
        console.log(`start the time sesseion at ${time}`);

    }
    createQuiz(module){
        console.log(`please create the quiz at ${module}`);
    }
}

const aamir = new Instructor('aamir','mumbai');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz('60');

