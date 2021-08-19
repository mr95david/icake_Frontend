import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidebarContent: string;
  
  _opened: boolean = false;

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    this.sidebarContent = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }
 
  _toggleSidebar() {
    this._opened = !this._opened;
  }

}
