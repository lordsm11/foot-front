import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FootRestService {

  footServiceUrl: string;

  constructor(private http: HttpClient) {
    this.footServiceUrl = "http://localhost:9123/foot/";
  }

  getMatchsByTeam(team: string) {
    return this.http.get<MatchResponse[]>(this.footServiceUrl+'match/team/'+team);
  }

  getMatchsByGroup(group: string) {
    return this.http.get<MatchResponse[]>(this.footServiceUrl+'match/group/'+group);
  }

  getMatchs() {
    return this.http.get<MatchResponse[]>(this.footServiceUrl+'match');
  }

  addScores(matchs: MatchResponse[]) {
      return this.http.post(this.footServiceUrl+'match/score', matchs);
  }

  getTeams() {
    return this.http.get<TeamResponse[]>(this.footServiceUrl+'teams');
  }

  getGroups() {
    return this.http.get<GroupResponse[]>(this.footServiceUrl+'groups');
  }

}

export interface MatchResponse {
  firstTeam: string;
  secondTeam: string;
  date: string;
  result: string;
  hide: boolean;
}

export interface TeamResponse {
  name: string;
  hide: boolean;
}

export interface GroupResponse {
  id: string;
  name: string;
}
