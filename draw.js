class Viewer {
  static SCALE = 10;
  static SIZE = { WIDTH: 1000, HEIGHT: 250 };

  constructor(context) {
    this.context = context;
  }

  draw(field) {
    // 全体の設定
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.font = "bold 16px sans-serif";
    this.context.clearRect(0, 0, Viewer.SIZE.WIDTH, Viewer.SIZE.HEIGHT);

    // 外枠
    this.context.lineWidth = 1;
    this.context.strokeStyle = "#808080";
    this.context.beginPath();
    this.context.rect(0, 0, Viewer.SIZE.WIDTH, Viewer.SIZE.HEIGHT);
    this.context.stroke();
    // 右の壁を取り払う
    this.context.lineWidth = 2;
    this.context.strokeStyle = "#ffffff";
    this.context.beginPath();
    this.context.moveTo(Viewer.SIZE.WIDTH - 1, 0);
    this.context.lineTo(Viewer.SIZE.WIDTH - 1, Viewer.SIZE.HEIGHT);
    this.context.stroke();

    // 左の積み木
    this.context.lineWidth = 2.5;
    this.context.strokeStyle = "#ff4500";
    this.context.beginPath();
    this.context.rect(
      (field.cubes[0].x - 0.5 * field.cubes[0].length) * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        field.cubes[0].length * Viewer.SCALE -
        0.5 * this.context.lineWidth,
      field.cubes[0].length * Viewer.SCALE,
      field.cubes[0].length * Viewer.SCALE
    );
    this.context.stroke();
    this.context.fillStyle = "#ffeeee";
    this.context.beginPath();
    this.context.rect(
      (field.cubes[0].x - 0.5 * field.cubes[0].length) * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        field.cubes[0].length * Viewer.SCALE -
        0.5 * this.context.lineWidth,
      field.cubes[0].length * Viewer.SCALE,
      field.cubes[0].length * Viewer.SCALE
    );
    this.context.fill();
    this.context.fillStyle = "#000000";
    this.context.fillText(
      "m = " + field.cubes[0].mass.toFixed(1) + " kg",
      field.cubes[0].x * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        0.5 * field.cubes[0].length * Viewer.SCALE -
        0.5 * this.context.lineWidth -
        20
    );
    this.context.fillText(
      "x = " + field.cubes[0].x.toFixed(1) + " m",
      field.cubes[0].x * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        0.5 * field.cubes[0].length * Viewer.SCALE -
        0.5 * this.context.lineWidth
    );
    this.context.fillText(
      "v = " + field.cubes[0].v.toFixed(1) + " m/s",
      field.cubes[0].x * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        0.5 * field.cubes[0].length * Viewer.SCALE -
        0.5 * this.context.lineWidth +
        20
    );

    // 右の積み木
    this.context.lineWidth = 2.5;
    this.context.strokeStyle = "#00bbff";
    this.context.beginPath();
    this.context.rect(
      (field.cubes[1].x - 0.5 * field.cubes[1].length) * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        field.cubes[1].length * Viewer.SCALE -
        0.5 * this.context.lineWidth,
      field.cubes[1].length * Viewer.SCALE,
      field.cubes[1].length * Viewer.SCALE
    );
    this.context.stroke();
    this.context.fillStyle = "#eeeeff";
    this.context.beginPath();
    this.context.rect(
      (field.cubes[1].x - 0.5 * field.cubes[1].length) * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        field.cubes[1].length * Viewer.SCALE -
        0.5 * this.context.lineWidth,
      field.cubes[1].length * Viewer.SCALE,
      field.cubes[1].length * Viewer.SCALE
    );
    this.context.fill();
    this.context.fillStyle = "#000000";
    this.context.fillText(
      "M = " + field.cubes[1].mass.toFixed(1) + " kg",
      field.cubes[1].x * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        0.5 * field.cubes[1].length * Viewer.SCALE -
        0.5 * this.context.lineWidth -
        20
    );
    this.context.fillText(
      "x = " + field.cubes[0].x.toFixed(1) + " m",
      field.cubes[1].x * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        0.5 * field.cubes[1].length * Viewer.SCALE -
        0.5 * this.context.lineWidth
    );
    this.context.fillText(
      "v = " + field.cubes[1].x.toFixed(1) + " m/s",
      field.cubes[1].x * Viewer.SCALE,
      Viewer.SIZE.HEIGHT -
        0.5 * field.cubes[1].length * Viewer.SCALE -
        0.5 * this.context.lineWidth +
        20
    );
  }
}
