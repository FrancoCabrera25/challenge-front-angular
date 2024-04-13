import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Characters } from '../../shared/interface/marvel.interface';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../../shared/components/header/header.component';
@Component({
  selector: 'app-characters-detail',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatListModule, HeaderComponent],
  templateUrl: './characters-detail.component.html',
  styleUrl: './characters-detail.component.scss',
})
export class CharactersDetailComponent implements OnInit {
  character!: Characters;
  constructor(
    private marvelService: MarvelService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.marvelService.getCharacterById(id)))
      .subscribe((response) => {
        if (response) {
          this.character = response;
          console.log('', this.character);
        }
      });
  }

  back() {
    this.router.navigate(['/list']);
  }
}
