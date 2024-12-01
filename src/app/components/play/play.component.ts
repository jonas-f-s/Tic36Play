// play.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  videoUrl: string = '';
  videoTitle: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const youtubeUrl = this.route.snapshot.queryParamMap.get('videoUrl');
    const videoTitle = this.route.snapshot.queryParamMap.get('videoTitle');

    if (youtubeUrl && videoTitle) {
      this.videoUrl = this.convertToEmbedUrl(youtubeUrl);
      this.videoTitle = videoTitle;
    }
  }

  convertToEmbedUrl(url: string): string {
    const videoId = this.extractVideoId(url);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  extractVideoId(url: string): string {
    const regExp = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:v|watch\?v=)([^"&?\/\s]{11})/;
    const matches = url.match(regExp);
    return matches && matches[1] ? matches[1] : '';
  }
}
