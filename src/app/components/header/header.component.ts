import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MyTranslateService } from '../../../my-translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
currentLang: string;
  constructor(private renderer:Renderer2, @Inject(DOCUMENT) private document: Document,public translate: TranslateService,private myTranslateService:MyTranslateService) { }

  ngOnInit() {
    this.currentLang=this.translate.currentLang
      this.renderer.setAttribute(this.document.body,"dir",this.currentLang=="ar"?"rtl":"ltr")
    }
    changeLang(lang:string){
      console.log(lang)
          this.currentLang=lang
          this.myTranslateService.setLang(lang)
          this.renderer.setAttribute(this.document.body,"dir",this.currentLang=="ar"?"rtl":"ltr")
          // or
        // this.changeDir()
      }
    
      @ViewChild('anyRef',{read:ElementRef}) anyRef!:ElementRef
      changeDir() {    
        this.anyRef.nativeElement.closest("body").dir=this.currentLang=="ar"?"rtl" :"ltr"
        this.anyRef.nativeElement.closest("body").lang=this.currentLang
      }
}
