import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Slide } from '../shared/models';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides: Slide[]  = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
      title: 'Experience Nature',
      description: 'Discover the beauty of untouched landscapes',
      cta: 'Explore Now'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      title: 'Mountain Adventures',
      description: 'Embark on unforgettable journeys',
      cta: 'Start Adventure'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      title: 'Forest Retreats',
      description: 'Find peace in natural sanctuaries',
      cta: 'Book Now'
    }
  ];
  currentIndex = 0;
  currentTranslate = 0;
  autoplayInterval: any;
  touchStartX = 0;
  touchEndX = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.startAutoplay();
  }

  startAutoplay() {
    if (isPlatformBrowser(this.platformId)) {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateTranslate();
  }

  updateTranslate() {
    this.currentTranslate = -100 * this.currentIndex;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateTranslate();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateTranslate();
  }



  handleImageError(event: any) {
    event.target.src = 'https://images.unsplash.com/photo-1604147495798-57beb5d6af73';
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    }
    if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    if (this.touchStartX - this.touchEndX > 50) {
      this.nextSlide();
    }
    if (this.touchStartX - this.touchEndX < -50) {
      this.prevSlide();
    }
  }
}
