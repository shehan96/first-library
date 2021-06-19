import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

export interface AGFImages {
  imageUrl: string;
  imageLabel: string;
  imageName?: string;
  imageDes?: string;
  imageLink?: string;
}

export interface AGFOptions {
  columns?: number;
  imageCss?: any;
}

export interface AGFLabels {
  label: string;
}

@Component({
  selector: 'lib-shehan-lib',
  templateUrl: './shehan-lib.component.html',
  styleUrls: ['./shehan-lib.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ transform: 'scale(.7)', opacity: 0 }),
            animate('1s ease-out',
            style({ opacity: 1, transform: 'scale(1)' }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1, transform: 'scale(1)' }),
            animate('1s ease-in',
            style({ opacity: 0, transform: 'scale(.7)' }))
          ]
        )
      ]
    )
  ]
})

export class ShehanLibComponent implements OnInit {

  // define variables for user inputs
  @Input() images: AGFImages[];
  @Input() options: AGFOptions;
  @Input() labels: AGFLabels[];

  // define variables for internal usage
  _images: any[];
  _imageCss: any;

  constructor() { }

  ngOnInit(): void {
    if (this.isEmptyObject(this.options)) {
      console.log('no options')
    }
    else {
      // split images array into column chunks
      let tempArray = this.images.slice();
      if ('columns' in this.options) {
        switch (this.options.columns) {
          case 2:
            this.splitToChunks(tempArray, 2);
            break;
          case 3:
            this.splitToChunks(tempArray, 3);
            break;
          case 4:
            this.splitToChunks(tempArray, 4);
            break;
          case 5:
            this.splitToChunks(tempArray, 5);
            break;
          default:
            this.splitToChunks(tempArray, 4);
            break;
        }
      }
      else {
        this.splitToChunks(tempArray, 4);
      }
      // add image css
      if('imageCss' in this.options){
        this._imageCss = Object.assign({}, this.options.imageCss);
      }
      else{
        this._imageCss = {
          'border' : '5px solid #fff',
          'box-shadow' : '1px 1px 10px 0px #cacaca'
        };
      }
    }
  }

  isEmptyObject(obj: any) {
    return (obj && (Object.keys(obj).length === 0));
  }

  splitToChunks(array: any[], parts: number) {
    this._images = [];
    for (let i = parts; i > 0; i--) {
      this._images.push(array.splice(0, Math.ceil(array.length / i)));
    }
  }

  getColumnClass() {
    if (this.isEmptyObject(this.options)) {
      return 'filter-gallery-column-4';
    }
    else {
      if ('columns' in this.options) {
        switch (this.options.columns) {
          case 2:
            return 'filter-gallery-column-2';
          case 3:
            return 'filter-gallery-column-3';
          case 4:
            return 'filter-gallery-column-4';
          case 5:
            return 'filter-gallery-column-5';
          default:
            return 'filter-gallery-column-4';
        }
      }
      else {
        return 'filter-gallery-column-4';
      }
    }
  }

  imageFiltering(label: string) {
    // get images related to the label
    let filterImages: any[] = [];
    let tempArray = this.images.slice();
    // get all images
    if (label == 'all') {
      filterImages = tempArray;
    }
    else {
      tempArray.forEach((item: AGFImages) => {
        if (item.imageLabel == label) {
          filterImages.push(item);
        }
      });
    }
    // split into chunks
    if ('columns' in this.options) {
      switch (this.options.columns) {
        case 2:
          this.splitToChunks(filterImages, 2);
          break;
        case 3:
          this.splitToChunks(filterImages, 3);
          break;
        case 4:
          this.splitToChunks(filterImages, 4);
          break;
        case 5:
          this.splitToChunks(filterImages, 5);
          break;
        default:
          this.splitToChunks(filterImages, 4);
          break;
      }
    }
    else {
      this.splitToChunks(filterImages, 4);
    }
  }

}
