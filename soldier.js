const soldier ={
name: "иосиф",
hp: 10,
weapon: { model: "m16", patrony: 30},
supplies: 3,
fire: function(){
    this.weapon.patrony--
    if(this.weapon.patrony <= 0){
        console.log("обойма пуста. Перезаредитесь")
    } else {
        console.log("бах-бах")
    }
},
reload: function(){
    this.supplies--;
    this.weapon.patrony = 30;
    if(this.supplies <= 0){
        console.log("не осталось припасов")
    }else { 
        console.log("перезарядка...")
    }
},
hurt: function(){
    this.hp--;
    if(this.hp<=0){
        console.log('ты проиграл')
    }
},
}
soldier.hurt()
soldier.hurt()
console.log(soldier)