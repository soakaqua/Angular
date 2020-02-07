import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perso'
})
export class PersoPipe implements PipeTransform {

  // exemple dans clients html
  // transform : ce qui va etre executé quand on execute le pipe perso : une méthode transform par classe
  transform(value: any, ...args: any[]): any {
    // return value : renvoie la valoir sur laquelle on applique le pipe
    // return value;
    if(value > 1000000){
      return '****';
    }
    return value;
  }

}
