import { Quote } from '@angular/compiler/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes-word';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(1, 'Gates', 'Quora', 'Do not compaire yourself with anyone in this world.If you do so ,you are insulting yourself.', 'Bill Gates', new Date(2022, 3, 4), 0, 0),
    new Quotes(2, 'Sham', 'Motivational', 'Intelligence without experience is meaningless','Steven Kings', new Date (2021, 8, 18), 0,0),
    new Quotes(3, 'Gates', 'Quora', 'Do not compaire yourself with anyone in this world.If you do so ,you are insulting yourself.', 'Bill Gates', new Date(2022, 3, 4), 0, 0),

  ];

  get Quotes(){
    return this.quotes.sort((a,b) =>{
      return <any>new Date (b.datePosted) - <any>new Date(a.datePosted)
    });
  }

  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  displayContent(index: any) {
    this.quotes[index].showInformation = !this.quotes[index].showInformation;
  }
  addNewQuote (quote: Quotes){
    let arraysize = this.Quotes.length;
    quote.id = arraysize + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
