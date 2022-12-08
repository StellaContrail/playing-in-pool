class Cube {
  constructor(mass, length, x, v) {
    this.mass = mass;
    this.length = length;
    this.x = x;
    this.v = v;
  }
}

class Field {
  constructor(cubes, dt) {
    this.count = 0;
    this.cubes = cubes;
    this.dt = dt;
  }

  evolve() {
    this.cubes[0].x = this.cubes[0].x + this.cubes[0].v * this.dt;
    this.cubes[1].x = this.cubes[1].x + this.cubes[1].v * this.dt;

    let col = this.hasCollision();
    if (col[0]) {
      this.cubes[0].v = -this.cubes[0].v;
    }
    if (col[1]) {
      let vl =
        ((this.cubes[0].mass - this.cubes[1].mass) * this.cubes[0].v +
          2.0 * this.cubes[1].mass * this.cubes[1].v) /
        (this.cubes[0].mass + this.cubes[1].mass);
      let vr =
        ((this.cubes[1].mass - this.cubes[0].mass) * this.cubes[1].v +
          2.0 * this.cubes[0].mass * this.cubes[0].v) /
        (this.cubes[0].mass + this.cubes[1].mass);
      this.cubes[0].v = vl;
      this.cubes[1].v = vr;
    }
  }

  hasCollision() {
    let collision = [false, false];
    // Wall
    if (this.cubes[0].x - 0.5 * this.cubes[0].length < 0.0) {
      collision[0] = true;
      this.count++;
    }

    // 2-body collision
    if (
      this.cubes[0].x + 0.5 * this.cubes[0].length >
      this.cubes[1].x - 0.5 * this.cubes[1].length
    ) {
      collision[1] = true;
      this.count++;
    }

    return collision;
  }
}

class Simulation {
  constructor(cubes, dt) {
    this.field = new Field(cubes, dt);
  }

  run() {
    let isConverged =
      this.field.cubes[1].v - this.field.cubes[0].v > 0 &&
      this.field.cubes[0].v > 0;
    this.field.evolve();
    return isConverged;
  }
}
