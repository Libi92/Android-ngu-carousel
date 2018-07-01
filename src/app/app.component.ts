import {Component, OnInit} from '@angular/core';
import {NguCarousel, NguCarouselStore} from '@ngu/carousel';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-root',
  template: `
    <ngu-carousel
      [inputs]="carouselBanner"
      (onMove)="onmoveFn($event)">

      <ngu-item NguCarouselItem class="bannerStyle">
        <h1>1</h1>
      </ngu-item>

      <ngu-item NguCarouselItem class="bannerStyle">
        <h1>2</h1>
      </ngu-item>

      <ngu-item NguCarouselItem class="bannerStyle">
        <h1>3</h1>
      </ngu-item>

      <button NguCarouselPrev class='leftRs'>&lt;</button>
      <button NguCarouselNext class='rightRs'>&gt;</button>
    </ngu-carousel>
  `,
  styles: [
      `
      .bannerStyle h1 {
        background-color: #ccc;
        min-height: 300px;
        text-align: center;
        line-height: 300px;
      }
      .leftRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        left: 0;
        display: none !important;
      }

      .rightRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        right: 0;
        display: none !important;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private configService: ConfigService) {

  }

  public carouselBanner: NguCarousel;

  ngOnInit(): void {
    this.carouselBanner = <NguCarousel>{
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: true,
      touch: true
    };

    this.configService.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: NguCarouselStore) {
    console.log(data);
  }
}
