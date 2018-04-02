import { Component, OnInit } from '@angular/core';
import { FootRestService } from '../service/foot-rest.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public teams = [];
  public groups = [];

  constructor(private footRestService: FootRestService){
    this.footRestService.getTeams().subscribe(data => {
      this.teams = data;
    });
    this.footRestService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

  searchTeam(team: string){
    this.teams.forEach(t => t.hide = t.name.indexOf(team) < 0);
  }

  ngOnInit() {
    console.log("Team Component Init");
  }


}
