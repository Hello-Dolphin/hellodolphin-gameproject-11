import Phaser from "phaser";
let how;
// let click;
//Sound
let menusound;
let test;
let event;

//Input from keyboard
// let keyENTER;

class Tutorial extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Tutorial'
        });
    }

    preload() {
        this.load.image('how', 'src/image/how v2.png');
        this.load.audio('menusound', 'src/sound/MenuBG.mp3')
        this.load.image('click', 'src/image/click (1).png')
    }

    create() {

        //สร้าง Object R
        objR = this.physics.add.image(400, 700, 'R').setImmovable();
        //Timer Event
        event = this.time.addEvent({
            delay: 5000,
            callback: function () {
                //สร้าง Object S
                objS = this.physics.add.image(400, 100, 'S');
                //กำหนดการเคลื่อนไหวของ S
                objS.setVelocityY(200);
                //กำหนดการชนกันของ S กับ R
                this.physics.add.collider(objS, objR);
            },
            callbackScope: this,
            loop: true,
            paused: false,
        });


        //-------------------------------------------------------------------

        //สร้าง Object R
        objR = this.physics.add.image(400, 700, 'R').setImmovable();
        //สร้าง Group ขึ้นมาเพื่อเก็บ Object
        objGroup = this.physics.add.group();
        //Timer Event
        event = this.time.addEvent({
            delay: 5000,
            callback: function () {
                //สร้าง Object S
                objS = this.physics.add.image(400, 100, 'S');
                //เพิ่ม objS เข้าไปใน objGroup
                objGroup.add(objS);
                //กำหนดการเคลื่อนไหวของ objGroup
                objGroup.setVelocityY(200);
                //เปลี่ยนจากชนกับ objS เป็นชนกับ objGroup ของ objS
                this.physics.add.collider(objGroup, obj2);
            },
            callbackScope: this,
            loop: true,
            paused: false,
        });

        //---------------------------------------------------------------


        objR = this.physics.add.image(400, 700, 'R').setImmovable();

        objGroup = this.physics.add.group();

        event = this.time.addEvent({
            delay: 5000,
            callback: function () {
                objS = this.physics.add.image(400, 100, 'S');
                objGroup.add(objS);
                objGroup.setVelocityY(200);
                this.physics.add.collider(objGroup, obj2);
            },
            callbackScope: this,
            loop: true,
            paused: false,
        });

        
    }


    update(delta, time) {

    }
}

export default Tutorial;
