import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarContent: string;
  
  _opened: boolean = false;

  constructor(private actRoute: ActivatedRoute) {
    this.sidebarContent = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }
 
  _toggleSidebar() {
    this._opened = !this._opened;
  }

}
