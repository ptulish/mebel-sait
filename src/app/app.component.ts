import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  backgroundImages = [
    'assets/first-example-background-photo.jpeg',
    'assets/second-example-background-photo.jpeg',
    'assets/third-example-background-photo.jpeg',
    'assets/fourth-example-background-photo.webp'
  ];
  currentImageIndex = 0;
  ngOnInit() {
    const hero = document.querySelector('.hero') as HTMLElement;

    // Установить начальное изображение
    hero.style.setProperty(
      '--current-image',
      `url(${this.backgroundImages[this.currentImageIndex]})`
    );
    hero.style.setProperty(
      '--next-image',
      `url(${this.backgroundImages[(this.currentImageIndex + 1) % this.backgroundImages.length]})`
    );

    // Цикл смены изображений
    setInterval(() => {
      const nextIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;

      // Установить следующее изображение
      hero.style.setProperty(
        '--next-image',
        `url(${this.backgroundImages[nextIndex]})`
      );

      // Запуск анимации
      hero.classList.add('fade');

      // После завершения анимации обновить текущее изображение
      setTimeout(() => {
        this.currentImageIndex = nextIndex;

        // Переносим следующее изображение в текущее
        hero.style.setProperty(
          '--current-image',
          `url(${this.backgroundImages[this.currentImageIndex]})`
        );

        // Убираем класс для подготовки к следующей анимации
        hero.classList.remove('fade');
      }, 1500); // Время анимации в CSS
    }, 5000); // Интервал смены изображений
  }
  // ngOnInit() {
  //   const hero = document.querySelector('.hero') as HTMLElement;
  //   // Установить первое изображение при загрузке
  //   hero.setAttribute(
  //     'style',
  //     `background-image: url(${this.backgroundImages[this.currentImageIndex]})`
  //   );
  //   setInterval(() => {
  //     this.currentImageIndex =
  //       (this.currentImageIndex + 1) % this.backgroundImages.length;
  //     document.querySelector('.hero')?.setAttribute(
  //       'style',
  //       `background-image: url(${this.backgroundImages[this.currentImageIndex]})`
  //     );
  //   }, 5000); // Смена каждые 5 секунд
  // }
}
