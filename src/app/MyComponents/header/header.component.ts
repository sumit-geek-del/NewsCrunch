import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mode :boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  changeColor(){
    const switch1 =<HTMLElement> document.getElementById('flexSwitchCheckDefault');
    const navbar =<HTMLElement> document.getElementById('main_navbar');
    const label_mode = <HTMLElement> document.getElementById('label_mode');
    if(this.mode===true){
      this.mode = false;
      switch1.setAttribute('checked', 'true');
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-dark');
      label_mode.innerText = 'Light Mode';
      label_mode.style.color = 'white';
      document.body.style.backgroundColor = 'black';

    }
    else{
      this.mode = true;
      switch1.setAttribute('checked', 'false');
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.classList.add('navbar-light', 'bg-light');
      label_mode.innerText = 'Dark Mode'
      label_mode.style.color = 'black';
      document.body.style.backgroundColor = 'white';


    }
    


  }

  ngOnInit(): void {
  }

}
