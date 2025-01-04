import {Component, ElementRef, ViewChild} from '@angular/core';
import {Bodies, Body, Composite, Engine, Events, Render, Runner, World} from 'matter-js';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef<HTMLDivElement>;

  private engine!: Engine;
  private render!: Render;
  private runner!: Runner;

  private staticBalls: Body[] = [];
  private originalPositions: { x: number, y: number }[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.createScene();
    this.addBallsPeriodically();
  }

  ngOnDestroy(): void {
    Render.stop(this.render);
    Runner.stop(this.runner);
    World.clear(this.engine.world, true);
    Engine.clear(this.engine);
    this.render.canvas.remove();
  }

  private createScene(): void {
    const container = this.canvasContainer.nativeElement;

    this.engine = Engine.create();
    this.render = Render.create({
      element: container,
      engine: this.engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio
      }
    });

    this.addStaticBalls();

    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 20, window.innerWidth, 40, {
      isStatic: true,
      render: {
        fillStyle: 'transparent'
      }
    });

    Composite.add(this.engine.world, ground);

    Render.run(this.render);
    this.runner = Runner.create();
    Runner.run(this.runner, this.engine);

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  private addStaticBalls(): void {
    const ball1 = Bodies.circle(window.innerWidth / 2 + 200, window.innerHeight / 2 - 100, 150, { isStatic: true });
    const ball2 = Bodies.circle(window.innerWidth / 2 + 800, window.innerHeight / 2 - 300, 60, { isStatic: true });
    const ball3 = Bodies.circle(window.innerWidth / 2 + 700, window.innerHeight / 2 + 100, 120, { isStatic: true });
    const ball4 = Bodies.circle(window.innerWidth / 2 - 900, window.innerHeight / 2 - 200, 200, { isStatic: true });

    this.staticBalls = [ball1, ball2, ball3, ball4];
    this.staticBalls.forEach(ball => {
      this.originalPositions.push({ x: ball.position.x, y: ball.position.y });
    });

    Composite.add(this.engine.world, this.staticBalls);
  }

  private handleResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.render.options.width = width;
    this.render.options.height = height;
    this.render.canvas.width = width;
    this.render.canvas.height = height;

    this.staticBalls.forEach((ball, index) => {
      Body.setPosition(ball, {
        x: this.originalPositions[index].x * (width / window.innerWidth),
        y: this.originalPositions[index].y * (height / window.innerHeight)
      });
    });
  }

  private addBallsPeriodically(): void {
    const addBall = () => {
      const x = Math.random() * window.innerWidth;
      const radius = 10 + Math.random() * 30;
      const ball = Bodies.circle(x, 0, radius, {
        restitution: 0.8,
        render: {
          fillStyle: 'black'
        }
      });

      Composite.add(this.engine.world, ball);

      setTimeout(() => {
        this.shrinkAndRemoveBall(ball);
      }, 4000);

      const randomTime: number = 500 + Math.random() * 300;
      setTimeout(addBall, randomTime);
    };

    addBall();
  }

  private shrinkAndRemoveBall(ball: Body): void {
    const shrinkRate = 0.9;

    const onUpdate = () => {
      if (ball.circleRadius && ball.circleRadius > 1) {
        Body.scale(ball, shrinkRate, shrinkRate);
      } else {
        Composite.remove(this.engine.world, ball);
        Events.off(this.engine, 'beforeUpdate', onUpdate);
      }
    };

    Events.on(this.engine, 'beforeUpdate', onUpdate);
  }
}
