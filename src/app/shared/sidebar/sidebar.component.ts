import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
<<<<<<< HEAD
import { AuthService } from 'src/app/services/auth.service';


declare var $:any;
=======
>>>>>>> 66a5c2a3eec430193dfd04dc24d553df249108c3

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
<<<<<<< HEAD

 menuItems?:any[];
 usuario:any;
 user:any;
 userImgGoogle:any;
=======
  menuItems?:any[];
  constructor(private sideBarServices: SidebarService, private router:Router) {
    this.menuItems= this.sideBarServices.menu;
  
   } 
>>>>>>> 66a5c2a3eec430193dfd04dc24d553df249108c3

  constructor(private sideBarServices: SidebarService, private router:Router, private authSvc:AuthService) {
    this.menuItems= this.sideBarServices.menu;
  
   } 
  
  ngOnInit() {
 
    this.obtenerUsuario();
    $('[data-widget="treeview"]').Treeview('init');
   
   }

  


   async obtenerUsuario(){

    this.usuario = await this.authSvc.getCurrentUser();
    if (this.usuario) {
   
            this.user=this.usuario.email;
            this.userImgGoogle= this.usuario.photoURL;       
            
    }

   }
 

  async logout(){
    await this.authSvc.logout(); 
  }

  logout(){
  this.router.navigateByUrl('/login'); 
  }

}
