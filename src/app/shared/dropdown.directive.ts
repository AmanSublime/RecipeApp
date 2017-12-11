import { Directive, HostListener, HostBinding, OnInit } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{
    ngOnInit(): void {
        this.isOpen = false;
    }
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen()
    {
        this.isOpen = !this.isOpen;
    }
}