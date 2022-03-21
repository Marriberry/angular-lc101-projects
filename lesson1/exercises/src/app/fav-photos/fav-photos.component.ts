import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'data:image/png;base64,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';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png';

  constructor() { }

  ngOnInit() {
  }

}