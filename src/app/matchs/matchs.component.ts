import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FootRestService, MatchResponse} from '../service/foot-rest.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {

  public matchs = [];

  constructor(private footRestService: FootRestService, private route: ActivatedRoute){
    let team = this.route.snapshot.paramMap.get('team');
    let group = this.route.snapshot.paramMap.get('group');
    if(team) {
      this.footRestService.getMatchsByTeam(team).subscribe(data => this.matchs = data);
    } else if(group) {
      this.footRestService.getMatchsByGroup(group).subscribe(data => this.matchs = data);
    } else {
      this.footRestService.getMatchs().subscribe(data => this.matchs = data);
    }
  }

  addResult(match: MatchResponse) {
    match.hide = false;
    this.addResults([match]);
  }

  addResults(matchs: MatchResponse[]) {
    this.footRestService.addScores(matchs).subscribe(data => {

    });
  }

  showOrHideInputScore(match: MatchResponse) {
    match.hide = !match.hide;
  }


  ngOnInit() {
    console.log("Match Component Init");
  }

}
