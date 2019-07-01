import { Component, Input, OnChanges, HostListener, Output, EventEmitter, ElementRef } from "@angular/core";

@Component({
    selector:'xello-tooltip',
    templateUrl:'./tooltip.component.html'
})
export class ToolTipComponent  implements OnChanges{
    @Input() toolTipLabel: string;
    @Input() toolTipValid:boolean;
    @Output() toolTipClear: EventEmitter<string> = new EventEmitter<string>();

    toolTipText: string;

    @HostListener('document:click', ['$event.target'])
    onClick(target) {//target is the clicked element
        if(target.name != "haveToolTip")
            this.toolTipClear.emit('Clear ToolTip');
    }

    ngOnChanges(): void{
        this.toolTipText = this.toolTipLabel;
    }
}