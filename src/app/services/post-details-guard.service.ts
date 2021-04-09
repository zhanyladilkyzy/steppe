import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {PostService} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostDetailsGuardService implements CanActivate{

  constructor(public postService: PostService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return confirm('Welcome to The Steppe!!!');

    //let postExist: boolean;
    // const postExist = this.postService.getPost(+route.paramMap.Get('id');
    //
    // if (postExist){
    //   return true;
    // } else {
    //   this.router.navigate(['notfound']);
    //   return false;
    // }
  }
}
