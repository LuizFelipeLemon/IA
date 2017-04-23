function Ship(x , y){

  this.position = createVector(x,y);
  this.maxspeed = 3;
  this.velocity = p5.Vector.random2D();
  this.acceleration = createVector();
  this.r = 3;
  this.maxforce = 0.07;
  this.velocity.setMag(this.maxspeed);

}
Ship.prototype.display = function() {

  var theta = this.velocity.heading() + PI / 2;
  push();
  translate(this.position.x, this.position.y);
  rotate(theta);
  image(img,0, 0, img.width/4, img.height/4);
  pop();
  }

Ship.prototype.run = function() {

      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxspeed);

      this.position.add(this.velocity);

      this.acceleration.mult(0);
}

Ship.prototype.seek = function(target){

      var desire = p5.Vector.sub(target,this.position);

      desire.setMag(this.maxspeed);
      //Here comes the magic!!
      var steer = p5.Vector.sub(desire,this.velocity);
      steer.limit(this.maxforce);
      return steer;
}

Ship.prototype.applyForce = function(force) {

  this.acceleration.add(force);
}
