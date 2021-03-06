import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // define variales
  labels: any[] = [{ label: 'label 1' }, { label: 'label 2' }, { label: 'label 3' }, { label: 'label 4' }];
  options: any = {
    columns : 4,
    imageCss : {
      'border' : '5px solid #fff',
      'border-radius' : '10px',
      'box-shadow' : '1px 1px 10px 0px #cacaca'
    }
  };
  images: any[] = [
    { imageUrl: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg', imageLabel: 'label 1' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg', imageLabel: 'label 2' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg', imageLabel: 'label 3' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg', imageLabel: 'label 4' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg', imageLabel: 'label 1' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2014/11/14/21/24/woman-531252_1280.jpg', imageLabel: 'label 2' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg', imageLabel: 'label 3' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg', imageLabel: 'label 4' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg', imageLabel: 'label 2' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2014/12/15/16/57/tree-569275_1280.jpg', imageLabel: 'label 2' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg', imageLabel: 'label 3' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2014/12/15/17/16/boardwalk-569314_1280.jpg', imageLabel: 'label 4' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_1280.jpg', imageLabel: 'label 4' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2016/09/18/14/21/swimmer-1678307_1280.jpg', imageLabel: 'label 4' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg', imageLabel: 'label 2' },
    { imageUrl: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg', imageLabel: 'label 3' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
