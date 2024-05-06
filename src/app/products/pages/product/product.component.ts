import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

//REF: https://angular.io/guide/lifecycle-hooks

@Component({
  selector: 'products-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  //Se llama antes de cualquier ciclo de vida.
  constructor() {
    console.log("constructor");

  }

  ngOnInit(): void {
    //Justo después del constructor.
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Antes de cualquier cambio a una propiedad.
    console.log("ngOnChanges");
    console.log({changes });
  }

  ngDoCheck(): void {
    //Se llama cada vez que una propiedad del componente o directiva es revisada
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    //Después de ngOnInit, cuando el componente es inicializado
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    //Se llama después de cada revisión del componente o directiva.
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    //Después del ngAfterContentInit
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    //Llamado después de cada revisión de las vistas del componente o directiva.
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    //Se llama justo antes de que el componente o directiva va a ser destruida.
    console.log("ngOnDestroy");
  }

  increasePrice() {
    this.currentPrice++;
  }
}
