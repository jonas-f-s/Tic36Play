import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/videos').subscribe((videos) => {
      this.videos = videos;
    });
  }

  onVideoClick(videoId: number) {

    const video = this.videos.find(v => v.id === videoId);

    if (video) {
      video.views += 1;

      this.http.put(`http://localhost:3000/videos/${videoId}`, video).subscribe({
        next: (updatedVideo) => {
          console.log('Visualizações atualizadas para o vídeo:', updatedVideo);
        },
        error: (error) => {
          console.error('Erro ao atualizar visualizações:', error);
        }
      });
    }
  }

  trackById(index: number, video: any): number {
    return video.id;
  }
}
