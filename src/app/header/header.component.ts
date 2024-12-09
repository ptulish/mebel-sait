import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;

  ngOnInit() {
    this.checkScroll(); // Проверить состояние при загрузке
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const heroHeight = document.querySelector('.hero')?.clientHeight || 0;
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > heroHeight;

    const header = document.querySelector('.header') as HTMLElement;
    const rootStyles = getComputedStyle(document.documentElement);
    const headerColor = rootStyles.getPropertyValue('--header-footer-color').trim(); // Получаем значение переменной

    if (this.isScrolled) {
      header.style.backgroundColor = headerColor; // Цвет хедера при прокрутке
      header.style.transition = 'background-color 0.3s ease'; // Плавность перехода
    } else {
      header.style.backgroundColor = 'transparent'; // Прозрачный хедер по умолчанию
    }
  }
}
