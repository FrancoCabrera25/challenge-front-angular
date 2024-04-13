import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `<div class="header">
    @if (icon) {
    <mat-icon
      class="icon"
      [fontIcon]="icon"
      (click)="this.iconClick.emit()"
    ></mat-icon>
    }
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
  </div>`,
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() icon!: string;

  @Output() iconClick = new EventEmitter<void>();
}
