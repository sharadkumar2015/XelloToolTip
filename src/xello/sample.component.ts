import { Component, OnInit } from "@angular/core";

@Component({
    selector:"xello-root",
    templateUrl:'./sample.component.html'
})
export class SampleComponent implements OnInit{
    pageTitle: string = 'Smart Tool Tip';
    _toolTipLabel1:string;
    _toolTipLabel2:string;

    passToolTipButton1()
    {
        this._toolTipLabel1 = "Button 1 Clicked";
        this._toolTipLabel2 = "";
    }

    passToolTipButton2()
    {
        this._toolTipLabel2 = "Button 2 Clicked";
        this._toolTipLabel1 = "";
    }

    ngOnInit(){}

    clearToolTips()
    {
        this._toolTipLabel1 = "";
        this._toolTipLabel2 = "";
    }

    onToolTipClear(msg:string):void{
        this.clearToolTips();
    }
}