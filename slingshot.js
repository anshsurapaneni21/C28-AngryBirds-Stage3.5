class Slingshot{
    constructor(body1,point2){
        var options = {
            length: 10,
            stiffness: 0.3,
            bodyA : body1,
            pointB : point2
        }
        this.pointB = point2;
        this.sling = Constraint.create(options);
       
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            line(pointA.x,pointA.y,pointB.x,pointB.y)

        }

    }

}