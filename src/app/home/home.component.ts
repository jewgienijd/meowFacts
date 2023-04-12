import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatFactsService } from '../_services/cat-facts.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  facts: Array<string> = [];
  fetchedFactsLimit: number = 5;
  subscription!: Subscription;

  constructor(
    private catFactsService: CatFactsService
  ) { }

  ngOnInit() {
    this.fetchNewFacts();
  }

  onScroll(): void {
    this.fetchNewFacts();
  }

  fetchNewFacts() {
    for (let i = 0; i < this.fetchedFactsLimit; i++) {
      this.fetchSingleFact();
    }
  }

  fetchSingleFact() {
    this.subscription = this.catFactsService.getFact()
      .subscribe((fact: { data: string }) => {
        if (!this.facts.includes(fact.data[0])) {
          this.facts.push(fact.data[0]);
        } else {
          this.fetchSingleFact();
        }
      });
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}