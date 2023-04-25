import { Component, OnInit } from '@angular/core';
import {Serie} from './serie'
import {serieData} from'./data'
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie>=[];

  total : number = 0;
  season: number=0;
  avg:number = 0;
  getSeriesList(){
    this.serieService.getSeries().subscribe(series=>{
      this.series=series
    });
    this.getSeasonAvg();
  }

  getSeasonAvg(){
    this.serieService.getSeries().subscribe(series=>{
      series.forEach(serie => this.season+=serie.seasons);
      this.avg=this.season/series.length;
    });
   console.log(`Average ${this.avg} , Seaosn ${this.season}and total ${this.total}` )
}

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeriesList();
  }

}
