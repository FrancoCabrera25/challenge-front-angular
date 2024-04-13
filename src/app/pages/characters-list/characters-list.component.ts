import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  type OnInit,
} from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Characters } from '../../shared/interface/marvel.interface';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, HeaderComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent implements OnInit {
  public charactersList = signal<Characters[]>([]);
  constructor(private marvelService: MarvelService, private router: Router) {}
  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe((response) => {
      this.charactersList.set(response);
    });
  }

  navigateDetail(id: number): void {
    this.router.navigate(['detail', id]);
  }
}
