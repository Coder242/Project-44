class Security {

    constructor(){

        // R E V B A I L A
        this.access1 = createInput('Enter Code 1');

        this.button1 = createButton('Check Code 1');

        // C U T N I F O N
        this.access2 = createInput('Enter Code 2');

        this.button2 = createButton('Check Code 2');

        // A T E D A S B A
        this.access3 = createInput('Enter Code 3');

        this.button3 = createButton('Check Code 3');


    }

    display(){

        // R E V B A I L A
        this.access1.position(100,90);
        this.access1.style('background', 'white');

        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');

        this.value1 = this.access1.value();

        this.button1.mousePressed(()=>{
            if(accessCode1 === this.value1){
                this.access1.hide();
                this.button1.hide();
                score++;
            }
        })

        // C U T N I F O N
        this.access2.position(700,190);
        this.access2.style('background', 'white');

        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        this.value2 = this.access2.value();

        this.button2.mousePressed(()=>{
            if(accessCode2 === this.value2){
                this.access2.hide();
                this.button2.hide();
                score++;
            }
        })

        // A T E D A S B A
        this.access3.position(100,290);
        this.access3.style('background', 'white');

        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey');

        this.value3 = this.access3.value();

        this.button3.mousePressed(()=>{
            if(accessCode3 === this.value3){
                this.access3.hide();
                this.button3.hide();
                score++;
            }
        })


    }
}