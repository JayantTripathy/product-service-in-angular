import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    return gender.toLowerCase() == "male" ? "Mr. " + name : "Miss. " + name;
  }

}
